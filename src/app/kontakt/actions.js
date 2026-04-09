'use server'

import * as v from 'valibot'
import { sendContactEmail } from '@/lib/gmail'

const ContactSchema = v.object({
  name: v.pipe(v.string(), v.trim(), v.minLength(2, 'Imię musi mieć min. 2 znaki.')),
  email: v.pipe(v.string(), v.trim(), v.email('Podaj poprawny adres email.')),
  message: v.pipe(v.string(), v.trim(), v.minLength(10, 'Wiadomość musi mieć min. 10 znaków.')),
})

// Simple in-memory rate limiting: max 3 per IP per hour
const rateLimitMap = new Map()
const RATE_LIMIT = 3
const RATE_WINDOW = 60 * 60 * 1000 // 1 hour

function isRateLimited(ip) {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now - entry.windowStart > RATE_WINDOW) {
    rateLimitMap.set(ip, { windowStart: now, count: 1 })
    return false
  }

  if (entry.count >= RATE_LIMIT) {
    return true
  }

  entry.count++
  return false
}

export async function submitContactForm(_prevState, formData) {
  // Rate limiting
  const { headers } = await import('next/headers')
  const headersList = await headers()
  const ip = headersList.get('x-forwarded-for') ?? headersList.get('x-real-ip') ?? 'unknown'

  if (isRateLimited(ip)) {
    return {
      success: false,
      errors: { form: 'Zbyt wiele wiadomości. Spróbuj ponownie za godzinę.' },
    }
  }

  // Validation
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  }

  const result = v.safeParse(ContactSchema, raw)

  if (!result.success) {
    const errors = {}
    for (const issue of result.issues) {
      const key = issue.path?.[0]?.key
      if (key) errors[key] = issue.message
    }
    return { success: false, errors }
  }

  // Send email
  try {
    await sendContactEmail(result.output)
    return { success: true, errors: {} }
  } catch (error) {
    console.error('Gmail API error:', error)
    return {
      success: false,
      errors: { form: 'Nie udało się wysłać wiadomości. Spróbuj ponownie później.' },
    }
  }
}
