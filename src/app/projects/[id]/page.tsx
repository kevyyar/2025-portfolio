import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  
  const project = await prisma.project.findUnique({
    where: { id: parseInt(id) },
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-gray-50">
      <main className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
              <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
                >
                  View Code
                </Link>
              )}
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                Live Demo
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-xl">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
