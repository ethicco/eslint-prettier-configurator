# eslint-prettier-configurator

## Configurator rules for Nest JS.

### Install

```npn i -D symbux-eslint-prettier-config/nest```

### Use

#### Prepare

Removed all packages eslint and prettier

#### Eslint

```ts
import baseConfig from 'symbux-eslint-prettier-config/eslint-nest';

export default baseConfig;
```

#### Prettier

```ts
const baseConfig = require('symbux-eslint-prettier-config/prettierrc-nest');

exports.module = {
  ...baseConfig,
};
```
