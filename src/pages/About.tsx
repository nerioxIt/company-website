
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    emoji: "👨‍💼",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "John has over 15 years of experience in software development and digital strategy.",
    skills: ["Leadership", "Strategy", "Innovation"]
  },
  {
    name: "Emily Johnson",
    role: "Lead Designer",
    emoji: "🎨",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "Emily brings a wealth of experience in user experience and interface design.",
    skills: ["UI/UX", "Design Systems", "Prototyping"]
  },
  {
    name: "Michael Chen",
    role: "CTO",
    emoji: "💻",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "Michael oversees all technical aspects of the company with a focus on innovation.",
    skills: ["Architecture", "DevOps", "AI/ML"]
  },
  {
    name: "Sarah Williams",
    role: "Marketing Director",
    emoji: "📈",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "Sarah drives our marketing strategy with a data-driven approach to growth.",
    skills: ["Digital Marketing", "Analytics", "Growth"]
  },
];

const values = [
  {
    title: "Innovation",
    emoji: "💡",
    description: "We embrace new technologies and approaches to solve complex problems.",
    details: "Constantly exploring cutting-edge technologies to deliver next-generation solutions.",
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.66347 17H14.3364M11.9999 3V4M18.3639 5.63604L17.6568 6.34315M21 11.9999H20M4 11.9999H3M6.34309 6.34315L5.63599 5.63604M8.46441 15.5356C6.51179 13.5829 6.51179 10.4171 8.46441 8.46449C10.417 6.51187 13.5829 6.51187 15.5355 8.46449C17.4881 10.4171 17.4881 13.5829 15.5355 15.5356L14.9884 16.0827C14.3555 16.7155 13.9999 17.5739 13.9999 18.469V19C13.9999 20.1046 13.1045 21 11.9999 21C10.8954 21 9.99995 20.1046 9.99995 19V18.469C9.99995 17.5739 9.6444 16.7155 9.01151 16.0827L8.46441 15.5356Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Excellence",
    emoji: "⭐",
    description: "We are committed to delivering the highest quality in everything we do.",
    details: "Setting industry standards through meticulous attention to detail and superior craftsmanship.",
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.0489 2.92707C11.3483 2.00576 12.6517 2.00576 12.9511 2.92707L14.0247 6.21885C14.1478 6.58141 14.4826 6.82918 14.8648 6.82918H18.3416C19.2489 6.82918 19.6449 7.99377 18.9273 8.52786L16.1842 10.5016C15.8745 10.7274 15.7436 11.1232 15.8667 11.4858L16.9403 14.7776C17.2396 15.6989 16.2241 16.4657 15.5065 15.9316L12.7634 13.9579C12.4537 13.7321 12.0251 13.7321 11.7154 13.9579L8.97226 15.9316C8.25467 16.4657 7.23918 15.6989 7.53854 14.7776L8.61211 11.4858C8.73515 11.1232 8.60427 10.7274 8.29456 10.5016L5.55141 8.52786C4.83382 7.99377 5.22977 6.82918 6.13706 6.82918H9.61389C9.99608 6.82918 10.3309 6.58141 10.454 6.21885L11.5276 2.92707C11.827 2.00576 13.1304 2.00576 13.4298 2.92707L11.0489 2.92707Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Integrity",
    emoji: "🛡️",
    description: "We maintain the highest ethical standards in all our business dealings.",
    details: "Building trust through transparency, honesty, and consistent ethical practices.",
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M20.6179 5.98434C20.4132 5.99472 20.2072 5.99997 20 5.99997C16.9265 5.99997 14.123 4.84453 11.9999 2.94434C9.87691 4.84446 7.07339 5.99985 4 5.99985C3.79277 5.99985 3.58678 5.9946 3.38213 5.98422C3.1327 6.94783 3 7.95842 3 9.00001C3 14.5915 6.82432 19.2898 12 20.622C17.1757 19.2898 21 14.5915 21 9.00001C21 7.95847 20.8673 6.94791 20.6179 5.98434Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Collaboration",
    emoji: "🤝",
    description: "We believe in the power of teamwork and meaningful partnerships.",
    details: "Fostering strong relationships and working together to achieve exceptional results.",
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 19C15 16.7909 12.3137 15 9 15C5.68629 15 3 16.7909 3 19M16.5 6L18 7.5L21 4.5M9 12C6.79086 12 5 10.2091 5 8C5 5.79086 6.79086 4 9 4C11.2091 4 13 5.79086 13 8C13 10.2091 11.2091 12 9 12ZM16 10C18.2091 10 20 8.20914 20 6C20 3.79086 18.2091 2 16 2C13.7909 2 12 3.79086 12 6C12 8.20914 13.7909 10 16 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent-teal/20">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
        <div className="container-custom relative py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <span className="text-2xl">📖</span>
              </div>
              <h1 className="text-white mb-6 font-heading font-bold">Our Story</h1>
              <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                <p>
                  Founded in 2015, Lovable Digital Agency started with a simple mission: to help businesses thrive in the digital landscape through innovative solutions and exceptional service.
                </p>
                <p>
                  From a small team of passionate developers working out of a garage, we've grown into a full-service digital agency with expertise spanning web development, mobile apps, UI/UX design, digital marketing, and cloud services.
                </p>
                <p>
                  Our journey has been defined by continuous learning, innovation, and an unwavering commitment to client success. Today, we're proud to serve clients worldwide.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-lg">
                  Join Our Team
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  Our Portfolio
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl flex flex-col items-center justify-center text-center border border-white/20">
                  <div className="text-6xl font-bold text-white mb-4">Lovable</div>
                  <div className="text-white/80 text-lg mb-6">Digital Agency</div>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white">8+</div>
                      <div className="text-white/70 text-sm">Years</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white">200+</div>
                      <div className="text-white/70 text-sm">Projects</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white">50+</div>
                      <div className="text-white/70 text-sm">Clients</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-white/70 text-sm">Support</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-teal/30 backdrop-blur-sm rounded-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-accent-amber/30 backdrop-blur-sm rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/95 to-accent-teal relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        <div className="container-custom text-center relative">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <span className="text-3xl">🎯</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Our Mission</h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 leading-relaxed">
            To empower businesses with innovative digital solutions that drive growth, enhance user experiences, 
            and create lasting value in an ever-evolving digital landscape.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent-teal rounded-full mb-6">
              <span className="text-2xl text-white">👥</span>
            </div>
            <h2 className="text-primary mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet the talented individuals behind our innovative solutions and exceptional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-muted/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative p-0">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <span className="text-2xl">{member.emoji}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative p-6">
                  <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </CardTitle>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-white transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent-teal rounded-full mb-6">
              <span className="text-2xl text-white">💎</span>
            </div>
            <h2 className="text-primary mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The fundamental principles that guide everything we do at Lovable Digital Agency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-muted/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent-teal rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    {value.icon}
                  </div>
                  <div className="text-4xl mb-4">{value.emoji}</div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative text-center">
                  <p className="text-muted-foreground mb-4 leading-relaxed">{value.description}</p>
                  <p className="text-sm text-muted-foreground/80 italic">{value.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-teal to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">😊</span>
              </div>
              <div className="text-4xl font-bold text-accent-teal mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-teal to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <div className="text-4xl font-bold text-accent-teal mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
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
            <h2 className="text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join the growing list of successful businesses that have transformed their digital presence with Lovable Digital Agency.
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
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
