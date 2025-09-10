import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Language, TranslationKey } from "~/lib/i18n";
import { buttonHover, mobileMenuAnimation, mobileMenuItem } from "~/lib/animations";

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKey;
}

export function Header({ language, setLanguage, t }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 sticky top-0 z-50 overflow-hidden border-b-4 border-red-600"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
    >
      {/* Subtle diagonal accent */}
      <motion.div
        className="absolute top-0 right-0 w-1/6 h-full bg-red-600 opacity-20"
        style={{ clipPath: "polygon(80% 0%, 100% 0%, 100% 100%, 60% 100%)" }}
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">
          <motion.div 
            className="flex items-center z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img
              src="/Logo.png"
              alt="Wolfe Lift Logo"
              className="h-10 md:h-14 w-auto object-contain cursor-pointer drop-shadow-lg"
              whileHover={{ 
                scale: 1.05,
                filter: "drop-shadow(0 0 10px rgba(220, 38, 38, 0.5))"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.nav 
            className="hidden md:flex items-center space-x-8 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut" 
            }}
          >
            {[
              { href: "#home", text: t.nav.home },
              { href: "#equipment", text: t.nav.equipment },
              { href: "#gallery", text: t.nav.gallery },
              { href: "#services", text: t.nav.services },
              { href: "#contact", text: t.nav.contact },
            ].map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-white hover:text-red-600 font-bold uppercase text-sm tracking-wide transition-colors relative group"
                whileHover={{ 
                  scale: 1.05,
                  y: -1
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.2,
                  delay: 0.1 * index
                }}
              >
                {item.text}
                {/* Clean underline effect */}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-1 bg-red-600"
                  style={{ clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%)" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.a>
            ))}
          </motion.nav>

          <motion.div 
            className="flex items-center space-x-4 z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
          >
            {/* Industrial language toggle - móvil optimizado */}
            <motion.div 
              className="flex bg-black border-2 border-white/20 p-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                onClick={() => setLanguage("en")}
                className={`px-3 md:px-3 py-2 md:py-1 text-sm font-black uppercase tracking-wider transition-colors relative min-h-[40px] md:min-h-auto ${
                  language === "en"
                    ? "bg-red-600 text-white"
                    : "text-white/70 hover:text-white"
                }`}
                style={{ clipPath: "polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              >
                EN
              </motion.button>
              <motion.button
                onClick={() => setLanguage("es")}
                className={`px-3 md:px-3 py-2 md:py-1 text-sm font-black uppercase tracking-wider transition-colors relative min-h-[40px] md:min-h-auto ${
                  language === "es"
                    ? "bg-red-600 text-white"
                    : "text-white/70 hover:text-white"
                }`}
                style={{ clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              >
                ES
              </motion.button>
            </motion.div>

            <motion.a
              href="tel:6264222271"
              className="hidden sm:flex items-center text-white hover:text-red-600 font-bold text-sm uppercase tracking-wider transition-colors group"
              whileHover={{ 
                scale: 1.05,
                y: -1
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <motion.svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                whileHover={{ 
                  rotate: 5,
                  scale: 1.1 
                }}
                transition={{ duration: 0.3 }}
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </motion.svg>
              <span>{t.nav.phone}</span>
            </motion.a>

            <motion.a
              href="#contact"
              className="bg-red-600 hover:bg-red-700 text-white px-4 md:px-6 py-3 font-black text-xs md:text-sm uppercase tracking-widest relative overflow-hidden border-2 border-red-600 hover:border-red-700 hidden sm:block"
              style={{ clipPath: "polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative z-10">{t.nav.quote}</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white border-2 border-white/20 bg-black hover:bg-red-600 transition-all"
              whileHover={{ 
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={mobileMenuOpen ? "open" : "closed"}
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  variants={{
                    closed: { d: "M4 6h16M4 12h16M4 18h16" },
                    open: { d: "M6 18L18 6M6 6l12 12" }
                  }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden border-t-2 border-red-600 py-4 space-y-2 bg-black shadow-2xl"
              variants={mobileMenuAnimation}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {[
                { href: "#home", text: t.nav.home, special: false },
                { href: "#equipment", text: t.nav.equipment, special: false },
                { href: "#gallery", text: t.nav.gallery, special: false },
                { href: "#services", text: t.nav.services, special: false },
                { href: "#contact", text: t.nav.contact, special: false },
                { href: "tel:6264222271", text: t.nav.phone, special: true },
              ].map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={`block px-6 py-4 border-l-4 transition-all font-bold uppercase text-base tracking-wider min-h-[56px] flex items-center ${
                    item.special 
                      ? "text-red-600 border-red-600 bg-red-600/10 hover:bg-red-600/20" 
                      : "text-white border-white/20 hover:border-red-600 hover:text-red-600 hover:bg-white/5"
                  }`}
                  variants={mobileMenuItem}
                  whileHover={{ 
                    x: 4
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ 
                    duration: 0.15,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.2,
                      delay: index * 0.05 + 0.1,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    {item.text}
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

