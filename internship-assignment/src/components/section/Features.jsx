import { motion } from "framer-motion";
import { Monitor, GraduationCap, Calendar, Zap } from "lucide-react";

// Optimized "Executive" animation settings
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1, // Staggered reveal
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] // High-end cubic-bezier
    }
  })
};

const mainFeatures = [
  {
    icon: <Monitor className="text-iim-gold" size={32} />,
    title: "100% Live Online",
    detail: "Interactive weekend classes designed specifically for working professionals."
  },
  {
    icon: <GraduationCap className="text-iim-gold" size={32} />,
    title: "Direct IIM Alumni Status",
    detail: "Gain the prestigious IIM Sirmaur alumni network and credentials."
  },
  {
    icon: <Calendar className="text-iim-gold" size={32} />,
    title: "24-Month Duration",
    detail: "Comprehensive curriculum including immersive on-campus sessions."
  }
];

const specializations = ["AI-Powered Finance", "Marketing", "Operations"];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Header with Smooth Fade */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-iim-navy tracking-tight">Program Highlights</h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Elevate your career with a specialized curriculum designed for the future of business leadership.</p>
      </motion.div>

      {/* Main Feature Cards with Staggered Scale-up */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {mainFeatures.map((feature, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -12, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
            className="p-8 bg-white border border-gray-100 rounded-3xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] transition-shadow duration-500"
          >
            <div className="mb-6 bg-slate-50 w-fit p-4 rounded-2xl ring-1 ring-gray-100">{feature.icon}</div>
            <h3 className="text-xl font-bold text-iim-navy mb-3">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm">{feature.detail}</p>
          </motion.div>
        ))}
      </div>

      {/* Specializations Bar with Glassmorphism */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-iim-navy rounded-[2.5rem] p-10 md:p-16 text-white text-center shadow-2xl overflow-hidden relative"
      >
        {/* Decorative Background Glow for Premium feel */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-iim-gold/10 blur-[100px] -z-10" />
        
        <h3 className="text-2xl font-bold mb-8 tracking-tight">Major Specializations</h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {specializations.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (index * 0.1) }}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Zap size={16} className="text-iim-gold" />
              <span className="font-semibold text-sm tracking-wide uppercase">{spec}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Features;