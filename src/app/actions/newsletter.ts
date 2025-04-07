'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

type State = {
  success: boolean;
  error: string | null;
}

export async function subscribeToNewsletter(
  prevState: State,
  formData: FormData
): Promise<State> {
  try {
    const email = formData.get('email') as string

    if (!email) {
      return { success: false, error: 'Email is required' }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { success: false, error: 'Please enter a valid email address' }
    }

    // Check if email already exists
    const existingSubscription = await prisma.newsletterSubscription.findUnique({
      where: { email },
    })

    if (existingSubscription) {
      if (!existingSubscription.isActive) {
        // Reactivate existing subscription
        await prisma.newsletterSubscription.update({
          where: { email },
          data: { isActive: true },
        })
        return { success: true, error: null }
      }
      return { success: false, error: 'You are already subscribed to our newsletter' }
    }

    // Create new subscription
    await prisma.newsletterSubscription.create({
      data: {
        email,
        isActive: true,
      },
    })

    revalidatePath('/')
    return { success: true, error: null }
  } catch (error) {
    console.error('Error subscribing to newsletter:', error)
    return { success: false, error: 'Failed to subscribe. Please try again.' }
  }
} 