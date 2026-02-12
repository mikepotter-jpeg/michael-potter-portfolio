# Frontend Automation Skill

A comprehensive skill for automating Next.js front-end development workflows, including build pipelines, testing, linting, and WCAG 2.1 AA accessibility auditing.

## What This Skill Does

### 1. Build & Deploy Pipeline Automation
- **Lint** - Run ESLint to catch code quality issues
- **Test** - Execute Jest/Vitest test suite
- **Build** - Create production-ready Next.js build
- **Deploy** - Optional Vercel/Netlify deployment
- **Reporting** - Structured error reports with fix suggestions

### 2. Accessibility Auditing (WCAG 2.1 AA)
- Automated scanning for accessibility violations
- Detailed categorization by severity
- Compliance status reporting
- Per-issue remediation recommendations
- Support for all WCAG AA criteria

## How to Use This Skill

### Installation
1. Copy the entire `frontend-automation-skill` directory to your Cowork skills folder
2. Restart Cowork
3. The skill will be available when you mention front-end automation tasks

### Usage Examples

**Example 1: Build Pipeline Check**
```
"Run the full build pipeline and let me know if there are any errors"
Claude will: Lint → Test → Build, and report the status
```

**Example 2: Accessibility Audit**
```
"Run an accessibility audit to check WCAG 2.1 AA compliance"
Claude will: Scan your site, find violations, provide detailed fixes
```

**Example 3: Pre-Deployment**
```
"I'm deploying to production. Run the pre-deployment checklist."
Claude will: Build pipeline + accessibility audit + go/no-go decision
```

## Skill Contents

```
frontend-automation-skill/
├── SKILL.md                      # Main skill documentation
├── README.md                     # This file
├── evals/
│   └── evals.json              # Test cases for evaluation
├── scripts/
│   ├── run-build-pipeline.sh    # Build automation script
│   └── run-a11y-audit.sh        # Accessibility audit script
└── references/
    ├── nextjs-config.md         # Next.js setup guide
    └── wcag-aa-checklist.md     # WCAG compliance checklist
```

## Project Requirements

### For Build Pipeline
- **Node.js** 16+
- **npm** or **yarn**
- **Next.js** project with:
  - `npm run lint` script (ESLint)
  - `npm run test` script (Jest/Vitest)
  - `npm run build` script
  - `npm run dev` script (for dev server)

### For Accessibility Auditing
- **Next.js** project (same as above)
- **@axe-core/cli** (installed automatically if needed)
- Ability to run dev server on specified port

## Key Features

### 📊 Structured Reporting
- JSON output for programmatic access
- Markdown summaries for human readability
- Detailed error logs for debugging
- Execution metrics (time, exit codes, etc.)

### 🔍 Smart Error Detection
- Captures and displays actual error output
- Suggests common fixes:
  - Missing dependencies
  - Configuration issues
  - Type errors
  - Port conflicts

### ♿ WCAG 2.1 AA Compliance
- Comprehensive accessibility checking
- Issues categorized by severity
- Per-issue remediation steps
- Compliance status reporting

### 📱 Vercel/Netlify Ready
- Detects deployment platform
- Integrates with deployment CLI
- Provides deployment-ready builds

## Configuration

Create `.claude-frontend.json` in your project root to customize:

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

## Troubleshooting

### Build Pipeline Issues

**"npm: command not found"**
- Install Node.js from https://nodejs.org

**"Cannot find module"**
- Run `npm install` in project directory

**"Port 3000 already in use"**
- Kill the process: `lsof -ti:3000 | xargs kill -9`

**"Next.js build failed"**
- Check for TypeScript errors with `npm run build`
- Verify `next.config.js` is valid

### Accessibility Audit Issues

**"Cannot start dev server"**
- Ensure `npm run dev` works locally first
- Check for port conflicts

**"Timeout waiting for server"**
- Increase timeout in config
- Check server logs for startup errors

**"No accessibility issues found"**
- Audit may have passed! Verify with manual testing
- Check that pages are actually being crawled

## Testing

The skill includes comprehensive test cases:

```bash
# View test cases
cat evals/evals.json
```

Test scenarios include:
1. Successful build pipeline
2. Build pipeline error handling
3. Full accessibility audit
4. Focused a11y checks
5. Pre-deployment checklist

## Next Steps

1. **Customize** - Update `.claude-frontend.json` for your project
2. **Test** - Run the skill on your Next.js project
3. **Integrate** - Use in CI/CD pipelines for automated checks
4. **Monitor** - Regular accessibility audits during development

## Support

For issues or improvements:
- Check the references/ directory for detailed guides
- Review WCAG AA checklist for compliance requirements
- Consult Next.js documentation for build issues

## License

This skill is provided as-is for front-end automation tasks.
