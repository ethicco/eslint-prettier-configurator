import eslint from '@eslint/js';
import json from '@eslint/json';
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
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      sonarjs,
      importPlugin,
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      '@typescript-eslint/prefer-find': 'error',
      '@typescript-eslint/prefer-for-of': 'warn',
      '@typescript-eslint/prefer-includes': 'warn',
      '@typescript-eslint/no-implied-eval': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/require-await': 'warn',
      '@typescript-eslint/return-await': ['warn', 'in-try-catch'],
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        {
          allowExpressions: true,
        },
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'warn',
        {
          overrides: {
            accessors: 'no-public',
            constructors: 'no-public',
            methods: 'no-public',
            properties: 'no-public',
            parameterProperties: 'no-public',
          },
        },
      ],
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
        '@typescript-eslint/parser': ['.ts', '.tsx'],
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
