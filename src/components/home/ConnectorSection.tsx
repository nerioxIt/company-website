import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ConnectorProps {
  variant?: "wave" | "angle" | "curve" | "dots";
  flip?: boolean;
  height?: number;
}

export const ConnectorSection = ({ 
  variant = "wave", 
  flip = false,
  height = 32
}: ConnectorProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Improved parallax effect values
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 0.4]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);
  
  // Wave SVG connector
  if (variant === "wave") {
    return (
      <div ref={ref} className="relative h-12 md:h-16 overflow-hidden">
        <motion.div 
          className="absolute inset-0 pointer-events-none text-background dark:text-background"
          style={{ y, opacity }}
        >
          <svg viewBox="0 0 1440 100" className="absolute w-full h-auto" preserveAspectRatio="none">
            <motion.path
              d="M0,40 C320,100 420,0 720,50 C1020,100 1200,20 1440,30 L1440,100 L0,100 Z"
              fill="currentColor"
              initial={{ pathLength: 0, opacity: 0.5 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
            />
          </svg>
        </motion.div>
      </div>
    );
  }
  
  // Angle divider
  if (variant === "angle") {
    return (
      <div ref={ref} className="relative h-10 md:h-12 overflow-hidden">
        <motion.div 
          className="absolute inset-0 pointer-events-none text-background dark:text-background"
          style={{ y, opacity }}
        >
          <svg viewBox="0 0 1440 48" className="absolute w-full h-auto" preserveAspectRatio="none">
            <motion.path
              d={flip ? "M0,0 L1440,48 L0,48 Z" : "M0,48 L1440,0 L1440,48 Z"}
              fill="currentColor"
              initial={{ pathLength: 0, opacity: 0.5 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            />
          </svg>
        </motion.div>
      </div>
    );
  }
  
  // Curve divider
  if (variant === "curve") {
    return (
      <div ref={ref} className="relative h-12 md:h-16 overflow-hidden">
        <motion.div 
          className="absolute inset-0 pointer-events-none text-background dark:text-background"
          style={{ y, opacity }}
        >
          <svg viewBox="0 0 1440 100" className="absolute w-full h-auto" preserveAspectRatio="none">
            <motion.path
              d={flip 
                ? "M0,100 C240,30 480,70 720,40 C960,10 1200,50 1440,80 L1440,0 L0,0 Z" 
                : "M0,0 C240,70 480,30 720,60 C960,90 1200,50 1440,20 L1440,100 L0,100 Z"
              }
              fill="currentColor"
              initial={{ pathLength: 0.2, opacity: 0.7 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </svg>
        </motion.div>
      </div>
    );
  }
  
  // Dots pattern divider - enhanced with staggered animation
  if (variant === "dots") {
    return (
      <div ref={ref} className="relative h-8 md:h-10 overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-background dark:bg-background opacity-50 mx-3 md:mx-4"
              initial={{ y: -10, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: [0, 1, 0.7],
                transition: { 
                  duration: 0.2,
                  delay: i * 0.02,
                  repeat: 0 
                }
              }}
            />
          ))}
        </div>
      </div>
    );
  }
  
  return null;
};
