import json from '@eslint/json';
import eslintPluginJest from 'eslint-plugin-jest';
import jestExtended from 'eslint-plugin-jest-extended';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
import { type Config, globalIgnores } from 'eslint/config';
import globals from 'globals';
import sonarjs from 'eslint-plugin-sonarjs';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import baseConfig from './eslintrc-base.js';

const reactConfig: Config[] = [
  globalIgnores(['dist', 'node_modules', 'coverage', 'build']),
  ...baseConfig,
  eslintPluginJest.configs['flat/recommended'] as unknown as Config,
  jestExtended.configs['flat/all'] as unknown as Config,
  react.configs.flat['recommended'] as Config,
  reactHooks.configs.flat.recommended as Config,
  reactRefresh.configs.vite as Config,
  importPlugin.flatConfigs.recommended as Config,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
        ...globals.es2020,
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: 2023,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      sonarjs,
      'jsx-a11y': jsxA11y,
      react,
    },
    rules: {
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
      'import/resolver': {
        typescript: {
          project: ['./tsconfig'],
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
  {
    files: ['**/*.json'],
    ignores: ['package-lock.json'],
    language: 'json/json',
    ...json.configs.recommended,
  },
];

export default reactConfig;
