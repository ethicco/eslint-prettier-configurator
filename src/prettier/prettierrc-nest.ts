import type { PrettierConfig } from '@trivago/prettier-plugin-sort-imports';

const prettierrc = require('./prettierrc-base');

module.exports = {
  ...prettierrc,
  importOrderParserPlugins: ['typescript', 'decorators-legacy'],
} satisfies Partial<PrettierConfig>;
