
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Lightbulb, Heart, Award, Globe, Zap, Shield } from "lucide-react";

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "John has over 15 years of experience in software development and digital strategy.",
    expertise: ["Strategy", "Leadership", "Innovation"],
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Emily Johnson",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "Emily brings a wealth of experience in user experience and interface design.",
    expertise: ["UI/UX", "Design Systems", "Prototyping"],
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "Michael oversees all technical aspects of the company with a focus on innovation.",
    expertise: ["Architecture", "DevOps", "Security"],
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Sarah Williams",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "Sarah drives our marketing strategy with a data-driven approach to growth.",
    expertise: ["Marketing", "Analytics", "Growth"],
    social: { linkedin: "#", twitter: "#" }
  },
];

const values = [
  {
    title: "Innovation",
    description: "We embrace new technologies and approaches to solve complex problems and stay ahead of industry trends.",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Excellence",
    description: "We are committed to delivering the highest quality in everything we do, exceeding expectations consistently.",
    icon: Award,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our business dealings and client relationships.",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and meaningful partnerships to achieve extraordinary results.",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
];

const milestones = [
  { year: "2015", title: "Company Founded", description: "Started with a vision to transform digital experiences" },
  { year: "2017", title: "50+ Projects", description: "Reached our first major milestone in project delivery" },
  { year: "2019", title: "Team Expansion", description: "Grew to a team of 25+ talented professionals" },
  { year: "2021", title: "Global Reach", description: "Expanded services to international markets" },
  { year: "2023", title: "Innovation Hub", description: "Established our R&D center for emerging technologies" },
  { year: "2024", title: "1000+ Projects", description: "Celebrated delivering over 1000 successful projects" },
];

const About = () => {
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative section bg-gradient-to-br from-background via-muted/30 to-background dark:from-background dark:via-muted/10 dark:to-background overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-teal/10 dark:bg-accent-teal/20 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary dark:text-primary-foreground border border-primary/20 dark:border-primary/30 mb-6">
                <Heart size={16} />
                <span className="text-sm font-medium">Our Story</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Crafting Digital Excellence Since 2015
              </h1>
              
              <div className="space-y-6 text-lg text-muted-foreground dark:text-muted-foreground/90">
                <p>
                  Founded with a simple mission: to help businesses thrive in the digital landscape through innovative solutions and exceptional service.
                </p>
                <p>
                  From a small team of passionate developers, we've grown into a full-service digital agency with expertise spanning web development, design, marketing, and e-commerce.
                </p>
                <p>
                  Our journey has been defined by continuous learning, innovation, and an unwavering commitment to client success.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary px-8 py-6 rounded-xl">
                  <Target className="mr-2 w-5 h-5" />
                  Our Mission
                </Button>
                <Button variant="outline" className="border-2 border-border dark:border-border/60 hover:border-primary dark:hover:border-primary px-8 py-6 rounded-xl">
                  <Globe className="mr-2 w-5 h-5" />
                  Global Impact
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Card className="p-8 bg-background/60 dark:bg-background/40 backdrop-blur-xl border border-border/50 dark:border-border/60 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary dark:text-primary-foreground">500+</div>
                    <div className="text-sm text-muted-foreground dark:text-muted-foreground/80">Happy Clients</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary dark:text-primary-foreground">1000+</div>
                    <div className="text-sm text-muted-foreground dark:text-muted-foreground/80">Projects</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary dark:text-primary-foreground">8+</div>
                    <div className="text-sm text-muted-foreground dark:text-muted-foreground/80">Years</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary dark:text-primary-foreground">98%</div>
                    <div className="text-sm text-muted-foreground dark:text-muted-foreground/80">Satisfaction</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/95 to-accent-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Zap className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-95">
              To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary dark:text-primary-foreground border border-primary/20 dark:border-primary/30 mb-6">
              <Users size={16} />
              <span className="text-sm font-medium">Meet The Team</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              The Minds Behind The Magic
            </h2>
            
            <p className="text-xl text-muted-foreground dark:text-muted-foreground/90 max-w-3xl mx-auto">
              Meet the talented individuals who bring creativity, expertise, and passion to every project we undertake.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setActiveTeamMember(index)}
                onHoverEnd={() => setActiveTeamMember(null)}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden bg-background/60 dark:bg-background/40 backdrop-blur-sm border border-border/50 dark:border-border/60 hover:border-primary/30 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/10">
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground dark:text-foreground group-hover:text-primary dark:group-hover:text-primary-foreground transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-primary dark:text-primary-foreground font-medium">{member.role}</p>
                    </div>
                    
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground/90 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-muted/60 dark:bg-muted/40 text-xs font-medium rounded-full border border-border/30 dark:border-border/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="section bg-muted/30 dark:bg-muted/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary dark:text-primary-foreground border border-primary/20 dark:border-primary/30 mb-6">
              <Heart size={16} />
              <span className="text-sm font-medium">Our Values</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Principles That Guide Us
            </h2>
            
            <p className="text-xl text-muted-foreground dark:text-muted-foreground/90 max-w-3xl mx-auto">
              The core values that drive our culture, decision-making, and commitment to excellence in everything we do.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full p-8 bg-background/60 dark:bg-background/40 backdrop-blur-sm border border-border/50 dark:border-border/60 hover:border-primary/30 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/10">
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-full h-full bg-background dark:bg-background rounded-2xl flex items-center justify-center">
                          <value.icon className="w-8 h-8 text-foreground dark:text-foreground" />
                        </div>
                      </div>
                      <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`} />
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <h3 className="text-2xl font-bold text-foreground dark:text-foreground group-hover:text-primary dark:group-hover:text-primary-foreground transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground dark:text-muted-foreground/90 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground/90 max-w-3xl mx-auto">
              Key milestones that have shaped our growth and evolution as a leading digital agency.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-accent-teal"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="p-6 bg-background/60 dark:bg-background/40 backdrop-blur-sm border border-border/50 dark:border-border/60">
                      <div className="text-2xl font-bold text-primary dark:text-primary-foreground mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-foreground dark:text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground dark:text-muted-foreground/90">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary dark:bg-primary-foreground rounded-full border-4 border-background dark:border-background shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
