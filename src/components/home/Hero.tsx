import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-background to-muted overflow-hidden">
      {/* Add decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent-teal/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom section py-16 md:py-24 flex flex-col lg:flex-row items-center relative z-10">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
          <h1 className="mb-4 text-primary font-bold tracking-tight">
            Smarter Software for Smoother Business
          </h1>
          <p className="text-lg md:text-xl mb-8 text-secondary max-w-xl leading-relaxed">
            We craft digital experiences that transform businesses and delight users. Our custom solutions drive growth and efficiency through innovative technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link to="/services" className="btn-outline">
              Our Services
            </Link>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <div className="relative">
            {/* Hero image with enhanced styling */}
            <div className="rounded-lg bg-gradient-to-br from-white to-accent-teal/10 p-5 shadow-xl border border-white/20">
              <div className="relative z-10 aspect-video rounded-lg bg-gradient-to-br from-primary/90 to-accent-teal/90 overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] duration-500">
                <div className="relative z-10 h-full flex items-center justify-center text-white p-6 text-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Innovative Solutions</h3>
                    <p className="mb-5 text-white/90">Technology that transforms your business</p>
                    <div className="flex justify-center items-center mb-2">
                      <svg className="w-20 h-20 mx-auto" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="50" fill="white" fillOpacity="0.3"/>
                        <path d="M100 25L150 100L100 175L50 100L100 25Z" fill="white" className="animate-pulse"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent-amber rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute top-10 -right-4 w-8 h-8 bg-accent-teal rounded-full"></div>
            <div className="absolute -top-4 left-10 w-12 h-12 bg-primary rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
