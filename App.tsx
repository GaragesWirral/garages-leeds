import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EnquiryForm from './components/EnquiryForm';
import Features from './components/Features';
import Services from './components/Services';
import LocationMap from './components/LocationMap';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans antialiased text-foreground bg-background">
      <Navbar />
      <main>
        <Hero />
        <EnquiryForm />
        <Features />
        <Services />
        <LocationMap />
        <About />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;