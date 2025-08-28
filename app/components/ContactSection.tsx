import React from "react";
import { TranslationKey } from "~/lib/i18n";

interface ContactSectionProps {
  t: TranslationKey;
}

export function ContactSection({ t }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="ABC Construction Co."
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t.contact.form.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="(626) 422-2271"
                />
              </div>

              <div>
                <label
                  htmlFor="equipment"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t.contact.form.equipment}
                </label>
                <select
                  id="equipment"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">Select Equipment</option>
                  <option value="19ft">19' Scissor Lift</option>
                  <option value="26ft">26' Scissor Lift</option>
                  <option value="32ft">32' Scissor Lift</option>
                  <option value="multiple">Multiple Units</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t.contact.form.date}
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors"
              >
                {t.contact.form.submit}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Call Us Now
                </h3>
                <a
                  href="tel:6264222271"
                  className="text-2xl font-bold text-red-600 hover:text-red-700"
                >
                  {t.nav.phone}
                </a>
                <p className="text-gray-600">Available for emergency rentals</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Visit Our Location
                </h3>
                <p className="text-gray-700">{t.contact.info.address}</p>
                <p className="text-gray-600">{t.contact.info.hours}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Service Area
              </h3>
              <p className="text-gray-600 mb-4">
                We proudly serve San Dimas and surrounding areas including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>• Pomona</div>
                <div>• La Verne</div>
                <div>• Claremont</div>
                <div>• Glendora</div>
                <div>• Covina</div>
                <div>• West Covina</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

