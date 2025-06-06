
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-12 sm:py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-accent/20 via-secondary/20 to-primary/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative space-y-6 sm:space-y-8 max-w-3xl mx-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4"
          whileHover={{ scale: 1.02 }}
        >
          Multi-Disciplinary Engineer & Developer
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground px-2"
          whileHover={{ scale: 1.01 }}
        >
          Specializing in embedded systems, real-time communication, and fullstack development.
          Building bridges between hardware and software.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-6 sm:pt-8"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative w-full sm:w-auto"
          >
            <Button 
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 relative overflow-hidden group" 
              asChild
            >
              <a href="#projects">
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative w-full sm:w-auto"
          >
            <Button 
              variant="outline" 
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 hover:bg-secondary/10" 
              asChild
            >
              <a href="#contact">
                <span className="relative z-10">Get in Touch</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Background grid */}
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-20" />
    </section>
  );
};
