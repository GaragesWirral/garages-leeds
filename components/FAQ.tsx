import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-secondary/30 px-6 rounded-lg border-0 mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start justify-between gap-4 py-6 text-left font-semibold hover:no-underline focus-visible:outline-none"
      >
        <span>{question}</span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 flex-shrink-0 mt-1 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="text-muted-foreground pb-6 leading-relaxed text-sm animate-in fade-in slide-in-from-top-2">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How much does it cost to rent a garage in Leeds?",
      answer: "Our garage rental prices in Leeds start from £100 per month, depending on the size and location. We offer competitive rates for lock-up garages across West Yorkshire with flexible payment terms."
    },
    {
      question: "Where are your garages located in Leeds?",
      answer: "We have garages to rent across multiple locations in Leeds including Headingley, Morley, Chapel Allerton, Pudsey, and other areas throughout West Yorkshire. Contact us to find a garage to rent near you."
    },
    {
      question: "What can I store in a lock-up garage?",
      answer: "Our lock-up garages in Leeds are perfect for storing vehicles (cars, motorcycles, vans), tools, equipment, furniture, or any personal belongings that need secure storage. Some units also have electricity for workshops."
    },
    {
      question: "Are the garages secure?",
      answer: "Yes, all our garages for rent in Leeds feature robust security including secure locks and are located in safe areas. We prioritize the security of your vehicle and belongings."
    },
    {
      question: "Do I need a long-term contract?",
      answer: "No, we offer flexible rental terms to suit your needs. Whether you need short-term or long-term garage rental in Leeds, we can accommodate your requirements with easy cancellation options."
    },
    {
      question: "Can I view a garage before renting?",
      answer: "We encourage viewings so you can see the garage location and condition before committing. Contact us on 07519 667044 to arrange a viewing of available garages in Leeds."
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Got questions about renting a garage in Leeds? Find answers to common questions below.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          <div className="mt-12 text-center p-8 bg-secondary/50 rounded-2xl">
            <p className="text-lg mb-4">Still have questions?</p>
            <p className="text-muted-foreground mb-6">Get in touch with us and we'll be happy to help you find the perfect garage to rent in Leeds.</p>
            <a href="tel:07519667044" className="inline-flex items-center text-primary font-semibold text-lg hover:underline">
              Call us on 07519 667044
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;