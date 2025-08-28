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
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clipRule="evenodd"
      />
    </svg>
  );

  const shieldIcon = (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );

  const checkIcon = (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const moneyIcon = (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );

  return (
    <motion.section 
      id="services" 
      className="py-20 bg-gray-900 text-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            background: "radial-gradient(circle at 25% 25%, #ef4444 0%, transparent 50%), radial-gradient(circle at 75% 75%, #dc2626 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-4"
            variants={fadeInUp}
          >
            {t.whyChoose.title}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {t.whyChoose.subtitle}
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
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
      </div>
    </motion.section>
  );
}