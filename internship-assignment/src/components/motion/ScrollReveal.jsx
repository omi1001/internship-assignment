import { motion } from 'framer-motion';

/**
 * ScrollReveal: A performance-optimized wrapper for section entrance animations.
 * Instead of standard linear movement, it uses a custom cubic-bezier to create 
 * a "weighted" feel common in luxury brand interfaces.
 */
export const ScrollReveal = ({ children }) => (
  <motion.div
    // initial: Sets the starting state (slightly lower, smaller, and invisible)
    initial={{ opacity: 0, y: 30, scale: 0.98 }}
    
    // whileInView: Triggers when the user scrolls to this element
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    
    // viewport: Ensures the animation only runs once to keep CPU usage low
    // margin: "-100px" triggers the animation slightly before the element hits center-screen
    viewport={{ once: true, margin: "-100px" }}
    
    // transition: The core "Executive" feel comes from this specific ease-out curve
    transition={{ 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    }}
  >
    {children}
  </motion.div>
);