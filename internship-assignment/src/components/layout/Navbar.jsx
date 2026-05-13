import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex flex-col leading-tight">
          <span className="text-iim-navy font-black text-xl tracking-tighter uppercase">
            IIM <span className="text-iim-gold">Sirmaur</span>
          </span>
          <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">
            Online MBA
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-semibold text-iim-navy hover:text-iim-gold transition-colors">Program</a>
          <a href="#eligibility" className="text-sm font-semibold text-iim-navy hover:text-iim-gold transition-colors">Eligibility</a>
          <button 
  onClick={() => {
    setIsOpen(false);
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  }}  className="bg-iim-navy text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-iim-gold text-whitetransition-all shadow-lg flex items-center gap-2">
            Apply Now <ArrowRight size={16} />
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-iim-navy">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-6 py-8 flex flex-col gap-6"
        >
          <a href="#features" onClick={() => setIsOpen(false)} className="text-lg font-bold text-iim-navy">Program Features</a>
          <a href="#eligibility" onClick={() => setIsOpen(false)} className="text-lg font-bold text-iim-navy">Eligibility</a>
          <button 
  onClick={() => {
    setIsOpen(false);
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  }} 
  className="bg-iim-gold text-white py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 hover:bg-iim-navy hover:text-white cursor-pointer"
>
  Apply Now
</button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;