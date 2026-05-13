import { motion } from "framer-motion";

export const FeatureCard = ({ title, detail, icon: Icon }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-white border-l-4 border-iim-gold shadow-sm rounded-r-lg"
  >
    <h3 className="font-bold text-iim-navy text-lg">{title}</h3>
    <p className="text-gray-600 mt-1">{detail}</p>
  </motion.div>
);