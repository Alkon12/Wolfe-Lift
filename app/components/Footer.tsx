import React from "react";
import { motion } from "framer-motion";
import type { TranslationKey } from "~/lib/i18n";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportConfigLarge,
} from "~/lib/animations";

interface FooterProps {
  t: TranslationKey;
}

export function Footer({ t }: FooterProps) {
  return (
    <motion.footer
      className="relative bg-black py-8 lg:py-12 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfigLarge}
    >
      {/* Subtle industrial background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>

        {/* Small diagonal accent */}
        <motion.div
          className="absolute top-0 right-0 w-1/3 h-full bg-red-600 opacity-20"
          style={{ clipPath: "polygon(70% 0%, 100% 0%, 100% 100%, 90% 100%)" }}
          initial={{ x: "100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8"
          variants={staggerContainer}
        >
          {/* Company info - compact */}
          <motion.div variants={staggerItem}>
            <motion.div
              className="flex items-center space-x-3 mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-10 h-10 bg-red-600 border-2 border-white flex items-center justify-center"
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                }}
                transition={{
                  rotate: { duration: 0.6 },
                  scale: { duration: 0.3 },
                }}
              >
                <img
                  src="/LogoSinFondo.png"
                  alt="Wolfe Lift Logo"
                  className="w-6 h-6 object-contain"
                />
              </motion.div>
              <div>
                <motion.h3
                  className="text-base md:text-lg font-black uppercase text-white tracking-wide"
                  whileHover={{ color: "#ef4444" }}
                  transition={{ duration: 0.2 }}
                >
                  {t.footer.companyName}
                </motion.h3>
                <motion.p
                  className="text-xs text-gray-400 font-medium uppercase tracking-wider"
                  whileHover={{ color: "#9ca3af" }}
                  transition={{ duration: 0.2 }}
                >
                  {t.footer.companyTagline}
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

          {/* Quick links - compact */}
          <motion.div variants={staggerItem}>
            <motion.h4
              className="text-white text-base md:text-lg font-black mb-4 uppercase tracking-wide"
              whileHover={{ color: "#ef4444" }}
              transition={{ duration: 0.2 }}
            >
              {t.footer.quickLinks}
            </motion.h4>
            <motion.div
              className="space-y-2"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {[
                { href: "#home", text: t.nav.home },
                { href: "#equipment", text: t.nav.equipment },
                { href: "#gallery", text: t.nav.gallery },
                { href: "#services", text: t.nav.services },
                { href: "#contact", text: t.nav.contact },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-red-400 block transition-all duration-300 text-sm border-l-2 border-transparent hover:border-red-600 pl-3 py-2 min-h-[44px] flex items-center"
                  variants={staggerItem}
                  whileHover={{
                    x: 5,
                    color: "#f87171",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {link.text}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact info - compact */}
          <motion.div variants={staggerItem}>
            <motion.h4
              className="text-white text-base md:text-lg font-black mb-4 uppercase tracking-wide"
              whileHover={{ color: "#ef4444" }}
              transition={{ duration: 0.2 }}
            >
              {t.footer.contactTitle}
            </motion.h4>
            <motion.div className="space-y-3">
              <motion.a
                href="tel:6264222271"
                className="text-red-400 hover:text-red-300 text-lg md:text-xl font-black block uppercase tracking-wide py-2 min-h-[48px] flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {t.nav.phone}
              </motion.a>
              <div className="text-gray-400 text-sm space-y-1">
                <p className="font-medium uppercase tracking-wide">
                  24/7 Emergency
                </p>
                <p className="text-xs uppercase tracking-wider">
                  Los Angeles and surrounding areas
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Compact copyright section */}
        <motion.div
          className="border-t-2 border-red-600 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-3 md:gap-0"
          variants={fadeInUp}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.p
            className="font-medium"
            whileHover={{ color: "#9ca3af" }}
            transition={{ duration: 0.2 }}
          >
            {t.footer.copyright}
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center md:justify-end space-x-4 mt-3 md:mt-0"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[].map((text, index) => (
              <motion.a
                key={index}
                href="#"
                className="hover:text-white transition-colors text-xs uppercase tracking-wide py-2 px-1 min-h-[40px] flex items-center"
                variants={staggerItem}
                whileHover={{
                  color: "#ffffff",
                  y: -1,
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
