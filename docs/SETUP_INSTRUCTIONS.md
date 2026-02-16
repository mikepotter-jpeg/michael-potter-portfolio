# Frontend Automation Skill - Setup Instructions

## What You Have

You now have a complete **frontend-automation skill** for Next.js development with:
- Build pipeline automation (lint → test → build)
- WCAG 2.1 AA accessibility auditing
- Comprehensive documentation
- Test cases and evaluation setup

## Installation

### Option 1: Standard Cowork Installation
1. **Locate your Cowork skills folder**
   - **Mac:** `~/.cowork/skills/`
   - **Windows:** `%APPDATA%\Cowork\skills\`
   - **Linux:** `~/.config/cowork/skills/`

2. **Copy the skill**
   ```bash
   cp -r "frontend-automation-skill" ~/.cowork/skills/
   ```

3. **Restart Cowork**
   - Close and reopen the Cowork desktop app

4. **Verify installation**
   - Start a new chat
   - The skill should be available for Next.js automation tasks

### Option 2: Manual Folder Move
1. Open your Cowork skills directory (see paths above)
2. Drag and drop the `frontend-automation-skill` folder there
3. Restart Cowork

## Quick Start (5 minutes)

### 1. Ensure Your Project is Ready
Your Next.js project needs these npm scripts. Check `package.json`:

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

Missing any? Run:
```bash
npm install --save-dev @next/eslint-config eslint jest
npx next lint  # Initialize ESLint
```

### 2. Test the Skill

Open Cowork and type one of these:

**Build Pipeline:**
```
Run the full build pipeline on my Next.js project
```

**Accessibility Audit:**
```
Run an accessibility audit to check WCAG AA compliance
```

**Pre-Deployment:**
```
Run the pre-deployment checklist before I deploy to production
```

### 3. Review the Output

The skill will:
- Execute the commands
- Capture any errors
- Provide actionable recommendations
- Generate structured reports

## File Structure

```
frontend-automation-skill/
├── SKILL.md                      ← Main skill (triggers Claude)
├── QUICKSTART.md                 ← 5-minute guide
├── README.md                     ← Full documentation
├── evals/evals.json              ← Test cases
├── scripts/
│   ├── run-build-pipeline.sh
│   └── run-a11y-audit.sh
└── references/
    ├── nextjs-config.md
    └── wcag-aa-checklist.md
```

## Common Use Cases

### Daily Development
```
"Check for linting errors in my project"
"Run the tests to see if everything passes"
"Build my project and let me know if there are issues"
```

### Before Deploying
```
"Run the pre-deployment checklist"
"Check for accessibility issues before I go live"
"Make sure the build passes and the site is accessible"
```

### Debugging
```
"The build is failing, help me debug the errors"
"Show me what accessibility issues I have"
"Run tests and tell me what's failing"
```

## Customization (Optional)

Create `.claude-frontend.json` in your project root:

```json
{
  "build": {
    "lintCommand": "npm run lint",
    "testCommand": "npm test",
    "buildCommand": "npm run build"
  },
  "a11y": {
    "port": 3000,
    "pagesCrawl": ["/", "/products", "/contact"],
    "wcagLevel": "AA"
  }
}
```

## Troubleshooting

**Skill not showing up after restart?**
- Verify file is in correct skills folder
- Restart Cowork completely
- Check for any error messages in Cowork logs

**Build pipeline errors?**
- Run `npm run build` locally first to check your project
- Ensure all npm scripts exist in `package.json`
- Install missing dependencies: `npm install`

**A11y audit times out?**
- Make sure `npm run dev` works locally
- Check port 3000 isn't in use: `lsof -ti:3000`
- Verify your app starts without errors

**More help?**
- See `QUICKSTART.md` for quick tips
- See `README.md` for complete documentation
- See `references/` for technical guides

## Next Steps

1. ✅ Copy the skill to your Cowork folder
2. ✅ Restart Cowork
3. ✅ Try it on your Next.js project
4. ✅ Customize `.claude-frontend.json` if needed
5. ✅ Use regularly in your development workflow

## Support

For questions, refer to:
- **SKILL.md** - What the skill does and how to use it
- **QUICKSTART.md** - 5-minute setup and examples
- **README.md** - Complete feature documentation
- **references/nextjs-config.md** - Next.js setup details
- **references/wcag-aa-checklist.md** - Accessibility guidelines

Happy automating! 🚀

---

## File Locations

**Skill location on your computer:**
- `/sessions/adoring-nice-einstein/mnt/my portfolio/frontend-automation-skill/`

**Summary document:**
- `/sessions/adoring-nice-einstein/mnt/my portfolio/FRONTEND_AUTOMATION_SKILL_SUMMARY.md`

**These instructions:**
- `/sessions/adoring-nice-einstein/mnt/my portfolio/SETUP_INSTRUCTIONS.md`
