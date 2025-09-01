import React from "react";
import { motion } from "framer-motion";
import { buttonHover } from "~/lib/animations";
import type { TranslationKey } from "~/lib/i18n";

interface MobileContactBarProps {
  t: TranslationKey;
}

export function MobileContactBar({ t }: MobileContactBarProps) {
  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 bg-red-600 text-white p-4 flex justify-between items-center sm:hidden z-40 shadow-lg"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: 1,
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700" />
      
      {/* Animated pulse effect */}
      <motion.div
        className="absolute inset-0 bg-white opacity-10"
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.a
        href="tel:6264222271"
        className="flex items-center space-x-2 font-semibold relative z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ 
          scale: 0.95,
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: "8px",
          padding: "8px"
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.svg 
          className="w-5 h-5" 
          fill="currentColor" 
          viewBox="0 0 20 20"
          animate={{
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </motion.svg>
        <motion.span
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
        >
          {t.mobile.callNow}
        </motion.span>
      </motion.a>
      
      <motion.a
        href="#contact"
        className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold relative overflow-hidden z-10"
        variants={buttonHover}
        whileHover="hover"
        whileTap="tap"
      >
        <motion.span className="relative z-10">
          {t.mobile.getQuote}
        </motion.span>
        
        {/* Hover background effect */}
        <motion.div
          className="absolute inset-0 bg-red-50"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ 
            scale: 1, 
            opacity: 1,
            transition: { duration: 0.3 }
          }}
        />
        
        {/* Tap ripple effect */}
        <motion.div
          className="absolute inset-0 bg-red-100 rounded-lg"
          initial={{ scale: 0, opacity: 0 }}
          whileTap={{ 
            scale: 1.2, 
            opacity: 0.6,
            transition: { duration: 0.4 }
          }}
        />
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
          initial={{ x: "-100%" }}
          whileHover={{
            x: "100%",
            transition: { duration: 0.6, ease: "easeInOut" }
          }}
        />
      </motion.a>
    </motion.div>
  );
}

