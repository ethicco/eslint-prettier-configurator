import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintPluginJest from 'eslint-plugin-jest';
import jestExtended from 'eslint-plugin-jest-extended';
import baseConfig from './eslintrc-base';

module.exports = tseslint.config({
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
    '@typescript-eslint/no-empty-function': 'off',
    'jest/no-conditional-expect': 0,
    'no-undef': 0,
  },
});
