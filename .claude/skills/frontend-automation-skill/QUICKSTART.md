# Quick Start Guide - Frontend Automation Skill

Get up and running with the frontend automation skill in 5 minutes.

## Step 1: Verify Your Project Setup

Your Next.js project needs these npm scripts. Check your `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "lint": "next lint",
    "test": "jest"
  }
}
```

If any are missing:
```bash
# Install ESLint setup
npx next lint

# Setup Jest (if missing)
npm install --save-dev jest jest-environment-jsdom
```

## Step 2: Install Skill

1. Copy the `frontend-automation-skill` folder to your Cowork skills directory
2. Restart Cowork

## Step 3: Test the Skill

### Test 1: Run Build Pipeline
Open Cowork and type:
```
"Run the full build pipeline on my Next.js project"
```

Expected output:
```
✅ Linting: PASS
✅ Testing: PASS
✅ Building: PASS
```

### Test 2: Run Accessibility Audit
```
"Run an accessibility audit on my site"
```

Expected output:
```
# Accessibility Audit Report

## Summary
WCAG 2.1 Level AA: PASS ✅
```

## Step 4: Use Common Commands

Here are the most useful prompts:

### Daily Development
```
"Run the build pipeline to check for errors"
"Does the project build cleanly?"
"Are there any linting issues?"
```

### Before Deployment
```
"Run the pre-deployment checklist"
"Check WCAG AA compliance before I deploy"
"Build and check for accessibility issues"
```

### Debugging
```
"The build is failing, help me debug"
"Show me what linting errors there are"
"Run tests and show me what's failing"
```

## Step 5: Optional Configuration

Create `.claude-frontend.json` in your project root for custom settings:

```json
{
  "build": {
    "lintCommand": "npm run lint",
    "testCommand": "npm test",
    "buildCommand": "npm run build",
    "deployCommand": "vercel --prod"
  },
  "a11y": {
    "port": 3000,
    "pagesCrawl": ["/", "/products", "/contact"],
    "wcagLevel": "AA"
  }
}
```

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "npm: command not found" | Install Node.js from nodejs.org |
| Build fails with type errors | Run `npm run build` locally to see full error |
| Linting fails | Run `npm run lint` locally to see issues |
| A11y audit times out | Ensure `npm run dev` works locally; increase timeout in config |
| Port 3000 in use | Kill process: `lsof -ti:3000 \| xargs kill -9` |

## What's Included

- **SKILL.md** - Full skill documentation
- **scripts/** - Automation scripts (build, a11y)
- **references/** - Setup guides and checklists
- **evals/** - Test cases to validate the skill

## Next Steps

1. Run the skill on your project
2. Review the generated reports
3. Fix any issues found
4. Use regularly as part of your workflow
5. Customize configuration as needed

## Tips for Best Results

✅ **Do:**
- Run the skill regularly (daily or before commits)
- Fix critical issues immediately
- Use the pre-deployment checklist before going live
- Keep npm scripts updated in package.json
- Review accessibility audit recommendations

❌ **Don't:**
- Ignore linting errors (they compound quickly)
- Ship code with type errors
- Deploy without running the pre-deployment checklist
- Rely solely on automated accessibility checking (do manual testing too)

## Questions?

Refer to:
- **SKILL.md** - Full documentation
- **references/nextjs-config.md** - Setup and configuration
- **references/wcag-aa-checklist.md** - Accessibility requirements
- **README.md** - Detailed feature overview

Happy automating! 🚀
