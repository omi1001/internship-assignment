import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const BacktoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[60] bg-iim-navy text-white p-4 rounded-full shadow-2xl border border-white/10 hover:bg-iim-gold hover:text-iim-navy transition-all duration-300 cursor-pointer group"
          aria-label="Back to top"
        >
          {/* Subtle bounce animation on the icon */}
          <ChevronUp
            className="group-hover:-translate-y-1 transition-transform"
            size={24}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BacktoTop;
