import Project from "./project";

const projects = [
  {
    id: 5,
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Prisma.",
    imageUrl:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500&auto=format&fit=crop&q=60",
    githubUrl: "https://github.com/username/portfolio",
    demoUrl: "https://portfolio.example.com",
    createdAt: new Date(2023, 11, 1),
    technologies: [
      { id: 1, name: "js" },
      { id: 2, name: "react" },
    ],
  },
  {
    id: 6,
    title: "Task Manager",
    description: "A task management app with real-time updates.",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60",
    githubUrl: "https://github.com/username/task-manager",
    demoUrl: "https://task-manager.example.com",
    createdAt: new Date(2023, 11, 2),
    technologies: [
      { id: 3, name: "js" },
      { id: 4, name: "node" },
    ],
  },
];

async function ProjectsList() {
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
