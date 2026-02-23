---
name: ast-grep
description: |
  AST-based code search and transformation tool for finding and refactoring code patterns.
  Use this skill to: search code using pattern matching (find functions, imports, etc.),
  perform batch code transformations, analyze code structure, and generate reports on
  code patterns across your project. Works with multiple languages: JavaScript, TypeScript,
  Python, Go, Rust, Java, and more.
compatibility: |
  - Requires: ast-grep (installed from GitHub)
  - Supports: JavaScript, TypeScript, Python, Go, Rust, Java, and others
  - Usage: Pattern matching, code refactoring, analysis
---

# AST-grep Skill

AST-grep is a tool for code searching and refactoring using Abstract Syntax Tree (AST) patterns. Unlike simple text search, it understands code structure, allowing for precise pattern matching and transformations.

## Overview

This skill provides tools for:

1. **Code Pattern Search** - Find specific code patterns across your project
2. **Code Analysis** - Understand code structure and dependencies
3. **Batch Refactoring** - Transform code patterns across multiple files
4. **Reports** - Generate reports on code usage patterns

## Installation

AST-grep is installed from the GitHub releases:

```bash
npm install --save-dev @ast-grep/cli
# or
npm install -g @ast-grep/cli
```

## Basic Usage

### Search for patterns

Find all arrow functions:
```bash
ast-grep --pattern '($$$) => $$$'
```

Find all React hooks:
```bash
ast-grep --pattern 'const $$ = use$$$($$$)'
```

Find all imports from a package:
```bash
ast-grep --pattern 'import $$ from "react"'
```

### Run transformations

Rewrite code patterns:
```bash
ast-grep --rewrite 'const $A = $B' 'let $A = $B'
```

### Generate reports

```bash
ast-grep --pattern 'import { $$ } from "react"' --json > imports.json
```

## Common Use Cases

### Find all instances of a function call
```bash
ast-grep --pattern 'console.log($$$)'
```

### Find all class methods with a specific name
```bash
ast-grep --pattern 'class $$ { $$$; render() $$ }'
```

### Find unused variables
```bash
ast-grep --pattern 'const $$ = $$$;' --lang ts
```

### Find all Promise chains and suggest async/await
```bash
ast-grep --pattern '$.then($$$).catch($$$)'
```

## Trigger Phrases

- "Search for this pattern"
- "Find all instances of [code pattern]"
- "Refactor this pattern across the project"
- "Generate a report of [pattern] usage"
- "Find all [function/class/import] patterns"
- "Show me all uses of this API"

## Example Output

When searching for React hooks:
```
File: src/components/Button.tsx:15
const useClick = useState(false)

File: src/hooks/useAuth.ts:8
const useAuth = useContext(AuthContext)

File: src/hooks/useWindowSize.ts:3
const useWindowSize = useEffect(() => { ... })
```

## Links

- [AST-grep Documentation](https://ast-grep.github.io/)
- [AST-grep GitHub](https://github.com/ast-grep/ast-grep)
- [Pattern Syntax Guide](https://ast-grep.github.io/guide/pattern-syntax.html)
