import { Logo } from "@/components/ui/Logo";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
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
  ExternalLink
} from "lucide-react";

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
    text: "info@cqgroup.com",
    href: "mailto:info@cqgroup.com"
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

export const Footer = () => {
  const [email, setEmail] = useState("");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for subscribing to our newsletter!");
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-background via-background to-muted/40 dark:from-background dark:via-background dark:to-muted/20 text-foreground pt-10 pb-6 border-t border-border/50 dark:border-border/60 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.07]" />
      </div>

      <div className="container-custom relative z-10 max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          {/* Company Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-3">
              <Logo darkMode={isDark} />
              <h3 className="text-lg font-bold text-foreground dark:text-foreground">CQ Group</h3>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground/90 leading-relaxed">
                Delivering innovative technology solutions that transform businesses and create exceptional digital experiences.
              </p>
            </div>
            
            <div className="flex space-x-2 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`p-2 rounded-lg hover:bg-muted/60 dark:hover:bg-muted/40 transition-all duration-200 text-muted-foreground border border-border/20 dark:border-border/30 ${social.color}`}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links & Services */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold mb-4 text-foreground dark:text-foreground uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-sm text-muted-foreground dark:text-muted-foreground/90 hover:text-primary dark:hover:text-primary-foreground transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center">
                        <ArrowRight className="mr-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-bold mb-4 text-foreground dark:text-foreground uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <Link 
                      to="/services" 
                      className="text-sm text-muted-foreground dark:text-muted-foreground/90 hover:text-primary dark:hover:text-primary-foreground transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center">
                        <ArrowRight className="mr-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        {service}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold mb-4 text-foreground dark:text-foreground uppercase tracking-wider">
              Get In Touch
            </h3>
            
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-2 text-muted-foreground dark:text-muted-foreground/90 hover:text-primary dark:hover:text-primary-foreground transition-colors duration-200 group text-sm"
                >
                  <contact.icon className="w-4 h-4 flex-shrink-0" />
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>

            <div className="pt-3">
              <form onSubmit={handleSubmit} className="flex space-x-1">
                <Input
                  type="email"
                  placeholder="Subscribe to newsletter"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-sm h-9 bg-background/60 dark:bg-background/40 border-border/50 dark:border-border/60 focus:border-primary dark:focus:border-primary-foreground transition-all duration-200"
                />
                <Button 
                  type="submit" 
                  size="sm"
                  className="h-9 px-3 bg-primary hover:bg-primary/90 transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 dark:border-border/60 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-xs text-muted-foreground dark:text-muted-foreground/90">
              &copy; {new Date().getFullYear()} CQ Group. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-xs">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-muted-foreground dark:text-muted-foreground/90 hover:text-primary dark:hover:text-primary-foreground transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
