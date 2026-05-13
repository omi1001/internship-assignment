import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './components/section/Hero';
import Features from './components/section/Features.jsx';
import Eligibility from './components/section/Eligibility';
import LeadForm from './components/section/LeadForm';

/**
 * Main App Component
 * Designed for IIM Sirmaur Online MBA Landing Page [cite: 2]
 * Tech Stack: React, Tailwind CSS v4, Framer Motion [cite: 25]
 */
function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900">
      {/* 1. Sticky Navigation & CTA  */}
      <Navbar />

      <main>
        {/* 2. Hero Section: Catchy Headline & Sub-headline [cite: 8, 10, 11] */}
        <Hero />

        {/* 3. Program Features Grid [cite: 13, 14, 15, 16] */}
        <section className="bg-slate-50">
           <Features />
        </section>

        {/* 4. Eligibility & Important Dates [cite: 18, 19, 20] */}
        <Eligibility />

        {/* 5. Conversion-Optimized Lead Generation Form [cite: 22, 23] */}
        <LeadForm />
      </main>

      {/* Footer Footer with Contact Info [cite: 21] */}
      <footer className="bg-[#002147] text-white py-12 px-6 border-t border-[#C5A059]/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold uppercase tracking-wider">
            IIM <span className="text-[#C5A059]">Sirmaur</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-slate-300 text-sm">Questions? Contact Admissions</p>
            <p className="text-[#C5A059] font-bold text-lg">+91 98765 43210</p>
          </div>
        </div>
        <div className="mt-8 text-center text-slate-400 text-xs">
          © {new Date().getFullYear()} IIM Sirmaur Online MBA. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;