import eslint from '@eslint/js';
import json from '@eslint/json';
import tseslintParser from '@typescript-eslint/typescript-estree';
import { Linter } from 'eslint';
import love from 'eslint-config-love';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import sonarjs from 'eslint-plugin-sonarjs';
import globals from 'globals';

export default [
  eslint.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    ...love,
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: { ...globals.node },
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: { sonarjs, importPlugin },
    rules: {
      'no-case-declarations': 'warn',
      'no-fallthrough': 'warn',
      eqeqeq: ['error', 'always'],
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'no-restricted-imports': ['warn', { patterns: ['../../../*', '!@/*'] }],
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: '*', next: ['return', 'throw'] },
      ],
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/typescript-estree': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    ignores: [
      'node_modules',
      'dist',
      'build',
      'coverage',
      'public',
      'static',
      'tmp',
      '*.log',
      '.idea',
      '.vscode',
      '.DS_Store',
      '.npm',
      '.next',
      '.eslintrc',
      '.prettierrc',
    ],
  },
  {
    files: ['**/*.json'],
    ignores: ['package-lock.json'],
    language: 'json/json',
    ...json.configs.recommended,
  },
] satisfies Linter.Config[];
