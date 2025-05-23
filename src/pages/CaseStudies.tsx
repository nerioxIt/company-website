
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    client: "RetailMax",
    category: "E-commerce",
    challenge: "RetailMax was struggling with low conversion rates and high cart abandonment on their outdated e-commerce platform.",
    solution: "We redesigned their online store with a focus on user experience, optimized checkout flow, and implemented personalized product recommendations.",
    results: [
      "63% increase in conversion rate",
      "41% decrease in cart abandonment",
      "52% increase in average order value"
    ],
    images: [
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1491897554428-130a60dd4757?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    technologies: ["React", "Node.js", "Stripe", "AWS"]
  },
  {
    id: 2,
    title: "Mobile Banking Application",
    client: "SecureBank",
    category: "Mobile App",
    challenge: "SecureBank needed a modern, secure mobile banking application that would provide a seamless experience for their customers while maintaining strict security standards.",
    solution: "We developed a native mobile application for iOS and Android with biometric authentication, real-time transaction alerts, and an intuitive user interface.",
    results: [
      "92% user satisfaction rating",
      "35% increase in mobile transactions",
      "28% reduction in customer service calls"
    ],
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase"]
  },
  {
    id: 3,
    title: "Healthcare Patient Portal",
    client: "MediCare Group",
    category: "Web Application",
    challenge: "MediCare Group needed a secure, HIPAA-compliant patient portal that would improve patient engagement and streamline administrative processes.",
    solution: "We built a comprehensive web portal that allowed patients to schedule appointments, access medical records, communicate with healthcare providers, and manage payments.",
    results: [
      "47% reduction in administrative workload",
      "76% of patients actively using the portal",
      "39% decrease in appointment no-shows"
    ],
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    technologies: ["Angular", "ASP.NET Core", "SQL Server", "Azure"]
  }
];

interface CaseStudyCardProps {
  caseStudy: typeof caseStudies[0];
  onViewDetails: (id: number) => void;
}

const CaseStudyCard = ({ caseStudy, onViewDetails }: CaseStudyCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-muted/30 h-full flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardHeader className="relative p-0">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={caseStudy.images[0]} 
            alt={caseStudy.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-primary to-accent-teal text-white border-0">
              {caseStudy.category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative p-6 flex flex-col flex-grow">
        <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
          {caseStudy.title}
        </CardTitle>
        <p className="text-primary font-medium mb-4">Client: {caseStudy.client}</p>
        <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
          {caseStudy.challenge.substring(0, 120)}...
        </p>
        <Button 
          onClick={() => onViewDetails(caseStudy.id)} 
          className="w-full bg-gradient-to-r from-primary to-accent-teal hover:shadow-lg transition-all duration-300"
        >
          View Case Study
        </Button>
      </CardContent>
    </Card>
  );
};

interface CaseStudyDetailsProps {
  caseStudy: typeof caseStudies[0];
  open: boolean;
  onClose: () => void;
}

const CaseStudyDetails = ({ caseStudy, open, onClose }: CaseStudyDetailsProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{caseStudy.title}</DialogTitle>
          <DialogDescription className="text-primary">Client: {caseStudy.client}</DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-4">
              <img 
                src={caseStudy.images[currentImageIndex]} 
                alt={`${caseStudy.title} screenshot ${currentImageIndex + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2">
              {caseStudy.images.map((image, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-16 h-12 rounded overflow-hidden border-2 ${idx === currentImageIndex ? 'border-primary' : 'border-transparent'}`}
                >
                  <img src={image} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Challenge</h3>
              <p className="text-muted-foreground">{caseStudy.challenge}</p>
            </div>
            
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Solution</h3>
              <p className="text-muted-foreground">{caseStudy.solution}</p>
            </div>
            
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Results</h3>
              <ul className="list-disc list-inside space-y-1">
                {caseStudy.results.map((result, idx) => (
                  <li key={idx} className="text-muted-foreground">{result}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const CaseStudies = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof caseStudies[0] | null>(null);

  const handleOpenDetails = (id: number) => {
    const caseStudy = caseStudies.find(cs => cs.id === id);
    if (caseStudy) {
      setSelectedCaseStudy(caseStudy);
    }
  };

  const handleCloseDetails = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent-teal/20">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
        <div className="container-custom relative py-20 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-3xl">📚</span>
            </div>
            <h1 className="text-white mb-6 font-heading font-bold">
              Case Studies
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore how we've helped businesses transform their digital presence and achieve measurable results 
              through innovative solutions and strategic partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-lg">
                View Portfolio
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent-teal rounded-full mb-6">
              <span className="text-2xl text-white">🎯</span>
            </div>
            <h2 className="text-primary mb-4">Success Stories</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the real-world impact of our digital solutions across various industries and business sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard 
                key={caseStudy.id}
                caseStudy={caseStudy}
                onViewDetails={handleOpenDetails}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary via-primary/95 to-accent-teal">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <span className="text-3xl">🚀</span>
            </div>
            <h2 className="text-white mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join our growing list of successful clients and let us help you achieve remarkable results 
              for your business with our innovative digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-lg">
                Start Your Project
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {selectedCaseStudy && (
        <CaseStudyDetails 
          caseStudy={selectedCaseStudy}
          open={!!selectedCaseStudy}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
};

export default CaseStudies;
