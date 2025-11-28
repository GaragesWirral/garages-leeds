import React from 'react';
import { Phone, Mail } from 'lucide-react';

const StickyActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end print:hidden">
      <a
        href="tel:07519667044"
        className="flex items-center gap-2 bg-[#0070f3] text-white px-5 py-3 rounded-lg shadow-lg font-bold transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-[#0060df]"
      >
        <Phone className="w-5 h-5" />
        Call Now
      </a>
      <a
        href="#enquiry"
        className="flex items-center gap-2 bg-[#f1f5f9] text-[#1e293b] px-5 py-3 rounded-lg shadow-lg font-bold border border-gray-200 transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-white"
      >
        <Mail className="w-5 h-5" />
        Get Quote
      </a>
    </div>
  );
};

export default StickyActions;