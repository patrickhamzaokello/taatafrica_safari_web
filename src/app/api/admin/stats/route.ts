import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verify } from 'jsonwebtoken'
import { cookies } from 'next/headers'

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

    const [totalContacts, totalSubscribers, recentContacts, recentSubscribers] =
      await Promise.all([
        prisma.contactMessage.count(),
        prisma.newsletterSubscription.count({
          where: { isActive: true },
        }),
        prisma.contactMessage.findMany({
          orderBy: { createdAt: 'desc' },
          take: 5,
        }),
        prisma.newsletterSubscription.findMany({
          where: { isActive: true },
          orderBy: { createdAt: 'desc' },
          take: 5,
        }),
      ])

    return NextResponse.json({
      totalContacts,
      totalSubscribers,
      recentContacts,
      recentSubscribers,
    })
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 