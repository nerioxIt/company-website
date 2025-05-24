
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Code, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  ShoppingCart, 
  Cloud,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Users,
  Award
} from "lucide-react";

// Helper function to get detailed process descriptions
const getProcessDescription = (step: string, serviceTitle: string): string => {
  const descriptions: Record<string, Record<string, string>> = {
    "Requirements gathering and analysis": {
      "Web Development": "We conduct thorough stakeholder interviews and technical analysis to understand your business goals, target audience, and functional requirements.",
      "Mobile Apps": "We analyze your mobile app requirements, target platforms, user personas, and technical specifications to create a comprehensive project roadmap.",
      "UI/UX Design": "We research your brand, target audience, and design preferences through detailed discovery sessions and competitive analysis.",
      "Digital Marketing": "We audit your current digital presence, analyze competitors, and identify key performance indicators and marketing objectives.",
      "E-commerce": "We evaluate your product catalog, business processes, payment requirements, and integration needs for your online store.",
      "Cloud Solutions": "We assess your current infrastructure, scalability needs, security requirements, and migration strategy for cloud adoption."
    },
    "UI/UX design and prototyping": {
      "Web Development": "Our design team creates wireframes, mockups, and interactive prototypes that ensure optimal user experience and visual appeal.",
      "Mobile Apps": "We design intuitive mobile interfaces with platform-specific guidelines, creating interactive prototypes for user testing and feedback.",
      "UI/UX Design": "We develop comprehensive design systems, user journey maps, and high-fidelity prototypes with detailed interaction specifications.",
      "Digital Marketing": "We design compelling marketing materials, landing pages, and campaign assets that align with your brand and convert visitors.",
      "E-commerce": "We craft user-friendly shopping experiences with optimized product pages, checkout flows, and mobile-responsive designs.",
      "Cloud Solutions": "We design scalable architecture diagrams and user interfaces for cloud-based applications and management dashboards."
    },
    "Frontend and backend development": {
      "Web Development": "We build robust, scalable applications using modern technologies, ensuring clean code, security best practices, and optimal performance.",
      "Mobile Apps": "We develop native or cross-platform mobile applications with seamless backend integration and optimal device performance.",
      "UI/UX Design": "We collaborate with development teams to implement designs with pixel-perfect accuracy and smooth user interactions.",
      "Digital Marketing": "We develop landing pages, marketing automation tools, and analytics dashboards to support your marketing campaigns.",
      "E-commerce": "We build secure, scalable e-commerce platforms with payment processing, inventory management, and customer account features.",
      "Cloud Solutions": "We implement cloud-native applications with microservices architecture, auto-scaling, and distributed database systems."
    },
    "Testing and quality assurance": {
      "Web Development": "Comprehensive testing including unit tests, integration tests, performance testing, and cross-browser compatibility verification.",
      "Mobile Apps": "Rigorous testing across multiple devices, operating systems, and app store compliance to ensure flawless user experience.",
      "UI/UX Design": "User testing sessions, accessibility audits, and design validation to ensure the final product meets usability standards.",
      "Digital Marketing": "A/B testing, campaign performance analysis, and conversion optimization to maximize marketing ROI and effectiveness.",
      "E-commerce": "Payment processing tests, security audits, and user experience testing to ensure safe and smooth shopping experiences.",
      "Cloud Solutions": "Load testing, security assessments, disaster recovery testing, and performance optimization for cloud infrastructure."
    },
    "Deployment and maintenance": {
      "Web Development": "Smooth deployment to production servers with ongoing maintenance, updates, and technical support to ensure optimal performance.",
      "Mobile Apps": "App store submission, deployment assistance, and ongoing updates with new features and performance improvements.",
      "UI/UX Design": "Design handoff documentation, ongoing design support, and iterative improvements based on user feedback and analytics.",
      "Digital Marketing": "Campaign launch, continuous monitoring, optimization, and detailed reporting to track and improve marketing performance.",
      "E-commerce": "Store launch support, ongoing maintenance, feature updates, and performance monitoring to ensure smooth operations.",
      "Cloud Solutions": "Production deployment, monitoring setup, automated backups, and 24/7 support for cloud infrastructure management."
    }
  };

  return descriptions[step]?.[serviceTitle] || "Professional execution of this critical project phase with attention to detail and quality.";
};

// Helper function to get technology icon URLs
const getTechnologyIcon = (tech: string): string => {
  const iconMap: Record<string, string> = {
    // Frontend Technologies
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "Nuxt.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
    "Svelte": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
    "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    "Sass": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    
    // Backend Technologies
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
    "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "Ruby": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    "Rails": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg",
    ".NET": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    
    // Mobile Technologies
    "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    "Swift": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    "Kotlin": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "Objective-C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg",
    "Ionic": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg",
    "Xamarin": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg",
    
    // Databases
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    "SQLite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    
    // Cloud & DevOps
    "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    "Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    "Google Cloud": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    "Jenkins": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    "Terraform": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    
    // Design Tools
    "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "Adobe XD": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
    "Sketch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
    "Photoshop": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    "Illustrator": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    
    // CMS & E-commerce
    "WordPress": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    "Shopify": "https://cdn.worldvectorlogo.com/logos/shopify.svg",
    "WooCommerce": "https://cdn.worldvectorlogo.com/logos/woocommerce.svg",
    "Magento": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg",
    "Drupal": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg",
    
    // Marketing Tools
    "Google Analytics": "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg",
    "Google Ads": "https://cdn.worldvectorlogo.com/logos/google-ads-2.svg",
    "Facebook Ads": "https://cdn.worldvectorlogo.com/logos/facebook-7.svg",
    "Mailchimp": "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg",
    "HubSpot": "https://cdn.worldvectorlogo.com/logos/hubspot-2.svg",
    "SEMrush": "https://cdn.worldvectorlogo.com/logos/semrush-1.svg"
  };
  
  return iconMap[tech] || "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
};

const services = [
  {
    id: "web-development",
    title: "Web Development",
    icon: Code,
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    description: "Our web development services focus on creating responsive, scalable, and performant websites and web applications tailored to your business needs.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Custom web application development",
      "E-commerce solutions",
      "Progressive Web Apps (PWA)",
      "Web portal development",
      "Content Management Systems",
      "API development and integration"
    ],
    process: [
      "Requirements gathering and analysis",
      "UI/UX design and prototyping",
      "Frontend and backend development",
      "Testing and quality assurance",
      "Deployment and maintenance"
    ],
    technologies: ["React", "Node.js", "Vue.js", "Next.js", "Angular", "Laravel", "WordPress"],
    stats: { projects: "150+", satisfaction: "98%" }
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    icon: Smartphone,
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
    description: "We develop native and cross-platform mobile applications that offer seamless user experiences across devices.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Native iOS app development",
      "Native Android app development",
      "Cross-platform app development",
      "Mobile app UI/UX design",
      "App testing and deployment",
      "App maintenance and support"
    ],
    process: [
      "App concept and strategy",
      "Wireframing and prototyping",
      "UI/UX design",
      "Development and testing",
      "App store submission",
      "Post-launch support"
    ],
    technologies: ["React Native", "Swift", "Kotlin", "Flutter", "Ionic"],
    stats: { projects: "80+", satisfaction: "96%" }
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    icon: Palette,
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    description: "Our design services focus on creating intuitive, engaging, and aesthetically pleasing digital experiences.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "User experience (UX) design",
      "User interface (UI) design",
      "Wireframing and prototyping",
      "Visual design",
      "Design systems",
      "Usability testing"
    ],
    process: [
      "User research and analysis",
      "Information architecture",
      "Wireframing and prototyping",
      "Visual design",
      "User testing",
      "Implementation support"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
    stats: { projects: "200+", satisfaction: "99%" }
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: TrendingUp,
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    description: "Our digital marketing services help businesses increase their online visibility, attract more leads, and convert them into customers.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) advertising",
      "Social media marketing",
      "Email marketing",
      "Content marketing",
      "Analytics and reporting"
    ],
    process: [
      "Marketing audit and strategy",
      "Campaign planning and setup",
      "Content creation",
      "Campaign execution",
      "Monitoring and optimization",
      "Reporting and analysis"
    ],
    technologies: ["Google Analytics", "Google Ads", "Facebook Ads", "Mailchimp", "HubSpot", "SEMrush"],
    stats: { projects: "120+", satisfaction: "95%" }
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    icon: ShoppingCart,
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
    description: "We build custom e-commerce solutions that help businesses sell products and services online effectively.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Custom e-commerce websites",
      "Shopping cart implementation",
      "Payment gateway integration",
      "Inventory management",
      "Order processing and fulfillment",
      "Customer relationship management"
    ],
    process: [
      "E-commerce strategy",
      "Platform selection",
      "Design and development",
      "Integration with third-party systems",
      "Testing and launch",
      "Maintenance and support"
    ],
    technologies: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Stripe", "PayPal"],
    stats: { projects: "90+", satisfaction: "97%" }
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    icon: Cloud,
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    description: "Our cloud services help businesses leverage the power of cloud computing for scalability, reliability, and cost efficiency.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Cloud migration",
      "Cloud infrastructure setup",
      "Serverless application development",
      "DevOps and CI/CD",
      "Cloud security",
      "Managed cloud services"
    ],
    process: [
      "Assessment and planning",
      "Architecture design",
      "Migration or implementation",
      "Testing and validation",
      "Deployment",
      "Monitoring and optimization"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    stats: { projects: "70+", satisfaction: "98%" }
  }
];

const ServiceCard = ({ service, index, onLearnMore }: { service: typeof services[0], index: number, onLearnMore: (serviceId: string) => void }) => {
  const Icon = service.icon;
  
  const handleLearnMore = () => {
    onLearnMore(service.id);
    // Smooth scroll to the detailed tabs section
    const element = document.getElementById('detailed-tabs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="h-full group cursor-pointer"
    >
      <Card className="h-full overflow-hidden group-hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 dark:hover:border-primary/50 bg-gradient-to-br from-card to-card/95 backdrop-blur-sm relative">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Enhanced image section */}
        <div className="relative h-52 overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Floating icon with enhanced styling */}
          <motion.div 
            className={`absolute top-4 left-4 p-3 rounded-2xl ${service.color} backdrop-blur-md shadow-lg border border-white/20`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="w-6 h-6" />
          </motion.div>
          
          {/* Enhanced stats badges */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div className="flex flex-col gap-2">
              <Badge variant="secondary" className="bg-white/95 text-black font-semibold shadow-lg backdrop-blur-sm w-fit">
                <Award className="w-3 h-3 mr-1" />
                {service.stats.projects}
              </Badge>
              <Badge variant="secondary" className="bg-primary/95 text-white font-semibold shadow-lg backdrop-blur-sm w-fit">
                <CheckCircle className="w-3 h-3 mr-1" />
                {service.stats.satisfaction}
              </Badge>
            </div>
            
            {/* Interactive hover element */}
            <motion.div 
              className="opacity-0 group-hover:opacity-100 transition-all duration-300"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
            >
              <div className="bg-white/20 backdrop-blur-md rounded-full p-2 border border-white/30">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Enhanced content section */}
        <div className="relative z-10">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between text-xl group-hover:text-primary transition-colors duration-300">
              <span>{service.title}</span>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5 text-primary" />
              </motion.div>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300">
              {service.description}
            </p>
            
            {/* Enhanced technology badges */}
            <div className="space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {service.technologies.slice(0, 3).map((tech, idx) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge 
                      variant="outline" 
                      className="text-xs font-medium hover:bg-primary/10 hover:border-primary/30 transition-all duration-200 cursor-pointer"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
                {service.technologies.length > 3 && (
                  <Badge 
                    variant="outline" 
                    className="text-xs bg-muted/50 hover:bg-primary/10 transition-all duration-200"
                  >
                    +{service.technologies.length - 3} more
                  </Badge>
                )}
              </div>
              
              {/* Key features preview - Always visible */}
              <div className="space-y-2 transition-all duration-500">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Key Features:
                </div>
                <div className="flex flex-wrap gap-1">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Interactive CTA button - Always visible */}
            <motion.div 
              className="pt-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button 
                onClick={handleLearnMore}
                className="w-full bg-gradient-to-r from-primary/90 to-accent-teal/90 text-white py-2.5 rounded-lg font-medium text-sm hover:from-primary hover:to-accent-teal transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("web-development");

  const handleLearnMore = (serviceId: string) => {
    setActiveTab(serviceId);
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background via-50% to-accent-teal/10">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/3 to-accent-teal/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Main Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent-teal/10 text-primary dark:text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-primary/20 backdrop-blur-sm"
              >
                <Zap className="w-4 h-4" />
                Premium Digital Services
                <motion.div 
                  className="w-2 h-2 bg-primary dark:text-white rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-primary via-accent-teal to-primary bg-clip-text text-transparent">
                  Transform
                </span>
                <br />
                <span className="text-foreground">Your Digital</span>
                <br />
                <span className="bg-gradient-to-r from-accent-teal via-primary to-accent-teal bg-clip-text text-transparent">
                  Presence
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground max-w-2xl lg:max-w-none mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We offer a comprehensive range of cutting-edge digital services designed to help your business thrive in today's competitive landscape. From web development to cloud solutions, we've got you covered.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.a 
                  href="#services-grid"
                  className="btn-primary px-8 py-4 text-lg font-semibold group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a 
                  href="/contact"
                  className="btn-outline px-8 py-4 text-lg font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Quote
                </motion.a>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  { icon: Shield, text: "100% Secure", color: "text-green-500" },
                  { icon: Users, text: "Expert Team", color: "text-blue-500" },
                  { icon: Award, text: "Award Winning", color: "text-purple-500" }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="font-medium text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Stats Cards */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {[
                  { number: "500+", label: "Projects Completed", icon: CheckCircle, color: "text-green-500" },
                  { number: "98%", label: "Client Satisfaction", icon: Award, color: "text-purple-500" },
                  { number: "24/7", label: "Support Available", icon: Shield, color: "text-blue-500" },
                  { number: "10+", label: "Years Experience", icon: Users, color: "text-orange-500" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      <div className={`text-3xl font-bold ${stat.color}`}>
                        {stat.number}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Featured Service Preview */}
              <motion.div
                className="bg-gradient-to-br from-primary/10 via-card/80 to-accent-teal/10 backdrop-blur-sm p-6 rounded-2xl border border-primary/20 shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Quick Start Package</h3>
                    <p className="text-sm text-muted-foreground">Perfect for small businesses</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  {["Website Design", "Mobile Optimization", "Basic SEO"].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <motion.button 
                  className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section id="services-grid" className="section bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container-custom">
          {/* Enhanced Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent-teal/10 text-primary dark:text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20"
            >
              <Zap className="w-4 h-4" />
              Our Expertise
            </motion.div>
            
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-primary via-accent-teal to-primary bg-clip-text text-transparent">
                Core Services
              </span>
              <br />
              <span className="text-foreground text-3xl lg:text-4xl">
                That Drive Results
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our comprehensive suite of digital solutions designed to accelerate your business growth and transform your digital presence with cutting-edge technology.
            </motion.p>
            
            
          </motion.div>

          {/* Enhanced Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index} 
                onLearnMore={handleLearnMore}
              />
            ))}
          </motion.div>

          {/* Additional Services Preview */}
          <motion.div
            className="bg-gradient-to-br from-primary/5 via-card to-accent-teal/5 rounded-3xl p-8 lg:p-12 mb-16 border border-primary/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-accent-teal bg-clip-text text-transparent">
                  Need Something Custom?
                </span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We also offer custom solutions tailored to your specific business needs. From consultation to implementation, we're here to help.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Users, title: "Consultation", desc: "Strategic planning and technical guidance" },
                { icon: Code, title: "Custom Development", desc: "Bespoke solutions for unique requirements" },
                { icon: Shield, title: "Support & Maintenance", desc: "Ongoing support and system maintenance" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-card/50 rounded-2xl border border-border/50 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className={`inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-4`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <motion.a 
                href="/contact"
                className="btn-primary px-8 py-4 text-lg font-semibold inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Discuss Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Enhanced Detailed Service Tabs */}
          <motion.div
            id="detailed-tabs"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-card via-card/95 to-muted/10 rounded-3xl p-8 lg:p-12 border border-border/50 backdrop-blur-sm"
          >
            <div className="text-center mb-12">
              <motion.h3 
                className="text-3xl lg:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-primary to-accent-teal bg-clip-text text-transparent">
                  Detailed Service Breakdown
                </span>
              </motion.h3>
              <motion.p 
                className="text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Explore our services in detail - from features and processes to technologies and success metrics.
              </motion.p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-12 h-auto p-2 bg-gradient-to-r from-muted/30 via-muted/50 to-muted/30 rounded-2xl backdrop-blur-sm border border-border/50">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <TabsTrigger 
                          value={service.id} 
                          className="text-xs flex flex-col gap-2 p-4 h-auto data-[state=active]:bg-white dark:data-[state=active]:bg-card data-[state=active]:shadow-lg rounded-xl transition-all duration-300 hover:scale-105 group"
                        >
                          <div className={`p-2 rounded-lg ${service.color} group-data-[state=active]:scale-110 transition-transform duration-300`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="hidden sm:inline font-medium">{service.title}</span>
                        </TabsTrigger>
                      </motion.div>
                    );
                  })}
                </TabsList>
              </motion.div>
              
              {services.map((service, serviceIndex) => {
                const Icon = service.icon;
                return (
                  <TabsContent key={service.id} value={service.id}>
                    <motion.div 
                      className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="lg:col-span-2 space-y-8">
                        {/* Service Header */}
                        <motion.div 
                          className="flex items-center gap-6 p-6 bg-gradient-to-r from-primary/5 to-accent-teal/5 rounded-2xl border border-primary/10"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                        >
                          <div className={`p-4 rounded-2xl ${service.color} shadow-lg`}>
                            <Icon className="w-10 h-10" />
                          </div>
                          <div className="flex-1">
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-2">{service.title}</h2>
                            <p className="text-muted-foreground text-lg">Professional {service.title.toLowerCase()} solutions</p>
                          </div>
                        </motion.div>
                        
                        {/* Service Description */}
                        <motion.div
                          className="bg-card/50 p-6 rounded-2xl border border-border/50"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>
                        </motion.div>
                        
                        {/* Key Features */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="p-2 bg-green-500/10 rounded-lg">
                              <CheckCircle className="w-6 h-6 text-green-500" />
                            </div>
                            Key Features & Capabilities
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.features.map((feature, idx) => (
                              <motion.div 
                                key={idx} 
                                className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-muted/30 to-muted/20 border border-border/30 hover:border-primary/20 transition-all duration-300 group"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.4 + idx * 0.05 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                              >
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-sm font-medium leading-relaxed group-hover:text-primary transition-colors duration-300">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                        
                        {/* Enhanced Our Process */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          <div className="mb-8">
                            <motion.div 
                              className="flex items-center gap-3 mb-4"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.5 }}
                            >
                              <div className="p-3 bg-gradient-to-br from-primary/20 to-accent-teal/20 rounded-xl border border-primary/20">
                                <Zap className="w-7 h-7 text-primary" />
                              </div>
                              <div>
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent-teal bg-clip-text text-transparent">
                                  Our Proven Process
                                </h3>
                                <p className="text-muted-foreground mt-1">Streamlined approach for guaranteed success</p>
                              </div>
                            </motion.div>
                          </div>
                          
                          {/* Interactive Process Timeline */}
                          <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-accent-teal"></div>
                            
                            <div className="space-y-6">
                              {service.process.map((step, idx) => {
                                const isEven = idx % 2 === 0;
                                const processIcons = [
                                  <Users className="w-5 h-5" />,
                                  <Zap className="w-5 h-5" />,
                                  <CheckCircle className="w-5 h-5" />,
                                  <Award className="w-5 h-5" />,
                                  <ArrowRight className="w-5 h-5" />
                                ];
                                
                                return (
                                  <motion.div 
                                    key={idx} 
                                    className={`relative flex items-start gap-6 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} group`}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 + idx * 0.15 }}
                                  >
                                    {/* Step Number & Icon */}
                                    <motion.div 
                                      className="relative flex-shrink-0 z-10"
                                      whileHover={{ scale: 1.1 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent-teal text-white flex items-center justify-center text-lg font-bold shadow-xl border-4 border-background relative overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                                        <motion.div
                                          className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                                          initial={{ x: '-100%' }}
                                          whileHover={{ x: '100%' }}
                                          transition={{ duration: 0.6 }}
                                        />
                                        <span className="relative z-10">{idx + 1}</span>
                                      </div>
                                      
                                      {/* Floating Icon */}
                                      <motion.div 
                                        className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br from-accent-teal to-primary rounded-full flex items-center justify-center text-white shadow-lg"
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                      >
                                        {processIcons[idx] || <CheckCircle className="w-4 h-4" />}
                                      </motion.div>
                                    </motion.div>
                                    
                                    {/* Step Content */}
                                    <motion.div 
                                      className={`flex-1 ${isEven ? 'lg:text-left' : 'lg:text-right'}`}
                                      whileHover={{ x: isEven ? 5 : -5 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <div className={`relative p-6 rounded-2xl bg-gradient-to-br from-card/90 via-card/95 to-muted/20 border border-border/30 backdrop-blur-sm group-hover:border-primary/30 transition-all duration-500 ${isEven ? '' : 'lg:ml-auto lg:max-w-md'} shadow-lg group-hover:shadow-xl`}>
                                        {/* Background Pattern */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        {/* Content */}
                                        <div className="relative z-10">
                                          <div className={`flex items-center gap-3 mb-3 ${isEven ? 'justify-start' : 'lg:justify-end'}`}>
                                            <motion.div 
                                              className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent-teal/10 rounded-full text-xs font-semibold text-primary"
                                              initial={{ opacity: 0, scale: 0.8 }}
                                              animate={{ opacity: 1, scale: 1 }}
                                              transition={{ delay: 0.7 + idx * 0.1 }}
                                            >
                                              Step {idx + 1}
                                            </motion.div>
                                            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent"></div>
                                          </div>
                                          
                                          <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                                            {step}
                                          </h4>
                                          
                                          <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                                            {getProcessDescription(step, service.title)}
                                          </p>
                                          
                                          {/* Progress Indicator */}
                                          <motion.div 
                                            className="mt-4 h-1 bg-muted/30 rounded-full overflow-hidden"
                                            initial={{ width: 0 }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: 0.8, delay: 0.9 + idx * 0.1 }}
                                          >
                                            <motion.div 
                                              className="h-full bg-gradient-to-r from-primary to-accent-teal rounded-full"
                                              initial={{ width: '0%' }}
                                              animate={{ width: `${((idx + 1) / service.process.length) * 100}%` }}
                                              transition={{ duration: 1, delay: 1 + idx * 0.15 }}
                                            />
                                          </motion.div>
                                        </div>
                                        
                                        {/* Decorative Elements */}
                                        <div className={`absolute top-4 ${isEven ? 'right-4' : 'left-4'} w-8 h-8 bg-gradient-to-br from-primary/10 to-accent-teal/10 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-300`}>
                                          <div className="w-3 h-3 bg-gradient-to-br from-primary to-accent-teal rounded-full"></div>
                                        </div>
                                      </div>
                                    </motion.div>
                                  </motion.div>
                                );
                              })}
                            </div>
                            
                            {/* Timeline End Marker */}
                            <motion.div 
                              className="relative flex justify-center mt-8"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6, delay: 1.5 }}
                            >
                              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-xl border-4 border-background relative overflow-hidden">
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                                <CheckCircle className="w-8 h-8 relative z-10" />
                              </div>
                              <div className="absolute -bottom-8 text-center">
                                <div className="text-sm font-semibold text-green-600">Project Complete!</div>
                              </div>
                            </motion.div>
                          </div>
                          
                          {/* Process Summary Card */}
                          <motion.div
                            className="mt-8 p-6 bg-gradient-to-br from-primary/5 via-card/90 to-accent-teal/5 rounded-2xl border border-primary/10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.8 }}
                          >
                            <div className="flex items-center gap-4 mb-4">
                              <div className="p-2 bg-primary/10 rounded-lg">
                                <Award className="w-5 h-5 text-primary" />
                              </div>
                              <h4 className="font-bold text-lg">Why Our Process Works</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="text-center p-4 bg-card/50 rounded-xl border border-border/30">
                                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                                <div className="text-sm text-muted-foreground">Transparent Communication</div>
                              </div>
                              <div className="text-center p-4 bg-card/50 rounded-xl border border-border/30">
                                <div className="text-2xl font-bold text-green-500 mb-2">24/7</div>
                                <div className="text-sm text-muted-foreground">Project Monitoring</div>
                              </div>
                              <div className="text-center p-4 bg-card/50 rounded-xl border border-border/30">
                                <div className="text-2xl font-bold text-accent-teal mb-2">98%</div>
                                <div className="text-sm text-muted-foreground">On-Time Delivery</div>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                      
                      {/* Enhanced Sidebar */}
                      <div className="space-y-6">
                        {/* Service Showcase Card */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <Card className="overflow-hidden border-2 border-primary/10 hover:border-primary/20 transition-all duration-300">
                            <div className="h-56 relative overflow-hidden group">
                              <img 
                                src={service.image} 
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                              
                              {/* Floating Stats */}
                              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                <motion.div 
                                  className="text-white"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.3 }}
                                >
                                  <div className="text-3xl font-bold">{service.stats.projects}</div>
                                  <div className="text-sm opacity-90 font-medium">Completed Projects</div>
                                </motion.div>
                                <motion.div 
                                  className="text-white text-right"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.4 }}
                                >
                                  <div className="text-3xl font-bold">{service.stats.satisfaction}</div>
                                  <div className="text-sm opacity-90 font-medium">Client Satisfaction</div>
                                </motion.div>
                              </div>
                              
                              {/* Service Icon Overlay */}
                              <div className={`absolute top-4 right-4 p-3 rounded-2xl ${service.color} backdrop-blur-md shadow-lg border border-white/20`}>
                                <Icon className="w-6 h-6" />
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                        
                        {/* Enhanced Technologies & Tools */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <Card className="border-border/50 bg-gradient-to-br from-card to-card/90 overflow-hidden">
                            <CardHeader className="pb-4">
                              <CardTitle className="flex items-center gap-3 text-xl">
                                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent-teal/20 rounded-xl border border-primary/20">
                                  <Code className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                  <span className="bg-gradient-to-r from-primary to-accent-teal bg-clip-text text-transparent">
                                    Technologies & Tools
                                  </span>
                                  <p className="text-sm text-muted-foreground font-normal mt-1">
                                    Cutting-edge tech stack for optimal results
                                  </p>
                                </div>
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {service.technologies.map((tech, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ 
                                      duration: 0.4, 
                                      delay: 0.4 + idx * 0.08,
                                      type: "spring",
                                      stiffness: 100 
                                    }}
                                    whileHover={{ 
                                      scale: 1.05, 
                                      y: -5,
                                      transition: { duration: 0.2 }
                                    }}
                                    className="group"
                                  >
                                    <div className="relative p-4 rounded-xl bg-gradient-to-br from-muted/40 via-muted/30 to-muted/20 border border-border/30 hover:border-primary/30 transition-all duration-300 cursor-pointer backdrop-blur-sm hover:shadow-lg">
                                      {/* Background Glow Effect */}
                                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                      
                                      {/* Content */}
                                      <div className="relative z-10 flex flex-col items-center text-center space-y-2">
                                        {/* Technology Icon */}
                                        <div className="w-10 h-10 rounded-lg bg-white/90 dark:bg-gray-800/90 p-2 shadow-sm group-hover:shadow-md transition-all duration-300 flex items-center justify-center">
                                          <img 
                                            src={getTechnologyIcon(tech)} 
                                            alt={tech}
                                            className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                                            onError={(e) => {
                                              // Fallback to a generic icon if the specific one fails to load
                                              e.currentTarget.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
                                            }}
                                          />
                                        </div>
                                        
                                        {/* Technology Name */}
                                        <span className="text-xs font-semibold text-foreground/80 group-hover:text-primary transition-colors duration-300 leading-tight">
                                          {tech}
                                        </span>
                                        
                                        {/* Expertise Level Indicator */}
                                        <div className="w-full h-1 bg-muted/50 rounded-full overflow-hidden">
                                          <motion.div 
                                            className="h-full bg-gradient-to-r from-primary to-accent-teal rounded-full"
                                            initial={{ width: "0%" }}
                                            animate={{ width: "85%" }}
                                            transition={{ 
                                              duration: 1, 
                                              delay: 0.6 + idx * 0.1,
                                              ease: "easeOut"
                                            }}
                                          />
                                        </div>
                                      </div>
                                      
                                      {/* Floating Particles Effect */}
                                      <div className="absolute top-2 right-2 w-1 h-1 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-accent-teal/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                              
                              {/* Technology Stats */}
                              <motion.div 
                                className="mt-6 pt-4 border-t border-border/20"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                              >
                                <div className="grid grid-cols-3 gap-4 text-center">
                                  <div className="space-y-1">
                                    <div className="text-lg font-bold text-primary">{service.technologies.length}</div>
                                    <div className="text-xs text-muted-foreground">Technologies</div>
                                  </div>
                                  <div className="space-y-1">
                                    <div className="text-lg font-bold text-green-500">5+</div>
                                    <div className="text-xs text-muted-foreground">Years Exp.</div>
                                  </div>
                                  <div className="space-y-1">
                                    <div className="text-lg font-bold text-accent-teal">Expert</div>
                                    <div className="text-xs text-muted-foreground">Level</div>
                                  </div>
                                </div>
                              </motion.div>
                            </CardContent>
                          </Card>
                        </motion.div>
                        
                        {/* Quick Facts */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          <Card className="border-border/50 bg-gradient-to-br from-card to-card/90">
                            <CardHeader>
                              <CardTitle className="flex items-center gap-3 text-xl">
                                <div className="p-2 bg-accent-teal/10 rounded-lg">
                                  <Award className="w-5 h-5 text-accent-teal" />
                                </div>
                                Quick Facts
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-3 bg-muted/30 rounded-lg">
                                  <div className="text-2xl font-bold text-primary">{service.stats.projects}</div>
                                  <div className="text-xs text-muted-foreground">Projects</div>
                                </div>
                                <div className="text-center p-3 bg-muted/30 rounded-lg">
                                  <div className="text-2xl font-bold text-green-500">{service.stats.satisfaction}</div>
                                  <div className="text-xs text-muted-foreground">Satisfaction</div>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Average Project Duration</span>
                                  <span className="font-medium">2-8 weeks</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span>Team Size</span>
                                  <span className="font-medium">3-6 experts</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span>Support Period</span>
                                  <span className="font-medium">6 months</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                        
                        {/* CTA Card */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                        >
                          <Card className="bg-gradient-to-br from-primary/10 via-card/90 to-accent-teal/10 border-primary/20 backdrop-blur-sm">
                            <CardContent className="p-6">
                              <div className="text-center mb-6">
                                <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  Reach out to discuss how our {service.title.toLowerCase()} services can benefit your business.
                                </p>
                              </div>
                              
                              <div className="space-y-3">
                                <motion.a 
                                  href="/contact" 
                                  className="btn-primary w-full flex items-center justify-center gap-2 py-3"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  Get Started
                                  <ArrowRight className="w-4 h-4" />
                                </motion.a>
                                
                                <motion.button 
                                  className="w-full border border-primary/20 bg-transparent text-primary py-2.5 rounded-lg font-medium text-sm hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  View Portfolio
                                  <Users className="w-4 h-4" />
                                </motion.button>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </div>
                    </motion.div>
                  </TabsContent>
                );
              })}
            </Tabs>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
