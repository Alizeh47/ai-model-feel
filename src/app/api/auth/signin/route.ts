import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { sign } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Here you would typically:
    // 1. Validate the email and password
    // 2. Check against your database
    // 3. Hash password comparison
    // This is a simplified example

    // Mock user for demonstration
    const user = {
      id: '1',
      email,
      name: 'John Doe'
    }

    // Create JWT token
    const token = sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' })

    // Set cookie
    const cookieStore = await cookies()
    cookieStore.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 86400 // 1 day
    })

    return NextResponse.json({ user }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: 'Authentication failed' },
      { status: 401 }
    )
  }
} 