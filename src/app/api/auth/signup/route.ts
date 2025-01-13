import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { sign } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json()

    // Here you would typically:
    // 1. Validate the input
    // 2. Check if user already exists
    // 3. Hash the password
    // 4. Create user in database
    // This is a simplified example

    // Mock user creation
    const user = {
      id: '1',
      email,
      name
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

    return NextResponse.json({ user }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to create account' },
      { status: 400 }
    )
  }
} 