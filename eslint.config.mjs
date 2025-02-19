import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021, // ✅ Adiciona suporte ao ES6+
      sourceType: "commonjs", // ✅ Se usar "import/export"
      globals: globals.node,
    },
    env: {
      node: true,
      es6: true,
    },
  },
  pluginJs.configs.recommended,
];
