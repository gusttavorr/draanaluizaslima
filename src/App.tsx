import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Treatments } from './components/Treatments';
import { Clinic } from './components/Clinic';
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
        {/* 1. Hero Section (with real photo 1 & editorial asymmetry) */}
        <Hero />

        {/* 2. About Dra. Alice Section (with real photo 2 & biomimetic ethics) */}
        <About />

        {/* 3. Treatments Section (confirmed procedures: veneers, aligners, etc.) */}
        <Treatments />

        {/* 4. The Clinic Section (real workspace, biophilic ambience in Arujá) */}
        <Clinic />

        {/* 5. NEW: Digital Presence Section (Realistic smartphone mockup & real Instagram reels) */}
        <DigitalPresence />

        {/* 6. Ethical Experience & Reassurance Section */}
        <Experience />

        {/* 7. Contact & Pre-Scheduling Section (WhatsApp routing & address) */}
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
