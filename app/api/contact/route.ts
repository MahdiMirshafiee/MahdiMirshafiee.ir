import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

// Simple in-memory rate limiter (resets on server restart / cold start)
// For production, replace with Redis-based solution (e.g. Upstash)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5        // max requests
const RATE_WINDOW = 60_000  // per 60 seconds

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW })
    return false
  }

  if (entry.count >= RATE_LIMIT) return true

  entry.count++
  return false
}

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(100),
  message: z.string().min(10).max(5000),
})

// Strip HTML tags to prevent injection in email clients
function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, '').trim()
}

const ALLOWED_ORIGINS = [
  'https://mahdimirshafiee.ir',
  'https://www.mahdimirshafiee.ir',
]

export async function POST(req: Request) {
  try {
    // Rate limiting
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Origin check
    const origin = req.headers.get('origin')
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return new NextResponse(null, { status: 403 })
    }

    // Parse & validate with zod
    let body: unknown
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 })
    }

    const parsed = contactSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Invalid input.' },
        { status: 400 }
      )
    }

    const name = sanitize(parsed.data.name)
    const email = sanitize(parsed.data.email)
    const message = sanitize(parsed.data.message)

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL!,
      subject: `Website Contact: Message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    if (error) {
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch {
    return NextResponse.json(
      { error: 'Failed to process request.' },
      { status: 500 }
    )
  }
}
