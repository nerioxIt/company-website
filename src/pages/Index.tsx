
import { EnhancedHero } from "@/components/home/EnhancedHero";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChoose } from "@/components/home/WhyChoose";
import { ClientsCarousel } from "@/components/home/ClientsCarousel";
import { TestimonialSnippet } from "@/components/home/TestimonialSnippet";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-16"
    >
      <EnhancedHero />
      <FeaturesSection />
      <ServicesGrid />
      <WhyChoose />
      <ClientsCarousel />
      <TestimonialSnippet />
    </motion.div>
  );
};

export default Index;
