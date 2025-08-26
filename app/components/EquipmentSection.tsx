import React from "react";
import { TranslationKey } from "~/lib/i18n";
import { EquipmentCard } from "./EquipmentCard";
import { equipmentData } from "~/lib/equipmentData";

interface EquipmentSectionProps {
  t: TranslationKey;
}

export function EquipmentSection({ t }: EquipmentSectionProps) {
  return (
    <section id="equipment" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <EquipmentCard
            title={t.services.lift19.title}
            specs={t.services.lift19.specs}
            rate={t.services.lift19.rate}
            quoteText={t.nav.quote}
            image={equipmentData["19"].image}
          />
          <EquipmentCard
            title={t.services.lift26.title}
            specs={t.services.lift26.specs}
            rate={t.services.lift26.rate}
            quoteText={t.nav.quote}
            image={equipmentData["26"].image}
          />
          <EquipmentCard
            title={t.services.lift32.title}
            specs={t.services.lift32.specs}
            rate={t.services.lift32.rate}
            quoteText={t.nav.quote}
            image={equipmentData["32"].image}
          />
        </div>
      </div>
    </section>
  );
}