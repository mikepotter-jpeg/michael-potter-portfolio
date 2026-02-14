# Testing & checks

## Test script (accessibility)

- **`npm test`** — Runs Jest with **accessibility tests** (jest-axe) on key components (Button, ContactSection). Fast, no server. Used in the commit-and-deploy pipeline.
- **`npm run test:watch`** — Same as `npm test` in watch mode.
- **`npm run test:a11y`** — Full-page accessibility audit (WCAG 2.1 AA): starts the dev server, runs the frontend-automation a11y script, writes a report to `./a11y-report`. Use for deeper checks.

Accessibility tests live in `__tests__/a11y/accessibility.test.tsx`. Add more components there to expand coverage.

## Other checks you can run

| Check        | Command           | What it does                          |
|-------------|-------------------|----------------------------------------|
| **Lint**    | `npm run lint`    | ESLint (Next.js) on the codebase       |
| **Typecheck** | `npx tsc --noEmit` | TypeScript without emitting files    |
| **Build**   | `npm run build`   | Production Next.js build               |
| **Test**    | `npm test`        | Jest (includes a11y tests above)       |
| **Full a11y** | `npm run test:a11y` | Full-page WCAG audit (see above)    |

**`npm run check`** — Runs all of the above in order (lint → typecheck → test → build). Stops on first failure. Use before committing or to verify the project is clean.

For **commit and deploy**, the project runs: lint → test → build, then commit and push (see `.cursor/rules/commit-and-deploy.mdc`).
