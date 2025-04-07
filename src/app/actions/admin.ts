'use server'

import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'
import { sign, verify } from 'jsonwebtoken'

type LoginState = {
  success: boolean
  error: string | null
}

export async function loginAdmin(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  try {
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    const admin = await prisma.adminUser.findUnique({
      where: { username },
    })

    if (!admin || admin.password !== password) {
      return { success: false, error: 'Invalid credentials' }
    }

    const token = sign(
      { userId: admin.id, username: admin.username },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1d' }
    );
    
    (await cookies()).set('admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 1 day
    })

    return { success: true, error: null }
  } catch (error) {
    console.error('Login error:', error)
    return { success: false, error: 'Internal server error' }
  }
}

export async function checkAuth() {
  try {
    const token = (await cookies()).get('admin-token')?.value

    if (!token) {
      return { success: false }
    }

    verify(token, process.env.JWT_SECRET || 'your-secret-key')
    return { success: true }
  } catch (error) {
    return { success: false }
  }
}

export async function logoutAdmin() {
  (await cookies()).delete('admin-token')
  return { success: true }
}

export async function getAdminStats() {
  try {
    const token = (await cookies()).get('admin-token')?.value

    if (!token) {
      throw new Error('Unauthorized')
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

    return {
      success: true,
      data: {
        totalContacts,
        totalSubscribers,
        recentContacts,
        recentSubscribers,
      },
    }
  } catch (error) {
    console.error('Error fetching stats:', error)
    return { success: false, error: 'Internal server error' }
  }
} 