# Quick Start Reference

**TL;DR version of the commands you use most.**

## 🚀 Most Used Commands

```bash
npm run dev              # Start developing (localhost:3000)
npm run check            # Full validation (do this before git commit)
npm run check-updates    # See what packages need updating
npm test                 # Run tests
npm run build            # Build for production
npm run deploy           # Deploy to production
```

---

## 📋 By Situation

### I'm Starting Work
```bash
npm run dev              # Start dev server
npm run test:watch       # Optional: watch tests in another terminal
```

### I'm Finishing Code
```bash
npm run check            # MUST do this before committing
git add .
git commit -m "description"
git push
```

### I Want to Check Updates
```bash
npm run check-updates    # See what's outdated
# Review the list
npm install package@latest    # Update a specific package (if needed)
npm run check            # Verify it works
```

### I Need to Deploy
```bash
npm run check            # Make sure everything passes
npm run deploy           # Push to production
```

### I Have a Test Failure
```bash
npm run test:watch       # Run tests in watch mode
# See which test is failing
# Fix the code
# Tests re-run automatically
```

### I Have a Type Error
```bash
npm run typecheck        # See all type errors
# Fix them
npm run typecheck        # Verify
```

### I Want Lint Fixes
```bash
npm run lint             # See linting issues
# ESLint may auto-fix some
# Fix others manually
npm run lint             # Verify
```

### I Need an Accessibility Report
```bash
npm run test:a11y        # Run audit
# Check a11y-report/a11y-summary.md
# Fix issues
npm run test:a11y        # Re-run to verify
```

---

## 🎯 Exit Codes

**0 = Success ✅**
**1 = Failed ❌**

Use in scripts:
```bash
npm run check && echo "Ready to deploy!" || echo "Fix errors first"
```

---

## 📍 Key Locations

| What | Where |
|------|-------|
| Full commands list | `docs/COMMANDS_REFERENCE.md` ← **You are here!** |
| Dev server | `http://localhost:3000` |
| Accessibility results | `a11y-report/a11y-summary.md` |
| Project config | `package.json`, `tailwind.config.ts`, `tsconfig.json` |
| Environment vars | `.env.local` |

---

## ⚡ Common Command Chains

### Full pre-commit validation
```bash
npm run check
```

### Update and verify
```bash
npm run check-updates
npm install package@latest
npm run check
```

### Develop with tests running
```bash
# Terminal 1
npm run dev

# Terminal 2
npm run test:watch
```

### Check everything before pushing
```bash
npm run check
npm run check-updates
git status
git add .
git commit -m "message"
git push
```

---

**For detailed info on any command, see [`COMMANDS_REFERENCE.md`](./COMMANDS_REFERENCE.md)**
