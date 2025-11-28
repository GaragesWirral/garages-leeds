import React from 'react';
import { Building2, Zap, DollarSign } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From standard garages to rent in Leeds to large units with electricity, we have a solution for every storage need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gradient-to-br from-secondary/50 to-white p-8 rounded-2xl border border-border hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Lock-Up Garages for Rent</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Secure lock-up garages to rent in Leeds. Perfect for vehicle storage, motorcycles, or extra storage space. Available across multiple locations in West Yorkshire.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div><span>24/7 Access</span></li>
              <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div><span>Secure Locks</span></li>
              <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div><span>Various Sizes</span></li>
              <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div><span>Affordable Rates</span></li>
            </ul>
            <a href="#enquiry" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full bg-transparent">
              Learn More
            </a>
          </div>

          {/* Service 2 */}
          <div className="bg-gradient-to-br from-secondary/50 to-white p-8 rounded-2xl border border-border hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Large Units with Electricity</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Need power? We offer larger garage units with electricity supply, ideal for workshops, hobby spaces, or businesses requiring secure storage with power.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div><span>Electric Supply</span></li>
              <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div><span>Spacious Units</span></li>
              <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div><span>Workshop Ready</span></li>
              <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div><span>Business Friendly</span></li>
            </ul>
            <a href="#enquiry" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full bg-transparent">
              Learn More
            </a>
          </div>

          {/* Service 3 */}
          <div className="bg-gradient-to-br from-secondary/50 to-white p-8 rounded-2xl border border-border hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">We Buy Garages</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Do you own a garage in Leeds that you want to sell? We purchase garages across the area. Get in touch for a no-obligation valuation.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div><span>Quick Sale</span></li>
              <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div><span>Fair Prices</span></li>
              <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div><span>No Fees</span></li>
              <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div><span>Hassle-Free</span></li>
            </ul>
            <a href="#enquiry" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full bg-transparent">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;