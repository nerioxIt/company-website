import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Users, 
  Zap, 
  Calendar,
  Star,
  ArrowRight,
  CheckCircle,
  HeadphonesIcon,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Quote,
  Shield,
  Target,
  Rocket,
  Award
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    value: "info@lovable.com",
    link: "mailto:info@lovable.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Monday to Friday from 9am to 6pm",
    value: "+1 (555) 555-5555",
    link: "tel:+15555555555",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come say hello at our office",
    value: "123 Tech Street, San Francisco",
    link: "#section",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our team in real-time",
    value: "Available 24/7",
    link: "#",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Calendar,
    title: "Book a Meeting",
    description: "Schedule a free consultation",
    value: "30-min free call",
    link: "#",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: HeadphonesIcon,
    title: "Support Center",
    description: "Get help with existing projects",
    value: "24/7 Support",
    link: "#",
    color: "from-teal-500 to-cyan-500",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com/company/lovable",
    color: "hover:text-blue-600",
  },
  {
    icon: Twitter,
    name: "Twitter",
    href: "https://twitter.com/lovable_dev",
    color: "hover:text-blue-400",
  },
  {
    icon: Facebook,
    name: "Facebook",
    href: "https://facebook.com/lovable",
    color: "hover:text-blue-500",
  },
  {
    icon: Instagram,
    name: "Instagram",
    href: "https://instagram.com/lovable_dev",
    color: "hover:text-pink-500",
  },
];

const workingHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM PST" },
  { day: "Sunday", hours: "Closed" },
];

const responsePromises = [
  {
    icon: CheckCircle,
    title: "Quick Response",
    description: "We respond to all inquiries within 24 hours",
    color: "text-green-500",
  },
  {
    icon: Shield,
    title: "Confidential",
    description: "Your project details are kept strictly confidential",
    color: "text-blue-500",
  },
  {
    icon: Target,
    title: "Tailored Solutions",
    description: "Custom proposals based on your specific needs",
    color: "text-purple-500",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    text: "The team's responsiveness and attention to detail made our project a huge success.",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    name: "Michael Chen",
    company: "Digital Solutions",
    text: "From initial contact to project delivery, the communication was exceptional.",
    rating: 5,
    image: "/placeholder.svg",
  },
];

const budgetOptions = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "Over $100,000"
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity, but most projects range from 4-16 weeks. We'll provide a detailed timeline during our initial consultation.",
    category: "Timeline"
  },
  {
    question: "Do you work with startups?",
    answer: "Absolutely! We love working with startups and understand the unique challenges they face. We offer flexible pricing and partnership options.",
    category: "Services"
  },
  {
    question: "What's included in your maintenance packages?",
    answer: "Our maintenance packages include security updates, performance monitoring, content updates, and technical support. We offer different tiers to match your needs.",
    category: "Support"
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes! We offer a complimentary 30-minute consultation to discuss your project requirements and provide initial recommendations.",
    category: "Consultation"
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web technologies including React, Next.js, Node.js, TypeScript, and various cloud platforms. We stay current with the latest industry trends.",
    category: "Technology"
  },
  {
    question: "How do you handle project communication?",
    answer: "We maintain regular communication through weekly progress updates, dedicated project managers, and use collaborative tools like Slack or Microsoft Teams.",
    category: "Communication"
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, we offer comprehensive post-launch support including bug fixes, performance optimization, and feature enhancements based on your chosen support plan.",
    category: "Support"
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely! We're experienced in collaborating with in-house teams and can integrate seamlessly into your existing development workflow.",
    category: "Collaboration"
  }
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [formProgress, setFormProgress] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
      message: "",
    },
  });  // Calculate form progress
  const calculateProgress = useCallback(() => {
    const values = form.getValues();
    let filledFields = 0;
    const totalRequiredFields = 3; // name, email, message
    
    if (values.name.length >= 2) filledFields++;
    if (values.email.length > 0 && values.email.includes('@')) filledFields++;
    if (values.message.length >= 10) filledFields++;
    
    const progress = (filledFields / totalRequiredFields) * 100;
    setFormProgress(progress);
    return progress;
  }, [form]);

  // Filter FAQs based on selected category
  const filteredFaqs = selectedCategory 
    ? faqs.filter(faq => faq.category === selectedCategory)
    : faqs;

  // Get unique categories
  const categories = Array.from(new Set(faqs.map(faq => faq.category)));
  
  // Watch form changes to update progress
  const watchedFields = form.watch();
  
  useEffect(() => {
    calculateProgress();
  }, [watchedFields, calculateProgress]);

  const onSubmit = (values: FormValues) => {
    setIsSubmitting(true);
    
    // Add the budget to the form values
    const emailData = {
      ...values,
      budget: selectedBudget,
    };
    
    // Send email using EmailJS
    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      emailData,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    )
      .then((response) => {
        console.log('Email sent successfully:', response);
        toast.success("Thank you for your message! We'll get back to you within 24 hours.");
        form.reset();
        setSelectedBudget("");
        setIsSubmitting(false);
        setFormProgress(0);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        toast.error("There was an error sending your message. Please try again or contact us directly.");
        setIsSubmitting(false);
      });
  };

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
          <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary dark:text-white border border-primary/20 dark:border-primary/30 mb-6">
              <Send size={16} />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Let's Start Something
              <br />
              <span className="text-primary dark:text-white">Amazing Together</span>
            </h1>
            
            <p className="text-xl text-muted-foreground dark:text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or want to learn more about our services? We'd love to hear from you. Let's discuss how we can help bring your vision to life.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="flex items-center gap-2 text-primary dark:text-white">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for new projects</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground dark:text-muted-foreground/80">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground dark:text-muted-foreground/80">
                <Users className="w-4 h-4" />
                <span className="text-sm">Free consultation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
        {/* Contact Methods */}
      <section  id = "section" className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full p-6 bg-background/60 dark:bg-background/40 backdrop-blur-sm border border-border/50 dark:border-border/60 hover:border-primary/30 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/10 cursor-pointer">
                  <a href={info.link} className="block space-y-4">
                    <div className="relative">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${info.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-full h-full bg-background dark:bg-background rounded-2xl flex items-center justify-center">
                          <info.icon className="w-7 h-7 text-foreground dark:text-foreground" />
                        </div>
                      </div>
                      <div className={`absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-r ${info.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`} />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg group-hover:text-primary dark:group-hover:text-white transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground/80">
                        {info.description}
                      </p>
                      <p className="font-medium text-primary dark:text-white">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Response Promises */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Our Commitment to You</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                When you reach out to us, here's what you can expect
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {responsePromises.map((promise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-muted/30 dark:bg-muted/20 flex items-center justify-center">
                      <promise.icon className={`w-6 h-6 ${promise.color}`} />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{promise.title}</h3>
                  <p className="text-sm text-muted-foreground">{promise.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Working Hours & Social Links */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-6 bg-background/60 dark:bg-background/40 backdrop-blur-sm border border-border/50 dark:border-border/60">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-primary dark:text-white" />
                  <h3 className="text-lg font-semibold">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-primary/10 dark:bg-primary/20 rounded-lg">
                  <p className="text-sm text-primary dark:text-white font-medium">
                    Emergency support available 24/7 for existing clients
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Social Media & Additional Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-6 bg-background/60 dark:bg-background/40 backdrop-blur-sm border border-border/50 dark:border-border/60">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-primary dark:text-white" />
                  <h3 className="text-lg font-semibold">Connect With Us</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Follow us on social media for the latest updates and insights
                </p>
                <div className="flex gap-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full bg-muted/30 dark:bg-muted/20 flex items-center justify-center transition-colors duration-300 ${social.color}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
                <Separator className="my-4" />
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Quick inquiries:</span>
                    <a href="mailto:hello@lovable.com" className="text-primary dark:text-white hover:underline">
                      hello@lovable.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Urgent matters:</span>
                    <a href="tel:+15555551234" className="text-primary dark:text-white hover:underline">
                      +1 (555) 555-1234
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="section bg-muted/30 dark:bg-muted/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-primary dark:text-white" />
                  Tell Us About Your Project
                </h2>
                <p className="text-lg text-muted-foreground dark:text-muted-foreground/90 mb-4">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.
                </p>
                
                {/* Form Progress Indicator */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Form Progress</span>
                    <span className="text-sm font-medium text-primary dark:text-primary-foreground">
                      {Math.round(formProgress)}%
                    </span>
                  </div>
                  <div className="w-full bg-muted/30 dark:bg-muted/20 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-primary to-accent-teal rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${formProgress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>

              <Card className="p-8 bg-background/60 dark:bg-background/40 backdrop-blur-sm border border-border/50 dark:border-border/60">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium flex items-center gap-2">
                              Name *
                              {field.value.length >= 2 && (
                                <CheckCircle className="w-4 h-4 text-green-500" />
                              )}
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your full name" 
                                {...field} 
                                className="h-12 bg-background/60 dark:bg-background/40 border-border/50 dark:border-border/60 focus:border-primary dark:focus:border-primary-foreground transition-colors"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium flex items-center gap-2">
                              Email *
                              {field.value.includes('@') && field.value.length > 0 && (
                                <CheckCircle className="w-4 h-4 text-green-500" />
                              )}
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="your@email.com" 
                                type="email" 
                                {...field} 
                                className="h-12 bg-background/60 dark:bg-background/40 border-border/50 dark:border-border/60 focus:border-primary dark:focus:border-primary-foreground transition-colors"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">Phone</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+1 (555) 123-4567" 
                                {...field} 
                                className="h-12 bg-background/60 dark:bg-background/40 border-border/50 dark:border-border/60"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">Company</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your company name" 
                                {...field} 
                                className="h-12 bg-background/60 dark:bg-background/40 border-border/50 dark:border-border/60"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div>
                      <label className="text-base font-medium mb-3 block">Project Budget</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {budgetOptions.map((budget) => (
                          <button
                            key={budget}
                            type="button"
                            onClick={() => setSelectedBudget(budget)}
                            className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                              selectedBudget === budget
                                ? 'border-primary dark:border-primary-foreground bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground'
                                : 'border-border/50 dark:border-border/60 hover:border-primary/30 dark:hover:border-primary-foreground/30 bg-background/60 dark:bg-background/40'
                            }`}
                          >
                            {budget}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-medium">Project Details *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project, goals, timeline, and any specific requirements..." 
                              className="min-h-32 bg-background/60 dark:bg-background/40 border-border/50 dark:border-border/60 resize-none"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full h-14 bg-gradient-to-r from-primary to-accent-teal hover:from-primary/90 hover:to-accent-teal/90 text-lg font-semibold" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </Form>
              </Card>
            </motion.div>
            
            {/* FAQ and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                  {selectedCategory && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedCategory(null)}
                      className="text-sm"
                    >
                      Show All ({faqs.length})
                    </Button>
                  )}
                </div>
                
                {/* FAQ Categories Filter */}
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-3">
                    {selectedCategory ? `Showing ${filteredFaqs.length} questions in "${selectedCategory}"` : "Browse by category:"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category, index) => (
                      <Badge 
                        key={index} 
                        variant={selectedCategory === category ? "default" : "outline"}
                        className="cursor-pointer hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
                        onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                      >
                        {category} ({faqs.filter(faq => faq.category === category).length})
                      </Badge>
                    ))}
                  </div>
                </div>

                <Card className="bg-background/60 dark:bg-background/40 backdrop-blur-sm border border-border/50 dark:border-border/60">
                  <Accordion type="single" collapsible className="w-full">
                    {filteredFaqs.map((faq, index) => (
                      <AccordionItem key={`${faq.category}-${index}`} value={`item-${index}`} className="border-border/30 dark:border-border/40">
                        <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/20 dark:hover:bg-muted/10 transition-colors">
                          <div className="flex items-center gap-3">
                            <Badge 
                              variant="secondary" 
                              className={`text-xs px-2 py-1 ${selectedCategory === faq.category ? 'bg-primary/20 text-primary' : ''}`}
                            >
                              {faq.category}
                            </Badge>
                            <span className="font-semibold text-base">{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-muted-foreground dark:text-muted-foreground/90 leading-relaxed">
                            {faq.answer}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  
                  {filteredFaqs.length === 0 && (
                    <div className="p-8 text-center text-muted-foreground">
                      No questions found in this category.
                    </div>
                  )}
                </Card>
              </div>

              <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent-teal/10 dark:from-primary/20 dark:to-accent-teal/20 border border-primary/20 dark:border-primary/30">
                <h3 className="text-2xl font-bold mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 dark:bg-primary/30 rounded-full flex items-center justify-center text-primary dark:text-primary-foreground font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">We'll review your project</h4>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground/80">
                        Our team will analyze your requirements and prepare a detailed proposal.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 dark:bg-primary/30 rounded-full flex items-center justify-center text-primary dark:text-primary-foreground font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Schedule a consultation</h4>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground/80">
                        We'll set up a call to discuss your project in detail and answer any questions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 dark:bg-primary/30 rounded-full flex items-center justify-center text-primary dark:text-primary-foreground font-bold text-sm flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Start building</h4>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground/80">
                        Once approved, we'll begin crafting your digital solution with regular updates.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
