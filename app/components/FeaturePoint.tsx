import React from "react";
import { motion } from "framer-motion";
import { iconFloat, scaleIn } from "~/lib/animations";

interface FeaturePointProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function FeaturePoint({ title, description, icon }: FeaturePointProps) {
  return (
    <motion.div 
      className="text-center group cursor-pointer"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div 
        className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden"
        variants={iconFloat}
        whileHover="hover"
        whileTap={{ scale: 0.9 }}
        style={{
          boxShadow: "0 4px 6px -1px rgba(239, 68, 68, 0.3)",
        }}
      >
        <motion.div
          className="text-white"
          whileHover={{ 
            scale: 1.2,
            rotate: [0, -10, 10, 0],
          }}
          transition={{ 
            scale: { duration: 0.2 },
            rotate: { duration: 0.5 }
          }}
        >
          {icon}
        </motion.div>
        
        {/* Ripple effect on hover */}
        <motion.div
          className="absolute inset-0 bg-red-500 rounded-full"
          initial={{ scale: 0, opacity: 0.7 }}
          whileHover={{ 
            scale: 1.5, 
            opacity: 0,
            transition: { duration: 0.6 }
          }}
        />
      </motion.div>
      
      <motion.h3 
        className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}