
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
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
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Zap } from "lucide-react";

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
    link: "#",
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
    answer: "Project timelines vary based on complexity, but most projects range from 4-16 weeks. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you work with startups?",
    answer: "Absolutely! We love working with startups and understand the unique challenges they face. We offer flexible pricing and partnership options."
  },
  {
    question: "What's included in your maintenance packages?",
    answer: "Our maintenance packages include security updates, performance monitoring, content updates, and technical support. We offer different tiers to match your needs."
  }
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState("");

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
  });

  const onSubmit = (values: FormValues) => {
    setIsSubmitting(true);
    
    console.log("Form submitted:", { ...values, budget: selectedBudget });
    
    setTimeout(() => {
      toast.success("Thank you for your message! We'll get back to you within 24 hours.");
      form.reset();
      setSelectedBudget("");
      setIsSubmitting(false);
    }, 1500);
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary dark:text-primary-foreground border border-primary/20 dark:border-primary/30 mb-6">
              <Send size={16} />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Let's Start Something
              <br />
              <span className="text-primary dark:text-primary-foreground">Amazing Together</span>
            </h1>
            
            <p className="text-xl text-muted-foreground dark:text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or want to learn more about our services? We'd love to hear from you. Let's discuss how we can help bring your vision to life.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="flex items-center gap-2 text-primary dark:text-primary-foreground">
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
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                      <h3 className="font-bold text-lg group-hover:text-primary dark:group-hover:text-primary-foreground transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground/80">
                        {info.description}
                      </p>
                      <p className="font-medium text-primary dark:text-primary-foreground">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="section bg-muted/30 dark:bg-muted/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-primary dark:text-primary-foreground" />
                  Tell Us About Your Project
                </h2>
                <p className="text-lg text-muted-foreground dark:text-muted-foreground/90">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.
                </p>
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
                            <FormLabel className="text-base font-medium">Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your full name" 
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
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">Email *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="your@email.com" 
                                type="email" 
                                {...field} 
                                className="h-12 bg-background/60 dark:bg-background/40 border-border/50 dark:border-border/60"
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
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="p-6 bg-background/60 dark:bg-background/40 backdrop-blur-sm border border-border/50 dark:border-border/60">
                      <h3 className="font-bold text-lg mb-3 text-primary dark:text-primary-foreground">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground dark:text-muted-foreground/90 leading-relaxed">
                        {faq.answer}
                      </p>
                    </Card>
                  ))}
                </div>
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
