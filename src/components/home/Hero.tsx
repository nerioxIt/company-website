
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="relative bg-gradient-to-br from-background via-muted/20 to-accent-teal/5 dark:from-background dark:via-muted/10 dark:to-accent-teal/10 overflow-hidden min-h-screen flex items-center">
      {/* Enhanced background decoration with parallax */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y }}
      >
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-accent-teal/20 to-primary/20 dark:from-accent-teal/30 dark:to-primary/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent-amber/20 dark:from-primary/30 dark:to-accent-amber/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-20 left-1/3 w-32 h-32 bg-gradient-to-br from-accent-amber/30 to-accent-teal/30 dark:from-accent-amber/40 dark:to-accent-teal/40 rounded-full blur-2xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      <motion.div 
        className="container-custom section flex flex-col lg:flex-row items-center relative z-10"
        style={{ opacity }}
      >
        <motion.div 
          className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="space-y-8">
            <motion.h1 
              className="mb-6 text-primary dark:text-primary leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.span 
                className="block text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground dark:text-muted-foreground mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Welcome to the Future of
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-primary via-accent-teal to-primary dark:from-primary dark:via-accent-teal dark:to-primary bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-bold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Digital Innovation
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-foreground/80 dark:text-foreground/90 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              We craft exceptional digital experiences that transform businesses and delight users. Our cutting-edge solutions drive growth and efficiency through innovative technology and creative design.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contact" 
                  className="btn-primary shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-primary to-accent-teal hover:from-primary/90 hover:to-accent-teal/90 border-0 text-white font-semibold px-8 py-4 rounded-xl"
                >
                  Get Started Today
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/services" 
                  className="btn-outline hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-primary dark:border-primary text-primary dark:text-primary hover:text-white dark:hover:text-white font-semibold px-8 py-4 rounded-xl"
                >
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="relative">
            {/* Enhanced hero visual with better dark mode support */}
            <motion.div 
              className="rounded-3xl bg-gradient-to-br from-accent-teal/20 to-primary/20 dark:from-accent-teal/30 dark:to-primary/30 p-8 shadow-2xl backdrop-blur-sm border border-border/50 dark:border-border/60 hover:border-primary/30 dark:hover:border-primary/50 transition-all duration-500"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="relative z-10 aspect-video rounded-2xl bg-card/90 dark:bg-card/95 backdrop-blur overflow-hidden shadow-2xl border border-border/50 dark:border-border/60"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/90 via-accent-teal/80 to-primary/90 dark:from-primary/95 dark:via-accent-teal/85 dark:to-primary/95"
                  animate={{
                    background: [
                      "linear-gradient(135deg, hsl(214, 97%, 30%) 0%, hsl(178, 63%, 58%) 50%, hsl(214, 97%, 30%) 100%)",
                      "linear-gradient(135deg, hsl(178, 63%, 58%) 0%, hsl(214, 97%, 30%) 50%, hsl(178, 63%, 58%) 100%)",
                      "linear-gradient(135deg, hsl(214, 97%, 30%) 0%, hsl(178, 63%, 58%) 50%, hsl(214, 97%, 30%) 100%)"
                    ]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative z-10 h-full flex items-center justify-center text-white p-8 text-center">
                  <div className="space-y-6">
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold text-white dark:text-white"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: 1.2 }}
                    >
                      Innovation at Scale
                    </motion.h3>
                    <motion.p 
                      className="mb-6 text-white/90 dark:text-white/95"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1.4 }}
                    >
                      Technology that transforms your business vision into reality
                    </motion.p>
                    <motion.div 
                      className="w-32 h-32 mx-auto bg-white/20 dark:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 dark:border-white/40 shadow-xl"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.svg 
                        className="w-16 h-16" 
                        viewBox="0 0 200 200" 
                        xmlns="http://www.w3.org/2000/svg"
                        animate={{
                          rotate: [0, -360],
                        }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <circle cx="100" cy="100" r="30" fill="white" fillOpacity="0.4"/>
                        <path d="M100 25L150 100L100 175L50 100L100 25Z" fill="white"/>
                      </motion.svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Enhanced decorative elements with better dark mode */}
            <motion.div 
              className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-accent-amber to-accent-amber/60 dark:from-accent-amber/80 dark:to-accent-amber/40 rounded-full opacity-80 blur-sm"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute top-16 -right-8 w-16 h-16 bg-accent-teal dark:bg-accent-teal/80 rounded-full shadow-xl"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -top-8 left-16 w-24 h-24 bg-primary/30 dark:bg-primary/40 rounded-full blur-lg"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-24 -left-6 w-12 h-12 bg-accent-amber dark:bg-accent-amber/80 rounded-full shadow-lg"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
