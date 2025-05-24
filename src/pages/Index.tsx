import { EnhancedHero } from "@/components/home/EnhancedHero";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChoose } from "@/components/home/WhyChoose";
import { ClientsCarousel } from "@/components/home/ClientsCarousel";
import { TestimonialSnippet } from "@/components/home/TestimonialSnippet";
import { ConnectorSection } from "@/components/home/ConnectorSection";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { MessageSquareMore, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { scrollYProgress } = useScroll();
  // Optimized spring physics for smoother progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.0001,
    mass: 0.1
  });
  
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll-to-top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Refined progress bar with more subtle appearance */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-accent-teal z-50 origin-left opacity-90 dark:opacity-80"
        style={{ scaleX }}
        transition={{ type: "spring" }}
      />
      
      {/* Hero section */}
      <EnhancedHero />
      
      {/* Improved section transitions with visual continuity */}
      <ConnectorSection variant="curve" flip={false} />
      
      <FeaturesSection />
      
      <ConnectorSection variant="wave" flip={true} />
      
      <ServicesGrid />
      
      <ConnectorSection variant="angle" flip={false} />
      
      <WhyChoose />
      
      <ConnectorSection variant="dots" flip={true} />
      
      <ClientsCarousel />
      
      <ConnectorSection variant="curve" flip={false} />
      
      <TestimonialSnippet />
      
     
      
      {/* Refined scroll to top button */}
      <motion.div 
        className="fixed bottom-6 left-6 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: showScrollTop ? 'auto' : 'none' }}
      >
        <Button 
          variant="outline" 
          size="lg" 
          className="h-12 w-12 rounded-full shadow-lg bg-background/80 dark:bg-background/60 backdrop-blur-sm border border-border/50 dark:border-border/40 hover:bg-background dark:hover:bg-background/80 p-0 flex items-center justify-center"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 text-foreground dark:text-foreground" />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Index;
