'use server'

import { prisma } from '@/lib/prisma'

export async function submitVolunteer(prevState: { success?: boolean; error?: string } | null, formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const skills = formData.get('skills') as string
  const availability = formData.get('availability') as string
  const message = formData.get('message') as string

  if (!name || !email || !skills || !availability) {
    return { error: 'Please fill in all required fields.' }
  }

  try {
    await prisma.volunteer.create({
      data: { name, email, phone: phone || null, skills, availability, message: message || null },
    })
    return { success: true }
  } catch {
    return { error: 'Failed to submit application. Please try again.' }
  }
}
