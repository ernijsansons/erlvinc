// Lucia Auth configuration
import { Lucia } from 'lucia';
import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle';
import type { DB } from './db';
import { sessions, users } from './schema';

export function initializeLucia(db: DB) {
  const adapter = new DrizzleSQLiteAdapter(db, sessions, users);

  return new Lucia(adapter, {
    sessionCookie: {
      attributes: {
        secure: process.env.NODE_ENV === 'production'
      }
    },
    getUserAttributes: (attributes) => {
      return {
        email: attributes.email,
        name: attributes.name,
        role: attributes.role,
      };
    }
  });
}

declare module 'lucia' {
  interface Register {
    Lucia: ReturnType<typeof initializeLucia>;
    DatabaseUserAttributes: {
      email: string;
      name: string | null;
      role: string;
    };
  }
}
