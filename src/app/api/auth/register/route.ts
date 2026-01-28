// API route for user registration
import { NextRequest, NextResponse } from 'next/server';
import { hashPassword } from '@/lib/password';
import { generateIdFromEntropySize } from 'lucia';
import { getDB } from '@/lib/db';
import { initializeLucia } from '@/lib/auth';
import { users } from '@/lib/schema';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { email: string; password: string; name?: string };
    const { email, password, name } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters' },
        { status: 400 }
      );
    }

    // Get database from Cloudflare binding
    const db = getDB();
    const lucia = initializeLucia(db);

    // Hash password
    const passwordHash = await hashPassword(password);

    // Create user
    const userId = generateIdFromEntropySize(10);

    await db.insert(users).values({
      id: userId,
      email: email.toLowerCase(),
      passwordHash,
      name: name || null,
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Create session
    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);

    return NextResponse.json(
      { success: true, userId },
      {
        status: 201,
        headers: {
          'Set-Cookie': sessionCookie.serialize()
        }
      }
    );
  } catch (error: any) {
    console.error('Registration error:', error);

    if (error.message?.includes('UNIQUE constraint failed')) {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    );
  }
}
