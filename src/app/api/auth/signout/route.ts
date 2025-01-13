import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  try {
    // Delete the auth cookie
    const cookieStore = await cookies()
    cookieStore.delete('auth-token')
    
    return NextResponse.json({ message: 'Signed out successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to sign out' },
      { status: 500 }
    )
  }
} 