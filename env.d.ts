// TypeScript declarations for Cloudflare D1 bindings

declare module '@cloudflare/next-on-pages' {
  interface CloudflareEnv {
    DB: D1Database;
  }
}

export {};
