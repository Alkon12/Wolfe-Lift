import React, { useState } from "react";
import { motion } from "framer-motion";
import { cardAnimation, buttonHover } from "~/lib/animations";

interface EquipmentCardProps {
  title: string;
  specs: string;
  rate: string;
  quoteText: string;
  image: string;
}

export function EquipmentCard({ 
  title, 
  specs, 
  rate, 
  quoteText, 
  image 
}: EquipmentCardProps) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div 
      className="bg-black border-4 border-white/20 p-6 cursor-pointer relative overflow-hidden group"
      variants={cardAnimation}
      whileHover="hover"
      style={{
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
      }}
      whileInView={{
        boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)",
      }}
      transition={{
        boxShadow: { duration: 0.3 },
      }}
    >
      {/* Industrial corner accents */}
      <div className="absolute top-0 right-0 w-4 h-4 bg-red-600"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 bg-red-600"></div>
      
      {/* Diagonal accent */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-full bg-red-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
        style={{ clipPath: "polygon(60% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      ></div>

      <motion.div 
        className="relative w-full h-40 md:h-48 mb-4 md:mb-6 overflow-hidden bg-gray-800 border-2 border-white/10"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {!imageError ? (
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover filter brightness-110 contrast-125"
            onError={handleImageError}
            loading="lazy"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        ) : (
          <motion.div 
            className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-900/30 to-gray-800"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="text-6xl text-red-600"
              animate={{ 
                rotate: [0, -5, 5, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              🏗️
            </motion.div>
          </motion.div>
        )}
        
        {/* Image overlay with specs badge */}
        <div className="absolute top-4 left-4">
          <div className="bg-red-600 text-white px-3 py-1 text-xs font-black uppercase tracking-wider">
            AVAILABLE
          </div>
        </div>
      </motion.div>

      <motion.h3 
        className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-3 md:mb-4 uppercase tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-white/80 mb-4 md:mb-6 font-medium uppercase text-sm tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {specs}
      </motion.p>
      
      <motion.div 
        className="flex justify-between items-center mb-4 md:mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="bg-white/10 border-2 border-red-600 px-3 md:px-4 py-2 relative">
          <motion.span 
            className="text-xl md:text-2xl lg:text-3xl font-black text-red-600 block"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {rate}
          </motion.span>
          <span className="text-white/60 text-xs uppercase tracking-wider">PER DAY</span>
        </div>
        
        <div className="text-right">
          <div className="flex items-center gap-2 text-white/80">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-xs font-bold uppercase">READY</span>
          </div>
        </div>
      </motion.div>
      
      <motion.a
        href="#contact"
        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 md:py-4 font-black text-base md:text-lg uppercase tracking-widest text-center block relative overflow-hidden group border-2 border-red-600 hover:border-red-700 transition-all duration-200 min-h-[48px] flex items-center justify-center"
        style={{ clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%)" }}
        variants={buttonHover}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.span className="relative z-10">
          {quoteText}
        </motion.span>
        <motion.div
          className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
        />
      </motion.a>
    </motion.div>
  );
}