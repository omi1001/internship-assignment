import { motion } from "framer-motion";
import { Monitor, GraduationCap, Calendar, Zap } from "lucide-react";

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
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-iim-navy">Program Highlights</h2>
        <p className="text-gray-600 mt-4">Elevate your career with a specialized curriculum.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {mainFeatures.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all"
          >
            <div className="mb-4 bg-slate-50 w-fit p-4 rounded-xl">{feature.icon}</div>
            <h3 className="text-xl font-bold text-iim-navy mb-2">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.detail}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-iim-navy rounded-3xl p-10 md:p-16 text-white text-center">
        <h3 className="text-2xl font-bold mb-8">Major Specializations</h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {specializations.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/20"
            >
              <Zap size={18} className="text-iim-gold" />
              <span className="font-medium tracking-wide">{spec}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;