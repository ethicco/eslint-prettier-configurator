import eslintPluginJest from 'eslint-plugin-jest';
import jestExtended from 'eslint-plugin-jest-extended';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

import baseConfig from './eslintrc-base';

export default defineConfig({
  files: ['**/*.ts', '**/*.tsx'],
  extends: [
    baseConfig,
    eslintPluginJest.configs['flat/recommended'],
    jestExtended.configs['flat/all'],
    react.configs.flat['recommended'],
  ],
  languageOptions: {
    globals: { ...globals.jest, ...globals.browser },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: { 'jsx-a11y': jsxA11y, react, 'react-hooks': reactHooks },
  rules: {
    'jest/no-conditional-expect': 0,
    'no-undef': 0,
    'react/jsx-uses-react': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-no-script-url': 'warn',
    'react/no-children-prop': 'warn',
    'react/no-unstable-nested-components': 'warn',
    'react/jsx-fragments': 'warn',
    'react/jsx-no-leaked-render': 'off',
    'react/jsx-no-useless-fragment': 'warn',
    'react/no-typos': 'warn',
    'react/self-closing-comp': 'warn',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
});
