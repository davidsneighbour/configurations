Add `eslint.config.js` to your project:

```js
import eslintConfig from "@davidsneighbour/eslint-config";
export default eslintConfig;
```

Or if you want to override some rules, you can do it like this:

```js
import eslintConfig from "@davidsneighbour/eslint-config";
export default [
  ...eslintConfig,
  {
    rules: {
      // rules that override those in the preset
    }
  }
];
```

Write better code.

## All configurations
### Build Tools
- [Babel](packages/babel-config)
- [Webpack](packages/webpack-config)
### Testing
- [Cypress](packages/cypress-config)
- [HTML Validate](packages/htmlvalidate-config/)
### Linters and Formatters
- [Browserslist](packages/browserslist-config)
- [ESLint](packages/eslint-config)
- [PostCSS](packages/postcss-config)
- [Prettier](packages/prettier-config)
- [Stylelint](packages/stylelint-config)
### Project Management
- [Commitlint](packages/commitlint-config)
- [Release](packages/release-config)
### Markdown and Writing
- [Markdownlint](packages/markdownlint-config)
- [Remark Lint](packages/remark-config)
### Other Tools
- [Bootstrap](packages/bootstrap-config)
- [Tools](packages/tools)
