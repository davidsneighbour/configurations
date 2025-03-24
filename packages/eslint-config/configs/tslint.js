import { defineConfig } from "eslint/config";
import tsParser from "@typescript-eslint/parser";


export default defineConfig([
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      "class-methods-use-this": "error",
      "default-param-last": "error",
      "no-useless-constructor": "error",
    },
  },
]);
