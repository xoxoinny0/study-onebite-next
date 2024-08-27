declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NEXT_PUBLIC_SERVER_URL: string;
      readonly DATABASE_URL: string;
    }
  }
}

export {};
