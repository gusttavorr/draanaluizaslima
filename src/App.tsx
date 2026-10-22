import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Treatments } from './components/Treatments';
import { DigitalPresence } from './components/DigitalPresence';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full bg-[#FAF8F5] text-[#1E1B18] overflow-x-hidden">
      {/* Fixed Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section (Real photo of Dra. Luiza, high-end editorial composition) */}
        <Hero />

        {/* 2. About Dra. Luiza (Ethical, personalized care and essence-respecting philosophy) */}
        <About />

        {/* 3. Treatments Section (Botox in visual highlight, facial structuring, firmness & harmony) */}
        <Treatments />

        {/* 4. Experience & Ethical Reassurance (Individualized diagnosis education, pillars of care) */}
        <Experience />

        {/* 5. 'Um pouco mais sobre meu trabalho' (Realistic smartphone mockup & real Instagram reels) */}
        <DigitalPresence />

        {/* 6. Pre-Scheduling via WhatsApp (Clean form with requested fields) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Discreet Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
