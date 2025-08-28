import React from "react";

export function MobileContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white p-4 flex justify-between items-center sm:hidden z-40">
      <a
        href="tel:6264222271"
        className="flex items-center space-x-2 font-semibold"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        <span>Call Now</span>
      </a>
      <a
        href="#contact"
        className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold"
      >
        Get Quote
      </a>
    </div>
  );
}

