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
  git pull
  git update
  if [ -f package.json ]; then
    npm install
  fi
  cd ..
done
