import eslint from '@eslint/js';
import json from '@eslint/json';
import tseslintParser from '@typescript-eslint/typescript-estree';
import type { Linter } from 'eslint';
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
    files: ['**/*.ts'],
    languageOptions: {
      globals: { ...globals.node },
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      sonarjs,
      importPlugin,
    },
    ignores: [
      'node_modules',
      'dist',
      'public',
      'build',
      'coverage',
      'static',
      'tmp',
      '*.log',
      '.idea',
      '.vscode',
      '.DS_Store',
      '.npm',
      '.next',
      '.eslintrc.js',
      '.prettierrc.json',
      '.eslint.config.ts',
    ],
    rules: {
      'no-case-declarations': 'warn',
      'no-fallthrough': 'warn',
      eqeqeq: ['error', 'always'],
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'no-use-before-define': 'off',
      'no-restricted-imports': ['warn', { patterns: ['../../../*', '!@/*'] }],
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: '*', next: ['return', 'throw'] },
      ],
    },
  },
  {
    files: ['**/*.json'],
    ignores: ['package-lock.json', '.prettierrc.json'],
    language: 'json/json',
    ...json.configs.recommended,
    rules: {
      'no-irregular-whitespace': 'off',
    },
  },
] satisfies Linter.Config[];
