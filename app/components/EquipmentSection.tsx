import React from "react";
import { motion } from "framer-motion";
import type { TranslationKey } from "~/lib/i18n";
import { EquipmentCard } from "./EquipmentCard";
import { SpecsModal } from "./SpecsModal";
import { equipmentData } from "~/lib/equipmentData";
import { useSpecsModal } from "~/hooks/useSpecsModal";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportConfigMobile,
} from "~/lib/animations";

interface EquipmentSectionProps {
  t: TranslationKey;
}

export function EquipmentSection({ t }: EquipmentSectionProps) {
  const { isOpen, modalData, openModal, closeModal } = useSpecsModal();

  return (
    <motion.section
      id="equipment"
      className="relative py-16 lg:py-24 bg-gray-900 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfigMobile}
    >
      {/* Industrial background with diagonal elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

        {/* Dynamic diagonal shapes */}
        <motion.div
          className="absolute top-0 left-0 w-1/3 h-full bg-red-600 opacity-10"
          style={{ clipPath: "polygon(0% 0%, 70% 0%, 40% 100%, 0% 100%)" }}
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-1/4 h-2/3 bg-white opacity-5"
          style={{ clipPath: "polygon(60% 0%, 100% 0%, 100% 100%, 30% 100%)" }}
          initial={{ x: "100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        />

        {/* Industrial grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div className="text-center mb-12 lg:mb-20" variants={fadeInUp}>
          {/* Section label with industrial styling */}
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="bg-red-600 text-white px-6 py-2 font-black text-sm uppercase tracking-widest relative">
              <div
                style={{
                  clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%)",
                }}
                className="absolute inset-0 bg-red-600"
              ></div>
              <span className="relative z-10">HEAVY EQUIPMENT</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 md:mb-6 uppercase leading-none"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="block">{t.services.title.split(" ")[0]}</span>
            <span className="block text-red-600 stroke-white stroke-2">
              {t.services.title.split(" ").slice(1).join(" ")}
            </span>
          </motion.h2>

          <motion.p
            className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-3xl mx-auto font-bold uppercase tracking-wide"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {t.services.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfigMobile}
        >
          <motion.div variants={staggerItem}>
            <EquipmentCard
              title={t.services.lift12.title}
              specs={t.services.lift12.specs}
              rate={t.services.lift12.rate}
              quoteText={t.nav.quote}
              image={equipmentData["12"].image}
              specSheet={equipmentData["12"].specSheet}
              onSpecsClick={openModal}
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <EquipmentCard
              title={t.services.lift19.title}
              specs={t.services.lift19.specs}
              rate={t.services.lift19.rate}
              quoteText={t.nav.quote}
              image={equipmentData["19"].image}
              specSheet={equipmentData["19"].specSheet}
              onSpecsClick={openModal}
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <EquipmentCard
              title={t.services.lift26.title}
              specs={t.services.lift26.specs}
              rate={t.services.lift26.rate}
              quoteText={t.nav.quote}
              image={equipmentData["26"].image}
              specSheet={equipmentData["26"].specSheet}
              onSpecsClick={openModal}
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <EquipmentCard
              title={t.services.lift32.title}
              specs={t.services.lift32.specs}
              rate={t.services.lift32.rate}
              quoteText={t.nav.quote}
              image={equipmentData["32"].image}
              specSheet={equipmentData["32"].specSheet}
              onSpecsClick={openModal}
            />
          </motion.div>
        </motion.div>

        {/* Bottom action strip */}
        <motion.div
          className="mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="bg-black border-4 border-red-600 p-6 md:p-8 relative">
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-600"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-red-600"></div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 items-center">
              <div className="flex items-center justify-center sm:justify-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
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
                <div className="text-left">
                  <p className="text-white font-black text-sm uppercase tracking-wider">
                    24/7
                  </p>
                  <p className="text-white/80 text-xs uppercase">AVAILABLE</p>
                </div>
              </div>

              <div className="flex items-center justify-center sm:justify-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-white font-black text-sm uppercase tracking-wider">
                    FAST
                  </p>
                  <p className="text-white/80 text-xs uppercase">DELIVERY</p>
                </div>
              </div>

              <div className="flex items-center justify-center sm:justify-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-white font-black text-sm uppercase tracking-wider">
                    BEST
                  </p>
                  <p className="text-white/80 text-xs uppercase">PRICES</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Single SpecsModal instance */}
      {modalData && (
        <SpecsModal
          isOpen={isOpen}
          onClose={closeModal}
          specSheetUrl={modalData.specSheetUrl}
          title={modalData.title}
        />
      )}
    </motion.section>
  );
}
