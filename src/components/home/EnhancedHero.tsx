
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Users, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const stats = [
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Zap, label: "Projects Completed", value: "1000+" },
  { icon: Star, label: "5-Star Reviews", value: "98%" },
  { icon: Award, label: "Years Experience", value: "8+" },
];

export const EnhancedHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/50 dark:from-background dark:via-background/90 dark:to-muted/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-teal/10 dark:bg-accent-teal/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/60 rounded-full text-primary dark:text-white border border-primary/20 dark:border-primary/60"
            >
              <Zap size={16} />
              <span className="text-sm font-medium">Leading Digital Agency</span>
            </motion.div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-accent-teal bg-clip-text text-transparent leading-tight">
                Transform Your
                <br />
                <span className="text-primary dark:text-primary-foreground">Digital Vision</span>
              </h1>
              
              <p className="text-xl text-muted-foreground dark:text-muted-foreground/90 leading-relaxed max-w-2xl">
                We create exceptional digital experiences that drive growth, engage users, and deliver measurable results for forward-thinking businesses.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-6 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="group border-2 border-border dark:border-border/60 hover:border-primary dark:hover:border-primary px-8 py-6 rounded-xl text-lg font-semibold bg-background/60 dark:bg-background/40 backdrop-blur-sm">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center space-y-2"
                >
                  <stat.icon className="w-8 h-8 text-primary dark:text-primary-foreground mx-auto" />
                  <div className="text-2xl font-bold text-foreground dark:text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground dark:text-muted-foreground/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <Card className="p-8 bg-background/80 dark:bg-background/60 backdrop-blur-xl border border-border/50 dark:border-border/60 shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent-teal/20 dark:from-primary/30 dark:to-accent-teal/30 rounded-xl p-6 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-primary dark:bg-primary-foreground rounded-full flex items-center justify-center mx-auto">
                        <Zap className="w-8 h-8 text-primary-foreground dark:text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground dark:text-foreground">Digital Innovation</h3>
                      <p className="text-muted-foreground dark:text-muted-foreground/80">Crafting the future of web experiences</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-accent-amber/20 dark:bg-accent-amber/30 rounded-full flex items-center justify-center border border-accent-amber/30 dark:border-accent-amber/50"
              >
                <Star className="w-6 h-6 text-accent-amber" />
              </motion.div>

              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/20 dark:bg-primary/30 rounded-full flex items-center justify-center border border-primary/30 dark:border-primary/50"
              >
                <Award className="w-8 h-8 text-primary dark:text-primary-foreground" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};