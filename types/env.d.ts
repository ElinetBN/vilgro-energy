// types/env.d.ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      LINKEDIN_CLIENT_ID: string;
      LINKEDIN_CLIENT_SECRET: string;
      LINKEDIN_ACCESS_TOKEN: string;
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
}

export {};