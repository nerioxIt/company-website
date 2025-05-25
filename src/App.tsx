import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { Layout } from "@/components/layout/Layout";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

const App = () => {
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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
            
            {/* Refined scroll to top button */}
            <motion.div
              className="fixed bottom-8 right-8 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: showScrollTop ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              style={{ pointerEvents: showScrollTop ? 'auto' : 'none' }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="h-14 w-14 rounded-full shadow-xl bg-primary/90 dark:bg-primary/80 backdrop-blur-sm border-2 border-background/70 dark:border-background/50 hover:bg-primary hover:scale-105 transition-all p-0 flex items-center justify-center" 
                onClick={scrollToTop} 
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-6 w-6 text-background dark:text-background font-bold" />
              </Button>
            </motion.div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
