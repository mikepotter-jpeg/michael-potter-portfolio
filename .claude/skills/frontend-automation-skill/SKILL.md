---
name: frontend-automation
description: |
  Automate front-end development workflows including build pipelines, accessibility testing, and deployment. Use this skill whenever the user needs to: run a build pipeline (lint → test → build), execute a production deployment, audit a front-end project for accessibility issues (WCAG 2.1 AA compliance), generate accessibility reports, or troubleshoot build/deployment errors. This skill handles Next.js projects and provides structured automation, detailed logging, and comprehensive accessibility insights.

compatibility: |
  - Requires: Node.js, npm/yarn, Next.js project
  - Supports: Next.js with ESLint, Jest/Vitest, Axe accessibility testing
  - Deployment: Vercel/Netlify integration
---

# Frontend Automation Skill

Automate your front-end development workflow with two primary functions: **Build & Deploy Pipeline** and **Accessibility Auditing**.

## Overview

This skill streamlines common front-end tasks:

1. **Build Pipeline Automation** - Run lint → test → build sequence with error capture
2. **Accessibility Auditing** - Comprehensive WCAG 2.1 AA compliance checking
3. **Deployment Orchestration** - Automated production deployment to Vercel/Netlify
4. **Error Reporting** - Structured output with actionable fix suggestions

## Build & Deploy Pipeline

The build pipeline runs three stages in sequence: linting, testing, and building.

### What It Does

1. **Lint Stage** - Runs ESLint to catch code quality issues
2. **Test Stage** - Executes Jest/Vitest test suite
3. **Build Stage** - Creates production-ready Next.js build
4. **Deploy Stage** (optional) - Pushes to Vercel/Netlify

### Expected Output

The skill produces a structured report with:
- ✅ Pass/fail status for each stage
- 📋 Full error logs if any stage fails
- 🔧 Suggested fixes for common issues (missing dependencies, config problems)
- ⏱️ Execution time for each stage
- 📊 Summary statistics (files linted, tests run, assets bundled)

### Example Usage

**Trigger phrases:**
- "Run the full build pipeline"
- "Build and deploy to production"
- "Check if the project builds cleanly"
- "Run linting, tests, and build"

---

## Accessibility Auditing

Automated WCAG 2.1 AA compliance checking for your front-end application.

### What It Does

1. **Scans for WCAG violations** - Runs Axe DevTools against rendered pages
2. **Checks semantic HTML** - Validates proper heading hierarchy, landmark regions
3. **Verifies keyboard navigation** - Tests tab order and focus management
4. **Validates images** - Checks for alt text and proper descriptions
5. **Analyzes color contrast** - Ensures text meets AA standards
6. **Checks ARIA implementation** - Validates aria-labels, aria-roles, aria-live regions
7. **Tests interactive elements** - Buttons, links, form controls accessibility

### Expected Output

The accessibility report includes:

```
# Accessibility Audit Report

## Summary
- Total Issues Found: N
- Critical (must fix): X
- Serious (should fix): Y
- Moderate: Z
- Minor: W

## Issues by Category
- WCAG Violations: [list]
- Semantic HTML Issues: [list]
- Keyboard Navigation Problems: [list]
- Image Alt Text Missing: [list]
- Color Contrast Failures: [list]
- ARIA Implementation Issues: [list]

## Detailed Findings
[Per-issue recommendations and code locations]

## Compliance Status
✅ WCAG 2.1 Level AA: PASS/FAIL
```

### Example Usage

**Trigger phrases:**
- "Run an accessibility audit"
- "Check WCAG 2.1 AA compliance"
- "Find accessibility issues in the app"
- "Generate a11y report"
- "Audit the website for accessibility"

---

## Common Workflows

### Workflow 1: Pre-Deployment Checklist

```
1. Run build pipeline
   - Lint checks pass
   - All tests pass
   - Build succeeds
2. Run accessibility audit
   - No critical violations
   - WCAG AA compliant
3. Deploy to production
```

**Trigger:** "Prepare for production deployment"

### Workflow 2: Bug Investigation

```
1. Run build pipeline with verbose output
   - Capture specific error
   - Identify root cause
2. Suggest fixes
3. Test fixes locally
```

**Trigger:** "The build is failing, help debug"

### Workflow 3: Accessibility Compliance

```
1. Run full a11y audit
2. Generate detailed report
3. Prioritize fixes by severity
4. Run targeted audit after fixes
```

**Trigger:** "Make sure we're WCAG AA compliant"

---

## Implementation Details

### For Build Pipeline

The skill will:

1. Change to project directory
2. Run `npm run lint` (ESLint)
3. Run `npm test` (Jest/Vitest)
4. Run `npm run build` (Next.js build)
5. Optionally deploy via Vercel CLI or push to Netlify

Each step captures:
- Exit code (success/failure)
- stdout/stderr output
- Duration
- Memory usage (if available)

On failure, the skill suggests common fixes:
- "Missing dependency: install with `npm install [package]`"
- "Port conflict: kill process on :3000"
- "TypeScript error in [file]: [suggestion]"
- "Test failures: [failing test names]"

### For Accessibility Auditing

The skill uses Axe DevTools to:

1. Start dev server locally (or use provided URL)
2. Crawl key pages of the application
3. Run Axe accessibility scanner on each page
4. Categorize findings by severity
5. Generate structured report with:
   - Issue description
   - WCAG criteria violated
   - Code location (HTML snippet)
   - Remediation steps

### Configuration

Create `.claude-frontend.json` in project root to customize:

```json
{
  "build": {
    "lintCommand": "npm run lint",
    "testCommand": "npm test",
    "buildCommand": "npm run build",
    "deployCommand": "vercel --prod"
  },
  "a11y": {
    "startCommand": "npm run dev",
    "port": 3000,
    "pagesCrawl": ["/", "/about", "/contact"],
    "wcagLevel": "AA",
    "ignoreRules": []
  }
}
```

---

## Troubleshooting

### Build Pipeline Issues

| Problem | Solution |
|---------|----------|
| "npm: command not found" | Install Node.js from nodejs.org |
| "Cannot find module" | Run `npm install` to install dependencies |
| "Port 3000 already in use" | Kill existing process: `lsof -ti:3000 \| xargs kill` |
| "TypeScript compilation failed" | Check `tsconfig.json` and fix type errors |
| "Next.js build failed" | Check `.next` directory exists; try `npm run build` again |

### Accessibility Audit Issues

| Problem | Solution |
|---------|----------|
| "Cannot start dev server" | Ensure `npm run dev` works in your project |
| "Timeout waiting for page" | Increase timeout in config or check server logs |
| "No a11y issues found" | Audit may have passed! Verify with manual spot-checks |
| "Axe DevTools not available" | Install: `npm install --save-dev @axe-core/react` |

---

## Examples

### Example 1: Simple Build Check

**User:** "Can you build the project and let me know if there are any errors?"

**Skill output:**
```
✅ Linting: PASS (0 errors, 3 warnings)
✅ Testing: PASS (24 tests passed)
✅ Building: PASS (built in 18.5s)

All stages passed! Your project is ready for deployment.
```

### Example 2: Accessibility Audit with Issues

**User:** "Run an accessibility audit on the site"

**Skill output:**
```
# Accessibility Audit Report

## Summary
- Total Issues: 8
- Critical: 1 (color contrast)
- Serious: 3 (missing alt text)
- Moderate: 2 (ARIA issues)
- Minor: 2 (semantic HTML)

## Critical Issues
1. Color Contrast Failure on /pricing
   - Element: <h1 class="price-header">
   - Issue: Text color #777 on background #f5f5f5 (3.2:1, needs 4.5:1)
   - Fix: Change text color to #555 or darker

## Serious Issues (Missing Alt Text)
1. Product image on /products page
   - Code: <img src="product.jpg" />
   - Fix: Add alt="Product image description"
...
```

---

## Notes

- **Build Pipeline** is deterministic and suitable for CI/CD automation
- **Accessibility Auditing** requires a running dev server; can be slow on large sites
- Both features log all output for debugging and compliance documentation
- Results are structured for easy integration with other tools and dashboards
