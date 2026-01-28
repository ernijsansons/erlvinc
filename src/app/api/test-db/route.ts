import { NextRequest, NextResponse } from 'next/server';
import { getDB } from '@/lib/db';
import { users } from '@/lib/schema';
import { eq } from 'drizzle-orm';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const db = getDB();

    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, 'test@erlvinc.com'))
      .limit(1);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        hasPassword: !!user.passwordHash
      }
    });
  } catch (error: any) {
    console.error('Database test error:', error);
    return NextResponse.json(
      { error: 'Database query failed', details: error.message },
      { status: 500 }
    );
  }
}
