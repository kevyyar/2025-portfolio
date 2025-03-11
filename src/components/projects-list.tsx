import { prisma } from "@/lib/prisma";
import Project from "./project";

async function ProjectsList() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log(projects);

  return (
    <section
      id="projects"
      className="flex flex-col my-18 px-6 gap-y-10 md:container md:mx-auto md:px-14 py-10"
    >
      <div className="text-center md:text-left">
        <h2 className="text-5xl font-black md:text-7xl">Featured Projects</h2>
        <p className="mt-4 text-gray-500 md:text-xl leading-relaxed">
          Here are some of my recent projects. Each project reflects my passion
          for building intuitive and impactful applications.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
              githubUrl={project?.githubUrl || undefined}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsList;
