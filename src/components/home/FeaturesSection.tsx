
import { motion } from "framer-motion";
import { Code, Palette, Rocket, Shield, Smartphone, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored solutions built with cutting-edge technologies to meet your unique business requirements.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that provide exceptional user experiences across all devices.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Lightning-fast websites and applications optimized for speed, SEO, and user engagement.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security measures to protect your data and ensure compliance.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Excellence",
    description: "Responsive designs and native mobile apps that deliver seamless experiences.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Scalable solutions designed to grow with your business and reach global audiences.",
    color: "from-teal-500 to-cyan-500",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="section bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/60 rounded-full text-primary dark:text-white border border-primary/20 dark:border-primary/60 mb-6">
            <Rocket size={16} />
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Expertise That Drives Results
          </h2>
          
          <p className="text-xl text-muted-foreground dark:text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
            We combine technical excellence with creative innovation to deliver digital solutions that exceed expectations and drive measurable business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-background/60 dark:bg-background/40 backdrop-blur-sm border border-border/50 dark:border-border/60 hover:border-primary/30 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/10">
                <CardContent className="p-8 space-y-6">
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-background dark:bg-background rounded-2xl flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-foreground dark:text-foreground" />
                      </div>
                    </div>
                    <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`} />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground dark:text-foreground group-hover:text-primary dark:group-hover:text-primary-foreground transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground dark:text-muted-foreground/90 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
