
import { Logo } from "@/components/ui/Logo";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  ArrowRight, 
  Heart,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Award,
  Users,
  Zap
} from "lucide-react";
import { Card } from "@/components/ui/card";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" }
];

const services = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Digital Marketing",
  "E-commerce Solutions",
  "Cloud Services"
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com", color: "hover:text-blue-500" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "hover:text-blue-400" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-600" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com", color: "hover:text-pink-500" }
];

const contactInfo = [
  {
    icon: Mail,
    text: "info@lovable.com",
    href: "mailto:info@lovable.com"
  },
  {
    icon: Phone,
    text: "+1 (555) 555-5555",
    href: "tel:+15555555555"
  },
  {
    icon: MapPin,
    text: "123 Tech Street, San Francisco, CA 94103",
    href: "#"
  }
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "1000+", label: "Projects Completed" },
  { icon: Zap, value: "8+", label: "Years Experience" }
];

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for subscribing to our newsletter!");
      setEmail("");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-background via-background to-muted/40 dark:from-background dark:via-background dark:to-muted/20 text-foreground pt-24 pb-8 border-t border-border/50 dark:border-border/60 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-teal/5 dark:bg-accent-teal/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
      </div>

      <div className="container-custom relative z-10">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent-teal/10 dark:from-primary/20 dark:to-accent-teal/20 border border-primary/20 dark:border-primary/30 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <stat.icon className="w-12 h-12 text-primary dark:text-primary-foreground mx-auto" />
                  <div className="text-3xl font-bold text-foreground dark:text-foreground">{stat.value}</div>
                  <div className="text-muted-foreground dark:text-muted-foreground/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Info */}
          <motion.div className="lg:col-span-1 space-y-6" variants={itemVariants}>
            <div className="space-y-4">
              <Logo />
              <p className="text-muted-foreground dark:text-muted-foreground/90 leading-relaxed">
                Creating digital solutions that drive business growth and enhance user experiences through innovative technology and creative design.
              </p>
            </div>
            
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-3 text-muted-foreground dark:text-muted-foreground/90 hover:text-primary dark:hover:text-primary-foreground transition-colors duration-300 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <contact.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">{contact.text}</span>
                </motion.a>
              ))}
            </div>

            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`p-3 rounded-xl hover:bg-muted/60 dark:hover:bg-muted/40 transition-all duration-300 text-muted-foreground group border border-border/30 dark:border-border/50 hover:border-primary/30 dark:hover:border-primary/50 ${social.color}`}
                  aria-label={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-8 text-foreground dark:text-foreground bg-gradient-to-r from-primary to-accent-teal bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground dark:text-muted-foreground/90 hover:text-primary dark:hover:text-primary-foreground transition-all duration-300 block py-2 px-3 rounded-lg hover:bg-muted/30 dark:hover:bg-muted/20 border border-transparent hover:border-border/30 dark:hover:border-border/50 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-8 text-foreground dark:text-foreground bg-gradient-to-r from-primary to-accent-teal bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link 
                    to="/services" 
                    className="text-muted-foreground dark:text-muted-foreground/90 hover:text-primary dark:hover:text-primary-foreground transition-all duration-300 block py-2 px-3 rounded-lg hover:bg-muted/30 dark:hover:bg-muted/20 border border-transparent hover:border-border/30 dark:hover:border-border/50 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      {service}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-8 text-foreground dark:text-foreground bg-gradient-to-r from-primary to-accent-teal bg-clip-text text-transparent">
              Stay Updated
            </h3>
            
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground dark:text-muted-foreground/90 leading-relaxed">
                Subscribe to our newsletter for the latest updates, insights, and digital innovation trends.
              </p>
              
              <Card className="p-6 bg-muted/30 dark:bg-muted/20 border border-border/30 dark:border-border/50">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-background/60 dark:bg-background/40 border-border/50 dark:border-border/60 focus:border-primary dark:focus:border-primary-foreground transition-all duration-300 rounded-xl pr-12"
                    />
                    <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground dark:text-muted-foreground/70" />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-accent-teal hover:from-primary/90 hover:to-accent-teal/90 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl group"
                  >
                    <Send className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    Subscribe
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </form>
              </Card>

              <div className="text-xs text-muted-foreground dark:text-muted-foreground/70 leading-relaxed">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-border/50 dark:border-border/60 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground dark:text-muted-foreground/90">
              <span>&copy; {new Date().getFullYear()} Lovable Digital Agency. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500" /> for amazing businesses
              </span>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-muted-foreground dark:text-muted-foreground/90 hover:text-primary dark:hover:text-primary-foreground transition-colors duration-300"
                  whileHover={{ y: -1 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
