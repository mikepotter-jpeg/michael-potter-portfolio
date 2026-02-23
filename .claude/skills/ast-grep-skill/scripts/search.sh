#!/bin/bash

# AST-grep Code Search and Refactoring Script
# Usage: bash scripts/search.sh <pattern> [options]

set -e

PATTERN="${1:-}"
LANG="${LANG:-ts}"
OUTPUT_FORMAT="${OUTPUT_FORMAT:-text}"
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../../" && pwd)"

# Colors
BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

if [ -z "$PATTERN" ]; then
    echo "Usage: bash scripts/search.sh '<pattern>' [--lang <language>] [--json] [--rewrite '<new-pattern>']"
    echo ""
    echo "Examples:"
    echo "  bash scripts/search.sh '(\$\$\$) => \$\$\$'              # Find arrow functions"
    echo "  bash scripts/search.sh 'const \$\$ = use\$\$\$(\$\$\$)' # Find React hooks"
    echo "  bash scripts/search.sh 'import \$\$ from \"react\"'    # Find React imports"
    echo ""
    echo "Pattern syntax: https://ast-grep.github.io/guide/pattern-syntax.html"
    exit 1
fi

# Parse arguments
REWRITE_PATTERN=""
while [[ $# -gt 1 ]]; do
    case "$2" in
        --lang)
            LANG="$3"
            shift 2
            ;;
        --json)
            OUTPUT_FORMAT="json"
            shift
            ;;
        --rewrite)
            REWRITE_PATTERN="$3"
            shift 2
            ;;
        *)
            echo "Unknown option: $2"
            exit 1
            ;;
    esac
done

echo -e "${BLUE}════════════════════════════════════════════${NC}"
echo -e "${BLUE}   AST-grep Code Search & Refactoring${NC}"
echo -e "${BLUE}════════════════════════════════════════════${NC}"
echo ""
echo "Pattern:       $PATTERN"
echo "Language:      $LANG"
echo "Output format: $OUTPUT_FORMAT"
[ -n "$REWRITE_PATTERN" ] && echo "Rewrite to:    $REWRITE_PATTERN"
echo ""

# Check if ast-grep is installed
if ! command -v ast-grep &> /dev/null; then
    echo -e "${YELLOW}AST-grep not found. Installing...${NC}"
    npm install -g @ast-grep/cli
fi

cd "$PROJECT_ROOT"

# Build the command
CMD="ast-grep --pattern '$PATTERN' --lang $LANG"

if [ "$OUTPUT_FORMAT" = "json" ]; then
    CMD="$CMD --json"
fi

if [ -n "$REWRITE_PATTERN" ]; then
    CMD="$CMD --rewrite '$REWRITE_PATTERN'"
fi

echo -e "${GREEN}Running search...${NC}"
echo ""

# Run the search
eval "$CMD" || true

echo ""
echo -e "${BLUE}════════════════════════════════════════════${NC}"
