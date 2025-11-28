import React from 'react';
import { Shield, MapPin, Wallet, Clock } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Storage',
      desc: 'All our lock-up garages feature robust security measures to keep your vehicle or belongings safe and protected 24/7.'
    },
    {
      icon: MapPin,
      title: 'Convenient Locations',
      desc: 'Multiple garage locations across Leeds, making it easy to find a garage to rent near you in West Yorkshire.'
    },
    {
      icon: Wallet,
      title: 'Affordable Rates',
      desc: 'Competitive pricing with flexible payment terms. Our garages for rent in Leeds offer excellent value for money.'
    },
    {
      icon: Clock,
      title: 'Flexible Contracts',
      desc: 'No long-term commitments required. Rent a garage on terms that suit your needs with easy cancellation.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Why Rent a Garage in Leeds?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Garages Leeds provides secure, affordable lock-up garages perfect for vehicle storage, extra space, or protecting your valuables across West Yorkshire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-border/50">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;