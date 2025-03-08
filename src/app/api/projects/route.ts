import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET /api/projects
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" }, // sort by newest first
    });
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect(); // close the prisma/db connection
  }
}
