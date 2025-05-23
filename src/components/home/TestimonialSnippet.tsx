
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Working with Lovable Digital Agency transformed our online presence. Their team delivered a website that exceeded our expectations and has significantly improved our conversion rates.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
  },
  {
    quote: "The mobile app developed by Lovable has revolutionized how we interact with our customers. Their attention to detail and innovative approach made all the difference.",
    author: "Michael Chen",
    role: "Product Manager, NexGen Solutions",
  },
  {
    quote: "We've worked with several digital agencies in the past, but Lovable stands out for their strategic thinking, technical expertise, and commitment to quality.",
    author: "Emma Wilson",
    role: "Marketing Director, Global Retail",
  },
];

export const TestimonialSnippet = () => {
  return (
    <section className="section bg-gradient-to-b from-muted to-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-primary mb-4">What Our Clients Say</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Don't just take our word for it – hear what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 relative bg-white dark:bg-card hover:shadow-lg transition-shadow">
              <div className="absolute top-6 left-8 text-5xl text-primary opacity-20">"</div>
              <div className="relative z-10">
                <p className="italic text-secondary mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
