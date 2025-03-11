import { ProjectData } from "@/types";
import { Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Project({
  title,
  description,
  imageUrl,
  technologies,
  githubUrl,
  demoUrl,
}: ProjectData) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-50">
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+ZNPQAI+wMDBZmJLQAAAABJRU5ErkJggg=="
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-block bg-gray-200 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            href={githubUrl ? githubUrl : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            <Code />
            Code
          </Link>
          <Link
            href={demoUrl as string}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
