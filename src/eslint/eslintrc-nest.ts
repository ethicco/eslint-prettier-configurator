import eslintPluginJest from 'eslint-plugin-jest';
import jestExtended from 'eslint-plugin-jest-extended';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

import baseConfig from './eslintrc-base';

export default defineConfig({
  files: ['**/*.ts'],
  extends: [
    baseConfig,
    eslintPluginJest.configs['flat/recommended'],
    jestExtended.configs['flat/all'],
  ],
  languageOptions: {
    globals: { ...globals.jest },
  },
  rules: {
    'jest/no-conditional-expect': 0,
    'no-undef': 0,
  },
});
