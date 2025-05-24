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
  Users,
  ChevronRight,
  Heart,
  BookMarked,
  PieChart,
  Timer,
  Database,
  Smartphone,
  Handshake
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How a Custom CRM Can Save 10 Hours a Week",
    excerpt: "Discover how implementing a tailored CRM solution can dramatically boost your team's productivity and streamline operations.",
    date: "June 2, 2024",
    readTime: "7 min read",
    author: "Alex Morgan",
    authorAvatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face",
    category: "Business Solutions",
    tags: ["CRM", "Productivity", "Automation"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    views: "3.4k",
    comments: 27,
    featured: true
  },
  {
    id: 2,
    title: "Why Every Business Needs a Mobile-Responsive Site in 2025",
    excerpt: "Learn why mobile responsiveness isn't just a feature but a necessity for business success in today's digital landscape.",
    date: "May 25, 2024",
    readTime: "8 min read",
    author: "Emma Watson",
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    category: "Web Design",
    tags: ["Mobile", "Responsive", "UX"],
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    views: "2.9k",
    comments: 24,
    featured: true
  },
  {
    id: 3,
    title: "What to Look for in a Good Software Partner",
    excerpt: "Essential criteria and red flags to consider when choosing a software development partner for your next project.",
    date: "May 18, 2024",
    readTime: "9 min read",
    author: "Daniel Liu",
    authorAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop&crop=face",
    category: "Partnership",
    tags: ["Software", "Outsourcing", "Strategy"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    views: "2.7k",
    comments: 31,
    featured: true
  },
  {
    id: 4,
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
    comments: 24
  },
  {
    id: 5,
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
    id: 6,
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
  }
];

const testimonials = [
  {
    id: 1,
    content: "Our operations have never run smoother. The custom dashboard changed everything.",
    author: "James Peterson",
    company: "MegaRetail Inc.",
    position: "Retail Manager",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    project: "Custom Dashboard"
  },
  {
    id: 2,
    content: "They understood our needs perfectly and delivered a powerful CRM.",
    author: "Sarah Martinez",
    company: "Elite Consultancy",
    position: "Consultancy Owner",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    project: "Custom CRM"
  },
  {
    id: 3,
    content: "Working with Lovable Digital Agency has been transformative for our business. Their team delivered a website that not only looks great but has significantly improved our conversion rates and user engagement.",
    author: "Jennifer Roberts",
    company: "FashionForward Inc.",
    position: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    project: "E-commerce Platform"
  },
  {
    id: 4,
    content: "The e-commerce platform developed by Lovable Digital Agency has revolutionized how we sell products online. Sales have increased by 45% in the first three months after launch.",
    author: "Mark Thompson",
    company: "GreenGoods Co.",
    position: "CEO",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    project: "Full-Stack Development"
  },
  {
    id: 5,
    content: "We've worked with several agencies in the past, but none have delivered the level of quality, innovation, and results that Lovable Digital Agency has. They truly understand our business needs and goals.",
    author: "Sophia Chen",
    company: "TechInnovate",
    position: "COO",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    project: "Digital Transformation"
  },
  {
    id: 6,
    content: "The mobile app developed by Lovable has received outstanding feedback from our users. The team's attention to detail and commitment to excellence made all the difference.",
    author: "Robert Miller",
    company: "HealthFirst",
    position: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    project: "Mobile App Development"
  }
];

const FeaturedBlogCard = ({ post }: { post: typeof blogPosts[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
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
                <motion.img 
                  whileHover={{ scale: 1.1 }}
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
              <motion.img 
                whileHover={{ scale: 1.1 }}
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
            
            <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link 
                to={`/blog/${post.id}`} 
                className="text-primary font-medium hover:underline inline-flex items-center text-sm group/link"
                onClick={(e) => e.preventDefault()}
              >
                Read More
                <ArrowRight className="ml-1 w-3 h-3 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
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
      whileHover={{ y: -5 }}
    >
      <Card className="p-6 h-full relative bg-gradient-to-br from-card to-muted/20 border-2 hover:border-primary/20 transition-all duration-300 group">
        <div className="absolute top-4 right-4">
          <Quote className="w-8 h-8 text-primary/20 transform rotate-180" />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0.8 }} 
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </motion.div>
            ))}
          </div>
          
          <p className="italic text-muted-foreground mb-6 leading-relaxed">
            "{testimonial.content}"
          </p>
          
          <div className="flex items-center gap-4">
            <motion.img 
              whileHover={{ scale: 1.1, rotate: 5 }}
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

const CategoryBadge = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <motion.div 
    whileHover={{ y: -3, scale: 1.05 }}
    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary dark:text-white text-sm font-medium"
  >
    <Icon className="w-4 h-4" />
    {text}
  </motion.div>
);

const Blog = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-8 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent-teal/5">
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
            className="inline-flex items-center gap-2 bg-primary/10 text-primary dark:text-white  px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <BookOpen className="w-4 h-4" />
            Insights & Stories
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent-teal to-primary bg-clip-text text-transparent leading-normal pb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Thought Leadership & Success Stories
          </motion.h1>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover insights, industry trends, and success stories from our team and satisfied clients. 
            Stay updated with the latest in digital innovation to help your business thrive.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <CategoryBadge icon={Database} text="CRM Solutions" />
            <CategoryBadge icon={Smartphone} text="Mobile Development" />
            <CategoryBadge icon={PieChart} text="Business Strategy" />
            <CategoryBadge icon={Handshake} text="Partnerships" />
            <CategoryBadge icon={TrendingUp} text="Digital Growth" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="relative w-full max-w-5xl mx-auto h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full"
          >
            <motion.div 
              className="absolute left-1/2 -translate-x-1/2 -top-1 w-4 h-4 rounded-full bg-primary"
              animate={{ 
                boxShadow: ["0 0 0 0 rgba(var(--primary), 0.3)", "0 0 0 10px rgba(var(--primary), 0)"],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        </motion.div>
      </section>
      
      {/* Featured Blog Posts Section */}
      <section className="py-4 bg-background">
        <div className="container-custom">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <Badge className="mb-3 bg-primary/10 text-primary dark:text-white border-none">Featured Insights</Badge>
              <h2 className="text-3xl font-bold">Latest From Our Experts</h2>
            </div>
            
            <motion.div 
              whileHover={{ x: 3 }}
              className="mt-4 md:mt-0"
            >
             
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              index === 0 ? (
                <FeaturedBlogCard key={post.id} post={post} />
              ) : (
                <BlogCard key={post.id} post={post} index={index} />
              )
            ))}
          </div>
        </div>
      </section>
      
      {/* Content Tabs Section */}
      <section className="section bg-muted/30 py-16">
        <div className="container-custom">
          <Tabs defaultValue="blog" className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <TabsList className="grid w-full grid-cols-2 mb-8 h-14 p-1 bg-background/50 shadow-sm">
                <TabsTrigger value="blog" className="text-base h-full data-[state=active]:bg-white dark:data-[state=active]:bg-card">
                  <BookMarked className="w-4 h-4 mr-2" />
                  More Articles
                </TabsTrigger>
                <TabsTrigger value="testimonials" className="text-base h-full data-[state=active]:bg-white dark:data-[state=active]:bg-card">
                  <Quote className="w-4 h-4 mr-2" />
                  Client Testimonials
                </TabsTrigger>
              </TabsList>
            </motion.div>
            
            <TabsContent value="blog" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
              
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex gap-2 items-center px-6 py-3 bg-primary/10 rounded-full text-primary font-medium cursor-pointer hover:bg-primary/20 transition-colors">
                  <Timer className="w-4 h-4" />
                  Load more articles
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="testimonials">
              <motion.div 
                className="flex flex-col md:flex-row justify-between items-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <Badge className="mb-3 bg-primary/10 text-primary dark:text-white border-none">Success Stories</Badge>
                  <h2 className="text-3xl font-bold">What Our Clients Say</h2>
                </div>
                
                <div className="flex items-center gap-1 mt-4 md:mt-0">
                  <Heart className="w-4 h-4 text-primary" fill="currentColor" />
                  <span className="text-muted-foreground">100% satisfaction rate</span>
                </div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Featured Articles Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <Badge className="mb-3 bg-primary/10 text-primary dark:text-white border-none">Recommended Reading</Badge>
              <h2 className="text-3xl font-bold">Articles You Might Like</h2>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden h-full flex flex-col group hover:shadow-xl transition-all duration-300 border hover:border-primary/20">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Digital Transformation in 2024" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-3 right-3 bg-accent-teal text-white">
                    Digital Transformation
                  </Badge>
                </div>
                
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {["Innovation", "Technology", "Strategy"].map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    Digital Transformation in 2024: What's Changed and What's Next
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                    Explore how digital transformation has evolved over the past year and what trends will shape business strategy in the coming months.
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <motion.img 
                        whileHover={{ scale: 1.1 }}
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" 
                        alt="Author"
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="font-medium text-sm">Rebecca Torres</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          June 10, 2024
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Article 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col group hover:shadow-xl transition-all duration-300 border hover:border-primary/20">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1570126688035-1e6adbd61053?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="AI in Business" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-3 right-3 bg-accent-teal text-white">
                    AI & Automation
                  </Badge>
                </div>
                
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {["AI", "Automation", "Productivity"].map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    5 Ways AI is Revolutionizing Small Business Operations
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                    Discover how small businesses are leveraging AI tools to automate processes, enhance customer service, and drive growth with minimal investment.
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <motion.img 
                        whileHover={{ scale: 1.1 }}
                        src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face" 
                        alt="Author"
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="font-medium text-sm">Jason Wong</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          June 5, 2024
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Article 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="overflow-hidden h-full flex flex-col group hover:shadow-xl transition-all duration-300 border hover:border-primary/20">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Team Collaboration" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-3 right-3 bg-accent-teal text-white">
                    Team Building
                  </Badge>
                </div>
                
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {["Collaboration", "Remote Work", "Leadership"].map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    Building High-Performance Remote Teams: Lessons from Top Tech Companies
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                    Learn proven strategies from industry leaders on building, managing and nurturing successful remote teams in today's distributed work environment.
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <motion.img 
                        whileHover={{ scale: 1.1 }}
                        src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face" 
                        alt="Author"
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="font-medium text-sm">Priya Sharma</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          May 30, 2024
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent-teal/5">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary dark:text-white border-none">Ready to Get Started?</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing List of Satisfied Clients</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how our expertise can help your business achieve its digital goals.
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors cursor-pointer"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
