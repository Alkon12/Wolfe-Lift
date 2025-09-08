import React, { useState } from "react";
import { useLanguage } from "~/hooks/useLanguage";
import { LoadingScreen } from "./LoadingScreen";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { EquipmentSection } from "./EquipmentSection";
import { VerticalMediaGallery } from "./VerticalMediaGallery";
import { WhyChooseSection } from "./WhyChooseSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { MobileContactBar } from "./MobileContactBar";
import { mediaData } from "~/lib/mediaData";

export function WolfeLiftLanding() {
  const { language, setLanguage, t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    // Ensure we're at the top before showing content
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
    setIsLoading(false);
    
    // Double check after content renders
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    }, 0);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {!isLoading && (
        <div className="min-h-screen bg-gray-50">
          <Header language={language} setLanguage={setLanguage} t={t} />
          <HeroSection t={t} />
          <EquipmentSection t={t} />
          <VerticalMediaGallery t={t} mediaItems={mediaData} />
          <WhyChooseSection t={t} />
          <ContactSection t={t} />
          <Footer t={t} />
          <MobileContactBar t={t} />
        </div>
      )}
    </>
  );
}
