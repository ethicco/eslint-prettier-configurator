declare global {
  type AnyObject = Record<string, unknown>;

  type DeepPartial<T> = T extends object
    ? {
        [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'production' | 'development' | 'testing';
      CI: 'true' | 'false';
    }
  }
}

export {};
