import { useState } from "react";
import { translations, Language } from "~/lib/i18n";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("en");

  const t = translations[language];

  return {
    language,
    setLanguage,
    t,
  };
}