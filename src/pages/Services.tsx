
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    icon: "🌐",
    description: "Our web development services focus on creating responsive, scalable, and performant websites and web applications tailored to your business needs.",
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
    technologies: ["React", "Node.js", "Vue.js", "Next.js", "Angular", "Laravel", "WordPress"]
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    icon: "📱",
    description: "We develop native and cross-platform mobile applications that offer seamless user experiences across devices.",
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
    technologies: ["React Native", "Swift", "Kotlin", "Flutter", "Ionic"]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    icon: "🎨",
    description: "Our design services focus on creating intuitive, engaging, and aesthetically pleasing digital experiences.",
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
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: "📈",
    description: "Our digital marketing services help businesses increase their online visibility, attract more leads, and convert them into customers.",
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
    technologies: ["Google Analytics", "Google Ads", "Facebook Ads", "Mailchimp", "HubSpot", "SEMrush"]
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    icon: "🛒",
    description: "We build custom e-commerce solutions that help businesses sell products and services online effectively.",
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
    technologies: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Stripe", "PayPal"]
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    icon: "☁️",
    description: "Our cloud services help businesses leverage the power of cloud computing for scalability, reliability, and cost efficiency.",
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
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent-teal/20">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
        <div className="container-custom relative py-20 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-3xl">⚡</span>
            </div>
            <h1 className="text-white mb-6 font-heading font-bold">
              Comprehensive Digital Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your business with our cutting-edge digital solutions. From web development to cloud services, 
              we deliver exceptional results that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-lg">
                Explore Services
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      

      {/* Detailed Services Tabs */}
      <section className="section bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">Service Details</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive deep into our services and discover how we can help transform your business
            </p>
          </div>

          <Tabs defaultValue="web-development" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto p-1 bg-white shadow-lg rounded-xl">
                {services.map((service) => (
                  <TabsTrigger 
                    key={service.id} 
                    value={service.id} 
                    className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg transition-all duration-300"
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <span className="text-sm font-medium whitespace-nowrap">{service.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-8">
                    <Card className="h-full shadow-lg border-0 bg-white">
                      <CardHeader className="bg-gradient-to-r from-primary to-accent-teal text-white rounded-t-lg">
                        <div className="flex items-center gap-4">
                          <div className="text-5xl">{service.icon}</div>
                          <div>
                            <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                            <p className="text-white/90 text-lg">{service.description}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                              <span className="w-2 h-2 bg-accent-teal rounded-full"></span>
                              Key Features
                            </h3>
                            <ul className="space-y-3">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start group">
                                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-accent-teal to-primary rounded-full flex items-center justify-center mr-3 mt-0.5">
                                    <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                              <span className="w-2 h-2 bg-primary rounded-full"></span>
                              Our Process
                            </h3>
                            <ol className="space-y-4">
                              {service.process.map((step, idx) => (
                                <li key={idx} className="flex items-start group">
                                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-accent-teal rounded-full flex items-center justify-center mr-4 text-white font-bold text-sm">
                                    {idx + 1}
                                  </div>
                                  <div className="pt-1">
                                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                                      {step}
                                    </span>
                                  </div>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Sidebar */}
                  <div className="lg:col-span-4 space-y-6">
                    {/* Technologies Card */}
                    <Card className="shadow-lg border-0 bg-white">
                      <CardHeader className="bg-gradient-to-r from-muted to-muted/50">
                        <CardTitle className="flex items-center gap-2">
                          <span className="text-2xl">🛠️</span>
                          Technologies
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex flex-wrap gap-3">
                          {service.technologies.map((tech, idx) => (
                            <Badge 
                              key={idx} 
                              className="bg-gradient-to-r from-primary to-accent-teal text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* CTA Card */}
                    <Card className="shadow-lg border-0 bg-gradient-to-br from-accent-teal/10 to-primary/10 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 to-primary/5"></div>
                      <CardContent className="relative p-8 text-center">
                        <div className="text-4xl mb-4">🚀</div>
                        <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          Let's discuss how our {service.title.toLowerCase()} services can transform your business and drive growth.
                        </p>
                        <div className="space-y-3">
                          <Button 
                            className="w-full bg-gradient-to-r from-primary to-accent-teal hover:shadow-lg hover:scale-105 transition-all duration-300"
                            size="lg"
                          >
                            Start Your Project
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full hover:bg-primary hover:text-white transition-all duration-300"
                          >
                            Schedule Consultation
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Stats Card */}
                    <Card className="shadow-lg border-0 bg-white">
                      <CardContent className="p-6">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-primary">50+</div>
                            <div className="text-sm text-muted-foreground">Projects</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-accent-teal">98%</div>
                            <div className="text-sm text-muted-foreground">Success Rate</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">24/7</div>
                            <div className="text-sm text-muted-foreground">Support</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-accent-teal">5⭐</div>
                            <div className="text-sm text-muted-foreground">Rating</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      
    </div>
  );
};

export default Services;
