import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth-token')?.value

    if (!token) {
      return NextResponse.json({ user: null }, { status: 200 })
    }

    // Verify token
    const decoded = verify(token, JWT_SECRET) as { userId: string }

    // Here you would typically:
    // 1. Get user from database using decoded.userId
    // This is a simplified example
    const user = {
      id: decoded.userId,
      email: 'john@example.com',
      name: 'John Doe'
    }

    return NextResponse.json({ user }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ user: null }, { status: 200 })
  }
} 