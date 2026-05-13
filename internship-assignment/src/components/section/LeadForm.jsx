import { motion } from "framer-motion";

const LeadForm = () => (
  // scroll-mt-20 ensures the section header doesn't get hidden behind the sticky navbar
  <section id="apply" className="py-24 bg-slate-50 scroll-mt-20 px-6">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-gray-100"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-iim-navy">Get in Touch</h2>
        <p className="text-gray-500 mt-2">Fill the form to download the program brochure.</p>
      </div>

      {/* Basic form structure handling the 5 required lead data points */}
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {/* Full-width inputs for primary contact info */}
        <input 
          type="text" 
          placeholder="Full Name" 
          className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-iim-gold outline-none transition-all" 
          required 
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-iim-gold outline-none transition-all" 
          required 
        />
        <input 
          type="tel" 
          placeholder="Phone Number" 
          className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-iim-gold outline-none transition-all" 
          required 
        />

        {/* 2-column grid for professional details to keep the form height compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Current Designation" 
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-iim-gold outline-none transition-all" 
            required 
          />
          <input 
            type="text" 
            placeholder="Experience (Years)" 
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-iim-gold outline-none transition-all" 
            required 
          />
        </div>

        {/* Primary CTA with high-contrast color and tactile hover scaling */}
        <button 
          className="w-full bg-iim-gold text-white py-5 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 hover:bg-iim-navy hover:scale-[1.02] active:scale-95 cursor-pointer"
        >
          Apply Now
        </button>
      </form>
    </motion.div>
  </section>
);

export default LeadForm;