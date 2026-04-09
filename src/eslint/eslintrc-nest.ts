import sonarjs from 'eslint-plugin-sonarjs';
import eslintPluginJest from 'eslint-plugin-jest';
import jestExtended from 'eslint-plugin-jest-extended';
import { type Config, globalIgnores } from 'eslint/config';
import json from '@eslint/json';
import globals from 'globals';
import * as importPlugin from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import baseConfig from './eslintrc-base.js';

const nestConfig: Config[] = [
  globalIgnores(['dist', 'node_modules', 'coverage', 'build']),
  ...baseConfig,
  eslintPluginJest.configs['flat/recommended'] as unknown as Config,
  jestExtended.configs['flat/all'] as unknown as Config,
  importPlugin.flatConfigs.recommended as Config,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      globals: { ...globals.jest, ...globals.node, ...globals.es2015 },
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
      },
    },
    plugins: { sonarjs },
    rules: {
      'jest/no-conditional-expect': 0,
      'no-undef': 0,
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
    language: 'json/json',
    rules: {
      'json/no-duplicate-keys': 'error',
    },
    plugins: {
      json,
    },
  },
];

export default nestConfig;
