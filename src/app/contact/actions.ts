'use server'

import { prisma } from '@/lib/prisma'

export async function submitContact(prevState: { success?: boolean; error?: string } | null, formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  if (!name || !email || !subject || !message) {
    return { error: 'All fields are required.' }
  }

  try {
    await prisma.contactMessage.create({
      data: { name, email, subject, message },
    })
    return { success: true }
  } catch {
    return { error: 'Failed to send message. Please try again.' }
  }
}
