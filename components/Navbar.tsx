import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a className="flex items-center gap-2" href="/">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">GL</div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-foreground">Garages Leeds</div>
              <div className="text-xs text-muted-foreground">Lock-Up Garage Rentals</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-2 text-primary font-semibold text-lg">
            <Phone className="w-5 h-5" />
            <a href="tel:07519667044">07519 667044</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#enquiry" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-secondary hover:text-secondary-foreground h-10 rounded-md px-6">
              Get a Quote
            </a>
            <a href="tel:07519667044" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 shadow h-10 rounded-md px-6">
              Call Now
            </a>
          </div>

          <button 
            className="md:hidden p-2" 
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg p-4 flex flex-col gap-4">
            <a 
              href="#enquiry" 
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-10 rounded-md px-6 border border-input bg-background w-full"
            >
              Get a Quote
            </a>
            <a 
              href="tel:07519667044" 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-10 rounded-md px-6 bg-primary text-primary-foreground w-full"
            >
              Call Now
            </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;