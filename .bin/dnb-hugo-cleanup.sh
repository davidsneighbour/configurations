#!/usr/bin/env bash

REQUIRED_TOOLS=(
  git
  rm
  shopt
)

# check for tools
for tool in "${REQUIRED_TOOLS[@]}"; do
  if ! command -v "${tool}" >/dev/null; then
    echo "Tool ${tool} is required. Exiting"; exit 1
  fi
done

shopt -s globstar
rm -rf **/node_modules
rm -rf **/package-lock.json
rm -rf **/hugo.log

# ending
echo "Completed in ${SECONDS}s"

