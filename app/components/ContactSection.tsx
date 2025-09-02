import React, { useState } from "react";
import { motion } from "framer-motion";
import type { TranslationKey } from "~/lib/i18n";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, formFieldAnimation, buttonHover, viewportConfigMobile } from "~/lib/animations";

interface ContactSectionProps {
  t: TranslationKey;
}

export function ContactSection({ t }: ContactSectionProps) {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    company: "",
    phone: "",
    equipment: "",
    date: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <motion.section 
      id="contact" 
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfigMobile}
    >
      {/* Animated background dots - optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-4 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-red-100 rounded-full opacity-20"
          animate={{
            scale: [1, 1.05, 1],
            x: [0, 10, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-4 -left-4 w-64 sm:w-96 h-64 sm:h-96 bg-red-50 rounded-full opacity-20 sm:opacity-30"
          animate={{
            scale: [1, 0.95, 1],
            x: [0, -8, 0],
            y: [0, 8, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4"
            variants={fadeInUp}
          >
            {t.contact.title}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {t.contact.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div 
            className="bg-white rounded-xl p-8 shadow-lg relative overflow-hidden"
            variants={fadeInLeft}
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Animated border gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: focusedField ? 0.05 : 0 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.form 
              className="space-y-6 relative z-10"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={staggerItem}>
                <motion.label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                  animate={{ 
                    color: focusedField === "company" ? "#dc2626" : "#374151",
                    scale: focusedField === "company" ? 1.02 : 1 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {t.contact.form.name}
                </motion.label>
                <motion.input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                  placeholder={t.contact.form.placeholderCompany}
                  variants={formFieldAnimation}
                  whileFocus="focus"
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  style={{
                    boxShadow: focusedField === "company" ? "0 0 0 3px rgba(239, 68, 68, 0.1)" : "none",
                  }}
                />
              </motion.div>

              <motion.div variants={staggerItem}>
                <motion.label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                  animate={{ 
                    color: focusedField === "phone" ? "#dc2626" : "#374151",
                    scale: focusedField === "phone" ? 1.02 : 1 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {t.contact.form.phone}
                </motion.label>
                <motion.input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                  placeholder={t.contact.form.placeholderPhone}
                  variants={formFieldAnimation}
                  whileFocus="focus"
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  style={{
                    boxShadow: focusedField === "phone" ? "0 0 0 3px rgba(239, 68, 68, 0.1)" : "none",
                  }}
                />
              </motion.div>

              <motion.div variants={staggerItem}>
                <motion.label
                  htmlFor="equipment"
                  className="block text-sm font-medium text-gray-700 mb-2"
                  animate={{ 
                    color: focusedField === "equipment" ? "#dc2626" : "#374151",
                    scale: focusedField === "equipment" ? 1.02 : 1 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {t.contact.form.equipment}
                </motion.label>
                <motion.select
                  id="equipment"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                  variants={formFieldAnimation}
                  whileFocus="focus"
                  onFocus={() => setFocusedField("equipment")}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) => handleInputChange("equipment", e.target.value)}
                  style={{
                    boxShadow: focusedField === "equipment" ? "0 0 0 3px rgba(239, 68, 68, 0.1)" : "none",
                  }}
                >
                  <option value="">{t.contact.form.selectEquipment}</option>
                  <option value="12ft">{t.contact.form.lift12Option}</option>
                  <option value="19ft">{t.contact.form.lift19Option}</option>
                  <option value="26ft">{t.contact.form.lift26Option}</option>
                  <option value="multiple">{t.contact.form.multipleOption}</option>
                </motion.select>
              </motion.div>

              <motion.div variants={staggerItem}>
                <motion.label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                  animate={{ 
                    color: focusedField === "date" ? "#dc2626" : "#374151",
                    scale: focusedField === "date" ? 1.02 : 1 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {t.contact.form.date}
                </motion.label>
                <motion.input
                  type="date"
                  id="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                  variants={formFieldAnimation}
                  whileFocus="focus"
                  onFocus={() => setFocusedField("date")}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  style={{
                    boxShadow: focusedField === "date" ? "0 0 0 3px rgba(239, 68, 68, 0.1)" : "none",
                  }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold text-lg relative overflow-hidden"
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.span className="relative z-10">
                  {t.contact.form.submit}
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-red-700"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ 
                    scale: 1, 
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }}
                />
                
                {/* Ripple effect on click */}
                <motion.div
                  className="absolute inset-0 bg-white rounded-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileTap={{ 
                    scale: 1.5, 
                    opacity: 0.2,
                    transition: { duration: 0.6 }
                  }}
                />
              </motion.button>
            </motion.form>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={fadeInRight}
          >
            <motion.div 
              className="flex items-start space-x-4 group"
              variants={staggerItem}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.4)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1 
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </motion.svg>
                
                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 bg-red-500 rounded-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
              <div>
                <motion.h3 
                  className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {t.contact.callUsNow}
                </motion.h3>
                <motion.a
                  href="tel:6264222271"
                  className="text-2xl font-bold text-red-600 hover:text-red-700 block"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#b91c1c" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {t.nav.phone}
                </motion.a>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  {t.contact.emergencyRentals}
                </motion.p>
              </div>
            </motion.div>


            <motion.div 
              className="bg-white rounded-lg p-6 shadow-sm relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                y: -2,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.h3 
                className="text-lg font-semibold text-gray-900 mb-3 relative z-10"
                whileHover={{ color: "#dc2626" }}
                transition={{ duration: 0.2 }}
              >
                {t.contact.serviceArea}
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-4 relative z-10"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {t.contact.serviceAreaDesc}
              </motion.p>
              <motion.div 
                className="grid grid-cols-2 gap-2 text-sm text-gray-600 relative z-10"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {["San Dimas", "Pomona", "La Verne", "Claremont", "Glendora", "Covina", "West Covina", "Pasadena"].map((city, index) => (
                  <motion.div 
                    key={city}
                    variants={staggerItem}
                    whileHover={{ 
                      color: "#dc2626",
                      x: 5,
                      fontWeight: "600"
                    }}
                    transition={{ duration: 0.2 }}
                    className="cursor-pointer"
                  >
                    • {city}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

