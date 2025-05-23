
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Expert Team",
    description: "Our team of experienced professionals brings diverse expertise to every project.",
    icon: (
      <svg className="w-10 h-10 text-accent-amber" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM14 3C14 4.10457 13.1046 5 12 5C10.8954 5 10 4.10457 10 3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Innovative Approach",
    description: "We leverage the latest technologies and approaches to deliver cutting-edge solutions.",
    icon: (
      <svg className="w-10 h-10 text-accent-amber" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12L3 12M22 12L16 6M22 12L16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Client Collaboration",
    description: "We work closely with our clients to ensure their vision is brought to life effectively.",
    icon: (
      <svg className="w-10 h-10 text-accent-amber" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 10C13 12.2091 11.2091 14 9 14C6.79086 14 5 12.2091 5 10C5 7.79086 6.79086 6 9 6C11.2091 6 13 7.79086 13 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 17C5.13401 17 2 20.134 2 24H16C16 20.134 12.866 17 9 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 8H19.01M19 14C16.7909 14 15 12.2091 15 10C15 7.79086 16.7909 6 19 6C21.2091 6 23 7.79086 23 10C23 11.0194 22.6345 11.9594 22.0265 12.7011C21.9055 12.8584 21.8222 13.0414 21.7839 13.2351C21.6946 13.6777 22.0338 14.069 22.4765 13.9985L22.5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Quality Assurance",
    description: "We maintain rigorous quality standards throughout the development process.",
    icon: (
      <svg className="w-10 h-10 text-accent-amber" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export const WhyChoose = () => {
  return (
    <section className="section bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-primary mb-4">Why Choose Us</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            We're committed to delivering exceptional digital solutions with a focus on quality, innovation, and client satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 border-t-4 border-accent-teal hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
