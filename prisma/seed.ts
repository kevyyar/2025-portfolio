import { prisma } from "@/lib/prisma";

async function seed() {
  try {
    // Upsert technologies to avoid duplicates
    const technologies = [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue",
      "Nuxt.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Sass/SCSS",
      "Vitest",
    ];

    for (const tech of technologies) {
      await prisma.technology.upsert({
        where: { name: tech },
        update: {}, // No update needed if it exists
        create: { name: tech },
      });
    }

    // Check and create projects if they don’t exist
    const projects = [
      {
        title: "Portfolio Website",
        description: "A personal portfolio built with Next.js and Prisma.",
        imageUrl: "https://example.com/portfolio.jpg",
        githubUrl: "https://github.com/username/portfolio",
        demoUrl: "https://portfolio.example.com",
      },
      {
        title: "Task Manager",
        description: "A task management app with real-time updates.",
        imageUrl: "https://example.com/task-manager.jpg",
        githubUrl: "https://github.com/username/task-manager",
        demoUrl: "https://task-manager.example.com",
      },
    ];

    for (const project of projects) {
      const existingProject = await prisma.project.findFirst({
        where: { title: project.title },
      });

      if (!existingProject) {
        await prisma.project.create({
          data: project,
        });
      }
    }

    // Fetch technologies
    const nextjs = await prisma.technology.findUnique({ where: { name: "Next.js" } });
    const typescript = await prisma.technology.findUnique({ where: { name: "TypeScript" } });
    const react = await prisma.technology.findUnique({ where: { name: "React" } });

    // Fetch projects
    const portfolio = await prisma.project.findFirst({ where: { title: "Portfolio Website" } });
    const taskManager = await prisma.project.findFirst({ where: { title: "Task Manager" } });

    // Connect technologies to projects
    if (portfolio) {
      await prisma.project.update({
        where: { id: portfolio.id },
        data: {
          technologies: {
            connect: [
              { id: nextjs!.id },
              { id: typescript!.id },
              { id: react!.id },
            ],
          },
        },
      });
    }

    if (taskManager) {
      await prisma.project.update({
        where: { id: taskManager.id },
        data: {
          technologies: {
            connect: [
              { id: nextjs!.id },
              { id: typescript!.id },
              { id: react!.id },
            ],
          },
        },
      });
    }

    console.log("Seeding completed successfully!");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect(); // Remove if using singleton
  }
}

seed();