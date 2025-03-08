import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const projectSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(500),
  imageUrl: z.string().url(),
  technologies: z.array(z.string()),
  githubUrl: z.string().url(),
  demoUrl: z.string().url(),
})


export async function POST(request: Request) {
  try {
    const body = await request.json(); // parse the request/incoming body
    const parsed = projectSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors },
        { status: 400 }
      );
    }

    const { title, description, imageUrl, technologies, githubUrl, demoUrl } = parsed.data;

    const techRecods = await Promise.all(technologies.map(async (tech) => {
      return prisma.technology.upsert({
        where: { name: tech },
        update: {},
        create: { name: tech },
      })
    }))


    const project = await prisma.project.create({
      data: {
        title,
        description,
        imageUrl,
        technologies: {
          connect: techRecods.map(tech => ({ id: tech.id }))
        },
        githubUrl,
        demoUrl,
      },
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect(); // close the prisma/db connection
  }
}
