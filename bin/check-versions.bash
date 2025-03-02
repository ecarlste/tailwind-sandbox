#!/usr/bin/env bash

set -e

# Extract versions from .tool-versions
TOOL_VERSIONS_FILE=".tool-versions"
NODE_VERSION_SET=$(grep "^nodejs" "$TOOL_VERSIONS_FILE" | awk '{print $2}')
PNPM_VERSION_SET=$(grep "^pnpm" "$TOOL_VERSIONS_FILE" | awk '{print $2}')

# Fetch latest LTS Node.js version
LATEST_LTS=$( \
  curl -s https://nodejs.org/dist/index.json | \
  jq -r '[.[] | select(.lts != false)] | max_by(.version | sub("v"; "") | split(".") | map(tonumber)) | .version' | \
  sed 's/^v//' \
)

# Extract pnpm version from package.json
PNPM_VERSION_PKG=$(jq -r '.engines.pnpm' package.json)

# Check versions
ERRORS=()

if [[ "$NODE_VERSION_SET" != "$LATEST_LTS" ]]; then
  ERRORS+=(".tool-versions specifies Node.js $NODE_VERSION_SET, but the latest LTS is $LATEST_LTS.")
fi

if [[ "$PNPM_VERSION_SET" != "$PNPM_VERSION_PKG" ]]; then
  ERRORS+=(".tool-versions specifies pnpm $PNPM_VERSION_SET, but package.json engines specifies $PNPM_VERSION_PKG.")
fi

if [[ ${#ERRORS[@]} -gt 0 ]]; then
  echo "Error(s) found:"
  for ERROR in "${ERRORS[@]}"; do
    echo "- ${ERROR}"
  done
  exit 1
fi

echo "Node.js and pnpm versions match the expected versions."
