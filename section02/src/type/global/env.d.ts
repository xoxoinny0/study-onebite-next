declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly SERVER_URL: string;
      readonly DATABASE_URL: string;
    }
  }
}

export {};
