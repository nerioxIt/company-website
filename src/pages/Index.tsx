
import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChoose } from "@/components/home/WhyChoose";
import { ClientsCarousel } from "@/components/home/ClientsCarousel";
import { TestimonialSnippet } from "@/components/home/TestimonialSnippet";

const Index = () => {
  return (
    <div>
      <Hero />
      <ServicesGrid />
      <WhyChoose />
      <ClientsCarousel />
      <TestimonialSnippet />
    </div>
  );
};

export default Index;
