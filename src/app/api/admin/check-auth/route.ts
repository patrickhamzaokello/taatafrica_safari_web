import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verify } from 'jsonwebtoken'

export async function GET() {
  try {
    const token = (await cookies()).get('admin-token')?.value

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    verify(token, process.env.JWT_SECRET || 'your-secret-key')

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }
} 