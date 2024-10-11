// @ts-check

import defaultConfig from './configs/default.js'
import eslint from '@eslint/js'
import jsonConfig from './configs/json.js'
import markdownConfig from './configs/markdown.js'
import pluginSecurity from 'eslint-plugin-security'
import stylisticJs from '@stylistic/eslint-plugin'

export default [
  eslint.configs.all,
  pluginSecurity.configs.recommended,
  stylisticJs.configs.customize({
    indent: 2,
    jsx: true,
    quotes: 'single',
    semi: false,
  }),
  {
    ignores: ['**/node_modules/*', '**/vendor/*', '**/.git/*'],
    name: 'dnb/ignores',
  },
  defaultConfig,
  ...markdownConfig,
  ...jsonConfig,
]
