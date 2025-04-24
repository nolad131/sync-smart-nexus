
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 relative overflow-hidden">
      {/* Background gradient circles with interactive movement */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        animate={{ 
          rotate: [0, 5, -5, 0],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-accent/20 via-secondary/20 to-primary/20 rounded-full blur-3xl" />
      </motion.div>
      
      <div className="relative space-y-8 max-w-3xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4"
          whileHover={{ scale: 1.02 }}
        >
          Multi-Disciplinary Engineer & Developer
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground"
          whileHover={{ scale: 1.01 }}
        >
          Specializing in embedded systems, real-time communication, and fullstack development.
          Building bridges between hardware and software.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center pt-8"
        >
          <Button 
            className="text-lg px-8 relative overflow-hidden group" 
            asChild
            whileHover={{ scale: 1.05 }}
          >
            <a href="#projects">
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            className="text-lg px-8 hover:bg-secondary/10" 
            asChild
            whileHover={{ scale: 1.05 }}
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
      </div>

      {/* Interactive background grid */}
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-20" />
    </section>
  );
};
