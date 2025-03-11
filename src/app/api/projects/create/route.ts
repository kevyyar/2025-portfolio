import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const projectSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
  imageUrl: z.string().url(),
  technologies: z.array(z.string().max(255)),
  githubUrl: z
    .string()
    .optional()
    .refine(
      val => {
        // Allow empty string or valid URL
        return val === '' || val === '#' || z.string().url().safeParse(val).success;
      },
      {
        message: 'Invalid url',
      }
    ),
  demoUrl: z.string().url(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = projectSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.errors }, { status: 400 });
    }

    const { title, description, imageUrl, technologies, githubUrl, demoUrl } = parsed.data;

    const project = await prisma.project.create({
      data: {
        title,
        description,
        imageUrl,
        technologies,
        githubUrl: githubUrl || null,
        demoUrl,
      },
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
