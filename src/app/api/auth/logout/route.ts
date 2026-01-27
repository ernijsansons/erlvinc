// API route for user logout
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getDB } from '@/lib/db';
import { initializeLucia } from '@/lib/auth';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    // Get database from Cloudflare binding
    const env = (request as any).env;
    const db = getDB(env);
    const lucia = initializeLucia(db);

    // Get session cookie
    const cookieStore = await cookies();
    const sessionId = cookieStore.get(lucia.sessionCookieName)?.value;

    if (sessionId) {
      // Invalidate session
      await lucia.invalidateSession(sessionId);
    }

    // Create blank session cookie
    const sessionCookie = lucia.createBlankSessionCookie();

    return NextResponse.json(
      { success: true },
      {
        status: 200,
        headers: {
          'Set-Cookie': sessionCookie.serialize()
        }
      }
    );
  } catch (error: any) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Logout failed' },
      { status: 500 }
    );
  }
}
