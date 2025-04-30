
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ScrollToSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <>
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-4 p-2 bg-background/30 backdrop-blur-lg rounded-full border border-border">
        <Button 
          variant="ghost" 
          className="text-sm hover:bg-primary/10 rounded-full" 
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </Button>
        <Button 
          variant="ghost" 
          className="text-sm hover:bg-primary/10 rounded-full" 
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </Button>
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <Button 
              onClick={scrollToTop}
              size="icon"
              variant="secondary"
              className="rounded-full shadow-lg bg-primary text-primary-foreground hover:scale-110 transition-all duration-300"
            >
              <ArrowUp className="h-5 w-5" />
              <span className="sr-only">Scroll to top</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
