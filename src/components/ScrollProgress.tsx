
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      <motion.div 
        className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-sm transition-all duration-300 ${isScrolled ? 'h-16 bg-background/70' : 'h-0'}`}
        animate={{ height: isScrolled ? '4rem' : '0' }}
      />
    </>
  );
};
