import React from 'react';
import { Mail, Phone } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-accent to-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">Ready to Rent Your Garage in Leeds?</h2>
          <p className="text-xl mb-10 opacity-90 text-pretty">
            Join hundreds of satisfied customers who trust Garages Leeds for secure, affordable lock-up garage rentals across West Yorkshire.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#enquiry" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md text-lg h-14 px-8">
              <Mail className="w-5 h-5 mr-2" />
              Get a Free Quote
            </a>
            <a href="tel:07519667044" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white hover:text-primary bg-transparent rounded-md text-lg h-14 px-8">
              <Phone className="w-5 h-5 mr-2" />
              Call 07519 667044
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
            <div>
              <p className="text-3xl font-bold mb-2">24/7</p>
              <p className="opacity-90">Access Available</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">100%</p>
              <p className="opacity-90">Secure Storage</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">£100+</p>
              <p className="opacity-90">Starting Price/Month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;