
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20">
      <div className="animate-fade-in space-y-6 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4">
          Multi-Disciplinary Engineer & Developer
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground">
          Specializing in embedded systems, real-time communication, and fullstack development.
          Building bridges between hardware and software.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <Button className="text-lg px-8" asChild>
            <a href="#projects">
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" className="text-lg px-8" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
