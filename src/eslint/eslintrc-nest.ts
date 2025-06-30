import globals from 'globals';
import eslintPluginJest from 'eslint-plugin-jest';
import jestExtended from 'eslint-plugin-jest-extended';
import baseConfig from './eslintrc-base';
import { defineConfig } from 'eslint/config';

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
