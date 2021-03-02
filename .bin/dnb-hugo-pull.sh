#!/usr/bin/env bash

REQUIRED_TOOLS=(
  git
)

# check for tools
for tool in "${REQUIRED_TOOLS[@]}"; do
  if ! command -v "${tool}" >/dev/null; then
    echo "Tool ${tool} is required. Exiting"; exit 1
  fi
done

# iterate over subdirectories
for dir in *
do
  cd "${dir}" || return
  if [ -d .git ]; then
    touch .autostash
    git stash
    git pull
    git stash apply
    rm .autostash
  fi
  cd ..
done

# ending
echo "Completed in ${SECONDS}s"
