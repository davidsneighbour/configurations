Browserslist configuration as it's used in all @davidsneighbour's projects.

## Configuration

Add as extension to the `.browserslistrc`

```ini
extends @davidsneighbour/browserslist-config
```

Or in the `browserslist` parameter in `package.json`.

```json
{
  "browserslist": ["extends @davidsneighbour/browserslist-config"]
}
```

The default configuration is `baseline widely available` which is a good starting point for most projects. An extended configuration targeting more browsers (those using a rendering engine from one of the widely available browsers) is available too.

```ini
extends @davidsneighbour/browserslist-config/full
```

## Supported browsers

### Widely available

The configurations target the following browsers (status as of 2025-10-01):

| Browser | Version | Release date |
| ------- | ------- | ------------- |
| Chrome | 111 | 2023-03-13 |
| Chrome for Android | 111 | 2023-03-13 |
| Edge | 111 | 2023-03-13 |
| Firefox | 111 | 2023-03-27 |
| Firefox for Android | 111 | 2023-03-27 |
| Safari | 16.4 | 2023-03-27 |
| Safari for iOS | 16.4 | 2023-03-27 |

### Widely available with downstream

This list includes the widely available browsers as well as the listed browsers, that are not part of the main Baseline definition, but are based on the engine from one of the core browsers in "widely listed" (status as of 2025-10-01):

| Browser | Version | Engine | Version | Release date |
| ------- | ------- | ------ | ------- | ------------- |
| Opera | 97 | Blink | 111 | 2023-03-22 |
| Opera Android | 75 | Blink | 112 | 2023-05-17 |
| Samsung Internet | 22.0 | Blink | 111 | 2023-07-14 |
| WebView Android* | 111 | Blink | 111 | 2023-03-01 |
| Yandex Browser Mobile | 23.5 | Blink | 112 | 2023-05-19 |
| UC Browser Mobile | 17.6 | Blink | 123 | 2025-05-15 |
| QQ Browser Mobile | 19.1 | Blink | 121 | 2025-07-08 |
| KaiOS* | 4.0 | Gecko | 123 | 2025-05-01 |
| Facebook for Android | 420 | Blink | 114 | 2023-06-28 |
| Instagram for Android | 288 | Blink | 114 | unknown |

See [the baseline documentation](https://web-platform-dx.github.io/web-features/supported-browsers/) for more details.

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
