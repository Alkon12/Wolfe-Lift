import React from "react";
import { motion } from "framer-motion";
import type { TranslationKey } from "~/lib/i18n";
import { EquipmentCard } from "./EquipmentCard";
import { equipmentData } from "~/lib/equipmentData";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "~/lib/animations";

interface EquipmentSectionProps {
  t: TranslationKey;
}

export function EquipmentSection({ t }: EquipmentSectionProps) {
  return (
    <motion.section 
      id="equipment" 
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            variants={fadeInUp}
          >
            {t.services.title}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {t.services.subtitle}
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={staggerItem}>
            <EquipmentCard
              title={t.services.lift19.title}
              specs={t.services.lift19.specs}
              rate={t.services.lift19.rate}
              quoteText={t.nav.quote}
              image={equipmentData["19"].image}
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <EquipmentCard
              title={t.services.lift26.title}
              specs={t.services.lift26.specs}
              rate={t.services.lift26.rate}
              quoteText={t.nav.quote}
              image={equipmentData["26"].image}
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <EquipmentCard
              title={t.services.lift32.title}
              specs={t.services.lift32.specs}
              rate={t.services.lift32.rate}
              quoteText={t.nav.quote}
              image={equipmentData["32"].image}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}