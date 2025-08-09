import { Linter } from 'eslint';

export const baseConfig: Linter.Config = {
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
};
