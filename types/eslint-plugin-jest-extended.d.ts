declare module 'eslint-plugin-jest-extended' {
  import type { Linter } from 'eslint';

  const configs: {
    'flat/all': Linter.RulesRecord;
  };
}
