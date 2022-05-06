"use strict";

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:jsonc/base",
    "plugin:jsonc/prettier",
    "plugin:mocha/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:security/recommended",
    "plugin:security-node/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "import",
    "jsonc",
    "mocha",
    "no-secrets",
    "security",
    "security-node",
    "sonarjs",
    "unicorn",
    "unused-imports",
  ],
  rules: {
    // Code quality
    "unicorn/custom-error-definition": "error",
    "unicorn/import-style": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/prevent-abbreviations": "off",
    "max-lines": ["error", 400],
    "max-lines-per-function": ["error", { max: 50, skipComments: true }],

    // Disable because of false positives with buffers and with MongoDB/Mongoose
    "unicorn/no-array-callback-reference": "off",
    "unicorn/no-array-method-this-argument": "off",
    "unicorn/no-array-push-push": "off",

    // Security
    "security-node/detect-crlf": "off",
    "sonarjs/cognitive-complexity": ["warn", 8],
    "no-new-func": "error",
    "no-secrets/no-secrets": [
      "error",
      {
        ignoreContent: ["http://", "https://"],
        ignoreIdentifiers: ["ALPHABET"],
      },
    ],

    // Imports
    "import/order": [
      "warn",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: [
          ["builtin", "external"],
          ["internal"],
          ["parent", "sibling", "index"],
          ["object"],
          ["type"],
        ],
        "newlines-between": "always",
        warnOnUnassignedImports: true,
      },
    ],
    "unused-imports/no-unused-imports": "error",

    // Unused variables
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],

    // Additional TypeScript checks not enabled by the recommended configuration
    // (TODO: member-ordering)
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/array-type": "warn",
    "@typescript-eslint/consistent-indexed-object-style": "warn",
    "@typescript-eslint/consistent-type-assertions": "warn",
    "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/no-confusing-non-null-assertion": "warn",
    "@typescript-eslint/no-extraneous-class": "warn",
    "@typescript-eslint/no-implicit-any-catch": "warn",
    "@typescript-eslint/no-invalid-void-type": "warn",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-literal-enum-member": "warn",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/sort-type-union-intersection-members": "warn",
    "@typescript-eslint/unified-signatures": "warn",

    // All of the following checks require type information, and can slow down your editor
    // (TODO: naming-convention)
    // "@typescript-eslint/no-base-to-string": "warn",
    // "@typescript-eslint/no-confusing-void-expression": "warn",
    // "@typescript-eslint/no-unnecessary-qualifier": "warn",
    // "@typescript-eslint/non-nullable-type-assertion-style": "warn",
    // "@typescript-eslint/prefer-includes": "warn",
    // "@typescript-eslint/prefer-nullish-coalescing": "warn",
    // "@typescript-eslint/prefer-reduce-type-parameter": "warn",
    // "@typescript-eslint/prefer-string-starts-ends-with": "error",
    // "@typescript-eslint/promise-function-async": "error",
    // "@typescript-eslint/require-array-sort-compare": "warn",

    // Additional mocha warnings
    "mocha/no-skipped-tests": process.env.CI ? "error" : "off",
    "mocha/no-exclusive-tests": process.env.CI ? "error" : "off",
    "mocha/no-mocha-arrows": "warn",
    "mocha/no-setup-in-describe": "warn",
    "mocha/max-top-level-suites": "warn",
  },
  settings: {
    // According to https://github.com/alexgorbatchev/eslint-import-resolver-typescript
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
