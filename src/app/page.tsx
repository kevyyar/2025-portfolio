import Expertise from '@/components/expertise';
import Hero from '@/components/hero';
import ProjectsList from '@/components/projects-list';
import WorkExperience from '@/components/work-experience';

export default function Home() {
  return (
    <div>
      <Hero />
      <Expertise />
      <ProjectsList />
      <WorkExperience />
    </div>
  );
}
