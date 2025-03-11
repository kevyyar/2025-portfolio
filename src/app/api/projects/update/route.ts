import { prisma } from '@/lib/prisma';
import { ProjectData } from '@/types';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const projectUpdateSchema = z.object({
  id: z.number().int(),
  title: z.string().min(1).max(255).optional(),
  description: z.string().min(1).optional(),
  imageUrl: z.string().url().optional(),
  technologies: z.array(z.string().max(255)).optional(),
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
  demoUrl: z.string().url().optional(),
});

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const parsed = projectUpdateSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.errors }, { status: 400 });
    }

    const { id, title, description, imageUrl, technologies, githubUrl, demoUrl } = parsed.data;

    const existingProject = await prisma.project.findUnique({
      where: { id },
    });

    if (!existingProject) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    const updateData: Partial<ProjectData> = {};
    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (imageUrl) updateData.imageUrl = imageUrl;
    if (technologies) updateData.technologies = [...technologies];
    if (githubUrl) updateData.githubUrl = githubUrl;
    if (demoUrl) updateData.demoUrl = demoUrl;

    const project = await prisma.project.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error('Error updating project:', error);
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
