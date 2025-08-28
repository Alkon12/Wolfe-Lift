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
      className="bg-gray-50 rounded-xl p-8 border-l-4 border-red-600 cursor-pointer"
      variants={cardAnimation}
      whileHover="hover"
      style={{
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      whileInView={{
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{
        boxShadow: { duration: 0.3 },
      }}
    >
      <motion.div 
        className="relative w-full h-48 rounded-lg mb-6 overflow-hidden bg-gray-200"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {!imageError ? (
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={handleImageError}
            loading="lazy"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        ) : (
          <motion.div 
            className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-100 to-red-50"
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
      </motion.div>

      <motion.h3 
        className="text-2xl font-bold text-gray-900 mb-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-600 mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {specs}
      </motion.p>
      
      <motion.div 
        className="flex justify-between items-center mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.span 
          className="text-3xl font-bold text-red-600"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          {rate}
        </motion.span>
      </motion.div>
      
      <motion.a
        href="#contact"
        className="w-full bg-red-600 text-white py-3 rounded-lg font-medium text-center block relative overflow-hidden"
        variants={buttonHover}
        whileHover="hover"
        whileTap="tap"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.span className="relative z-10">
          {quoteText}
        </motion.span>
        <motion.div
          className="absolute inset-0 bg-red-700"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ 
            scale: 1, 
            opacity: 1,
            transition: { duration: 0.3 }
          }}
        />
      </motion.a>
    </motion.div>
  );
}