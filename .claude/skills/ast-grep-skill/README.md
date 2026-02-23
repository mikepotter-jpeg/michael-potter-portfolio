# AST-grep Skill

AST-based code search and transformation tool for finding and refactoring code patterns.

## Installation

### For this project:

The ast-grep skill is ready to use. It will automatically install ast-grep globally when first used.

### Manual installation:

```bash
npm install -g @ast-grep/cli
# or
npm install --save-dev @ast-grep/cli
```

## Quick Start

### 1. Search for arrow functions

```bash
bash .claude/skills/ast-grep-skill/scripts/search.sh '($$$) => $$$'
```

### 2. Find all React hooks

```bash
bash .claude/skills/ast-grep-skill/scripts/search.sh 'const $$ = use$$$($$$)'
```

### 3. Find imports from a package

```bash
bash .claude/skills/ast-grep-skill/scripts/search.sh 'import { $$ } from "react"'
```

### 4. Find and refactor (example: convert const to let)

```bash
bash .claude/skills/ast-grep-skill/scripts/search.sh 'const $$ = $$$' --rewrite 'let $$ = $$$'
```

### 5. Get JSON output for processing

```bash
bash .claude/skills/ast-grep-skill/scripts/search.sh 'const $$ = use$$$($$$)' --json
```

## Pattern Syntax

AST-grep uses special syntax for patterns:

| Symbol | Meaning |
|--------|---------|
| `$A`, `$B`, etc. | Named capture groups (match single node) |
| `$$$` | Anonymous multi-node wildcard (match 0+ nodes) |
| `$_` | Single wildcard (match any single node) |

## Common Patterns

### Find console.log calls
```
console.log($$$)
```

### Find function declarations
```
function $NAME($$$) { $$$ }
```

### Find class methods
```
$CLASS { $$$; $METHOD() $$ }
```

### Find all imports
```
import $$ from $$$
```

### Find useState calls
```
const [$STATE, $SET] = useState($$$)
```

### Find Promise chains
```
$.then($$$).catch($$$)
```

## Use Cases

### 1. Find all uses of a deprecated function

```bash
bash .claude/skills/ast-grep-skill/scripts/search.sh 'oldFunction($$$)'
```

### 2. Migrate code patterns

```bash
# Find old pattern and propose new pattern
bash .claude/skills/ast-grep-skill/scripts/search.sh 'var $$ = $$$' --rewrite 'const $$ = $$$'
```

### 3. Find all API calls to a specific service

```bash
bash .claude/skills/ast-grep-skill/scripts/search.sh 'api.$$($$$)'
```

### 4. Analyze component structure

```bash
bash .claude/skills/ast-grep-skill/scripts/search.sh 'export const $$ = ($$$) => { $$$ }'
```

### 5. Find all error handlers

```bash
bash .claude/skills/ast-grep-skill/scripts/search.sh 'catch($ERROR) { $$$ }'
```

## Supported Languages

- JavaScript (js)
- TypeScript (ts)
- Python (py)
- Go (go)
- Rust (rs)
- Java (java)
- And more...

Specify with `--lang <language>`

## Documentation

- **Full Pattern Syntax**: https://ast-grep.github.io/guide/pattern-syntax.html
- **GitHub Repository**: https://github.com/ast-grep/ast-grep
- **Official Documentation**: https://ast-grep.github.io/

## Tips

1. **Test patterns incrementally** - Start with simple patterns and make them more specific
2. **Use --json for batch processing** - Get structured output for programmatic use
3. **Dry run with search first** - Before using --rewrite, search first to verify matches
4. **Use anchors for precision** - Use `^` and `$` to match at start/end of lines
5. **Combine with grep** - Pipe results to grep for additional filtering

## Example Workflow

### Find and refactor a deprecated API

```bash
# 1. First, see what matches the old pattern
bash .claude/skills/ast-grep-skill/scripts/search.sh 'oldAPI.method($$$)'

# 2. Review the results to ensure they're what you want to change

# 3. When confident, apply the transformation
bash .claude/skills/ast-grep-skill/scripts/search.sh 'oldAPI.method($A)' --rewrite 'newAPI.method($A)'

# 4. Run tests to verify the refactoring worked
npm run check
```

## Invoking from Claude Code

When using Claude Code, you can use the skill directly:

```
Use ast-grep to find all React hooks in the project
```

Or for refactoring:

```
Use ast-grep to convert all 'var' declarations to 'const'
```

---

**Last Updated**: 2026-02-17
