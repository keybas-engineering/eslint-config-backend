# @keybas-engineering/eslint-config-backend

Configuration ESLint pour les services backend de Keybas.

Inclut les plugins suivants :

- `@typescript-eslint/eslint-plugin` avec de nombreuses règles (les règles pouvant ralentir l'éditeur sont désactivées)
- `import` pour gérer l'ordre des imports
- `jsonc` pour lire les fichiers JSON
- `mocha` pour valider les tests Mocha
- `no-secrets` pour valider qu'il n'y ait pas de secrets dans le code
- `security` pour certaines règles de sécurité
- `security-node` pour d'autres règles de sécurité
- `sonarjs` pour la qualité de code
- `unicorn` pour la qualité de code
- `unused-imports` pour nettoyer les imports inutilisés

Cette configuration ne définit ni parseur, ni formateur, qu'il faut installer soi-même.

## Utilisation

### Installation

```sh
npm i -D eslint typescript @keybas-engineering/eslint-config-backend @typescript-eslint/parser
```

### Fichier `.eslintrc`

```json
{
  "root": true,
  "env": {
    "browser": false,
    "node": true,
    "es2021": true
  },
  "extends": ["@keybas-engineering/eslint-config-backend"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "project": ["./tsconfig.json"]
  }
}
```

### Scripts npm

Le script `lint:ci` est un example d'utilisation avec un formateur (ici, après avoir installé `eslint-formatter-gitlab` comme dépendance dev).

```json
{
  "lint": "eslint --ignore-path .gitignore --ext .ts,.json .",
  "lint:ci": "eslint --format gitlab --ignore-path .gitignore --ext .ts,.json src"
}
```
