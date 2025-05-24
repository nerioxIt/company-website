
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Quote, 
  Star, 
  TrendingUp,
  Eye,
  MessageCircle,
  BookOpen,
  Users
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the emerging technologies and methodologies that are shaping the future of web development.",
    date: "May 15, 2024",
    readTime: "8 min read",
    author: "John Smith",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    category: "Web Development",
    tags: ["React", "AI", "WebAssembly"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    views: "2.3k",
    comments: 24,
    featured: true
  },
  {
    id: 2,
    title: "Designing for Accessibility: Best Practices for Inclusive UX",
    excerpt: "Learn how to create digital experiences that are accessible to users of all abilities.",
    date: "April 28, 2024",
    readTime: "6 min read",
    author: "Emily Johnson",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    category: "UI/UX Design",
    tags: ["UX", "Accessibility", "Design"],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    views: "1.8k",
    comments: 18
  },
  {
    id: 3,
    title: "Optimizing E-commerce Conversion Rates: A Data-Driven Approach",
    excerpt: "Discover proven strategies to improve your e-commerce conversion rates through data analysis and optimization.",
    date: "April 10, 2024",
    readTime: "10 min read",
    author: "Michael Chen",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    category: "E-commerce",
    tags: ["E-commerce", "Analytics", "CRO"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    views: "3.1k",
    comments: 32
  },
  {
    id: 4,
    title: "Mobile App Development: Native vs. Cross-Platform in 2024",
    excerpt: "A comprehensive comparison of native and cross-platform mobile app development approaches.",
    date: "March 22, 2024",
    readTime: "12 min read",
    author: "Sarah Williams",
    authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    category: "Mobile Apps",
    tags: ["Mobile", "React Native", "Flutter"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    views: "2.7k",
    comments: 29
  },
  {
    id: 5,
    title: "The Role of AI in Modern Digital Marketing",
    excerpt: "How artificial intelligence is transforming digital marketing strategies and customer engagement.",
    date: "March 5, 2024",
    readTime: "7 min read",
    author: "John Smith",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    category: "Digital Marketing",
    tags: ["AI", "Marketing", "Automation"],
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    views: "1.9k",
    comments: 15
  },
  {
    id: 6,
    title: "Cloud Security: Protecting Your Digital Assets",
    excerpt: "Essential security practices for businesses leveraging cloud services and infrastructure.",
    date: "February 18, 2024",
    readTime: "9 min read",
    author: "Michael Chen",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    category: "Cloud Services",
    tags: ["Security", "Cloud", "DevOps"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    views: "2.5k",
    comments: 21
  }
];

const testimonials = [
  {
    id: 1,
    content: "Working with Lovable Digital Agency has been transformative for our business. Their team delivered a website that not only looks great but has significantly improved our conversion rates and user engagement.",
    author: "Jennifer Roberts",
    company: "FashionForward Inc.",
    position: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    project: "E-commerce Platform"
  },
  {
    id: 2,
    content: "The e-commerce platform developed by Lovable Digital Agency has revolutionized how we sell products online. Sales have increased by 45% in the first three months after launch.",
    author: "Mark Thompson",
    company: "GreenGoods Co.",
    position: "CEO",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    project: "Full-Stack Development"
  },
  {
    id: 3,
    content: "We've worked with several agencies in the past, but none have delivered the level of quality, innovation, and results that Lovable Digital Agency has. They truly understand our business needs and goals.",
    author: "Sophia Chen",
    company: "TechInnovate",
    position: "COO",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    project: "Digital Transformation"
  },
  {
    id: 4,
    content: "The mobile app developed by Lovable has received outstanding feedback from our users. The team's attention to detail and commitment to excellence made all the difference.",
    author: "Robert Miller",
    company: "HealthFirst",
    position: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    project: "Mobile App Development"
  },
  {
    id: 5,
    content: "Lovable Digital Agency completely transformed our digital marketing strategy. Their data-driven approach has resulted in a 60% increase in qualified leads for our business.",
    author: "David Wilson",
    company: "ConsultPro Services",
    position: "Director of Sales",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    project: "Digital Marketing"
  }
];

const FeaturedBlogCard = ({ post }: { post: typeof blogPosts[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="lg:col-span-2"
    >
      <Card className="overflow-hidden h-full group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
            Featured
          </Badge>
          <Badge className="absolute top-4 right-4 bg-accent-teal text-white">
            {post.category}
          </Badge>
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-white/30">
                  {tag}
                </Badge>
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 line-clamp-2">{post.title}</h2>
            <p className="text-gray-200 mb-4 line-clamp-2">{post.excerpt}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src={post.authorAvatar} 
                  alt={post.author}
                  className="w-10 h-10 rounded-full border-2 border-white/50"
                />
                <div>
                  <p className="font-medium">{post.author}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {post.views}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  {post.comments}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const BlogCard = ({ post, index }: { post: typeof blogPosts[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col group hover:shadow-xl transition-all duration-300 border hover:border-primary/20">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Badge className="absolute top-3 right-3 bg-accent-teal text-white">
            {post.category}
          </Badge>
          
          <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {post.views}
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-3 h-3" />
                {post.comments}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
        
        <CardContent className="p-6 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-1 mb-3">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
          
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-3">
              <img 
                src={post.authorAvatar} 
                alt={post.author}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="font-medium text-sm">{post.author}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
              </div>
            </div>
            
            <Link 
              to={`/blog/${post.id}`} 
              className="text-primary font-medium hover:underline inline-flex items-center text-sm group/link"
            >
              Read More
              <ArrowRight className="ml-1 w-3 h-3 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="p-6 h-full relative bg-gradient-to-br from-card to-muted/20 border-2 hover:border-primary/20 transition-all duration-300 group">
        <div className="absolute top-4 right-4">
          <Quote className="w-8 h-8 text-primary/20 transform rotate-180" />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          
          <p className="italic text-muted-foreground mb-6 leading-relaxed">
            "{testimonial.content}"
          </p>
          
          <div className="flex items-center gap-4">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.author}
              className="w-12 h-12 rounded-full border-2 border-primary/20"
            />
            <div className="flex-grow">
              <p className="font-bold text-foreground">{testimonial.author}</p>
              <p className="text-sm text-primary font-medium">{testimonial.position}</p>
              <p className="text-sm text-muted-foreground">{testimonial.company}</p>
            </div>
            <Badge variant="outline" className="text-xs">
              {testimonial.project}
            </Badge>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent-teal/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <motion.div 
          className="container-custom text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <BookOpen className="w-4 h-4" />
            Insights & Stories
          </motion.div>
          
          <motion.h1 
            className="text-primary mb-6 bg-gradient-to-r from-primary via-accent-teal to-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Blog & Testimonials
          </motion.h1>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover insights, industry trends, and success stories from our team and satisfied clients. Stay updated with the latest in digital innovation.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { icon: TrendingUp, text: "Latest Trends" },
              { icon: Users, text: "Client Stories" },
              { icon: BookOpen, text: "Expert Insights" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <item.icon className="w-4 h-4 text-primary" />
                {item.text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      
      <section className="section bg-background">
        <div className="container-custom">
          <Tabs defaultValue="blog" className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <TabsList className="grid w-full grid-cols-2 mb-12 h-14 p-1 bg-muted/50">
                <TabsTrigger value="blog" className="text-base h-full data-[state=active]:bg-white dark:data-[state=active]:bg-card">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Blog Posts
                </TabsTrigger>
                <TabsTrigger value="testimonials" className="text-base h-full data-[state=active]:bg-white dark:data-[state=active]:bg-card">
                  <Quote className="w-4 h-4 mr-2" />
                  Testimonials
                </TabsTrigger>
              </TabsList>
            </motion.div>
            
            <TabsContent value="blog" className="space-y-12">
              {featuredPost && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <FeaturedBlogCard post={featuredPost} />
                  <div className="space-y-6">
                    {regularPosts.slice(0, 2).map((post, index) => (
                      <BlogCard key={post.id} post={post} index={index} />
                    ))}
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.slice(2).map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index + 2} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="testimonials">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Blog;
