import { motion } from "framer-motion";

const Hero = () => (
  // Using relative positioning and a standard max-width to keep the content centered and clean
  <section
    id="home"
    className="relative pt-20 pb-16 px-6 text-center max-w-5xl mx-auto"
  >
    {/* Simple entrance animation to make the page feel reactive on load */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* High-impact headline using the brand's navy color */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#002147] leading-tight tracking-tight">
        India's First AI-Native MBA <br />
        <span className="text-gray-400">for Working Professionals.</span>
      </h1>

      {/* Sub-headline focuses on the core value proposition: flexibility */}
      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Earn an MBA degree from IIM Sirmaur without quitting your job.
      </p>

      {/* Primary CTA using the brand's gold color. 
          Scale transform on hover provides immediate tactile feedback. */}
      <button className="mt-10 bg-[#C5A059] text-white px-8 py-4 rounded-lg font-bold shadow-xl hover:scale-105 transition-transform active:scale-95 cursor-pointer">
        Download Brochure
      </button>
    </motion.div>
  </section>
);

export default Hero;
