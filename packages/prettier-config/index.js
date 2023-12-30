const fs = require("fs");

const tailwindPath = "./tailwind.config.js";

// https://prettier.io/docs/en/options.html
let config = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
  quoteProps: "as-needed",
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: "always",
  endOfLine: "lf",
  goTemplateBracketSpacing: true,
  overrides: [
    {
      "files": ["*.html"],
      "options": {
        "parser": "go-template",
        "goTemplateBracketSpacing": true,
        "bracketSameLine": true
      }
    },
    {
      "files": ["*.js", "*.ts"],
      "options": {
        "useTabs": true,
        "singleQuote": true
      }
    },
  ],
  plugins: [
    "prettier-plugin-go-template"
  ],
};

try {
  if (fs.existsSync(path)) {
    config = {
      ...config,
      tailwindConfig: tailwindPath,
    };
  }
} catch {
  // console.log(error);
}
module.exports = config;
