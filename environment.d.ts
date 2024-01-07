// This file is needed to support autocomplete for process.env
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // convex public url
      NEXT_PUBLIC_CONVEX_URL: string;

      // clerk auth keys
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
    }
  }
}
