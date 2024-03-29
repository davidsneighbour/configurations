## Add `@davidsneighbour/prettier-config` to your project

Install the plugin:

```bash
npm install --save-dev @davidsneighbour/prettier-config
```

There are several ways to add a configuration, but the following are the config options I advise to use `@davidsneighbour/prettier-config` without or with overrides.

Add a key to your `package.json` file:

```json
{
  "prettier": "@davidsneighbour/prettier-config"
}
```

or create a `.prettierrc.mjs` file and export an object that overrides settings:

```js
import prettierConfig from "@davidsneighbour/prettier-config";
export default {
  ...prettierConfig,
  // Add your overrides here.
};
```

## Use with TailwindCSS

This configuration implements [Tailwind's Prettier Plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss). To activate it either have a `tailwind.config.js` in your project root or override the prettier configuration at `tailwindConfig` with the proper path.

```js
const defaultConfiguration = require("@davidsneighbour/prettier-config");
const localConfiguration = {
  tailwindConfig: "new path to your config",
};
const configuration = {
  ...defaultConfiguration,
  ...localConfiguration,
};
module.exports = configuration;
```

## More information

* [More information about available Prettier configuration options](https://prettier.io/docs/en/options.html).
