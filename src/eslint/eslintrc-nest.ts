import eslint from '@eslint/js';
import sonarjs from 'eslint-plugin-sonarjs';
import eslintPluginJest from 'eslint-plugin-jest';
import jestExtended from 'eslint-plugin-jest-extended';
import { globalIgnores } from 'eslint/config';
import json from '@eslint/json';
import globals from 'globals';
import tseslint, { ConfigArray } from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { baseConfig } from './eslintrc-base';

export default ({
  project,
  tsconfigRootDir,
  ignorePatterns = [],
}: {
  project?: string | Array<string>;
  tsconfigRootDir?: string;
  ignorePatterns?: string[];
}): ConfigArray =>
  tseslint.config([
    globalIgnores([
      'dist',
      'node_modules',
      'coverage',
      'build',
      ...ignorePatterns,
    ]),
    {
      files: ['**/*.ts'],
      extends: [
        eslint.configs.recommended,
        tseslint.configs.recommended,
        eslintPluginJest.configs['flat/recommended'],
        jestExtended.configs['flat/all'],
        importPlugin.flatConfigs.recommended,
        eslintConfigPrettier,
        eslintPluginPrettierRecommended,
      ],
      languageOptions: {
        globals: { ...globals.jest, ...globals.node, ...globals.es2015 },
        parserOptions: {
          ecmaVersion: 2023,
          sourceType: 'module',
          project,
          tsconfigRootDir,
        },
      },
      plugins: { sonarjs },
      rules: {
        ...baseConfig.rules,
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
  ]);
