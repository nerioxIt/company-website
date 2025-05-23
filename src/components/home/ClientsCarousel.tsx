
export const ClientsCarousel = () => {
  return (
    <section className="section bg-background py-12">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-primary mb-4">Our Trusted Clients</h2>
          <p className="text-secondary">
            We've partnered with forward-thinking companies across various industries.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex space-x-20 animate-slide-left">
            {/* Client logos */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="w-40 h-24 flex items-center justify-center bg-white rounded-lg shadow-sm p-4">
                <div className="text-3xl font-bold text-primary opacity-50">Client {item}</div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={`dup-${item}`} className="w-40 h-24 flex items-center justify-center bg-white rounded-lg shadow-sm p-4">
                <div className="text-3xl font-bold text-primary opacity-50">Client {item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
