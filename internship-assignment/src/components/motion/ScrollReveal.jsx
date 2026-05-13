import { motion } from 'framer-motion';

export const ScrollReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] // Custom "Executive" ease-out
    }}
  >
    {children}
  </motion.div>
);