
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { MouseFollower } from "@/components/MouseFollower";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MouseFollower />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
