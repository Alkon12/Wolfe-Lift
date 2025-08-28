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
      className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/95"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img
              src="/Logo.png"
              alt="Wolfe Lift Logo"
              className="w-25 h-25 object-contain cursor-pointer"
              whileHover={{ 
                rotate: 5,
                scale: 1.05 
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.nav 
            className="hidden md:flex items-center space-x-8"
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
              { href: "#services", text: t.nav.services },
              { href: "#contact", text: t.nav.contact },
            ].map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors relative"
                whileHover={{ 
                  scale: 1.05,
                  color: "#dc2626" 
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
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.nav>

          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
          >
            <motion.div 
              className="flex bg-gray-100 rounded-lg p-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === "en"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              >
                EN
              </motion.button>
              <motion.button
                onClick={() => setLanguage("es")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === "es"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              >
                ES
              </motion.button>
            </motion.div>

            <motion.a
              href="tel:6264222271"
              className="hidden sm:flex items-center text-red-600 font-bold text-lg hover:text-red-700 transition-colors group"
              whileHover={{ 
                scale: 1.05,
                color: "#b91c1c" 
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <motion.svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                whileHover={{ 
                  rotate: [0, -15, 15, 0],
                  scale: 1.1 
                }}
                transition={{ duration: 0.5 }}
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </motion.svg>
              <motion.span
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                {t.nav.phone}
              </motion.span>
            </motion.a>

            <motion.a
              href="#contact"
              className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors relative overflow-hidden"
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.span className="relative z-10">
                {t.nav.quote}
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

            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 rounded-lg"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#f3f4f6" 
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
                  transition={{ duration: 0.3 }}
                />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden border-t border-gray-200 py-4 space-y-2 bg-white"
              variants={mobileMenuAnimation}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {[
                { href: "#home", text: t.nav.home, special: false },
                { href: "#equipment", text: t.nav.equipment, special: false },
                { href: "#services", text: t.nav.services, special: false },
                { href: "#contact", text: t.nav.contact, special: false },
                { href: "tel:6264222271", text: t.nav.phone, special: true },
              ].map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2 rounded-md transition-all ${
                    item.special 
                      ? "text-red-600 font-bold hover:bg-red-50" 
                      : "text-gray-700 hover:bg-gray-50 hover:text-red-600"
                  }`}
                  variants={mobileMenuItem}
                  whileHover={{ 
                    x: 5,
                    scale: 1.02,
                    backgroundColor: item.special ? "#fef2f2" : "#f9fafb"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ 
                    duration: 0.2,
                    delay: index * 0.1 
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3,
                      delay: index * 0.1 + 0.2 
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

