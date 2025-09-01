import React from "react";
import type { TranslationKey } from "~/lib/i18n";

interface HeroSectionProps {
  t: TranslationKey;
}

export function HeroSection({ t }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url('/Hero.png')`,
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Logo positioned in top right similar to reference image */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-20 animate-fade-in-right">
        <img
          src="/Logo.png"
          alt="Wolfe Lift Rentals"
          className="h-12 sm:h-14 md:h-24 lg:h-32 w-auto drop-shadow-lg animate-pulse-slow"
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Main content positioned on the left side like the reference */}
          <div className="max-w-2xl space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in-left">
            {/* Red header banner with modern gradient */}
            <div className="bg-gradient-to-r from-red-600 to-red-600/80 text-white p-4 sm:p-5 md:p-6 transform -skew-x-2 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-slide-in-top relative overflow-hidden">
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-red-800/20"></div>
              <div className="transform skew-x-2 relative z-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight uppercase tracking-wide drop-shadow-lg">
                  RENT AN ELECTRIC
                  <br />
                  <span className="text-black font-black drop-shadow-md">
                    SCISSOR LIFT
                  </span>
                  <br />
                  FROM US TODAY
                </h1>
              </div>
              {/* Shine effect */}
              <div className="absolute top-0 -left-4 w-8 h-full bg-white/20 transform skew-x-12 animate-shine"></div>
            </div>

            {/* Glass morphism content box */}
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 text-white p-4 sm:p-5 md:p-6 rounded-2xl shadow-2xl animate-slide-in-bottom relative overflow-hidden">
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-white/40 via-transparent to-transparent"></div>

              <div className="relative z-10">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-white drop-shadow-lg">
                  {t.hero.subheadline}
                </p>

                {/* Credentials row */}
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium text-white/90">Quality Equipment</span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium text-white/90">Expert Service</span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-red-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium text-white/90">
                      Same-Day Delivery
                    </span>
                  </div>
                </div>

                {/* Glass CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="#contact"
                    className="bg-gradient-to-r from-red-600 to-red-600/90 hover:from-red-700 hover:to-red-700/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl uppercase tracking-wide relative overflow-hidden group backdrop-blur-sm border border-red-400/30"
                  >
                    <span className="relative z-10">{t.hero.cta1}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  </a>
                  <a
                    href="tel:6264222271"
                    className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:shadow-2xl transition-all duration-300 shadow-xl uppercase tracking-wide relative overflow-hidden group"
                  >
                    <span className="relative z-10">{t.hero.cta2}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom promotional text with liquid glass effect */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-auto sm:right-6 md:bottom-8 md:right-8 z-20 animate-fade-in-bottom">
        <div className="bg-white/15 backdrop-blur-xl border border-white/25 text-white p-3 sm:p-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 max-w-xs sm:max-w-sm relative overflow-hidden mx-auto sm:mx-0">
          {/* Glass reflection effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-white/40 via-transparent to-transparent"></div>

          <div className="relative z-10">
            <p className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-white drop-shadow-lg text-center sm:text-left">
              Save time and money
            </p>
            <div className="bg-gradient-to-br from-red-600 to-red-600/80 text-white p-2 sm:p-3 rounded-xl transform -skew-x-1 shadow-lg relative overflow-hidden backdrop-blur-sm border border-red-400/30">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="transform skew-x-1 relative z-10 text-center sm:text-left">
                <p className="text-base sm:text-lg font-bold drop-shadow-sm">
                  reach new heights
                </p>
                <p className="text-xs sm:text-sm opacity-95">for all your projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
