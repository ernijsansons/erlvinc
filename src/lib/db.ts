// Database client configuration
import { getRequestContext } from '@cloudflare/next-on-pages';
import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';

export function getDB() {
  const { env } = getRequestContext();
  return drizzle((env as any).DB, { schema });
}

export type DB = ReturnType<typeof getDB>;
