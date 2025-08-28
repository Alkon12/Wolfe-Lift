import React from "react";
import { TranslationKey } from "~/lib/i18n";

interface FooterProps {
  t: TranslationKey;
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/Logo.png"
                alt="Wolfe Lift Logo"
                className="w-14 h-14 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Wolfe Lift</h3>
                <p className="text-sm text-gray-400">Rentals & Transport</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a
                href="#equipment"
                className="text-gray-400 hover:text-white block transition-colors"
              >
                Equipment Rentals
              </a>
              <a
                href="#services"
                className="text-gray-400 hover:text-white block transition-colors"
              >
                {t.footer.links.about}
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white block transition-colors"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white block transition-colors"
              >
                {t.footer.links.safety}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                123 Industry Blvd
                <br />
                San Dimas, CA 91773
              </p>
              <p className="text-gray-400">
                Mon-Fri: 6AM-6PM
                <br />
                Sat: 7AM-3PM
              </p>
              <a
                href="tel:6264222271"
                className="text-red-400 hover:text-red-300 font-semibold"
              >
                {t.nav.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 Wolfe Lift Rentals & Transport. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              {t.footer.links.terms}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t.footer.links.privacy}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              CA License #123456
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

