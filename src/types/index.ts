export interface ProjectData {
  id?: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string | null;
  demoUrl?: string;
}
