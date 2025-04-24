
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 w-64 h-64 rounded-full bg-primary/20"
      animate={{
        x: mousePosition.x - 128,
        y: mousePosition.y - 128,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.8,
      }}
    />
  );
};
