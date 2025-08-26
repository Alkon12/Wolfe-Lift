import React from "react";
import { useLanguage } from "~/hooks/useLanguage";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { EquipmentSection } from "./EquipmentSection";
import { WhyChooseSection } from "./WhyChooseSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { MobileContactBar } from "./MobileContactBar";

export function WolfeLiftLanding() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header language={language} setLanguage={setLanguage} t={t} />
      <HeroSection t={t} />
      <EquipmentSection t={t} />
      <WhyChooseSection t={t} />
      <ContactSection t={t} />
      <Footer t={t} />
      <MobileContactBar />
    </div>
  );
}

