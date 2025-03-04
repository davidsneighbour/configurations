#!/usr/bin/env node

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

try {
  const globalDir = execSync('npm root -g').toString().trim();
  const localDir = execSync('npm root').toString().trim();

  if (!__dirname.startsWith(globalDir)) {
    console.warn(`
⚠️ WARNING: This package is intended for global installation! ⚠️
It looks like you've installed it locally in:
  ${localDir}

To install it globally, run:
  npm uninstall ${process.env.npm_package_name} && npm install -g ${process.env.npm_package_name}
  `);
  }
} catch (error) {
  console.error('Error checking installation context:', error);
}
