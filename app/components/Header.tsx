import React, { useState } from "react";
import { Language, TranslationKey } from "~/lib/i18n";

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKey;
}

export function Header({ language, setLanguage, t }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <img
              src="/Logo.png"
              alt="Wolfe Lift Logo"
              className="w-25 h-25 object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              {t.nav.home}
            </a>
            <a
              href="#equipment"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              {t.nav.equipment}
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              {t.nav.services}
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === "en"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === "es"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                ES
              </button>
            </div>

            <a
              href="tel:6264222271"
              className="hidden sm:flex items-center text-red-600 font-bold text-lg hover:text-red-700 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {t.nav.phone}
            </a>

            <a
              href="#contact"
              className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              {t.nav.quote}
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-2">
            <a
              href="#home"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              {t.nav.home}
            </a>
            <a
              href="#equipment"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              {t.nav.equipment}
            </a>
            <a
              href="#services"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              {t.nav.services}
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              {t.nav.contact}
            </a>
            <a
              href="tel:6264222271"
              className="block px-4 py-2 text-red-600 font-bold"
            >
              {t.nav.phone}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

