import type { PrettierConfig } from '@trivago/prettier-plugin-sort-imports';

import prettierrc from './prettierrc-base';

module.exports = {
  ...prettierrc,
  importOrderParserPlugins: ['typescript', 'decorators-legacy'],
} satisfies Partial<PrettierConfig>;
