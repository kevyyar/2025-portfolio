import Expertise from "@/components/expertise";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ProjectsList from "@/components/projects-list";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Expertise />
      <ProjectsList />
    </div>
  );
}
