# Symbux-eslint-prettier-configurator

![NPM License](https://img.shields.io/npm/l/symbux-eslint-prettier-config)
![GitHub package.json version](https://img.shields.io/github/package-json/v/ethicco/eslint-prettier-configurator)


## Configurator rules for Nest JS.

### Install

```npn i -D symbux-eslint-prettier-config/nest```

### Use

#### Prepare

Removed all packages eslint and prettier

#### Eslint

```ts
import baseConfig from "symbux-eslint-prettier-config/eslint-nest";

export default [
  ...baseConfig,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    ignores: [
      'eslint.config.ts'  
    ],
  }
];
```

#### Prettier

```cjs
const baseConfig = require('symbux-eslint-prettier-config/prettierrc-nest');

exports.module = {
  ...baseConfig,
};
```
