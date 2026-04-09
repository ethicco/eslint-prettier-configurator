# Symbux-eslint-prettier-configurator

![NPM License](https://img.shields.io/npm/l/symbux-eslint-prettier-config)
![GitHub package.json version](https://img.shields.io/github/package-json/v/ethicco/eslint-prettier-configurator)


## Configurator rules for Nest JS and React JS.

### Install

```
npm i -D symbux-eslint-prettier-config
```
```
yarn add -D symbux-eslint-prettier-config
```
```
pnpm i -D symbux-eslint-prettier-config
```

### Use

only ESM

#### Prepare

Removed all packages eslint and prettier

#### Eslint (NestJS)

```ts
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { defineConfig } from 'eslint/config';
import eslintBaseConfig from 'symbux-eslint-prettier-config/eslint-nest';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = defineConfig(...eslintBaseConfig, {
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.json'],
      tsconfigRootDir: __dirname,
    },
  },
});

export default config;
```

#### Prettier (NestJS)

```ts
import prettierConfig from "symbux-eslint-prettier-config/prettierrc-nest";

export default {
  ...prettierConfig,
};
```
#### Eslint

```ts
import baseConfig from "symbux-eslint-prettier-config/eslint-react";

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { defineConfig } from 'eslint/config';
import eslintBaseConfig from 'symbux-eslint-prettier-config/eslint-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = defineConfig(...eslintBaseConfig, {
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.json'],
      tsconfigRootDir: __dirname,
    },
  },
});
```

#### Prettier

```ts
import prettierConfig from "symbux-eslint-prettier-config/prettierrc-nest";

export default {
  ...prettierConfig,
};
```

CLI commands example:

```
"lint": "eslint . --ext .ts --ignore-pattern 'node_modules/*' --ignore-pattern 'dist/*'"
"format": "prettier --write .",
```
   