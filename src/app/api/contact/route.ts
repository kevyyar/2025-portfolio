import { Redis } from '@upstash/redis';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Redis)
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address').max(100),
  subject: z.string().min(1, 'Subject is required').max(200),
  message: z.string().min(1, 'Message is required').max(1000),
  username: z.string().max(0, 'Nice try, bot!'), // honeypot validation
});

async function getRateLimitInfo(ip: string) {
  const key = `ratelimit:${ip}`;
  const now = Date.now();
  const window = 60 * 1000; // 1 minute window
  const limit = 2; // 2 requests per minute

  const count = await redis.incr(key);
  if (count === 1) {
    await redis.pexpire(key, window);
  }

  return {
    count,
    limit,
    isRateLimited: count > limit,
  };
}

export async function POST(request: Request) {
  try {
    // Get IP address
    const headersList = headers();
    const ip = (await headersList).get('x-forwarded-for') || 'unknown';

    // Check rate limit
    const rateLimitInfo = await getRateLimitInfo(ip);
    if (rateLimitInfo.isRateLimited) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message } = contactFormSchema.parse(body);

    // Additional spam checks
    if (message.includes('http') || message.includes('www.')) {
      return NextResponse.json(
        { error: 'Links are not allowed in messages' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'barretokevin@hotmail.com',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>IP: ${ip}</small></p>
      `,
      headers: {
        'X-Entity-Ref-ID': crypto.randomUUID(), // Unique ID for each email
      },
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}