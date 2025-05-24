import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

export const ClientsCarousel = () => {
  const clients = [
    { id: 1, name: "TechCorp", industry: "Technology" },
    { id: 2, name: "FinanceFlow", industry: "Finance" },
    { id: 3, name: "HealthTech", industry: "Healthcare" },
    { id: 4, name: "EduSmart", industry: "Education" },
    { id: 5, name: "RetailMax", industry: "E-commerce" },
    { id: 6, name: "CloudVision", industry: "Cloud Services" },
  ];
  
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  
  // Start the animation immediately on component mount
  useEffect(() => {
    if (!containerRef.current) return;
    
    const startAnimation = async () => {
      // Get the width of the container and content for proper animation
      const containerWidth = containerRef.current?.scrollWidth || 0;
      const contentWidth = containerRef.current?.scrollWidth || 0;
      
      // Set initial position (no delay)
      await controls.set({ x: 0 });
      
      // Start continuous animation immediately
      controls.start({
        x: -contentWidth / 2,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0, // No delay between cycles
        },
      });
    };
    
    startAnimation();
  }, [controls]);

  return (
    <section className="section bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/20 py-0 overflow-hidden">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Our Trusted Partners
          </h2>
          <motion.p 
            className="text-secondary dark:text-secondary/90 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We've partnered with forward-thinking companies across various industries to deliver exceptional results and drive digital transformation.
          </motion.p>
        </motion.div>
        
        <div className="relative overflow-hidden">
          {/* Gradient overlays for better visibility */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent dark:from-background dark:to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent dark:from-background dark:to-transparent z-10"></div>
          
          {/* Carousel container - added py-8 for vertical space */}
          <div className="overflow-hidden py-8">
            <motion.div 
              ref={containerRef}
              className="flex space-x-8"
              animate={controls}
            >
              {/* Double the clients array for seamless infinite scroll */}
              {[...clients, ...clients].map((client, index) => (
                <motion.div
                  key={`${client.id}-${index}`}
                  className="w-64 h-36 flex flex-col items-center justify-center bg-card/90 dark:bg-card/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-border/50 dark:border-border/60 hover:border-primary/30 dark:hover:border-primary/50 group min-w-[256px]"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-2xl font-bold text-primary/80 dark:text-primary/90 hover:text-primary dark:hover:text-primary transition-colors duration-300 mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {client.name}
                  </motion.div>
                  <motion.div 
                    className="text-sm text-muted-foreground dark:text-muted-foreground/90 font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {client.industry}
                  </motion.div>
                  
                  {/* Decorative elements */}
                  <motion.div 
                    className="absolute top-2 right-2 w-2 h-2 bg-accent-teal dark:bg-accent-teal/80 rounded-full opacity-60"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="absolute bottom-2 left-2 w-1 h-1 bg-accent-amber dark:bg-accent-amber/80 rounded-full opacity-40"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-muted-foreground dark:text-muted-foreground/90 text-sm max-w-2xl mx-auto">
            Join the growing list of successful companies that trust us with their digital transformation journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
