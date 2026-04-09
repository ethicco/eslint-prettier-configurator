import type { PrettierConfig } from '@trivago/prettier-plugin-sort-imports';
import prettierrc from './prettierrc-base.js';

export default {
  ...prettierrc,
} satisfies Partial<PrettierConfig>;
