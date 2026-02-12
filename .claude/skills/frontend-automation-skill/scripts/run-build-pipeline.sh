#!/bin/bash

# Frontend Build Pipeline Automation Script
# Runs: lint -> test -> build (with error capture and reporting)

set -e  # Exit on first error

PROJECT_DIR="${1:-.}"
OUTPUT_DIR="${2:./build-report}"
VERBOSE="${3:-false}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Ensure output directory exists
mkdir -p "$OUTPUT_DIR"

echo -e "${BLUE}=== Frontend Build Pipeline ===${NC}"
echo "Project directory: $PROJECT_DIR"
echo "Output directory: $OUTPUT_DIR"
echo ""

cd "$PROJECT_DIR" || exit 1

# Initialize report
REPORT_FILE="$OUTPUT_DIR/build-report.md"
ERRORS_FILE="$OUTPUT_DIR/errors.log"
STATS_FILE="$OUTPUT_DIR/stats.json"

cat > "$REPORT_FILE" << 'EOF'
# Build Pipeline Report

EOF

# Function to run stage
run_stage() {
    local stage_name=$1
    local command=$2
    local start_time=$(date +%s)

    echo -e "${BLUE}Running: $stage_name${NC}"

    if eval "$command" > "$OUTPUT_DIR/${stage_name}.log" 2>&1; then
        local end_time=$(date +%s)
        local duration=$((end_time - start_time))
        echo -e "${GREEN}✅ $stage_name: PASS (${duration}s)${NC}"
        echo "## $stage_name" >> "$REPORT_FILE"
        echo "**Status:** ✅ PASS (${duration}s)" >> "$REPORT_FILE"
        echo "" >> "$REPORT_FILE"
        return 0
    else
        local end_time=$(date +%s)
        local duration=$((end_time - start_time))
        echo -e "${RED}❌ $stage_name: FAIL (${duration}s)${NC}"
        echo "## $stage_name" >> "$REPORT_FILE"
        echo "**Status:** ❌ FAIL (${duration}s)" >> "$REPORT_FILE"
        echo "" >> "$REPORT_FILE"
        echo "\`\`\`" >> "$REPORT_FILE"
        cat "$OUTPUT_DIR/${stage_name}.log" >> "$REPORT_FILE"
        echo "\`\`\`" >> "$REPORT_FILE"
        echo "" >> "$REPORT_FILE"
        cat "$OUTPUT_DIR/${stage_name}.log" >> "$ERRORS_FILE"
        return 1
    fi
}

# Stage 1: Lint
echo ""
echo -e "${YELLOW}Stage 1: Linting${NC}"
if run_stage "Linting" "npm run lint"; then
    LINT_STATUS="PASS"
else
    LINT_STATUS="FAIL"
fi

# Stage 2: Test
echo ""
echo -e "${YELLOW}Stage 2: Testing${NC}"
if run_stage "Testing" "npm test -- --passWithNoTests"; then
    TEST_STATUS="PASS"
else
    TEST_STATUS="FAIL"
fi

# Stage 3: Build
echo ""
echo -e "${YELLOW}Stage 3: Building${NC}"
if run_stage "Building" "npm run build"; then
    BUILD_STATUS="PASS"
else
    BUILD_STATUS="FAIL"
fi

# Generate summary
echo ""
echo -e "${BLUE}=== Pipeline Summary ===${NC}"
echo -e "Linting: $LINT_STATUS"
echo -e "Testing: $TEST_STATUS"
echo -e "Building: $BUILD_STATUS"

# Write stats
cat > "$STATS_FILE" << EOF
{
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "lint": "$LINT_STATUS",
  "test": "$TEST_STATUS",
  "build": "$BUILD_STATUS",
  "overall": "$([ "$LINT_STATUS" = "PASS" ] && [ "$TEST_STATUS" = "PASS" ] && [ "$BUILD_STATUS" = "PASS" ] && echo "PASS" || echo "FAIL")"
}
EOF

# Final summary in report
echo "" >> "$REPORT_FILE"
echo "## Summary" >> "$REPORT_FILE"
echo "| Stage | Status |" >> "$REPORT_FILE"
echo "|-------|--------|" >> "$REPORT_FILE"
echo "| Linting | $LINT_STATUS |" >> "$REPORT_FILE"
echo "| Testing | $TEST_STATUS |" >> "$REPORT_FILE"
echo "| Building | $BUILD_STATUS |" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

if [ "$LINT_STATUS" = "PASS" ] && [ "$TEST_STATUS" = "PASS" ] && [ "$BUILD_STATUS" = "PASS" ]; then
    echo -e "${GREEN}✅ All stages passed!${NC}"
    exit 0
else
    echo -e "${RED}❌ Pipeline failed. See errors above.${NC}"
    exit 1
fi
