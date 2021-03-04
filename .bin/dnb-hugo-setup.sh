#!/usr/bin/env bash

arrayName=(
  "browserslist-config"
  "commitlint-config"
  "eslint-config"
  "remark-config"
  "standard-version-config"
  "stylelint-config"
  "textlint-config"
)

for i in "${arrayName[@]}"; do
  [ ! -d "$1" ] && git clone git@github.com:dnb-hugo/"${1}".git
  cd "$i" || return
  if [ -d .git ]; then
    touch .autostash
    git stash
    git pull
    git update
    git stash apply
    rm .autostash
  fi
  if [ -f package.json ]; then
    npm-check-updates -u
    fixpack
    npm install
  fi
  cd ..
done

# ending
echo "Completed in ${SECONDS}s"
