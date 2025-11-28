import React, { useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';

const EnquiryForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/josephgough02@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        // Convert FormData to JSON for the AJAX request
        body: JSON.stringify(Object.fromEntries(formData))
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
      } else {
        setIsSubmitting(false);
        alert("Something went wrong. Please try again or call us directly.");
      }
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      alert("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <section id="enquiry" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Get Your Free Quote Today</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Fill out the form below and we'll get back to you within 24 hours with available garages in Leeds.
            </p>
          </div>

          <div className="bg-secondary/50 p-8 lg:p-12 rounded-2xl shadow-lg border border-border">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                <p className="text-muted-foreground max-w-md">
                  Thank you for your enquiry. One of our team members will contact you shortly to discuss garage availability.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-primary font-medium hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Honey pot to prevent spam */}
                <input type="text" name="_honey" style={{display: 'none'}} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Garage Enquiry from Website" />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Full Name *
                    </label>
                    <input 
                      className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" 
                      id="name" 
                      name="name"
                      required 
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" 
                      id="phone" 
                      name="phone"
                      required 
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" 
                    id="email" 
                    name="email"
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    What are you looking for?
                  </label>
                  <textarea 
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-white px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" 
                    id="message" 
                    name="message"
                    rows={4}
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                <button 
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#0070f3] text-white hover:bg-[#0060df] rounded-md px-6 w-full text-lg h-14" 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Request a Quote"
                  )}
                </button>
                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted about garage rentals in Leeds.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;