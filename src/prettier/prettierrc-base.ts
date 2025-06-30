import type { PrettierConfig } from '@trivago/prettier-plugin-sort-imports';

export default {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  printWidth: 100,
  arrowParens: 'always',
  endOfLine: 'lf',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '<THIRD_PARTY_MODULES>', // Импорты сторонних библиотек,
    '^@/\\(?pages\\)?/(.*)$', // Импорты из @/pages
    '^@/\\(?page-modules\\)?/(.*)$', // Импорты из @/pages-modules
    '^@/\\(?modules\\)?/(.*)$', // Импорты из @/modules
    '^@/\\(?api\\)?/(.*)$', // Импорты из @/api
    '^@/\\(?providers\\)?/(.*)$', // Импорты из @/providers
    '^@/\\(?layouts\\)?/(.*)$', // Импорты из @/layouts
    '^@/\\(?hooks\\)?/(.*)$', // Импорты из @/hooks
    '^@/\\(?contexts\\)?/(.*)$', // Импорты из @/contexts
    '^@/\\(?hoc\\)?/(.*)$', // Импорты из @/hoc
    '^@/\\(?core\\)?/(.*)$', // Импорты из @/core в рамках которого есть features и model
    '^@/\\(?components\\)?/(.*)$', // Импорты из @/components
    '^@/\\(?shared\\)?/(.*)$', // Импорты из @/shared
    '^@/\\(?assets\\)?/(.*)$', // Импорты из @/assets
    '^@/\\(?helpers\\)?/(.*)$', // Импорты из @/helpers
    '^@/\\(?public\\)?/(.*)$', // Импорты из @/public
    '^@/\\(?libs\\)?/(.*)$', // Импорты из @/libs
    '^@/\\(?adapters\\)?/(.*)$', // Импорты из @/adapters
    '^@/\\(?common\\)?/(.*)$', // Импорты из @/common
    '^@/\\(?db\\)?/(.*)$', // Импорты из @/db

    '^(\\.\\.?/(?!.*\\.(css|scss|sass|less)$).*)$', // Локальные импорты (../, ./ и т. д.), исключая стили

    '^(?!@/|\\.\\/)(.*).(css|scss|sass|less)$', // Сторонние стили, не начинающиеся с @/ или ./ и имеют расширение стилей
    '^@/\\(?styles\\)?/(.*)$', // Стили проекта из директории @/styles
    '^@/(.*).(css|scss|sass|less)$', // Стили из проекта с префиксом @/ и расширением стилей
    '^./(.*).(css|scss|sass|less)$', // Локальные стили с ./ и расширением стилей (например, ./styles.module.css)
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
} satisfies PrettierConfig;
