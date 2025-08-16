import eslint from '@eslint/js';
import json from '@eslint/json';
import tseslint, { ConfigArray } from 'typescript-eslint';
import eslintPluginJest from 'eslint-plugin-jest';
import jestExtended from 'eslint-plugin-jest-extended';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import sonarjs from 'eslint-plugin-sonarjs';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { baseConfig } from './eslintrc-base';
import { Linter } from 'eslint';

export default ({
  project,
  tsconfigRootDir,
  reactVersion,
  ignorePatterns = [],
  customTsRules = {},
  customJsonRules = {},
}: {
  project?: string | Array<string>;
  tsconfigRootDir?: string;
  reactVersion: string;
  ignorePatterns?: string[];
  customTsRules?: Partial<Linter.RulesRecord>;
  customJsonRules?: Partial<Linter.RulesRecord>;
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
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        eslint.configs.recommended,
        tseslint.configs.recommended,
        eslintPluginJest.configs['flat/recommended'],
        jestExtended.configs['flat/all'],
        react.configs.flat['recommended'],
        reactHooks.configs['recommended-latest'],
        reactRefresh.configs.vite,
        importPlugin.flatConfigs.recommended,
        eslintConfigPrettier,
        eslintPluginPrettierRecommended,
      ],
      languageOptions: {
        globals: {
          ...globals.jest,
          ...globals.node,
          ...globals.es2020,
          ...globals.browser,
        },
        parserOptions: {
          ecmaVersion: 2023,
          project,
          tsconfigRootDir,
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
        ...baseConfig.rules,
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
        ...customTsRules,
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
        react: {
          version: reactVersion,
        },
      },
    },
    {
      files: ['**/*.json'],
      ignores: ['package-lock.json'],
      language: 'json/json',
      ...json.configs.recommended,
      rules: {
        ...customJsonRules,
      },
    },
  ]);
