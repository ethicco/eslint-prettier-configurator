import husky from 'husky';

if (process.env.NODE_ENV === 'production' || process.env.CI === 'true') {
  process.exit(0);
}

// eslint-disable-next-line no-console
console.log(husky());
