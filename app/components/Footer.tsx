import React from "react";
import { motion } from "framer-motion";
import type { TranslationKey } from "~/lib/i18n";
import { fadeInUp, staggerContainer, staggerItem, viewportConfigLarge } from "~/lib/animations";

interface FooterProps {
  t: TranslationKey;
}

export function Footer({ t }: FooterProps) {
  return (
    <motion.footer 
      className="bg-gray-900 text-white py-12 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfigLarge}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 opacity-5"
          style={{
            background: "radial-gradient(circle, #ef4444 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-72 h-72 opacity-3"
          style={{
            background: "radial-gradient(circle, #dc2626 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 0.8, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-8"
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <motion.div 
              className="flex items-center space-x-4 mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="/Logo.png"
                alt="Wolfe Lift Logo"
                className="w-14 h-14 object-contain"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1 
                }}
                transition={{ 
                  rotate: { duration: 0.6 },
                  scale: { duration: 0.3 }
                }}
              />
              <div>
                <motion.h3 
                  className="text-xl font-bold"
                  whileHover={{ color: "#ef4444" }}
                  transition={{ duration: 0.2 }}
                >
                  Wolfe Lift
                </motion.h3>
                <motion.p 
                  className="text-sm text-gray-400"
                  whileHover={{ color: "#9ca3af" }}
                  transition={{ duration: 0.2 }}
                >
                  Rentals & Transport
                </motion.p>
              </div>
            </motion.div>
            <motion.p 
              className="text-gray-400 text-sm"
              whileHover={{ color: "#9ca3af" }}
              transition={{ duration: 0.2 }}
            >
              {t.footer.tagline}
            </motion.p>
          </motion.div>

          <motion.div variants={staggerItem}>
            <motion.h4 
              className="text-lg font-semibold mb-4"
              whileHover={{ color: "#ef4444" }}
              transition={{ duration: 0.2 }}
            >
              Quick Links
            </motion.h4>
            <motion.div 
              className="space-y-2 text-sm"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {[
                { href: "#equipment", text: "Equipment Rentals" },
                { href: "#services", text: t.footer.links.about },
                { href: "#contact", text: "Contact Us" },
                { href: "#", text: t.footer.links.safety },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white block transition-colors"
                  variants={staggerItem}
                  whileHover={{ 
                    x: 5,
                    color: "#ffffff" 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {link.text}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={staggerItem}>
            <motion.h4 
              className="text-lg font-semibold mb-4"
              whileHover={{ color: "#ef4444" }}
              transition={{ duration: 0.2 }}
            >
              Contact
            </motion.h4>
            <motion.div 
              className="space-y-2 text-sm"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.p 
                className="text-gray-400"
                variants={staggerItem}
                whileHover={{ color: "#9ca3af" }}
                transition={{ duration: 0.2 }}
              >
                123 Industry Blvd
                <br />
                San Dimas, CA 91773
              </motion.p>
              <motion.p 
                className="text-gray-400"
                variants={staggerItem}
                whileHover={{ color: "#9ca3af" }}
                transition={{ duration: 0.2 }}
              >
                Mon-Fri: 6AM-6PM
                <br />
                Sat: 7AM-3PM
              </motion.p>
              <motion.a
                href="tel:6264222271"
                className="text-red-400 hover:text-red-300 font-semibold block"
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.05,
                  color: "#fca5a5" 
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {t.nav.phone}
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400"
          variants={fadeInUp}
        >
          <motion.p
            whileHover={{ color: "#9ca3af" }}
            transition={{ duration: 0.2 }}
          >
            © 2024 Wolfe Lift Rentals & Transport. All rights reserved.
          </motion.p>
          <motion.div 
            className="flex space-x-6 mt-4 sm:mt-0"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              t.footer.links.terms,
              t.footer.links.privacy,
              "CA License #123456",
            ].map((text, index) => (
              <motion.a 
                key={index}
                href="#" 
                className="hover:text-white transition-colors"
                variants={staggerItem}
                whileHover={{ 
                  color: "#ffffff",
                  y: -2 
                }}
                transition={{ duration: 0.2 }}
              >
                {text}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

