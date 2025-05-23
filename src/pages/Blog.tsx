
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2023",
    excerpt: "Explore the emerging technologies and methodologies that are shaping the future of web development.",
    date: "May 15, 2023",
    author: "John Smith",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    title: "Designing for Accessibility: Best Practices for Inclusive UX",
    excerpt: "Learn how to create digital experiences that are accessible to users of all abilities.",
    date: "April 28, 2023",
    author: "Emily Johnson",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 3,
    title: "Optimizing E-commerce Conversion Rates: A Data-Driven Approach",
    excerpt: "Discover proven strategies to improve your e-commerce conversion rates through data analysis and optimization.",
    date: "April 10, 2023",
    author: "Michael Chen",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 4,
    title: "Mobile App Development: Native vs. Cross-Platform in 2023",
    excerpt: "A comprehensive comparison of native and cross-platform mobile app development approaches.",
    date: "March 22, 2023",
    author: "Sarah Williams",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 5,
    title: "The Role of AI in Modern Digital Marketing",
    excerpt: "How artificial intelligence is transforming digital marketing strategies and customer engagement.",
    date: "March 5, 2023",
    author: "John Smith",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 6,
    title: "Cloud Security: Protecting Your Digital Assets",
    excerpt: "Essential security practices for businesses leveraging cloud services and infrastructure.",
    date: "February 18, 2023",
    author: "Michael Chen",
    category: "Cloud Services",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const testimonials = [
  {
    id: 1,
    content: "Working with Lovable Digital Agency has been transformative for our business. Their team delivered a website that not only looks great but has significantly improved our conversion rates and user engagement.",
    author: "Jennifer Roberts",
    company: "FashionFoward Inc.",
    position: "Marketing Director"
  },
  {
    id: 2,
    content: "The e-commerce platform developed by Lovable Digital Agency has revolutionized how we sell products online. Sales have increased by 45% in the first three months after launch.",
    author: "Mark Thompson",
    company: "GreenGoods Co.",
    position: "CEO"
  },
  {
    id: 3,
    content: "We've worked with several agencies in the past, but none have delivered the level of quality, innovation, and results that Lovable Digital Agency has. They truly understand our business needs and goals.",
    author: "Sophia Chen",
    company: "TechInnovate",
    position: "COO"
  },
  {
    id: 4,
    content: "The mobile app developed by Lovable has received outstanding feedback from our users. The team's attention to detail and commitment to excellence made all the difference.",
    author: "Robert Miller",
    company: "HealthFirst",
    position: "Product Manager"
  },
  {
    id: 5,
    content: "Lovable Digital Agency completely transformed our digital marketing strategy. Their data-driven approach has resulted in a 60% increase in qualified leads for our business.",
    author: "David Wilson",
    company: "ConsultPro Services",
    position: "Director of Sales"
  }
];

interface BlogCardProps {
  post: typeof blogPosts[0];
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-muted/30 h-full flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardHeader className="relative p-0">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-primary to-accent-teal text-white border-0">
              {post.category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative p-6 flex flex-col flex-grow">
        <div className="text-sm text-muted-foreground mb-2">
          {post.date} • By {post.author}
        </div>
        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </CardTitle>
        <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">{post.excerpt}</p>
        <Link to={`/blog/${post.id}`} className="text-primary font-medium hover:underline inline-flex items-center group/link">
          Read More
          <svg className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </CardContent>
    </Card>
  );
};

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-muted/30 mb-6">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardContent className="p-6 relative">
        <div className="absolute top-6 left-8 text-5xl text-primary/20">"</div>
        <div className="relative z-10">
          <p className="italic text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
          <div>
            <p className="font-bold text-foreground">{testimonial.author}</p>
            <p className="text-sm text-primary">{testimonial.position}, {testimonial.company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent-teal/20">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
        <div className="container-custom relative py-20 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-3xl">📝</span>
            </div>
            <h1 className="text-white mb-6 font-heading font-bold">
              Blog & Testimonials
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Stay updated with the latest insights, industry trends, and success stories. 
              Discover how our expertise has helped businesses achieve remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-lg">
                Latest Articles
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Client Stories
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Tabs Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent-teal rounded-full mb-6">
              <span className="text-2xl text-white">💡</span>
            </div>
            <h2 className="text-primary mb-4">Knowledge & Experience</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our latest insights and hear from clients who have transformed their businesses with our solutions.
            </p>
          </div>
          
          <Tabs defaultValue="blog" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 h-auto p-1 bg-white shadow-lg rounded-xl">
                <TabsTrigger 
                  value="blog" 
                  className="flex items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <span className="text-lg">📚</span>
                  Blog Articles
                </TabsTrigger>
                <TabsTrigger 
                  value="testimonials" 
                  className="flex items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <span className="text-lg">💬</span>
                  Client Testimonials
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="blog">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="testimonials">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  {testimonials.slice(0, 3).map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
                </div>
                <div>
                  {testimonials.slice(3).map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary via-primary/95 to-accent-teal">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <span className="text-3xl">📩</span>
            </div>
            <h2 className="text-white mb-6">Stay Connected</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Subscribe to our newsletter for the latest insights, tips, and updates from our team. 
              Join our community of successful business leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-lg">
                Subscribe Newsletter
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Share Your Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
