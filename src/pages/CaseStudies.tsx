
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users, TrendingUp, Award, Filter, Search, Play, Pause } from "lucide-react";
import { Input } from "@/components/ui/input";

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    client: "RetailMax",
    category: "E-commerce",
    industry: "Retail",
    duration: "4 months",
    teamSize: "6 people",
    challenge: "RetailMax was struggling with low conversion rates and high cart abandonment on their outdated e-commerce platform.",
    solution: "We redesigned their online store with a focus on user experience, optimized checkout flow, and implemented personalized product recommendations.",
    results: [
      "63% increase in conversion rate",
      "41% decrease in cart abandonment",
      "52% increase in average order value",
      "85% improvement in mobile experience"
    ],
    images: [
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1491897554428-130a60dd4757?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    technologies: ["React", "Node.js", "Stripe", "AWS"],
    featured: true
  },
  {
    id: 2,
    title: "Mobile Banking Application",
    client: "SecureBank",
    category: "Mobile App",
    industry: "Finance",
    duration: "8 months",
    teamSize: "10 people",
    challenge: "SecureBank needed a modern, secure mobile banking application that would provide a seamless experience for their customers while maintaining strict security standards.",
    solution: "We developed a native mobile application for iOS and Android with biometric authentication, real-time transaction alerts, and an intuitive user interface.",
    results: [
      "92% user satisfaction rating",
      "35% increase in mobile transactions",
      "28% reduction in customer service calls",
      "99.9% uptime achieved"
    ],
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
    featured: true
  },
  {
    id: 3,
    title: "Healthcare Patient Portal",
    client: "MediCare Group",
    category: "Web Application",
    industry: "Healthcare",
    duration: "6 months",
    teamSize: "8 people",
    challenge: "MediCare Group needed a secure, HIPAA-compliant patient portal that would improve patient engagement and streamline administrative processes.",
    solution: "We built a comprehensive web portal that allowed patients to schedule appointments, access medical records, communicate with healthcare providers, and manage payments.",
    results: [
      "47% reduction in administrative workload",
      "76% of patients actively using the portal",
      "39% decrease in appointment no-shows",
      "100% HIPAA compliance maintained"
    ],
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    technologies: ["Angular", "ASP.NET Core", "SQL Server", "Azure"],
    featured: false
  }
];

const categories = ["All", "E-commerce", "Mobile App", "Web Application"];
const industries = ["All", "Retail", "Finance", "Healthcare"];

interface CaseStudyCardProps {
  caseStudy: typeof caseStudies[0];
  onViewDetails: (id: number) => void;
}

const CaseStudyCard = ({ caseStudy, onViewDetails }: CaseStudyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col bg-background/60 dark:bg-background/40 backdrop-blur-sm border border-border/50 dark:border-border/60 hover:border-primary/30 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/10">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={caseStudy.images[0]} 
            alt={caseStudy.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <div className="absolute top-4 right-4 flex gap-2">
            <Badge className="bg-accent-amber/90 text-white border-0">
              {caseStudy.category}
            </Badge>
            {caseStudy.featured && (
              <Badge className="bg-primary/90 text-primary-foreground border-0">
                <Award className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            )}
          </div>
          
          <div className="absolute bottom-4 left-4 text-white">
            <div className="flex items-center gap-4 text-sm opacity-90">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {caseStudy.duration}
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {caseStudy.teamSize}
              </div>
            </div>
          </div>
        </div>
        
        <CardContent className="p-6 flex flex-col flex-grow">
          <div className="flex-grow space-y-4">
            <div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary dark:group-hover:text-primary-foreground transition-colors">
                {caseStudy.title}
              </h3>

              <div className="flex items-center gap-2 text-primary dark:text-primary/80 font-medium mb-4">
                <span>Client: {caseStudy.client}</span>
                <span className="text-muted-foreground dark:text-muted-foreground/60">•</span>
                <span className="text-muted-foreground dark:text-muted-foreground/70">{caseStudy.industry}</span>
              </div>
            </div>
            
            <p className="text-muted-foreground dark:text-muted-foreground/80 leading-relaxed">
              {caseStudy.challenge.substring(0, 120)}...
            </p>
            
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-muted/60 dark:bg-muted/40 text-xs font-medium rounded-full border border-border/30 dark:border-border/50"
                >
                  {tech}
                </span>
              ))}
              {caseStudy.technologies.length > 3 && (
                <span className="px-3 py-1 bg-muted/60 dark:bg-muted/30 text-foreground dark:text-foreground/90 text-xs font-medium rounded-full border border-border/30 dark:border-border/60">
                  +{caseStudy.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
          
          <Button 
            onClick={() => onViewDetails(caseStudy.id)} 
            className="w-full mt-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary group"
          >
            View Case Study
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface CaseStudyDetailsProps {
  caseStudy: typeof caseStudies[0];
  open: boolean;
  onClose: () => void;
}

const CaseStudyDetails = ({ caseStudy, open, onClose }: CaseStudyDetailsProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(false);

  // Add this useEffect for auto-advancing slideshow
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoplay && caseStudy.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === caseStudy.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoplay, caseStudy.images.length]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="text-3xl font-bold">{caseStudy.title}</DialogTitle>
              <DialogDescription className="text-lg text-primary/90 dark:text-primary/80 mt-2">
                Client: {caseStudy.client} • {caseStudy.industry}
              </DialogDescription>
            </div>
            <div className="flex gap-2">
              <Badge className="bg-accent-amber/20 text-accent-amber border border-accent-amber/30">
                {caseStudy.category}
              </Badge>
              {caseStudy.featured && (
                <Badge className="bg-primary/20 text-primary dark:text-primary-foreground border border-primary/30">
                  Featured
                </Badge>
              )}
            </div>
          </div>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          <div className="space-y-6">
            <div className="relative aspect-video bg-muted/30 dark:bg-muted/20 rounded-xl overflow-hidden">
              <img 
                src={caseStudy.images[currentImageIndex]} 
                alt={`${caseStudy.title} screenshot ${currentImageIndex + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex gap-3">
              {caseStudy.images.map((image, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative w-20 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === currentImageIndex 
                      ? 'border-primary dark:border-primary-foreground' 
                      : 'border-border/30 dark:border-border/50 hover:border-primary/50 dark:hover:border-primary-foreground/50'
                  }`}
                >
                  <img src={image} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Add slideshow control button here */}
            <div className="flex justify-end mt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAutoplay(!isAutoplay)}
                className="text-xs flex items-center gap-1"
              >
                {isAutoplay ? (
                  <>
                    <Pause className="w-3 h-3" />
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3" />
                  </>
                )}
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-muted/30 dark:bg-muted/20">
                <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground/80 mb-1">
                  <Calendar className="w-4 h-4" />
                  Duration
                </div>
                <div className="font-semibold">{caseStudy.duration}</div>
              </Card>
              <Card className="p-4 bg-muted/30 dark:bg-muted/20">
                <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground/80 mb-1">
                  <Users className="w-4 h-4" />
                  Team Size
                </div>
                <div className="font-semibold">{caseStudy.teamSize}</div>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <div className="w-2 h-6 bg-red-500 rounded-full"></div>
                Challenge
              </h3>
              <p className="text-muted-foreground dark:text-muted-foreground/80 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <div className="w-2 h-6 bg-blue-500 rounded-full"></div>
                Solution
              </h3>
              <p className="text-muted-foreground dark:text-muted-foreground/80 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                Results
              </h3>
              <ul className="space-y-3">
                {caseStudy.results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground dark:text-muted-foreground/80">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-muted/60 dark:bg-muted/40 text-foreground dark:text-foreground border border-border/30 dark:border-border/50"
                  >
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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesCategory = selectedCategory === "All" || study.category === selectedCategory;
    const matchesIndustry = selectedIndustry === "All" || study.industry === selectedIndustry;
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesIndustry && matchesSearch;
  });

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
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative section bg-gradient-to-br from-background via-muted/30 to-background dark:from-background dark:via-muted/10 dark:to-background overflow-hidden pb-12">
        <div className="absolute inset-0">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >  
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  <Award size={16} />
                </motion.span>
                <span className="text-sm font-medium">Success Stories</span>
              </motion.div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent-teal to-primary bg-clip-text text-transparent leading-tight px-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }}
            >
              Case Studies
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground dark:text-muted-foreground/90 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Explore how we've helped businesses transform their digital presence and achieve measurable results through innovative solutions and strategic thinking.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Filters and Search - Reduced top padding */}
      <section className="py-6 bg-background border-b border-border/30 dark:border-border/50 mt-0">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground dark:text-muted-foreground/70" />
              <Input
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/60 dark:bg-background/40 border-border/50 dark:border-border/60"
              />
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground dark:text-muted-foreground/70" />
                <span className="text-sm font-medium text-muted-foreground dark:text-muted-foreground/80">Filter by:</span>
              </div>
              
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              <div className="flex gap-2">
                {industries.map((industry) => (
                  <Button
                    key={industry}
                    variant={selectedIndustry === industry ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedIndustry(industry)}
                    className="rounded-full"
                  >
                    {industry}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="section bg-background">
        <div className="container-custom">
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-muted/30 dark:bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground dark:text-muted-foreground/70" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No case studies found</h3>
              <p className="text-muted-foreground dark:text-muted-foreground/80">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((caseStudy) => (
                <CaseStudyCard 
                  key={caseStudy.id}
                  caseStudy={caseStudy}
                  onViewDetails={handleOpenDetails}
                />
              ))}
            </div>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20" // Increased top margin
          >
            <Card className="inline-block p-10 bg-gradient-to-r from-primary/20 to-accent-teal/20 dark:from-primary/30 dark:to-accent-teal/30 border-2 border-primary/30 dark:border-primary/40 shadow-2xl dark:shadow-primary/20 rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-3xl md:text-4xl font-bold mb-5 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Ready to Start Your Project?</h3>
              <p className="text-lg md:text-xl text-muted-foreground dark:text-muted-foreground/90 mb-8 max-w-lg mx-auto leading-relaxed">
                Let's discuss how we can help transform your digital presence and achieve similar results.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-gradient-to-r from-primary to-accent-teal hover:from-primary/90 hover:to-accent-teal/90 px-10 py-7 text-xl font-bold shadow-lg hover:shadow-xl dark:shadow-primary/20 dark:hover:shadow-primary/40">
                  Get in Touch
                </Button>
              </motion.div>
            </Card>
          </motion.div>
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
