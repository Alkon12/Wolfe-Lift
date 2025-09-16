import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
  specSheetUrl: string;
  title: string;
}

export function SpecsModal({ isOpen, onClose, specSheetUrl, title }: SpecsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-4xl h-[90vh] bg-white border-4 border-red-600 overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94],
              rotateY: { duration: 0.6 }
            }}
            style={{ perspective: "1000px" }}
          >
            {/* Header */}
            <motion.div 
              className="bg-red-600 text-white p-4 flex justify-between items-center border-b-4 border-black"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-8 h-8 bg-white flex items-center justify-center"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-wide">
                  {title} - SPECIFICATIONS
                </h2>
              </div>
              
              <motion.button
                onClick={onClose}
                className="w-10 h-10 bg-black hover:bg-gray-800 text-white flex items-center justify-center font-black text-xl transition-colors duration-200"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                ×
              </motion.button>
            </motion.div>

            {/* PDF Content */}
            <motion.div 
              className="h-full bg-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <iframe
                src={specSheetUrl}
                className="w-full h-full border-0"
                title={`${title} Specifications`}
                loading="lazy"
              />
            </motion.div>

            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-black"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-black"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}