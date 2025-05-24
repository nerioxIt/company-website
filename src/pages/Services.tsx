
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
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

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20 dark:hover:border-primary/40">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className={`absolute top-4 left-4 p-3 rounded-xl ${service.color} backdrop-blur-sm`}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2">
            <Badge variant="secondary" className="bg-white/90 text-black">
              {service.stats.projects} Projects
            </Badge>
            <Badge variant="secondary" className="bg-primary/90 text-white">
              {service.stats.satisfaction}
            </Badge>
          </div>
        </div>
        
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl">
            {service.title}
            <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">{service.description}</p>
          
          <div className="flex flex-wrap gap-1">
            {service.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {service.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{service.technologies.length - 4} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent-teal/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <motion.div 
          className="container-custom text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4" />
            Premium Digital Services
          </motion.div>
          
          <motion.h1 
            className="text-primary mb-6 bg-gradient-to-r from-primary via-accent-teal to-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Transform Your Digital Presence
          </motion.h1>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We offer a comprehensive range of cutting-edge digital services designed to help your business thrive in today's competitive landscape.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { icon: Shield, text: "100% Secure" },
              { icon: Users, text: "Expert Team" },
              { icon: Award, text: "Award Winning" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <item.icon className="w-4 h-4 text-primary" />
                {item.text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="section bg-background">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive suite of digital solutions designed to accelerate your business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* Detailed Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Tabs defaultValue="web-development" className="w-full">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-12 h-auto p-1 bg-muted/50">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <TabsTrigger 
                      key={service.id} 
                      value={service.id} 
                      className="text-xs flex flex-col gap-1 p-3 h-auto data-[state=active]:bg-white dark:data-[state=active]:bg-card"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{service.title}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <TabsContent key={service.id} value={service.id}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2 space-y-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`p-4 rounded-xl ${service.color}`}>
                            <Icon className="w-8 h-8" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                            <p className="text-muted-foreground">Professional {service.title.toLowerCase()} solutions</p>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>
                        
                        <div>
                          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            Key Features
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold mb-4">Our Process</h3>
                          <div className="space-y-3">
                            {service.process.map((step, idx) => (
                              <div key={idx} className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/50">
                                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                                  {idx + 1}
                                </div>
                                <span className="font-medium">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <Card className="overflow-hidden">
                          <div className="h-48 relative overflow-hidden">
                            <img 
                              src={service.image} 
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-4 text-white">
                              <div className="text-2xl font-bold">{service.stats.projects}</div>
                              <div className="text-sm opacity-90">Completed Projects</div>
                            </div>
                            <div className="absolute bottom-4 right-4 text-white text-right">
                              <div className="text-2xl font-bold">{service.stats.satisfaction}</div>
                              <div className="text-sm opacity-90">Client Satisfaction</div>
                            </div>
                          </div>
                        </Card>
                        
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <Code className="w-5 h-5" />
                              Technologies
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech, idx) => (
                                <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-gradient-to-br from-primary/5 to-accent-teal/5 border-primary/20">
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
                            <p className="mb-6 text-muted-foreground">
                              Reach out to discuss how our {service.title.toLowerCase()} services can benefit your business.
                            </p>
                            <motion.a 
                              href="/contact" 
                              className="btn-primary w-full block text-center"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              Get Started
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </motion.a>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
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
