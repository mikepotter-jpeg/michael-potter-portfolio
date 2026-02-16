#!/usr/bin/env node
/**
 * Accessibility Audit Runner
 * Uses Playwright + @axe-core/playwright to scan pages for WCAG 2.1 AA violations.
 * Run from project root; expects dev server to be running.
 */

import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'

const SEVERITY_ORDER = { critical: 0, serious: 1, moderate: 2, minor: 3 }

function parseArgs() {
  const args = process.argv.slice(2)
  const opts = { url: 'http://localhost:3000', output: './a11y-report', pages: ['/', '/about'] }
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--url' && args[i + 1]) opts.url = args[++i]
    else if (args[i] === '--output' && args[i + 1]) opts.output = args[++i]
    else if (args[i] === '--pages' && args[i + 1]) opts.pages = args[++i].split(',').map((p) => (p.startsWith('/') ? p : `/${p}`))
  }
  return opts
}

function summarizeViolations(allViolations) {
  const bySeverity = { critical: [], serious: [], moderate: [], minor: [] }
  const byRule = new Map()
  for (const v of allViolations) {
    const sev = v.impact || 'moderate'
    if (bySeverity[sev]) bySeverity[sev].push(v)
    if (!byRule.has(v.id)) byRule.set(v.id, { ...v, count: 0, pages: new Set() })
    byRule.get(v.id).count++
    byRule.get(v.id).pages.add(v.page || '')
  }
  return { bySeverity, byRule }
}

function generateMarkdown(summary, pages) {
  const { bySeverity } = summary
  const critical = bySeverity.critical || []
  const serious = bySeverity.serious || []
  const moderate = bySeverity.moderate || []
  const minor = bySeverity.minor || []
  const total = critical.length + serious.length + moderate.length + minor.length

  let md = `# Accessibility Audit Report (WCAG 2.1 AA)

## Summary
- **Total issues:** ${total}
- **Critical:** ${critical.length}
- **Serious:** ${serious.length}
- **Moderate:** ${moderate.length}
- **Minor:** ${minor.length}

## Issues by Category

### Critical Issues (must fix)
`
  if (critical.length === 0) {
    md += '- None found ✅\n\n'
  } else {
    for (const v of critical) {
      md += `- **${v.id}**: ${v.help}\n`
      md += `  - ${v.description}\n`
      md += `  - Affected: ${v.nodes?.length || 0} element(s)\n`
      if (v.nodes?.[0]?.target) md += `  - Example: \`${JSON.stringify(v.nodes[0].target)}\`\n`
      md += '\n'
    }
  }

  md += `### Serious Issues (should fix)
`
  if (serious.length === 0) {
    md += '- None found ✅\n\n'
  } else {
    for (const v of serious) {
      md += `- **${v.id}**: ${v.help}\n`
      md += `  - ${v.description}\n`
      md += `  - Affected: ${v.nodes?.length || 0} element(s)\n\n`
    }
  }

  md += `### Moderate Issues
`
  if (moderate.length === 0) {
    md += '- None found ✅\n\n'
  } else {
    for (const v of moderate.slice(0, 10)) {
      md += `- **${v.id}**: ${v.help}\n`
    }
    if (moderate.length > 10) md += `- ... and ${moderate.length - 10} more\n`
    md += '\n'
  }

  const pass = total === 0
  md += `## Compliance Status
- **WCAG 2.1 Level AA:** ${pass ? 'PASS ✅' : 'FAIL ❌'}
- **Critical violations:** ${critical.length}
- **Serious violations:** ${serious.length}

## Recommendations
1. Fix all critical and serious issues before deployment.
2. Address moderate issues as capacity allows.
3. Run this audit regularly (e.g. in CI or pre-commit).
4. Test with keyboard navigation and screen readers manually.

## Pages Audited
`
  for (const p of pages) md += `- ${p}\n`

  return md
}

async function main() {
  const { url, output, pages } = parseArgs()
  const fs = await import('fs')
  const path = await import('path')

  const outputDir = path.resolve(process.cwd(), output)
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true })

  const allViolations = []
  const resultsByPage = {}
  let pagesScanned = 0

  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext()

  try {
    for (const pagePath of pages) {
      const fullUrl = `${url.replace(/\/$/, '')}${pagePath.startsWith('/') ? pagePath : `/${pagePath}`}`
      const page = await context.newPage()
      try {
        const res = await page.goto(fullUrl, { waitUntil: 'networkidle', timeout: 15000 })
        if (!res || res.status() >= 400) {
          console.error(`Warning: ${fullUrl} returned ${res?.status() ?? 'error'} - skipping`)
          await page.close()
          continue
        }
        const axeResults = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
          .analyze()

        resultsByPage[pagePath] = axeResults
        const violations = (axeResults.violations || []).map((v) => ({ ...v, page: pagePath }))
        allViolations.push(...violations)
        pagesScanned++
      } finally {
        await page.close()
      }
    }
  } finally {
    await browser.close()
  }

  if (pagesScanned === 0) {
    console.error('Error: No pages could be audited (all returned 4xx/5xx or timed out)')
    process.exit(1)
  }

  const summary = summarizeViolations(allViolations)
  const md = generateMarkdown(summary, pages)

  const reportPath = path.join(outputDir, 'a11y-summary.md')
  fs.writeFileSync(reportPath, md, 'utf8')

  const jsonPath = path.join(outputDir, 'a11y-report.json')
  fs.writeFileSync(
    jsonPath,
    JSON.stringify(
      {
        timestamp: new Date().toISOString(),
        pages: Object.keys(resultsByPage),
        summary: {
          total: allViolations.length,
          critical: (summary.bySeverity.critical || []).length,
          serious: (summary.bySeverity.serious || []).length,
          moderate: (summary.bySeverity.moderate || []).length,
          minor: (summary.bySeverity.minor || []).length,
        },
        violations: allViolations,
        resultsByPage,
      },
      null,
      2
    ),
    'utf8'
  )

  const hasCriticalOrSerious = (summary.bySeverity.critical?.length || 0) > 0 || (summary.bySeverity.serious?.length || 0) > 0
  return hasCriticalOrSerious ? 1 : 0
}

main()
  .then((code) => process.exit(code))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
