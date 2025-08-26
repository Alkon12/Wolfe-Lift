import React from "react";
import { TranslationKey } from "~/lib/i18n";
import { FeaturePoint } from "./FeaturePoint";

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
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {t.whyChoose.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.whyChoose.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeaturePoint
            title={t.whyChoose.point1.title}
            description={t.whyChoose.point1.desc}
            icon={clockIcon}
          />
          <FeaturePoint
            title={t.whyChoose.point2.title}
            description={t.whyChoose.point2.desc}
            icon={shieldIcon}
          />
          <FeaturePoint
            title={t.whyChoose.point3.title}
            description={t.whyChoose.point3.desc}
            icon={checkIcon}
          />
          <FeaturePoint
            title={t.whyChoose.point4.title}
            description={t.whyChoose.point4.desc}
            icon={moneyIcon}
          />
        </div>
      </div>
    </section>
  );
}