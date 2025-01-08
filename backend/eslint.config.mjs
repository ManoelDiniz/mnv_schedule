import prettierPlugin from "eslint-plugin-prettier";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";


export default [
  {
    ignores: ["node_modules", "dist/**", "src/database/migrations"], 
  },
  {
    files: ["**/*.ts", "**/*.js"], 
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-console": ["error", { allow: ["error"] }],
      "no-unused-vars": ["off"],
      "eol-last": ["warn", "always"],
      "@typescript-eslint/no-explicit-any": "error",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
];
