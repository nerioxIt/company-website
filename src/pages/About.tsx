
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Lightbulb, Heart, Award, Globe, Zap, Shield, Rocket, TrendingUp, Building, Star, Trophy, MapPin, Linkedin, Twitter, Github, Mail, Phone, Calendar, MapPin as Location, Quote } from "lucide-react";

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);
  return (
    <span ref={ref} className="text-3xl font-bold text-primary dark:text-white">
      {count}{suffix}
    </span>
  );
};

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "John has over 15 years of experience in software development and digital strategy. He founded the company with a vision to transform how businesses engage with their digital presence.",
    expertise: ["Strategy", "Leadership", "Innovation", "Digital Transformation"],
    social: { 
      linkedin: "https://linkedin.com/in/johnsmith", 
      twitter: "https://twitter.com/johnsmith",
      github: "https://github.com/johnsmith",
      email: "john@company.com"
    },
    quote: "Innovation distinguishes between a leader and a follower.",
    location: "San Francisco, CA",
    experience: "15+ Years",
    projects: "500+",
    achievements: ["Forbes 30 Under 30", "TechCrunch Disruptor Award", "Digital Innovation Leader 2023"]
  },
  {
    name: "Emily Johnson",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "Emily brings a wealth of experience in user experience and interface design, with a passion for creating intuitive and beautiful digital experiences that users love.",
    expertise: ["UI/UX", "Design Systems", "Prototyping", "User Research"],
    social: { 
      linkedin: "https://linkedin.com/in/emilyjohnson", 
      twitter: "https://twitter.com/emilyjohnson",
      github: "https://github.com/emilyjohnson",
      email: "emily@company.com"
    },
    quote: "Good design is invisible, great design is unforgettable.",
    location: "New York, NY",
    experience: "12+ Years",
    projects: "300+",
    achievements: ["Design Excellence Award", "UX Innovation Prize", "Awwwards Site of the Year"]
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "Michael oversees all technical aspects of the company with a focus on innovation, scalability, and cutting-edge technology implementations that drive business growth.",
    expertise: ["Architecture", "DevOps", "Security", "Cloud Computing"],
    social: { 
      linkedin: "https://linkedin.com/in/michaelchen", 
      twitter: "https://twitter.com/michaelchen",
      github: "https://github.com/michaelchen",
      email: "michael@company.com"
    },
    quote: "Technology is best when it brings people together.",
    location: "Seattle, WA",
    experience: "18+ Years",
    projects: "400+",
    achievements: ["Tech Innovator of the Year", "Cloud Architecture Expert", "Open Source Contributor"]
  },
  {
    name: "Sarah Williams",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "Sarah drives our marketing strategy with a data-driven approach to growth, specializing in digital marketing campaigns that deliver measurable results and ROI.",
    expertise: ["Marketing", "Analytics", "Growth", "Brand Strategy"],
    social: { 
      linkedin: "https://linkedin.com/in/sarahwilliams", 
      twitter: "https://twitter.com/sarahwilliams",
      github: "https://github.com/sarahwilliams",
      email: "sarah@company.com"
    },
    quote: "Great marketing makes the company look smart. Great product makes the customer feel smart.",
    location: "Austin, TX",
    experience: "10+ Years",
    projects: "250+",
    achievements: ["Marketing Excellence Award", "Growth Hacker of the Year", "Digital Campaign Champion"]
  },
  {
    name: "David Rodriguez",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "David is a full-stack developer with expertise in modern web technologies and a passion for clean, efficient code that scales with business needs.",
    expertise: ["Full-Stack", "React", "Node.js", "Database Design"],
    social: { 
      linkedin: "https://linkedin.com/in/davidrodriguez", 
      twitter: "https://twitter.com/davidrodriguez",
      github: "https://github.com/davidrodriguez",
      email: "david@company.com"
    },
    quote: "Code is like humor. When you have to explain it, it's bad.",
    location: "Denver, CO",
    experience: "8+ Years",
    projects: "200+",
    achievements: ["Clean Code Champion", "Performance Optimization Expert", "Mentorship Award"]
  },
  {
    name: "Lisa Park",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "Lisa ensures projects are delivered on time and within budget while maintaining the highest quality standards. She's the bridge between vision and execution.",
    expertise: ["Project Management", "Agile", "Team Leadership", "Quality Assurance"],
    social: { 
      linkedin: "https://linkedin.com/in/lisapark", 
      twitter: "https://twitter.com/lisapark",
      github: "https://github.com/lisapark",
      email: "lisa@company.com"
    },
    quote: "Excellence is never an accident. It is always the result of high intention and skillful execution.",
    location: "Chicago, IL",
    experience: "9+ Years",
    projects: "350+",
    achievements: ["PM Excellence Award", "Agile Champion", "Client Satisfaction Leader"]
  }
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
  { 
    year: "2015", 
    title: "Company Founded", 
    description: "Started with a vision to transform digital experiences and help businesses thrive in the digital landscape",
    icon: Rocket,
    color: "from-blue-500 to-cyan-500",
    stats: "Founded by 3 passionate developers"
  },
  { 
    year: "2017", 
    title: "First Major Milestone", 
    description: "Reached our first 50 successful projects, establishing ourselves as a trusted partner in the industry",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    stats: "50+ Projects Delivered"
  },
  { 
    year: "2019", 
    title: "Team Expansion", 
    description: "Grew to a diverse team of 25+ talented professionals, expanding our capabilities across multiple disciplines",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    stats: "25+ Team Members"
  },
  { 
    year: "2021", 
    title: "Global Reach", 
    description: "Expanded our services to international markets, serving clients across 15+ countries worldwide",
    icon: Globe,
    color: "from-orange-500 to-red-500",
    stats: "15+ Countries Served"
  },
  { 
    year: "2023", 
    title: "Innovation Hub", 
    description: "Established our R&D center for emerging technologies, focusing on AI, blockchain, and advanced web solutions",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-500",
    stats: "R&D Investment: $500K+"
  },
  { 
    year: "2024", 
    title: "Industry Recognition", 
    description: "Celebrated delivering over 1000 successful projects and received multiple industry awards for excellence",
    icon: Trophy,
    color: "from-indigo-500 to-purple-500",
    stats: "1000+ Projects & 5 Awards"
  },
];

const About = () => {
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted/30 to-background dark:from-background dark:via-muted/10 dark:to-background overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent-teal/20 dark:from-primary/30 dark:to-accent-teal/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1], 
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-accent-teal/20 to-accent-amber/20 dark:from-accent-teal/30 dark:to-accent-amber/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 0.8, 1.2], 
              opacity: [0.3, 0.6, 0.3],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 right-20 w-4 h-4 bg-primary rounded-full"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-32 right-32 w-6 h-6 bg-accent-amber rounded-full"
            animate={{
              y: [0, 25, 0],
              x: [0, -15, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 left-20 w-3 h-3 bg-accent-teal rounded-full"
            animate={{
              y: [0, -20, 0],
              x: [0, 30, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent-teal/10 dark:from-primary/20 dark:to-accent-teal/20 rounded-full text-primary dark:text-white border border-primary/20 dark:border-primary/30 backdrop-blur-sm"
              >
                <Heart size={18} />
                <span className="text-sm font-semibold tracking-wide">Our Story</span>
              </motion.div>
              
              {/* Enhanced Title with Typewriter Effect */}              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block bg-gradient-to-r from-foreground via-primary to-accent-teal bg-clip-text text-transparent pb-2">
                    Crafting Digital
                  </span>
                  <span className="block bg-gradient-to-r from-accent-teal via-primary to-foreground bg-clip-text text-transparent">
                    Excellence
                  </span>
                  <motion.span 
                    className="block text-primary dark:text-white text-4xl md:text-5xl lg:text-6xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    Since 2015
                  </motion.span>
                </h1>
              </motion.div>
              
              {/* Enhanced Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-6 text-lg text-muted-foreground dark:text-muted-foreground/90 leading-relaxed"
              >
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >                  Founded with a simple mission: to help businesses <span className="text-primary dark:text-white font-semibold">thrive in the digital landscape</span> through innovative solutions and exceptional service.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  From a small team of passionate developers, we've grown into a <span className="text-accent-teal font-semibold">full-service digital agency</span> with expertise spanning web development, design, marketing, and e-commerce.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  Our journey has been defined by <span className="text-accent-amber font-semibold">continuous learning, innovation</span>, and an unwavering commitment to client success.
                </motion.p>
              </motion.div>

              {/* Enhanced Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="group bg-gradient-to-r from-primary to-accent-teal hover:from-primary/90 hover:to-accent-teal/90 px-8 py-6 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                    <Target className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Our Mission
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="group border-2 border-border dark:border-border/60 hover:border-primary dark:hover:border-primary px-8 py-6 rounded-xl text-lg font-semibold bg-background/60 dark:bg-background/40 backdrop-blur-sm hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300">
                    <Globe className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Global Impact
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Enhanced Stats Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Static Visual Elements */}
              <div className="relative z-10">
                <Card className="p-10 bg-background/70 dark:bg-background/50 backdrop-blur-2xl border border-border/50 dark:border-border/60 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-2xl overflow-hidden">
                  {/* Card Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mb-8"
                  >
                    <h3 className="text-2xl font-bold text-foreground dark:text-foreground mb-2">Our Impact</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent-teal mx-auto rounded-full"></div>
                  </motion.div>

                  {/* Enhanced Stats Grid */}
                  <div className="grid grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="text-center space-y-3 group"
                    >
                      <div className="transition-transform duration-300">
                        <AnimatedCounter end={500} suffix="+" />
                      </div>
                      <div className="text-sm text-muted-foreground dark:text-muted-foreground/80 font-medium tracking-wide">Happy Clients</div>
                      <div className="w-8 h-0.5 bg-primary mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      className="text-center space-y-3 group"
                    >
                      <div className="transition-transform duration-300">
                        <AnimatedCounter end={1000} suffix="+" />
                      </div>
                      <div className="text-sm text-muted-foreground dark:text-muted-foreground/80 font-medium tracking-wide">Projects</div>
                      <div className="w-8 h-0.5 bg-accent-teal mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="text-center space-y-3 group"
                    >
                      <div className="transition-transform duration-300">
                        <AnimatedCounter end={8} suffix="+" />
                      </div>
                      <div className="text-sm text-muted-foreground dark:text-muted-foreground/80 font-medium tracking-wide">Years</div>
                      <div className="w-8 h-0.5 bg-accent-amber mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.3 }}
                      className="text-center space-y-3 group"
                    >
                      <div className="transition-transform duration-300">
                        <AnimatedCounter end={98} suffix="%" />
                      </div>
                      <div className="text-sm text-muted-foreground dark:text-muted-foreground/80 font-medium tracking-wide">Satisfaction</div>
                      <div className="w-8 h-0.5 bg-green-500 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission Statement */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-accent-teal text-white relative overflow-hidden">
        {/* Clean Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          {/* Subtle Background Gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          {/* Mission Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <Target className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wide">Our Purpose</span>
            </div>
          </motion.div>

          {/* Mission Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
            {/* Left Side - Mission Statement */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                  <span className="block">Empowering</span>
                  <span className="block bg-gradient-to-r from-white via-accent-amber to-white bg-clip-text text-transparent">
                    Digital Dreams
                  </span>
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <p className="text-xl md:text-2xl leading-relaxed opacity-95">
                  To empower businesses with <span className="font-semibold text-accent-amber">innovative digital solutions</span> that drive growth, enhance user experiences, and create lasting value in an ever-evolving digital landscape.
                </p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                    >
                      <Zap className="w-4 h-4" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Innovation First</h4>
                      <p className="text-sm opacity-90 leading-relaxed">
                        Leveraging cutting-edge technologies to solve complex challenges
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                    >
                      <Users className="w-4 h-4" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Client Success</h4>
                      <p className="text-sm opacity-90 leading-relaxed">
                        Building lasting partnerships through exceptional results
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{ y: [-2, 2, -2] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                    >
                      <Globe className="w-4 h-4" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Global Impact</h4>
                      <p className="text-sm opacity-90 leading-relaxed">
                        Creating solutions that make a difference worldwide
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{ rotate: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                    >
                      <Award className="w-4 h-4" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Excellence</h4>
                      <p className="text-sm opacity-90 leading-relaxed">
                        Maintaining the highest standards in every project
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative lg:col-span-1"
            >
              <div className="relative">
                {/* Central Icon Container */}
                <div className="relative w-48 h-48 mx-auto bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
                  <Rocket className="w-20 h-20 text-accent-amber" />
                </div>

                {/* Animated Pulse Rings */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.1, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 border-2 border-white/30 rounded-full"
                />
                <motion.div
                  animate={{
                    scale: [1.5, 1.8, 1.5],
                    opacity: [0.2, 0.05, 0.2]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1, ease: "easeOut" }}
                  className="absolute inset-0 border border-white/20 rounded-full"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.15, 0, 0.15]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2, ease: "easeOut" }}
                  className="absolute inset-0 border border-white/15 rounded-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Mission CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                className="group border-2 border-white/30 hover:border-white hover:bg-white hover:text-primary text-white px-8 py-6 rounded-xl text-lg font-semibold bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                <MapPin className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                Start Your Journey
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="section bg-gradient-to-br from-background via-muted/20 to-background dark:from-background dark:via-muted/10 dark:to-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent-teal/10 dark:from-primary/20 dark:to-accent-teal/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-accent-amber/10 to-primary/10 dark:from-accent-amber/20 dark:to-primary/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 0.8, 1.2], 
              opacity: [0.3, 0.6, 0.3],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        </div>

        <div className="container-custom relative z-10">
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent-teal/10 dark:from-primary/20 dark:to-accent-teal/20 rounded-full text-primary dark:text-white border border-primary/20 dark:border-primary/30 mb-8 backdrop-blur-sm"
            >
              <Users size={20} />
              <span className="text-sm font-semibold tracking-wide">Meet The Team</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            >
              <span className="block bg-gradient-to-r from-foreground via-primary to-accent-teal bg-clip-text text-transparent">
                The Creative Minds
              </span>
              <span className="block bg-gradient-to-r from-accent-teal via-primary to-foreground bg-clip-text text-transparent">
                Behind The Magic
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-foreground dark:text-muted-foreground/90 max-w-4xl mx-auto leading-relaxed"
            >
              Meet the talented individuals who bring creativity, expertise, and passion to every project. 
              Our diverse team combines years of experience with fresh perspectives to deliver exceptional results.
            </motion.p>

            {/* Team Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 mt-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary dark:text-white">25+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-teal">100+</div>
                <div className="text-sm text-muted-foreground">Years Combined</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-amber">15+</div>
                <div className="text-sm text-muted-foreground">Specialties</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setActiveTeamMember(index)}
                onHoverEnd={() => setActiveTeamMember(null)}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden bg-background/80 dark:bg-background/60 backdrop-blur-xl border border-border/50 dark:border-border/60 hover:border-primary/40 dark:hover:border-primary/60 transition-all duration-500 hover:shadow-2xl dark:hover:shadow-primary/20 h-full">
                  {/* Image Container with Overlay */}
                  <div className="relative aspect-square overflow-hidden">
                    <motion.img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* Social Links Overlay */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100"
                    >
                      <div className="flex justify-center gap-3">
                        {member.social.linkedin && (
                          <motion.a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 bg-white/90 dark:bg-white/95 rounded-full flex items-center justify-center text-primary hover:bg-white transition-all duration-300 shadow-lg"
                          >
                            <Linkedin size={18} />
                          </motion.a>
                        )}
                        {member.social.twitter && (
                          <motion.a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 bg-white/90 dark:bg-white/95 rounded-full flex items-center justify-center text-primary hover:bg-white transition-all duration-300 shadow-lg"
                          >
                            <Twitter size={18} />
                          </motion.a>
                        )}
                        {member.social.github && (
                          <motion.a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 bg-white/90 dark:bg-white/95 rounded-full flex items-center justify-center text-primary hover:bg-white transition-all duration-300 shadow-lg"
                          >
                            <Github size={18} />
                          </motion.a>
                        )}
                        {member.social.email && (
                          <motion.a
                            href={`mailto:${member.social.email}`}
                            whileHover={{ scale: 1.2, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 bg-white/90 dark:bg-white/95 rounded-full flex items-center justify-center text-primary hover:bg-white transition-all duration-300 shadow-lg"
                          >
                            <Mail size={18} />
                          </motion.a>
                        )}
                      </div>
                    </motion.div>

                    {/* Quote Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="absolute top-4 left-4 right-4 opacity-0 group-hover:opacity-100"
                    >                      <div className="bg-white/95 dark:bg-gray-800/95 rounded-lg p-3 shadow-lg">
                        <Quote size={16} className="text-primary dark:text-primary mb-2" />
                        <p className="text-sm text-foreground dark:text-white font-medium italic">"{member.quote}"</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <CardContent className="p-6 space-y-6">
                    {/* Basic Info */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground dark:text-foreground group-hover:text-primary dark:group-hover:text-primary-foreground transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-primary dark:text-primary-foreground font-semibold">{member.role}</p>
                      </div>
                      
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground/90 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-border/30 dark:border-border/50">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary dark:text-white">{member.experience}</div>
                        <div className="text-xs text-muted-foreground">Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-accent-teal">{member.projects}</div>
                        <div className="text-xs text-muted-foreground">Projects</div>
                      </div>
                      <div className="text-center flex items-center justify-center">
                        <div className="flex items-center gap-1">
                          <Location size={14} className="text-accent-amber" />
                          <span className="text-xs text-muted-foreground">{member.location.split(',')[0]}</span>
                        </div>
                      </div>
                    </div>

                    {/* Expertise Tags */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground dark:text-foreground">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (                          <motion.span
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent-teal/10 dark:from-primary/20 dark:to-accent-teal/20 text-xs font-medium rounded-full border border-primary/20 dark:border-primary/30 text-primary dark:text-white hover:bg-primary/20 dark:hover:bg-primary/30 transition-all duration-300"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground dark:text-foreground">Notable Achievements</h4>
                      <div className="space-y-2">
                        {member.achievements.slice(0, 2).map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center gap-2">
                            <Trophy size={14} className="text-accent-amber flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                        {member.achievements.length > 2 && (
                          <div className="text-xs text-primary dark:text-primary-foreground font-medium">
                            +{member.achievements.length - 2} more achievements
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="pt-2"
                    >
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full group border-border dark:border-border/60 hover:border-primary dark:hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300"
                        onClick={() => window.open(member.social.linkedin, '_blank')}
                      >
                        <Linkedin size={14} className="mr-2 group-hover:rotate-12 transition-transform" />
                        Connect
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>        </div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary dark:text-white border border-primary/20 dark:border-primary/30 mb-6">
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
                      <h3 className="text-2xl font-bold text-foreground dark:text-foreground group-hover:text-primary dark:group-hover:text-white transition-colors">
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

      {/* Enhanced Timeline Section */}
      <section className="section bg-gradient-to-br from-background via-muted/20 to-background dark:from-background dark:via-muted/10 dark:to-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary dark:bg-primary/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent-teal dark:bg-accent-teal/60 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary dark:text-white border border-primary/20 dark:border-primary/30 mb-4 md:mb-6">
              <MapPin size={14} className="md:w-4 md:h-4" />
              <span className="text-xs md:text-sm font-medium">Our Journey</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground via-primary to-accent-teal bg-clip-text text-transparent px-4">
              Our Growth Story
            </h2>
            
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground dark:text-muted-foreground/90 max-w-4xl mx-auto leading-relaxed px-4">
              From a small startup to an industry leader - discover the key milestones that have shaped our evolution and commitment to digital excellence.
            </p>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Main Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent-teal to-primary dark:from-primary/80 dark:via-accent-teal/80 dark:to-primary/80 rounded-full shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-primary via-accent-teal to-primary dark:from-primary/60 dark:via-accent-teal/60 dark:to-primary/60 rounded-full animate-pulse opacity-50 dark:opacity-30"></div>
            </div>
            
            <div className="space-y-20 xl:space-y-24">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Timeline Content */}
                  <div className={`w-5/12 xl:w-2/5 ${index % 2 === 0 ? 'text-right pr-8 xl:pr-12' : 'text-left pl-8 xl:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group"
                    >
                      <Card className="p-6 xl:p-8 bg-background/90 dark:bg-background/80 backdrop-blur-xl border-2 border-border/30 dark:border-border/40 hover:border-primary/50 dark:hover:border-primary/60 transition-all duration-500 shadow-xl hover:shadow-2xl dark:hover:shadow-primary/20 dark:shadow-lg">
                        {/* Year Badge */}
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 xl:px-4 xl:py-2 bg-gradient-to-r ${milestone.color} text-white rounded-full text-sm font-bold mb-3 xl:mb-4 shadow-lg`}>
                          <milestone.icon size={16} />
                          {milestone.year}
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-3 xl:space-y-4">
                          <h3 className="text-xl xl:text-2xl font-bold text-foreground dark:text-foreground group-hover:text-primary dark:group-hover:text-primary-foreground transition-colors duration-300">
                            {milestone.title}
                          </h3>
                          
                          <p className="text-muted-foreground dark:text-muted-foreground/90 leading-relaxed text-base xl:text-lg">
                            {milestone.description}
                          </p>
                          
                          {/* Stats Badge */}
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/60 dark:bg-muted/40 text-foreground dark:text-foreground rounded-full text-sm font-medium border border-border/50 dark:border-border/30">
                            <Star size={14} className="text-primary dark:text-primary-foreground" />
                            {milestone.stats}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                  
                  {/* Timeline Node */}
                  <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 z-10"
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className={`relative w-14 h-14 xl:w-16 xl:h-16 bg-gradient-to-r ${milestone.color} rounded-full p-1 shadow-xl`}>
                      <div className="w-full h-full bg-background dark:bg-background rounded-full flex items-center justify-center border-4 border-background dark:border-background">
                        <milestone.icon className="w-5 h-5 xl:w-6 xl:h-6 text-foreground dark:text-foreground" />
                      </div>
                      
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${milestone.color} rounded-full opacity-30 dark:opacity-40 blur-lg animate-pulse`}></div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden px-4 sm:px-6">
            <div className="relative pl-6 sm:pl-8">
              {/* Mobile Timeline Line */}
              <div className="absolute left-3 sm:left-4 top-0 w-0.5 h-full bg-gradient-to-b from-primary via-accent-teal to-primary dark:from-primary/80 dark:via-accent-teal/80 dark:to-primary/80 rounded-full shadow-md">
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-accent-teal to-primary dark:from-primary/60 dark:via-accent-teal/60 dark:to-primary/60 rounded-full animate-pulse opacity-50 dark:opacity-30"></div>
              </div>

              <div className="space-y-8 sm:space-y-10 md:space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >

                    {/* Vertically aligned timeline node and year badge */}
                    <div className="flex items-center mb-2 sm:mb-3">
                      <motion.div 
                        className="z-10"
                        style={{ minWidth: '2rem' }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${milestone.color} rounded-full p-0.5 shadow-lg flex items-center justify-center`}>
                          <div className="w-full h-full bg-background dark:bg-background rounded-full flex items-center justify-center border-2 border-background dark:border-background">
                            <milestone.icon className="w-3 h-3 sm:w-4 sm:h-4 text-foreground dark:text-foreground" />
                          </div>
                        </div>
                      </motion.div>
                      <div className={`ml-2 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r ${milestone.color} text-white rounded-full text-xs sm:text-sm font-bold shadow-md`}>
                        {milestone.year}
                      </div>
                    </div>

                    {/* Mobile Content */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group"
                    >
                      <Card className="p-4 sm:p-5 md:p-6 bg-background/90 dark:bg-background/80 backdrop-blur-xl border border-border/60 dark:border-border/50 hover:border-primary/40 dark:hover:border-primary/60 transition-all duration-300 shadow-lg hover:shadow-xl dark:hover:shadow-primary/10 dark:shadow-md">
                        <div className="space-y-2 sm:space-y-3">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground dark:text-foreground group-hover:text-primary dark:group-hover:text-primary-foreground transition-colors duration-300">
                            {milestone.title}
                          </h3>
                          <p className="text-muted-foreground dark:text-muted-foreground/90 text-sm sm:text-base leading-relaxed">
                            {milestone.description}
                          </p>
                          {/* Mobile Stats Badge */}
                          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1 bg-muted/60 dark:bg-muted/50 text-foreground dark:text-foreground rounded-full text-xs sm:text-sm font-medium border border-border/50 dark:border-border/40">
                            <Star size={10} className="sm:w-3 sm:h-3 text-primary dark:text-primary-foreground" />
                            <span className="truncate">{milestone.stats}</span>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Tablet Timeline (md screens) */}
          <div className="hidden md:block lg:hidden">
            <div className="relative">
              {/* Tablet Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent-teal to-primary dark:from-primary/80 dark:via-accent-teal/80 dark:to-primary/80 rounded-full shadow-md">
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-accent-teal to-primary dark:from-primary/60 dark:via-accent-teal/60 dark:to-primary/60 rounded-full animate-pulse opacity-50 dark:opacity-30"></div>
              </div>
              
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ 
                      duration: 0.7, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 120
                    }}
                    className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* Tablet Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <motion.div
                        whileHover={{ scale: 1.03, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="group"
                      >
                        <Card className="p-6 bg-background/90 dark:bg-background/80 backdrop-blur-xl border-2 border-border/40 dark:border-border/50 hover:border-primary/50 dark:hover:border-primary/60 transition-all duration-500 shadow-lg hover:shadow-xl dark:hover:shadow-primary/15 dark:shadow-md">
                          {/* Tablet Year Badge */}
                          <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${milestone.color} text-white rounded-full text-sm font-bold mb-3 shadow-lg`}>
                            <milestone.icon size={14} />
                            {milestone.year}
                          </div>
                          
                          <div className="space-y-3">
                            <h3 className="text-xl font-bold text-foreground dark:text-foreground group-hover:text-primary dark:group-hover:text-primary-foreground transition-colors duration-300">
                              {milestone.title}
                            </h3>
                            
                            <p className="text-muted-foreground dark:text-muted-foreground/90 leading-relaxed text-base">
                              {milestone.description}
                            </p>
                            
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-muted/60 dark:bg-muted/50 text-foreground dark:text-foreground rounded-full text-sm font-medium border border-border/50 dark:border-border/40">
                              <Star size={12} className="text-primary dark:text-primary-foreground" />
                              {milestone.stats}
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    </div>
                    
                    {/* Tablet Timeline Node */}
                    <motion.div 
                      className="absolute left-1/2 transform -translate-x-1/2 z-10"
                      whileHover={{ scale: 1.25 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className={`relative w-12 h-12 bg-gradient-to-r ${milestone.color} rounded-full p-1 shadow-lg`}>
                        <div className="w-full h-full bg-background dark:bg-background rounded-full flex items-center justify-center border-3 border-background dark:border-background">
                          <milestone.icon className="w-5 h-5 text-foreground dark:text-foreground" />
                        </div>
                        <div className={`absolute inset-0 bg-gradient-to-r ${milestone.color} rounded-full opacity-30 dark:opacity-40 blur-md animate-pulse`}></div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
