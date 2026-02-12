# Next.js Configuration for Automation

## Expected Project Structure

```
my-nextjs-project/
├── package.json          # Must have: lint, test, build scripts
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript config (if using TS)
├── .eslintrc.json        # ESLint configuration
├── jest.config.js        # Jest config (for testing)
├── src/
│   ├── app/              # App router pages
│   ├── pages/            # Pages router (if using older Next.js)
│   └── components/       # React components
└── public/               # Static assets
```

## Required npm Scripts

Your `package.json` must include these scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

## Setting Up Linting (ESLint)

Next.js comes with built-in ESLint support. Verify your `.eslintrc.json`:

```json
{
  "extends": "next/core-web-vitals",
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

## Setting Up Testing (Jest)

Create `jest.config.js`:

```js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
}

module.exports = createJestConfig(customJestConfig)
```

Create `jest.setup.js`:

```js
import '@testing-library/jest-dom'
```

Install testing dependencies:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

## Accessibility Setup

### Install Axe DevTools

```bash
npm install --save-dev @axe-core/cli axe-core
```

### Testing Components for A11y

Example test file:

```javascript
// src/components/Button.test.js
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Button from './Button'

expect.extend(toHaveNoViolations)

describe('Button accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(<Button>Click me</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
```

Install jest-axe:

```bash
npm install --save-dev jest-axe
```

## TypeScript Configuration

If using TypeScript, ensure `tsconfig.json` is properly configured:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "strict": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "jsxImportSource": "react",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

## Common Build Issues and Fixes

### Issue: "TypeScript error: Type is not assignable to type 'never'"

**Fix:** Check your tsconfig.json `strict` mode. Either fix the type or use a type assertion.

### Issue: "Module not found: Can't resolve '@/components/Button'"

**Fix:** Ensure baseUrl and paths are set correctly in tsconfig.json:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Issue: "Build optimization failed"

**Fix:** Check for circular dependencies or very large bundles. Use `next/bundle-analyzer` to investigate:

```bash
npm install --save-dev @next/bundle-analyzer
```

Then update next.config.js:

```js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({})
```

## Vercel Deployment Integration

If deploying to Vercel, ensure:

1. **Environment variables**: Add to Vercel dashboard or `.env.local` locally
2. **Build command**: Usually `npm run build` (Vercel detects this)
3. **Output directory**: `.next` (Vercel auto-detects)

Your `vercel.json` (optional):

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "env": {
    "NEXT_PUBLIC_API_URL": "@next_public_api_url"
  }
}
```

## Performance Checklist

- [ ] `next/image` used for all images (not `<img>`)
- [ ] Dynamic imports for code splitting: `dynamic(() => import('...'))`
- [ ] Fonts optimized with `next/font`
- [ ] Metadata properly configured in layouts
- [ ] API routes use proper HTTP methods and error handling
