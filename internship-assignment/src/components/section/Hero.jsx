import { motion } from "framer-motion";


const Hero = () => (
  <section className="pt-20 pb-16 px-6 text-center max-w-5xl mx-auto">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#002147] leading-tight">
        India's First AI-Native MBA <br/>
        <span className="text-gray-400">for Working Professionals.</span>
      </h1>
      <p className="mt-6 text-lg text-gray-600">
        Earn an MBA degree from IIM Sirmaur without quitting your job.
      </p>
      <button className="mt-10 bg-[#C5A059] text-white px-8 py-4 rounded-lg font-bold shadow-xl hover:scale-105 transition-transform">
        Download Brochure
      </button>
    </motion.div>
  </section>
);

export default Hero;