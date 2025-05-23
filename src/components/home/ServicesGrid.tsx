
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Web Development",
    icon: (
      <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Custom websites and web applications tailored to your business needs.",
  },
  {
    title: "Mobile Apps",
    icon: (
      <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="7" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="2"/>
        <line x1="7" y1="18" x2="17" y2="18" stroke="currentColor" strokeWidth="2"/>
        <line x1="12" y1="21" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    description: "Native and cross-platform mobile applications with intuitive interfaces.",
  },
  {
    title: "UI/UX Design",
    icon: (
      <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 8L4 12L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 16L20 12L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Beautiful, functional designs that enhance user experience and drive engagement.",
  },
  {
    title: "Digital Marketing",
    icon: (
      <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V21M3 17L12 8L16 12L21 7M21 7V12M21 7H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Strategic marketing campaigns to increase your online visibility and customer base.",
  },
  {
    title: "E-commerce",
    icon: (
      <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Custom online stores with secure payment gateways and optimized for conversions.",
  },
  {
    title: "Cloud Services",
    icon: (
      <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 19C3.46243 19 1 16.5376 1 13.5C1 10.4624 3.46243 8 6.5 8C6.93058 8 7.34958 8.04952 7.75 8.14287C8.73071 5.19839 11.5469 3 14.9091 3C18.9502 3 22.2201 6.28026 22.2201 10.3333C22.2201 14.3863 18.9502 17.6667 14.9091 17.6667C14.2425 17.6667 13.5976 17.5724 12.9877 17.3968C11.9999 18.3635 10.6703 19 9.18182 19H6.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Scalable and secure cloud infrastructure for your business applications.",
  },
];

export const ServicesGrid = () => {
  return (
    <section className="section bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-primary mb-4">Our Services</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-secondary mb-4">{service.description}</p>
              <Link to="/services" className="text-primary font-medium hover:underline inline-flex items-center">
                Learn more
                <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};
