# Project Scripts

Custom scripts for managing and maintaining the portfolio project.

## check-updates.sh

Checks for outdated npm packages and generates a detailed summary report.

### Usage

```bash
# Via npm script (recommended)
npm run check-updates

# Or run directly
bash scripts/check-updates.sh
```

### What It Does

- ✅ Scans all installed packages for updates
- ✅ Categorizes updates as MAJOR, MINOR, or PATCH
- ✅ Displays current vs. latest versions
- ✅ Counts available updates by type
- ✅ Provides next steps for safe updating

### Output Example

```
════════════════════════════════════════════
   Package Update Summary
════════════════════════════════════════════

Project: my portfolio
Checked: 2026-02-17 15:34:51

Available Updates:

  react                              | Current: 18.3.1       | Latest: 19.2.4
  next                               | Current: 14.2.35      | Latest: 16.1.6
  tailwindcss                        | Current: 3.4.19       | Latest: 4.1.18
  ...more packages...

Update Summary:
  Major Updates:       13
  Minor Updates:        1
  Patch Updates:        1
  Total Updates Available: 15

Next Steps:
  1. Review changes: npm outdated
  2. Update safely: npm update
  3. Test changes: npm run test
```

### Color Legend

- 🔴 **RED (MAJOR)** - Breaking changes expected, requires testing
- 🟡 **YELLOW (MINOR)** - New features, backwards compatible
- 🟢 **GREEN (PATCH)** - Bug fixes only, safe to update

### When to Run

- **Weekly** - Check for security updates and critical fixes
- **Before major releases** - Ensure dependencies are up to date
- **As part of CI/CD** - Catch outdated packages early

### Best Practices

1. **Always check first** - Run `npm run check-updates` before updating
2. **Test thoroughly** - Major version updates may have breaking changes
3. **Update incrementally** - Don't update everything at once
4. **Review changelogs** - Check package changelogs for migration guides

### Updating Packages Safely

```bash
# 1. Check what needs updating
npm run check-updates

# 2. Update to latest allowed by package.json constraints
npm update

# 3. For specific major version updates
npm install package-name@latest

# 4. Run full test suite
npm run check

# 5. Commit changes
git add package.json package-lock.json
git commit -m "chore: update dependencies"
```

### Integration with Claude Code

This script can be invoked as a skill via Claude Code:

```
/check-updates
```

Claude will run the script and display the update summary directly.
