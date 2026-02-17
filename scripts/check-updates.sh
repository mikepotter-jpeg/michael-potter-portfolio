#!/bin/bash

# Package Update Checker & Manager
# Checks for outdated packages and generates a summary report

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

# Colors for output
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
BOLD='\033[1m'
NC='\033[0m' # No Color

# Get timestamp
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

echo -e "${BLUE}${BOLD}════════════════════════════════════════════${NC}"
echo -e "${BLUE}${BOLD}   Package Update Summary${NC}"
echo -e "${BLUE}${BOLD}════════════════════════════════════════════${NC}"
echo ""
echo "Project: $(basename "$PROJECT_ROOT")"
echo "Checked: $TIMESTAMP"
echo ""

# Check for outdated packages
OUTDATED_OUTPUT=$(npm outdated 2>&1 || true)
MAJOR_UPDATES=0
MINOR_UPDATES=0
PATCH_UPDATES=0
TOTAL_UPDATES=0

# Parse outdated output (skip header)
echo -e "${BOLD}Available Updates:${NC}"
echo ""

if echo "$OUTDATED_OUTPUT" | grep -q "Package"; then
    # Extract lines after header
    echo "$OUTDATED_OUTPUT" | tail -n +2 | while IFS= read -r line; do
        if [ -n "$line" ]; then
            # Parse columns: Package Current Wanted Latest Location Depended
            PACKAGE=$(echo "$line" | awk '{print $1}')
            CURRENT=$(echo "$line" | awk '{print $2}')
            WANTED=$(echo "$line" | awk '{print $3}')
            LATEST=$(echo "$line" | awk '{print $4}')

            # Determine update type by comparing major versions
            CURRENT_MAJOR=$(echo "$CURRENT" | cut -d'.' -f1)
            LATEST_MAJOR=$(echo "$LATEST" | cut -d'.' -f1)

            if [ "$CURRENT_MAJOR" != "$LATEST_MAJOR" ]; then
                STATUS="MAJOR"
                COLOR="$RED"
            else
                CURRENT_MINOR=$(echo "$CURRENT" | cut -d'.' -f2)
                LATEST_MINOR=$(echo "$LATEST" | cut -d'.' -f2)
                if [ "$CURRENT_MINOR" != "$LATEST_MINOR" ]; then
                    STATUS="MINOR"
                    COLOR="$YELLOW"
                else
                    STATUS="PATCH"
                    COLOR="$GREEN"
                fi
            fi

            printf "  ${COLOR}%-35s${NC} | Current: %-12s | Latest: %-12s\n" \
                "$PACKAGE" "$CURRENT" "$LATEST"
        fi
    done
else
    echo "  ✓ All packages are up to date!"
fi

# Re-parse to count updates
MAJOR=$(echo "$OUTDATED_OUTPUT" | tail -n +2 | awk '{print $1, $2, $4}' | while read pkg cur lat; do
    if [ -n "$pkg" ]; then
        cur_maj=$(echo "$cur" | cut -d'.' -f1)
        lat_maj=$(echo "$lat" | cut -d'.' -f1)
        [ "$cur_maj" != "$lat_maj" ] && echo "$pkg"
    fi
done | wc -l)

MINOR=$(echo "$OUTDATED_OUTPUT" | tail -n +2 | awk '{print $1, $2, $4}' | while read pkg cur lat; do
    if [ -n "$pkg" ]; then
        cur_maj=$(echo "$cur" | cut -d'.' -f1)
        lat_maj=$(echo "$lat" | cut -d'.' -f1)
        if [ "$cur_maj" = "$lat_maj" ]; then
            cur_min=$(echo "$cur" | cut -d'.' -f2)
            lat_min=$(echo "$lat" | cut -d'.' -f2)
            [ "$cur_min" != "$lat_min" ] && echo "$pkg"
        fi
    fi
done | wc -l)

PATCH=$(echo "$OUTDATED_OUTPUT" | tail -n +2 | awk '{print $1, $2, $3, $4}' | while read pkg cur want lat; do
    if [ -n "$pkg" ]; then
        cur_maj=$(echo "$cur" | cut -d'.' -f1)
        lat_maj=$(echo "$lat" | cut -d'.' -f1)
        if [ "$cur_maj" = "$lat_maj" ]; then
            cur_min=$(echo "$cur" | cut -d'.' -f2)
            lat_min=$(echo "$lat" | cut -d'.' -f2)
            if [ "$cur_min" = "$lat_min" ]; then
                echo "$pkg"
            fi
        fi
    fi
done | wc -l)

TOTAL=$((MAJOR + MINOR + PATCH))

echo ""
echo -e "${BOLD}Update Summary:${NC}"
echo -e "  ${RED}Major Updates: $MAJOR${NC}"
echo -e "  ${YELLOW}Minor Updates: $MINOR${NC}"
echo -e "  ${GREEN}Patch Updates: $PATCH${NC}"
echo -e "  ${BOLD}Total Updates Available: $TOTAL${NC}"
echo ""

# Suggest next steps
if [ "$TOTAL" -gt 0 ]; then
    echo -e "${BOLD}${YELLOW}Next Steps:${NC}"
    echo "  1. Review changes: ${BLUE}npm outdated${NC}"
    echo "  2. Update safely: ${BLUE}npm update${NC}"
    echo "  3. Test changes: ${BLUE}npm run test${NC}"
    echo ""
fi

echo -e "${BLUE}${BOLD}════════════════════════════════════════════${NC}"
echo ""
