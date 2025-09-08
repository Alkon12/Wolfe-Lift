import React from "react";
import { motion } from "framer-motion";
import type { TranslationKey } from "~/lib/i18n";
import { FeaturePoint } from "./FeaturePoint";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "~/lib/animations";

interface WhyChooseSectionProps {
  t: TranslationKey;
}

export function WhyChooseSection({ t }: WhyChooseSectionProps) {
  const clockIcon = (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clipRule="evenodd"
      />
    </svg>
  );

  const shieldIcon = (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );

  const checkIcon = (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const moneyIcon = (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
      <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );

  return (
    <motion.section 
      id="services" 
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      {/* Dramatic industrial background with multiple diagonal cuts */}
      <div className="absolute inset-0">
        {/* Main background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100"></div>
        
        {/* Large diagonal red stripe */}
        <motion.div
          className="absolute top-0 right-0 w-2/3 h-full bg-red-600"
          style={{ clipPath: "polygon(40% 0%, 100% 0%, 100% 100%, 10% 100%)" }}
          initial={{ x: "100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        />
        
        {/* Black industrial accent */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full bg-black opacity-90"
          style={{ clipPath: "polygon(60% 0%, 100% 0%, 100% 100%, 30% 100%)" }}
          initial={{ x: "100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        />
        
        {/* White accent for depth */}
        <motion.div
          className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-white"
          style={{ clipPath: "polygon(0% 0%, 70% 0%, 40% 100%, 0% 100%)" }}
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        />

        {/* Industrial grid overlay on the black section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 top-0 w-1/2 h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Animated warning stripes */}
        <motion.div
          className="absolute top-1/4 right-10 w-20 h-40 bg-yellow-400 opacity-80"
          style={{ 
            clipPath: "polygon(0% 0%, 100% 10%, 100% 100%, 0% 90%)",
            transformOrigin: "center"
          }}
          animate={{ 
            rotate: [0, 2, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Title and intro */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Industrial badge */}
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="bg-black text-white px-6 py-3 font-black text-sm uppercase tracking-widest relative border-l-4 border-red-600">
                <span className="relative z-10">WHY CHOOSE US</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600"></div>
              </div>
            </motion.div>

            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-none text-black"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="block">{t.whyChoose.title.split(' ')[0]}</span>
              <span className="block text-red-600">{t.whyChoose.title.split(' ').slice(1, 2).join(' ')}</span>
              <span className="block text-black">{t.whyChoose.title.split(' ').slice(2).join(' ')}</span>
            </motion.h2>
            
            <motion.p 
              className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 font-bold uppercase tracking-wide max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {t.whyChoose.subtitle}
            </motion.p>

            {/* Power stats - móvil optimizado */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-6 md:pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="bg-black border-l-4 border-red-600 p-4 md:p-4 min-h-[80px] flex flex-col justify-center">
                <div className="text-red-600 text-2xl md:text-3xl font-black">15+</div>
                <div className="text-white text-xs md:text-sm uppercase tracking-wider">YEARS EXPERIENCE</div>
              </div>
              <div className="bg-red-600 border-l-4 border-black p-4 md:p-4 min-h-[80px] flex flex-col justify-center">
                <div className="text-white text-2xl md:text-3xl font-black">24/7</div>
                <div className="text-white text-xs md:text-sm uppercase tracking-wider">SUPPORT</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Feature grid */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            {/* Industrial frame */}
            <div className="relative">
              <div className="absolute -inset-4 bg-black transform rotate-1"></div>
              <div className="relative bg-white border-4 border-red-600 p-8">
                
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                >
                  <motion.div variants={staggerItem}>
                    <FeaturePoint
                      title={t.whyChoose.point1.title}
                      description={t.whyChoose.point1.desc}
                      icon={clockIcon}
                    />
                  </motion.div>
                  <motion.div variants={staggerItem}>
                    <FeaturePoint
                      title={t.whyChoose.point2.title}
                      description={t.whyChoose.point2.desc}
                      icon={shieldIcon}
                    />
                  </motion.div>
                  <motion.div variants={staggerItem}>
                    <FeaturePoint
                      title={t.whyChoose.point3.title}
                      description={t.whyChoose.point3.desc}
                      icon={checkIcon}
                    />
                  </motion.div>
                  <motion.div variants={staggerItem}>
                    <FeaturePoint
                      title={t.whyChoose.point4.title}
                      description={t.whyChoose.point4.desc}
                      icon={moneyIcon}
                    />
                  </motion.div>
                </motion.div>

                {/* Industrial corner details */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-600"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-black"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom industrial call-to-action bar */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="bg-black p-8 relative overflow-hidden">
            <div 
              className="absolute top-0 right-0 w-1/4 h-full bg-red-600"
              style={{ clipPath: "polygon(70% 0%, 100% 0%, 100% 100%, 40% 100%)" }}
            ></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-black uppercase mb-2">
                  READY TO GET STARTED?
                </h3>
                <p className="text-white/80 uppercase tracking-wide text-sm md:text-base">
                  GET YOUR QUOTE IN UNDER 60 SECONDS
                </p>
              </div>
              
              <motion.a
                href="#contact"
                className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 font-black text-base md:text-lg uppercase tracking-widest relative overflow-hidden group border-2 border-red-600 hover:border-red-700 transition-all duration-200 min-h-[48px] flex items-center justify-center"
                style={{ clipPath: "polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">START NOW</span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}