#!/bin/bash

# Accessibility Audit Script
# Runs WCAG 2.1 AA compliance checks using Playwright + axe-core

PROJECT_DIR="${1:-.}"
OUTPUT_DIR="${2:-./a11y-report}"
PORT="${3:-${PORT:-3099}}"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

mkdir -p "$OUTPUT_DIR"

echo -e "${BLUE}=== Accessibility Audit (WCAG 2.1 AA) ===${NC}"
echo "Project directory: $PROJECT_DIR"
echo "Output directory: $OUTPUT_DIR"
echo "Server port: $PORT"
echo ""

cd "$PROJECT_DIR" || exit 1

# Ensure Playwright and axe-core are installed
if [ ! -d "node_modules/playwright" ] || [ ! -d "node_modules/@axe-core/playwright" ]; then
    echo -e "${YELLOW}Installing Playwright and @axe-core/playwright...${NC}"
    npm install --save-dev @axe-core/playwright playwright 2>/dev/null || true
    npx playwright install chromium 2>/dev/null || true
fi

# Start server in background: use production build (next start) if available, else dev
if [ -f ".next/BUILD_ID" ]; then
  echo -e "${BLUE}Starting production server on port $PORT...${NC}"
  npx next start -p "$PORT" > "$OUTPUT_DIR/dev-server.log" 2>&1 &
else
  echo -e "${BLUE}Starting dev server on port $PORT...${NC}"
  npx next dev -p "$PORT" > "$OUTPUT_DIR/dev-server.log" 2>&1 &
fi
DEV_PID=$!

# Wait for server to be ready
echo "Waiting for server to be ready..."
for i in {1..30}; do
    if curl -s "http://localhost:$PORT" > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Server is ready${NC}"
        break
    fi
    sleep 1
    if [ $i -eq 30 ]; then
        echo -e "${RED}❌ Server failed to start${NC}"
        kill $DEV_PID 2>/dev/null || true
        exit 1
    fi
done

echo ""
echo -e "${BLUE}Running accessibility audit (Playwright + axe-core)...${NC}"

# Resolve path to the audit runner (script lives in skill, runs from project dir)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
RUNNER="$SCRIPT_DIR/a11y-audit-runner.mjs"

# Pages to audit (customize per project; /contact may 404 on some sites)
PAGES="/,/about,/work/export-service"

# Run the audit
if [ -f "$RUNNER" ]; then
    node "$RUNNER" --url "http://localhost:$PORT" --output "$OUTPUT_DIR" --pages "$PAGES"
    AUDIT_EXIT=$?
else
    echo -e "${RED}❌ Audit runner not found: $RUNNER${NC}"
    AUDIT_EXIT=1
fi

# Kill dev server
kill $DEV_PID 2>/dev/null || true
wait $DEV_PID 2>/dev/null || true

echo ""
if [ $AUDIT_EXIT -eq 0 ]; then
    echo -e "${GREEN}✅ Accessibility audit complete - no critical/serious violations${NC}"
else
    echo -e "${RED}❌ Accessibility audit found critical or serious violations${NC}"
fi
echo "Report saved to: $OUTPUT_DIR/a11y-summary.md"
echo ""
[ -f "$OUTPUT_DIR/a11y-summary.md" ] && cat "$OUTPUT_DIR/a11y-summary.md"

exit $AUDIT_EXIT
