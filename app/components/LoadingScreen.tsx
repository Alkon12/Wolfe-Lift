import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "~/hooks/useLanguage";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const { t } = useLanguage();
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Prevent body scroll during loading
    document.body.style.overflow = 'hidden';
    
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExiting(true), 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    if (isExiting) {
      setTimeout(() => {
        // Ensure body scroll is restored
        document.body.style.overflow = 'unset';
        onLoadingComplete();
      }, 1000);
    }
  }, [isExiting, onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Industrial background matching HeroSection */}
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
            
            {/* Dynamic diagonal geometric shapes - animated */}
            <motion.div
              className="absolute top-0 right-0 w-1/2 h-full bg-red-600"
              style={{ clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            
            <motion.div
              className="absolute top-0 right-0 w-1/3 h-full bg-white opacity-10"
              style={{ clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 20% 100%)" }}
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
            />
            
            {/* Industrial texture overlay - animated */}
            <motion.div 
              className="absolute inset-0 opacity-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/10 to-transparent transform -skew-x-12"
                animate={{ 
                  x: ["-100%", "100%"],
                  skewX: ["-12deg", "12deg", "-12deg"]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent transform skew-y-3"
                animate={{ 
                  y: ["-100%", "100%"],
                  skewY: ["3deg", "-3deg", "3deg"]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: 1
                }}
              />
            </motion.div>
          </div>

          {/* Main loading content */}
          <div className="relative z-20 text-center">
            {/* Animated logo with life and movement */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ 
                scale: 1, 
                rotate: 0, 
                opacity: 1,
                y: [0, -10, 0],
                rotateZ: [0, 5, -5, 0]
              }}
              transition={{ 
                scale: { duration: 0.8, ease: "backOut" },
                rotate: { duration: 0.8, ease: "backOut" },
                opacity: { duration: 0.8 },
                y: { 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                },
                rotateZ: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }
              }}
              exit={{
                scale: 0.8,
                y: -100,
                x: 100,
                transition: { duration: 1, ease: "easeInOut" }
              }}
            >
              {/* Logo with pulsing glow effect */}
              <motion.div
                className="relative inline-block"
                animate={{ 
                  filter: [
                    "drop-shadow(0 0 20px rgba(220, 38, 38, 0.5))",
                    "drop-shadow(0 0 40px rgba(220, 38, 38, 0.8))",
                    "drop-shadow(0 0 20px rgba(220, 38, 38, 0.5))"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <img
                  src="/LogoSinFondo.png"
                  alt="Wolfe Lift Rentals"
                  className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain"
                  style={{
                    filter: `
                      drop-shadow(3px 0 0 white) 
                      drop-shadow(-3px 0 0 white) 
                      drop-shadow(0 3px 0 white) 
                      drop-shadow(0 -3px 0 white)
                      drop-shadow(2px 2px 0 white)
                      drop-shadow(2px -2px 0 white)
                      drop-shadow(-2px 2px 0 white)
                      drop-shadow(-2px -2px 0 white)
                      drop-shadow(0 0 20px rgba(0,0,0,0.6))
                    `,
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Loading text with typing effect */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.h2 
                className="text-2xl md:text-4xl font-black uppercase text-white mb-2"
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(220, 38, 38, 0.5)",
                    "0 0 20px rgba(220, 38, 38, 0.8)",
                    "0 0 10px rgba(220, 38, 38, 0.5)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                WOLFE LIFT
              </motion.h2>
              <motion.p 
                className="text-red-600 font-bold uppercase tracking-wider text-sm md:text-lg"
                style={{
                  textShadow: "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black"
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
{t.loading.elevatingProjects}
              </motion.p>
            </motion.div>

            {/* Industrial loading bar */}
            <motion.div
              className="w-64 md:w-96 mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              {/* Loading bar container with industrial design */}
              <div className="relative">
                <div className="h-3 bg-gray-800 border-2 border-white/20 overflow-hidden"
                     style={{ clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)" }}>
                  <motion.div
                    className="h-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(loadingProgress, 100)}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                    />
                  </motion.div>
                </div>
                
                {/* Loading percentage */}
                <motion.div
                  className="mt-2 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <span className="text-white font-black text-sm md:text-base uppercase tracking-wider">
                    {Math.floor(loadingProgress)}%
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Loading dots animation */}
            <motion.div
              className="flex justify-center space-x-2 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-red-600 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Industrial corner accents */}
          <motion.div
            className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-red-600"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
          <motion.div
            className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-red-600"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-red-600"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-red-600"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}