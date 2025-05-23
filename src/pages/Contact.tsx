
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    setIsSubmitting(true);
    
    // In a real app, you would send the form data to your server here
    console.log("Form submitted:", values);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for your message! We'll get back to you soon.");
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent-teal/20">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
        <div className="container-custom relative py-20 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-3xl">📞</span>
            </div>
            <h1 className="text-white mb-6 font-heading font-bold">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Ready to transform your business with innovative digital solutions? 
              Get in touch with our team and let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-lg">
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Info Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent-teal rounded-full mb-6">
              <span className="text-2xl text-white">💬</span>
            </div>
            <h2 className="text-primary mb-4">Let's Start a Conversation</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether you have a specific project in mind or need guidance on your digital journey, we're here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-muted/30">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your project or inquiry" 
                                className="min-h-32"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-primary to-accent-teal hover:shadow-lg transition-all duration-300" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-muted/30">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-teal text-white rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Email</h3>
                  <a href="mailto:info@lovable.com" className="text-primary hover:underline">
                    info@lovable.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-muted/30">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-teal text-white rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 4H9L10.5 8.5L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15.5 13.5L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C13.4913 21 9.1673 19.1571 5.97918 15.9289C2.79107 12.7007 1 8.37652 1 3.8C1 3.26956 1.21071 2.76086 1.58579 2.38579C1.96086 2.01071 2.46956 1.8 3 1.8H7L5 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Phone</h3>
                  <a href="tel:+15555555555" className="text-primary hover:underline">
                    +1 (555) 555-5555
                  </a>
                </CardContent>
              </Card>
              
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-muted/30">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-teal text-white rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-bold mb-4 group-hover:text-primary transition-colors">Office Location</h3>
                  <div className="text-muted-foreground">
                    <p className="mb-1">123 Tech Street</p>
                    <p className="mb-1">Suite 200</p>
                    <p className="mb-1">San Francisco, CA 94103</p>
                    <p>United States</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-muted/30">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-teal text-white rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12V4C10 2.89543 10.8954 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6H16.5C18.9853 6 21 8.01472 21 10.5C21 12.9853 18.9853 15 16.5 15H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 18H7.5C5.01472 18 3 15.9853 3 13.5C3 11.0147 5.01472 9 7.5 9H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-bold mb-4 group-hover:text-primary transition-colors">Business Hours</h3>
                  <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                    <p>Monday - Friday:</p>
                    <p>9:00 AM - 6:00 PM</p>
                    <p>Saturday:</p>
                    <p>10:00 AM - 2:00 PM</p>
                    <p>Sunday:</p>
                    <p>Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary via-primary/95 to-accent-teal">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <span className="text-3xl">🤝</span>
            </div>
            <h2 className="text-white mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join hundreds of satisfied clients who have transformed their businesses with our innovative digital solutions. 
              Let's discuss how we can help you achieve your goals.
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
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
