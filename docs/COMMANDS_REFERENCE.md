# Commands Reference Guide

Quick reference for all available commands and skills in this project.

## 📋 Development Commands

### Start Development
```bash
npm run dev
```
- Starts Next.js dev server at `http://localhost:3000`
- Hot reload enabled
- Use Ctrl+C to stop

### Build for Production
```bash
npm run build
```
- Creates optimized production build
- Run before deploying
- Output in `.next/` directory

### Start Production Server
```bash
npm start
```
- Runs the production build locally
- For testing production behavior

---

## 🔍 Code Quality & Testing

### Lint Code
```bash
npm run lint
```
- Runs ESLint
- Checks code quality and style
- May auto-fix some issues

### Type Check
```bash
npm run typecheck
```
- Runs TypeScript compiler
- Catches type errors
- No code generation

### Run Tests
```bash
npm test
```
- Runs Jest test suite
- Exit code 0 = success, 1 = failure

### Watch Tests (Auto-run on Changes)
```bash
npm run test:watch
```
- Jest in watch mode
- Re-runs tests when files change
- Press 'q' to quit

---

## ♿ Accessibility Auditing

### Run Accessibility Audit
```bash
npm run test:a11y
```
- Runs WCAG 2.1 AA compliance scan
- Uses Axe accessibility testing
- Generates report in `./a11y-report/`

**What it checks:**
- Semantic HTML structure
- Heading hierarchy
- Color contrast ratios
- Alt text for images
- ARIA labels and roles
- Keyboard navigation
- Form labels and validation

**Report location:** `./a11y-report/a11y-summary.md`

---

## 🚀 Full Validation Pipeline

### Run Complete Check (RECOMMENDED BEFORE COMMITTING)
```bash
npm run check
```
- Runs all validations in sequence:
  1. ESLint (lint)
  2. TypeScript (typecheck)
  3. Jest (test)
  4. Next.js build (build)
  5. Accessibility audit (test:a11y)
- Stops on first error
- **Use this before pushing code!**

### Deploy to Production
```bash
npm run deploy
```
- Runs `npm run check` first
- Then deploys to Vercel/Netlify
- Only proceeds if check passes

---

## 📦 Package Management

### Check for Outdated Packages
```bash
npm run check-updates
```
- Displays color-coded summary:
  - 🔴 MAJOR updates (breaking changes)
  - 🟡 MINOR updates (new features)
  - 🟢 PATCH updates (bug fixes)
- Shows current vs latest versions
- Suggests safe update path

### View Detailed Outdated Info
```bash
npm outdated
```
- Full table of outdated packages
- Shows wanted and latest versions
- Useful with `npm run check-updates`

### Update Packages Safely
```bash
npm update
```
- Updates to latest "wanted" version
- Respects semver constraints in package.json
- Updates `package-lock.json`
- **Always run `npm run check` after updating!**

### Update Specific Package to Latest
```bash
npm install package-name@latest
```
- Replace `package-name` with actual package
- Example: `npm install react@latest`
- May include major version changes

---

## 🛠️ Utility Scripts

### Check for Package Updates (Script Version)
```bash
bash scripts/check-updates.sh
```
- Same as `npm run check-updates`
- Can be run directly without npm context
- Useful in CI/CD pipelines

---

## 📊 Recommended Workflows

### Daily Development
```bash
1. npm run dev              # Start dev server
2. npm run test:watch       # Run tests in watch mode
3. Make changes as needed
4. npm run lint             # Check code quality
```

### Before Committing Code
```bash
npm run check               # Full validation pipeline
git add .
git commit -m "message"
```

### Weekly Maintenance
```bash
npm run check-updates       # Check for updates
# Review and decide what to update
npm install package@latest  # Update specific packages
npm run check               # Verify everything works
git add package*.json
git commit -m "chore: update dependencies"
```

### Before Deploying
```bash
npm run check               # Full validation
npm run deploy              # Deploy to production
```

### Accessibility Review
```bash
npm run test:a11y           # Run full audit
# Review a11y-report/a11y-summary.md
# Fix any critical/serious issues
npm run test:a11y           # Re-run to verify
```

---

## 🎯 Common Tasks

### I want to...

**...start developing**
```bash
npm run dev
```

**...check if my code is good**
```bash
npm run check
```

**...see what needs updating**
```bash
npm run check-updates
```

**...update a package**
```bash
npm install package-name@latest
npm run check               # Make sure nothing broke
```

**...run tests while coding**
```bash
npm run test:watch
```

**...check accessibility issues**
```bash
npm run test:a11y
```

**...deploy to production**
```bash
npm run deploy
```

**...build without deploying**
```bash
npm run build
```

**...just lint without testing**
```bash
npm run lint
```

---

## 🔧 Exit Codes

| Exit Code | Meaning |
|-----------|---------|
| 0 | Success - command completed without errors |
| 1 | Failure - command found errors or failed |

Examples:
- `npm test && echo "Tests passed"` - Only echoes if exit code is 0
- `npm run check` - Returns 0 if all checks pass, 1 if any fail

---

## 📁 Important Directories

| Path | Purpose |
|------|---------|
| `.next/` | Next.js build output (generated) |
| `a11y-report/` | Accessibility audit results |
| `dist/` | Build output (if using custom build) |
| `node_modules/` | Dependencies (generated) |
| `docs/` | Documentation (this file is here!) |
| `scripts/` | Utility scripts |
| `.claude/skills/` | Claude Code skills |

---

## 🚨 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Dependency Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run check
```

### Build Fails After Updates
```bash
npm run typecheck           # Check for type errors
npm run lint               # Check for linting issues
npm run test               # Run tests
npm run build              # Try build again
```

### Tests Failing
```bash
npm run test:watch         # Run tests and debug
# Fix the failing tests
npm test                   # Verify fix works
```

---

## 💡 Pro Tips

1. **Always run `npm run check` before committing** - Catches issues early
2. **Run `npm run check-updates` monthly** - Stay current with dependencies
3. **Use `npm run test:watch`** - Better for development than repeatedly running `npm test`
4. **Review `a11y-report/`** - After `npm run test:a11y` to fix accessibility issues
5. **Check TypeScript errors first** - `npm run typecheck` often shows more useful errors than `npm test`
6. **Test production build locally** - Use `npm run build && npm start` to catch production-only issues

---

## 📚 Related Documentation

- [`docs/DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) - Design tokens and component guidelines
- [`docs/SETUP_INSTRUCTIONS.md`](./SETUP_INSTRUCTIONS.md) - Initial setup guide
- [`docs/TESTING.md`](./TESTING.md) - Testing best practices
- [`scripts/README.md`](../scripts/README.md) - Details about utility scripts

---

**Last Updated:** 2026-02-17
**Location:** `docs/COMMANDS_REFERENCE.md`
