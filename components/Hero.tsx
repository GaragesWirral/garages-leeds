import React from 'react';
import { Shield, Clock, Mail, Phone, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-secondary via-white to-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Trusted Local Garage Rentals
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Garages to Rent in Leeds
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Garages Leeds offers secure, affordable lock-up garages to rent in Leeds. Whether you need extra storage space or a safe place to park your vehicle, we provide the perfect solution for residents across West Yorkshire.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Fully Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Flexible Terms</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Quick Response</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col">
                <a href="#enquiry" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-white rounded-md text-lg h-14 px-8 bg-green-500 hover:bg-green-600 shadow-sm">
                  Secure Your Garage Now
                </a>
                <p className="text-sm text-muted-foreground mt-2">Get availability & quote in 24 hours – no commitment</p>
              </div>
              <a href="tel:07519667044" title="Speak to our team: 07519 667044 – available 9am-6pm" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md text-lg h-14 px-8">
                <Phone className="w-5 h-5 mr-2" />
                Call for Advice
              </a>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">Trusted by 100+ customers across Leeds</p>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-sm font-semibold">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://www.garagesleeds.co.uk/secure-garage-lock-up-storage-leeds.jpg" 
                alt="Lock-up garage to rent in Leeds" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <p className="text-3xl font-bold text-primary">£100+</p>
              <p className="text-sm text-muted-foreground">Starting from per month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;