'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

type State = {
  success: boolean;
  error: string | null;
}

export async function submitContactForm(
  prevState: State,
  formData: FormData
): Promise<State> {
  try {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    if (!name || !email || !message) {
      return { success: false, error: 'All fields are required' }
    }

    await prisma.contactMessage.create({
      data: {
        name,
        email,
        message,
      },
    })

    revalidatePath('/')
    return { success: true, error: null }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error: 'Failed to submit message. Please try again.' }
  }
} 