Add `frontmatter.config.js` to your project:

```js
import config from '@davidsneighbour/frontmatter-config';
export default config;
```

And then reference it in your `frontmatter.json` configuration:

``json
{
  "$schema": "<https://frontmatter.codes/frontmatter.schema.json>",
  "frontMatter.config.dynamicFilePath": "[[workspace]]/frontmatter.config.cjs"
}

```

## All configurations

| Configurations | | |
| --- | --- | --- |
| **Build Tools** | | |
| [Babel](packages/babel-config) | [Webpack](packages/webpack-config) | |
| **Testing** | | |
| [Cypress](packages/cypress-config) | [HTML Validate](packages/htmlvalidate-config/) |  |
| **Linters and Formatters** | | |
| [Browserslist](packages/browserslist-config) | [ESLint](packages/eslint-config) | [PostCSS](packages/postcss-config) |
| [Prettier](packages/prettier-config) | [Stylelint](packages/stylelint-config) | |
| **Project Management** | | |
| [Commitlint](packages/commitlint-config) | [Release](packages/release-config) |  |
| **Markdown and Writing** | | |
| [Markdownlint](packages/markdownlint-config) | [Remark Lint](packages/remark-config) |  |
| **Other Tools** | | |
| [Bootstrap](packages/bootstrap-config) | [Tools](packages/tools) |  |
