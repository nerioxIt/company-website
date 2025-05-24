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
  Shield,
  Award,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" }
];

const commitments = [
  { text: "Quality Assurance", icon: Shield },
  { text: "24/7 Support", icon: Clock },
  { text: "Award Winning Team", icon: Award }
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
    href: "#Footer"
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
    <footer className="relative bg-gradient-to-br from-background via-background to-muted/40 dark:from-background dark:via-background dark:to-muted/20 text-foreground py-6 sm:py-8 border-t border-border/50 dark:border-border/60 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.07]" />
      </div>

      <div className="container-custom relative z-10 max-w-6xl mx-auto px-3 sm:px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-10 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-8">
          {/* Company Info */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-4 space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <Logo darkMode={isDark} className="w-8 h-8 sm:w-auto sm:h-auto" />
              <h3 className="text-base sm:text-lg font-bold text-foreground dark:text-foreground">CQ Group</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground/90 leading-relaxed">
              Delivering innovative technology solutions that transform businesses and create exceptional digital experiences.
            </p>
            
            <div className="flex space-x-1 sm:space-x-2 pt-2 sm:pt-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`p-1.5 sm:p-2 rounded-lg hover:bg-muted/60 dark:hover:bg-muted/40 transition-all duration-200 text-muted-foreground border border-border/20 dark:border-border/30 ${social.color}`}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Our Commitment */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-3 space-y-2 sm:space-y-3">
            <h3 className="text-xs font-bold mb-2 text-foreground dark:text-foreground uppercase tracking-wider">
              Our Commitment
            </h3>
            <div className="space-y-1.5 sm:space-y-3">
              {commitments.map((item, index) => (
                <div key={index} className="flex items-center gap-1.5 sm:gap-2">
                  <div className="p-1 sm:p-1.5 bg-primary/10 rounded-md">
                    <item.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground/90">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-3 space-y-2 sm:space-y-3">
            <h3 className="text-xs font-bold mb-2 text-foreground dark:text-foreground uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="grid grid-cols-1 gap-y-1 sm:gap-y-2">
              {quickLinks.slice(0, 4).map((link) => (
                <Link 
                  key={link.name}
                  to={link.href} 
                  className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground/90 hover:text-primary dark:hover:text-primary-foreground transition-colors duration-200 flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center">
                    <ArrowRight className="mr-1 h-2 w-2 sm:h-3 sm:w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
            
            {/* Newsletter - Hidden on smallest screens, shown from sm up */}
            <div className="hidden sm:block pt-2 sm:pt-3">
              <h4 className="text-xs font-medium mb-1 sm:mb-2">Stay updated:</h4>
              <form onSubmit={handleSubmit} className="flex space-x-1">
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-xs sm:text-sm h-7 sm:h-9 bg-background/60 dark:bg-background/40 border-border/50 dark:border-border/60 focus:border-primary dark:focus:border-primary-foreground transition-all duration-200"
                />
                <Button 
                  type="submit" 
                  size="sm"
                  className="h-7 sm:h-9 px-2 sm:px-3 bg-primary hover:bg-primary/90 transition-all duration-200"
                >
                  <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info + Bottom Bar */}
        <div className="border-t border-border/50 dark:border-border/60 pt-4 sm:pt-5">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4 mb-3 md:mb-0 text-[10px] sm:text-xs">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-1 sm:gap-2 text-muted-foreground dark:text-muted-foreground/90 hover:text-primary dark:hover:text-white transition-colors duration-200"
                >
                  <contact.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                  <span className="truncate max-w-[150px] sm:max-w-none">{contact.text}</span>
                </a>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5 text-[10px] sm:text-xs text-muted-foreground">
              <span>&copy; {new Date().getFullYear()} CQ Group</span>
              <div className="flex gap-3 sm:gap-5">
                {["Privacy", "Terms", "Cookies"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
