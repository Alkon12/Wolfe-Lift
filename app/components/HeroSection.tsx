import React from "react";
import { motion } from "framer-motion";
import type { TranslationKey } from "~/lib/i18n";

interface HeroSectionProps {
  t: TranslationKey;
}

export function HeroSection({ t }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Industrial urban background with diagonal cuts */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

        {/* Dynamic diagonal geometric shapes */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full bg-red-600"
          style={{ clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.div
          className="absolute top-0 right-0 w-1/3 h-full bg-white opacity-10"
          style={{ clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 20% 100%)" }}
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />

        {/* Industrial texture overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/10 to-transparent transform -skew-x-12"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent transform skew-y-3"></div>
        </div>
      </div>

      <div className="relative z-20 min-h-screen">
        {/* Estructura para móvil optimizada */}
        <div className="lg:hidden">
          <div className="min-h-screen flex flex-col justify-center px-4 py-8 pb-24 space-y-8">
            {/* Imagen centrada */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative">
                <div className="bg-black border-2 border-white/20 p-4 max-w-xs">
                  <img
                    src="/Hero.jpg"
                    alt="Scissor Lift"
                    className="w-full h-auto filter brightness-110 contrast-125"
                  />
                </div>
                {/* Logo en esquina superior derecha de la imagen móvil */}
                <motion.div
                  className="absolute -top-2 -right-2 z-30 pointer-events-none"
                  initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.8, ease: "backOut" }}
                >
                  <div className="relative transform rotate-12 hover:rotate-3 transition-all duration-300 hover:scale-110 pointer-events-auto">
                    <img
                      src="/LogoSinFondo.png"
                      alt="Wolfe Lift Rentals"
                      className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain relative z-10"
                      style={{
                        filter: `
                          drop-shadow(2px 0 0 white) 
                          drop-shadow(-2px 0 0 white) 
                          drop-shadow(0 2px 0 white) 
                          drop-shadow(0 -2px 0 white)
                          drop-shadow(1px 1px 0 white)
                          drop-shadow(1px -1px 0 white)
                          drop-shadow(-1px 1px 0 white)
                          drop-shadow(-1px -1px 0 white)
                          drop-shadow(0 0 8px rgba(0,0,0,0.4))
                        `,
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contenido de texto centrado */}
            <motion.div
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            >
              {/* Título principal */}
              <motion.h1
                className="text-3xl sm:text-4xl font-black uppercase leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <span className="block text-white">{t.hero.mainTitle1}</span>
                <span
                  className="block text-red-500"
                  style={{
                    textShadow: `
                      1px 1px 0 black,
                      -1px -1px 0 black,
                      1px -1px 0 black,
                      -1px 1px 0 black,
                      0 0 4px rgba(0,0,0,0.5)
                    `,
                  }}
                >
                  {t.hero.mainTitle2}
                </span>
                <span className="block text-white">{t.hero.mainTitle3}</span>
              </motion.h1>

              {/* Subtítulo */}
              <motion.p
                className="text-white/90 text-base font-bold uppercase tracking-wide px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                {t.hero.subheadline}
              </motion.p>

              {/* Número de teléfono grande */}
              <motion.div
                className="py-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <a
                  href="tel:6264222271"
                  className="block hover:scale-105 transition-transform duration-200"
                >
                  <p className="text-white text-3xl sm:text-4xl font-black tracking-wider">
                    626-422-2271
                  </p>
                </a>
              </motion.div>

              {/* Botones CTA */}
              <motion.div
                className="flex flex-col gap-4 px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                <motion.a
                  href="#contact"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-black text-lg uppercase tracking-wider transition-all duration-200 text-center"
                  whileTap={{ scale: 0.95 }}
                >
                  {t.hero.cta1}
                </motion.a>

                <motion.a
                  href="tel:6264222271"
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 font-black text-lg uppercase tracking-wider transition-all duration-200 text-center"
                  whileTap={{ scale: 0.95 }}
                >
                  {t.hero.cta2}
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Sección de operador para móvil */}
            <motion.div
              className="bg-black/80 border border-white/20 p-6 space-y-4 mx-4 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="text-center space-y-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
              >
                <h2 className="text-xl font-black uppercase leading-tight">
                  <span className="block text-white">
                    If you need to do work in
                  </span>
                  <span className="block text-black bg-white px-2 py-1 inline-block">
                    high places
                  </span>
                  <span className="block text-white">
                    & you're afraid of heights
                  </span>
                </h2>

                <p className="text-lg font-bold text-black bg-white px-2 py-1 uppercase inline-block">
                  maybe we can do the work for you.
                </p>

                <div className="space-y-2 text-white/90 text-sm">
                  <p className="font-semibold">
                    You can now rent a scissor lift with an operator.
                  </p>
                  <p className="font-semibold">
                    The operator has his own tools.
                  </p>
                  <p className="font-semibold">
                    Call us, let us know about your project & we will see if we
                    can help you.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Estructura para escritorio - 3 columnas rebalanceadas */}
        <div className="hidden lg:flex min-h-screen items-center pb-16 lg:pb-20 xl:pb-24">
          <div className="w-full px-4 lg:px-6 xl:px-8 2xl:px-12">
            <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 xl:gap-8 items-center min-h-[70vh]">
              {/* Left column - Main content (más ancho) */}
              <motion.div
                className="lg:col-span-4 xl:col-span-3 space-y-6"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              >
                {/* Main title with staggered animation */}
                <div className="space-y-4">
                  <motion.h1
                    className="text-4xl lg:text-5xl xl:text-6xl font-black uppercase leading-none"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                  >
                    <motion.span
                      className="block text-white"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                    >
                      {t.hero.mainTitle1}
                    </motion.span>
                    <motion.span
                      className="block text-red-600 stroke-white stroke-2 paint-order-stroke"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4, duration: 0.5 }}
                    >
                      {t.hero.mainTitle2}
                    </motion.span>
                    <motion.span
                      className="block text-white"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.6, duration: 0.5 }}
                    >
                      {t.hero.mainTitle3}
                    </motion.span>
                  </motion.h1>
                </div>

                {/* Subtitle */}
                <motion.p
                  className="text-white/90 text-lg xl:text-xl font-bold uppercase tracking-wide"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                >
                  {t.hero.subheadline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col gap-4 pt-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.6 }}
                >
                  <motion.a
                    href="#contact"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-black text-base uppercase tracking-widest relative overflow-hidden group border-2 border-red-600 hover:border-red-700 transition-all duration-200 text-center"
                    style={{
                      clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%)",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{t.hero.cta1}</span>
                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </motion.a>

                  <motion.a
                    href="tel:6264222271"
                    className="border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 font-black text-base uppercase tracking-widest relative overflow-hidden group transition-all duration-200 text-center"
                    style={{
                      clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{t.hero.cta2}</span>
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Center column - Equipment showcase (PRINCIPAL) */}
              <motion.div
                className="lg:col-span-5 xl:col-span-6 relative pt-12 lg:pt-16 xl:pt-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
              >
                {/* Industrial frame - imagen más pequeña */}
                <div className="relative max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
                  <div className="absolute -inset-4 bg-gradient-to-br from-red-600/20 to-transparent transform rotate-3"></div>
                  <div className="relative bg-black border-4 border-white/20 p-4 lg:p-6">
                    <img
                      src="/Hero.jpg"
                      alt="Scissor Lift"
                      className="w-full h-auto filter brightness-110 contrast-125"
                    />
                  </div>
                  {/* Logo en esquina superior derecha de la imagen desktop */}
                  <motion.div
                    className="absolute z-68 pointer-events-none
                               -top-32 -right-24 lg:-top-40 lg:-right-32 
                               xl:-top-48 xl:-right-40 2xl:-top-65 2xl:-right-42"
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.8, ease: "backOut" }}
                  >
                    <div className="relative transform rotate-12 hover:rotate-3 transition-all duration-300 hover:scale-110 pointer-events-auto">
                      <img
                        src="/LogoSinFondo.png"
                        alt="Wolfe Lift Rentals"
                        className="w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 object-contain relative z-10"
                        style={{
                          filter: `
                              drop-shadow(2px 0 0 white) 
                              drop-shadow(-2px 0 0 white) 
                              drop-shadow(0 2px 0 white) 
                              drop-shadow(0 -2px 0 white)
                              drop-shadow(1px 1px 0 white)
                              drop-shadow(1px -1px 0 white)
                              drop-shadow(-1px 1px 0 white)
                              drop-shadow(-1px -1px 0 white)
                              drop-shadow(0 0 8px rgba(0,0,0,0.4))
                            `,
                        }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Large phone number display below image */}
                <motion.div
                  className="mt-6 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5, duration: 0.6 }}
                >
                  <a
                    href="tel:6264222271"
                    className="block hover:scale-105 transition-transform duration-200"
                  >
                    <p className="text-white text-4xl lg:text-5xl xl:text-6xl font-black tracking-wider">
                      626-422-2271
                    </p>
                  </a>
                </motion.div>
              </motion.div>

              {/* Right column - Operator service (más ancho) */}
              <motion.div
                className="lg:col-span-3 xl:col-span-3 space-y-6 pr-4 lg:pr-6 pl-4 lg:pl-8 flex items-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="text-white space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.6 }}
                >
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-black uppercase leading-tight">
                    <span className="block text-white">If you need to do</span>
                    <span className="block text-white">work in</span>
                    <span className="block text-black bg-white px-2 py-1">
                      high places
                    </span>
                    <span className="block text-white">& you're afraid</span>
                    <span className="block text-white">of heights</span>
                  </h2>

                  <p className="text-lg lg:text-xl font-bold text-black bg-white px-2 py-1 uppercase inline-block">
                    maybe we can do the work for you.
                  </p>

                  <div className="space-y-3 text-white/90">
                    <p className="text-base lg:text-lg font-semibold">
                      You can now rent a scissor lift with an operator.
                    </p>
                    <p className="text-base lg:text-lg font-semibold">
                      The operator has his own tools.
                    </p>
                    <p className="text-base lg:text-lg font-semibold">
                      Call us, let us know about your project & we will see if
                      we can help you.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom features strip - Solo en desktop */}
      <motion.div
        className="hidden md:block absolute bottom-0 left-0 right-0 bg-black border-t-4 border-red-600 z-30"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-6 text-center">
            <div className="flex items-center justify-center gap-2 md:gap-3">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-white font-bold uppercase text-xs md:text-sm">
                {t.hero.qualityEquipment}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 md:gap-3">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <span className="text-white font-bold uppercase text-xs md:text-sm">
                {t.hero.expertService}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 md:gap-3">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-white font-bold uppercase text-xs md:text-sm">
                {t.hero.sameDayDelivery}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 md:gap-3">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <span className="text-white font-bold uppercase text-xs md:text-sm">
                {t.hero.saveTimeMoney}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 md:gap-3">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-white font-bold uppercase text-xs md:text-sm">
                {t.hero.reachHeights}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 md:gap-3">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM6 9a1 1 0 011-1h6a1 1 0 110 2H7a1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-white font-bold uppercase text-xs md:text-sm">
                {t.hero.forProjects}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
