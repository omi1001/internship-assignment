import { motion } from "framer-motion";

/**
 * FeatureCard: A reusable UI component for highlighting program benefits.
 * Uses a left-accent border to maintain a professional, academic aesthetic 
 * consistent with IIM branding.
 */
export const FeatureCard = ({ title, detail, icon: Icon }) => (
  <motion.div 
    // Subtle scale-up to provide visual feedback without being distracting
    whileHover={{ scale: 1.05 }}
    // The border-l-4 provides a strong vertical anchor, signaling a "list" of premium features
    className="p-6 bg-white border-l-4 border-iim-gold shadow-sm rounded-r-lg transition-shadow hover:shadow-md"
  >
    {/* Heading uses a condensed bold weight for an authoritative feel */}
    <h3 className="font-bold text-iim-navy text-lg">{title}</h3>
    
    {/* Body text uses a slightly muted gray to keep the focus on the title */}
    <p className="text-gray-600 mt-1">{detail}</p>
  </motion.div>
);