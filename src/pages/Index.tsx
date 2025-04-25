
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
// Removed MouseFollower import and usage

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Removed MouseFollower component */}
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
