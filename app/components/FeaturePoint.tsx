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
      className="text-center group cursor-pointer relative"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Industrial icon container - móvil optimizado */}
      <motion.div 
        className="w-16 h-16 md:w-20 md:h-20 bg-black border-4 border-red-600 flex items-center justify-center mx-auto mb-4 md:mb-6 relative overflow-hidden group-hover:bg-red-600 group-hover:border-black transition-all duration-300"
        variants={iconFloat}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        style={{
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* Corner accents */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 group-hover:bg-black transition-colors duration-300"></div>
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-red-600 group-hover:bg-black transition-colors duration-300"></div>
        
        <motion.div
          className="text-red-600 group-hover:text-white transition-colors duration-300"
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, 0],
          }}
          transition={{ 
            scale: { duration: 0.2 },
            rotate: { duration: 0.4 }
          }}
        >
          {icon}
        </motion.div>
        
        {/* Industrial shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"
          style={{ transform: "skewX(-45deg)" }}
        />
      </motion.div>
      
      <motion.h3 
        className="text-base md:text-lg lg:text-xl font-black mb-2 md:mb-3 text-black group-hover:text-red-600 transition-colors duration-300 uppercase tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 text-xs md:text-sm uppercase tracking-wide font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {description}
      </motion.p>

      {/* Industrial underline */}
      <motion.div
        className="w-8 h-1 bg-red-600 mx-auto mt-3 group-hover:w-12 transition-all duration-300"
        initial={{ width: 0 }}
        animate={{ width: "2rem" }}
        transition={{ delay: 0.5, duration: 0.3 }}
      />
    </motion.div>
  );
}