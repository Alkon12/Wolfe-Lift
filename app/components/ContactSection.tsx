import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import type { TranslationKey } from "~/lib/i18n";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  formFieldAnimation,
  buttonHover,
  viewportConfigMobile,
} from "~/lib/animations";

interface ContactSectionProps {
  t: TranslationKey;
}

export function ContactSection({ t }: ContactSectionProps) {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    company: "",
    fullName: "",
    phone: "",
    equipment: "",
    date: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (field: string, value: string) => {
    // Validación para el campo de teléfono - solo números y algunos caracteres permitidos
    if (field === 'phone') {
      // Permitir solo números, espacios, guiones, paréntesis y el símbolo +
      const phoneRegex = /^[0-9\s\-\(\)\+]*$/;
      if (!phoneRegex.test(value)) {
        return; // No actualizar si contiene caracteres no válidos
      }
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        "service_zy1x5i8", // Tu service ID
        "template_5zvoqnp", // Necesitarás crear un template en EmailJS
        {
          company: formData.company,
          fullName: formData.fullName,
          phone: formData.phone,
          equipment: formData.equipment,
          date: formData.date,
          to_email: "Gowithwolfe@gmail.com",
        },
        "HONssbBe8RC4sE2ic", // Tu public key de EmailJS
      );

      setSubmitStatus("success");
      setFormData({ company: "", fullName: "", phone: "", equipment: "", date: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="relative py-16 lg:py-24 bg-black overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfigMobile}
    >
      {/* Industrial urban background with diagonal elements */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800"></div>

        {/* Large diagonal red stripe from left */}
        <motion.div
          className="absolute top-0 left-0 w-2/3 h-full bg-red-600"
          style={{ clipPath: "polygon(0% 0%, 60% 0%, 30% 100%, 0% 100%)" }}
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        />

        {/* White industrial accent */}
        <motion.div
          className="absolute bottom-0 right-0 w-1/2 h-2/3 bg-white opacity-95"
          style={{ clipPath: "polygon(40% 0%, 100% 0%, 100% 100%, 10% 100%)" }}
          initial={{ y: "100%" }}
          whileInView={{ y: "0%" }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        />

        {/* Black accent overlay on white section */}
        <motion.div
          className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-black opacity-90"
          style={{ clipPath: "polygon(60% 0%, 100% 0%, 100% 100%, 30% 100%)" }}
          initial={{ y: "100%" }}
          whileInView={{ y: "0%" }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        />

        {/* Industrial grid patterns */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute left-0 top-0 w-2/3 h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "30px 30px",
            }}
          ></div>
          <div
            className="absolute right-0 bottom-0 w-1/2 h-2/3"
            style={{
              backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "25px 25px",
            }}
          ></div>
        </div>

        {/* Warning stripes */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-16 h-32 bg-yellow-400 opacity-90"
          style={{
            clipPath: "polygon(0% 0%, 100% 5%, 100% 100%, 0% 95%)",
            transform: "rotate(-15deg)",
          }}
          animate={{
            rotate: [-15, -12, -15],
            opacity: [0.9, 0.7, 0.9],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Industrial header section */}
        <motion.div className="text-center mb-16 lg:mb-20" variants={fadeInUp}>
          {/* Emergency badge */}
          <motion.div
            className="inline-block mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="bg-red-600 text-white px-8 py-3 font-black text-sm uppercase tracking-widest relative border-4 border-white">
              <span className="relative z-10">EMERGENCY RENTALS AVAILABLE</span>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-black"></div>
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-none mb-6 md:mb-8"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="block text-white">
              {t.contact.title.split(" ")[0]}
            </span>
            <span
              className="block text-red-500 stroke-white stroke-2 lg:text-red-600"
              style={{
                textShadow: `
                  1px 1px 0 black,
                  -1px -1px 0 black,
                  1px -1px 0 black,
                  -1px 1px 0 black,
                  0 0 4px rgba(0,0,0,0.5)
                `,
              }}
            >
              {t.contact.title.split(" ").slice(1).join(" ")}
            </span>
          </motion.h2>

          <motion.p
            className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-3xl mx-auto font-bold uppercase tracking-wide"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {t.contact.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left side - Industrial form */}
          <motion.div
            className="relative"
            variants={fadeInLeft}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Industrial frame - móvil optimizado */}
            <div className="relative">
              <div className="absolute -inset-2 md:-inset-4 bg-red-600 transform rotate-1"></div>
              <div className="relative bg-black border-4 border-white p-4 md:p-8">
                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-600"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white"></div>

                {/* Form title */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-black uppercase mb-2 tracking-wide">
                    GET INSTANT QUOTE
                  </h3>
                  <p className="text-white/80 uppercase text-xs md:text-sm tracking-wider">
                    RESPONSE IN UNDER 30 MINUTES
                  </p>
                </motion.div>

                <motion.form
                  className="space-y-4 md:space-y-6 relative z-10"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  onSubmit={handleSubmit}
                >
                  <motion.div variants={staggerItem}>
                    <motion.label
                      htmlFor="company"
                      className="block text-sm font-black text-red-600 mb-2 uppercase tracking-wider"
                      animate={{
                        color: focusedField === "company" ? "#fff" : "#dc2626",
                        scale: focusedField === "company" ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {t.contact.form.name}
                    </motion.label>
                    <motion.input
                      type="text"
                      id="company"
                      className="w-full px-4 py-4 bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:border-red-600 focus:bg-white/20 transition-all font-medium uppercase tracking-wide min-h-[48px] text-base"
                      placeholder={t.contact.form.placeholderCompany}
                      variants={formFieldAnimation}
                      whileFocus="focus"
                      onFocus={() => setFocusedField("company")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      value={formData.company}
                      required
                      style={{
                        boxShadow:
                          focusedField === "company"
                            ? "0 0 0 3px rgba(239, 68, 68, 0.3)"
                            : "none",
                        clipPath:
                          focusedField === "company"
                            ? "polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)"
                            : "none",
                      }}
                    />
                  </motion.div>

                  <motion.div variants={staggerItem}>
                    <motion.label
                      htmlFor="fullName"
                      className="block text-sm font-black text-red-600 mb-2 uppercase tracking-wider"
                      animate={{
                        color: focusedField === "fullName" ? "#fff" : "#dc2626",
                        scale: focusedField === "fullName" ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      FULL NAME
                    </motion.label>
                    <motion.input
                      type="text"
                      id="fullName"
                      className="w-full px-4 py-4 bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:border-red-600 focus:bg-white/20 transition-all font-medium uppercase tracking-wide min-h-[48px] text-base"
                      placeholder="ENTER YOUR FULL NAME"
                      variants={formFieldAnimation}
                      whileFocus="focus"
                      onFocus={() => setFocusedField("fullName")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      value={formData.fullName}
                      required
                      style={{
                        boxShadow:
                          focusedField === "fullName"
                            ? "0 0 0 3px rgba(239, 68, 68, 0.3)"
                            : "none",
                        clipPath:
                          focusedField === "fullName"
                            ? "polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)"
                            : "none",
                      }}
                    />
                  </motion.div>

                  <motion.div variants={staggerItem}>
                    <motion.label
                      htmlFor="phone"
                      className="block text-sm font-black text-red-600 mb-2 uppercase tracking-wider"
                      animate={{
                        color: focusedField === "phone" ? "#fff" : "#dc2626",
                        scale: focusedField === "phone" ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {t.contact.form.phone}
                    </motion.label>
                    <motion.input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-4 bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:border-red-600 focus:bg-white/20 transition-all font-medium uppercase tracking-wide min-h-[48px] text-base"
                      placeholder={t.contact.form.placeholderPhone}
                      variants={formFieldAnimation}
                      whileFocus="focus"
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      value={formData.phone}
                      required
                      pattern="[0-9\s\-\(\)\+]*"
                      title="Solo se permiten números, espacios, guiones, paréntesis y el símbolo +"
                      style={{
                        boxShadow:
                          focusedField === "phone"
                            ? "0 0 0 3px rgba(239, 68, 68, 0.3)"
                            : "none",
                        clipPath:
                          focusedField === "phone"
                            ? "polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)"
                            : "none",
                      }}
                    />
                  </motion.div>

                  <motion.div variants={staggerItem}>
                    <motion.label
                      htmlFor="equipment"
                      className="block text-sm font-black text-red-600 mb-2 uppercase tracking-wider"
                      animate={{
                        color:
                          focusedField === "equipment" ? "#fff" : "#dc2626",
                        scale: focusedField === "equipment" ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {t.contact.form.equipment}
                    </motion.label>
                    <motion.select
                      id="equipment"
                      className="w-full px-4 py-4 bg-white/10 border-2 border-white/20 text-white focus:border-red-600 focus:bg-white/20 transition-all font-medium uppercase tracking-wide min-h-[48px] text-base"
                      variants={formFieldAnimation}
                      whileFocus="focus"
                      onFocus={() => setFocusedField("equipment")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) =>
                        handleInputChange("equipment", e.target.value)
                      }
                      value={formData.equipment}
                      required
                      style={{
                        boxShadow:
                          focusedField === "equipment"
                            ? "0 0 0 3px rgba(239, 68, 68, 0.3)"
                            : "none",
                        clipPath:
                          focusedField === "equipment"
                            ? "polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)"
                            : "none",
                      }}
                    >
                      <option value="" className="text-black">
                        {t.contact.form.selectEquipment}
                      </option>
                      <option value="12ft" className="text-black">
                        {t.contact.form.lift12Option}
                      </option>
                      <option value="19ft" className="text-black">
                        {t.contact.form.lift19Option}
                      </option>
                      <option value="26ft" className="text-black">
                        {t.contact.form.lift26Option}
                      </option>
                      <option value="32ft" className="text-black">
                        {t.contact.form.lift32Option}
                      </option>
                      <option value="multiple" className="text-black">
                        {t.contact.form.multipleOption}
                      </option>
                    </motion.select>
                  </motion.div>

                  <motion.div variants={staggerItem}>
                    <motion.label
                      htmlFor="date"
                      className="block text-sm font-black text-red-600 mb-2 uppercase tracking-wider"
                      animate={{
                        color: focusedField === "date" ? "#fff" : "#dc2626",
                        scale: focusedField === "date" ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {t.contact.form.date}
                    </motion.label>
                    <motion.input
                      type="date"
                      id="date"
                      className="w-full px-4 py-4 bg-white/10 border-2 border-white/20 text-white focus:border-red-600 focus:bg-white/20 transition-all font-medium uppercase tracking-wide min-h-[48px] text-base"
                      variants={formFieldAnimation}
                      whileFocus="focus"
                      onFocus={() => setFocusedField("date")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) =>
                        handleInputChange("date", e.target.value)
                      }
                      value={formData.date}
                      required
                      style={{
                        boxShadow:
                          focusedField === "date"
                            ? "0 0 0 3px rgba(239, 68, 68, 0.3)"
                            : "none",
                        clipPath:
                          focusedField === "date"
                            ? "polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)"
                            : "none",
                      }}
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full ${isSubmitting ? "bg-gray-600" : "bg-red-600 hover:bg-red-700"} text-white py-4 md:py-5 font-black text-base md:text-lg uppercase tracking-widest relative overflow-hidden group border-2 ${isSubmitting ? "border-gray-600" : "border-red-600 hover:border-red-700"} transition-all duration-200 mt-6 md:mt-8 min-h-[56px] flex items-center justify-center`}
                    style={{
                      clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%)",
                    }}
                    variants={buttonHover}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    <motion.span className="relative z-10">
                      {isSubmitting ? "SENDING..." : t.contact.form.submit}
                    </motion.span>
                    <motion.div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />

                    {/* Industrial corner accents */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-black"></div>
                  </motion.button>

                  {/* Success/Error Messages */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-600 border-4 border-white p-4 text-white font-black uppercase tracking-wide text-center"
                    >
                      ✅ MESSAGE SENT SUCCESSFULLY!
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-700 border-4 border-white p-4 text-white font-black uppercase tracking-wide text-center"
                    >
                      ❌ ERROR SENDING MESSAGE. PLEASE TRY AGAIN.
                    </motion.div>
                  )}
                </motion.form>
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact info and emergency call */}
          <motion.div
            className="space-y-6 md:space-y-8"
            variants={fadeInRight}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            {/* Emergency contact card */}
            <motion.div
              className="bg-red-600 border-4 border-white p-6 md:p-8 relative overflow-hidden group cursor-pointer"
              variants={staggerItem}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-black"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-yellow-400"></div>

              {/* Diagonal accent */}
              <div
                className="absolute top-0 right-0 w-1/3 h-full bg-black opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                style={{
                  clipPath: "polygon(60% 0%, 100% 0%, 100% 100%, 30% 100%)",
                }}
              ></div>

              <div className="relative z-10">
                <motion.div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center mb-6 group-hover:bg-black group-hover:border-white transition-all duration-300">
                  <motion.svg
                    className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </motion.svg>
                </motion.div>

                <motion.h3
                  className="text-white text-xl md:text-2xl lg:text-3xl font-black uppercase mb-3 tracking-wide"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {t.contact.callUsNow}
                </motion.h3>

                <motion.a
                  href="tel:6264222271"
                  className="text-white text-2xl md:text-3xl lg:text-4xl font-black block mb-3 hover:text-yellow-400 transition-colors duration-200 min-h-[48px] flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {t.nav.phone}
                </motion.a>

                <motion.p
                  className="text-white/90 uppercase text-sm tracking-wider font-medium"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {t.contact.emergencyRentals}
                </motion.p>
              </div>
            </motion.div>

            {/* Service area card */}
            <motion.div
              className="bg-white border-4 border-black p-6 md:p-8 relative overflow-hidden group"
              variants={staggerItem}
              whileHover={{
                y: -3,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Corner accents */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-black"></div>

              {/* Diagonal accent */}
              <div
                className="absolute bottom-0 left-0 w-1/4 h-full bg-red-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  clipPath: "polygon(0% 0%, 70% 0%, 40% 100%, 0% 100%)",
                }}
              ></div>

              <motion.h3
                className="text-black text-xl md:text-2xl lg:text-3xl font-black uppercase mb-4 tracking-wide relative z-10"
                whileHover={{ color: "#dc2626" }}
                transition={{ duration: 0.2 }}
              >
                {t.contact.serviceArea}
              </motion.h3>

              <motion.p
                className="text-gray-700 mb-6 relative z-10 font-medium uppercase text-sm tracking-wider"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {t.contact.serviceAreaDesc}
              </motion.p>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 text-sm relative z-10"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {[
                  "Los Angeles",
                  "Pomona",
                  "La Verne",
                  "Claremont",
                  "Glendora",
                  "Covina",
                  "West Covina",
                  "Pasadena",
                ].map((city, index) => (
                  <motion.div
                    key={city}
                    variants={staggerItem}
                    whileHover={{
                      color: "#dc2626",
                      x: 5,
                      fontWeight: "900",
                    }}
                    transition={{ duration: 0.2 }}
                    className="cursor-pointer text-black font-bold uppercase tracking-wide border-l-2 border-red-600 pl-3 hover:border-black min-h-[40px] flex items-center"
                  >
                    {city}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom urgent action bar */}
        <motion.div
          className="mt-12 md:mt-16 lg:mt-20 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="bg-yellow-400 border-4 border-black p-6 md:p-8 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-1/3 h-full bg-black opacity-90"
              style={{ clipPath: "polygon(0% 0%, 70% 0%, 50% 100%, 0% 100%)" }}
            ></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
              <div className="text-center md:text-left">
                <h3
                  className="text-black text-2xl md:text-3xl lg:text-4xl font-black uppercase mb-2"
                  style={{
                    textShadow: `
                      1px 1px 0 #fbbf24,
                      -1px -1px 0 #fbbf24,
                      1px -1px 0 #fbbf24,
                      -1px 1px 0 #fbbf24,
                      0 0 4px rgba(251, 191, 36, 0.3)
                    `,
                  }}
                >
                  NEED IT TODAY?
                </h3>
                <p
                  className="text-black/80 font-black uppercase tracking-wide text-base md:text-lg"
                  style={{
                    textShadow: `
                      1px 1px 0 #fbbf24,
                      -1px -1px 0 #fbbf24,
                      1px -1px 0 #fbbf24,
                      -1px 1px 0 #fbbf24,
                      0 0 4px rgba(251, 191, 36, 0.3)
                    `,
                  }}
                >
                  SAME DAY DELIVERY AVAILABLE
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <motion.a
                  href="tel:6264222271"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 font-black text-base md:text-lg uppercase tracking-widest relative overflow-hidden group border-2 border-red-600 hover:border-red-700 transition-all duration-200 min-h-[48px] flex items-center justify-center"
                  style={{
                    clipPath: "polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">CALL NOW</span>
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </motion.a>

                <motion.a
                  href="#contact"
                  className="bg-black hover:bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 font-black text-base md:text-lg uppercase tracking-widest relative overflow-hidden group border-2 border-black hover:border-gray-800 transition-all duration-200 min-h-[48px] flex items-center justify-center"
                  style={{
                    clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">GET QUOTE</span>
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small Yelp review section */}
        <motion.div
          className="mt-8 md:mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.a
            href="https://yelp.to/ZgtvsURs91"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 rounded-none group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-8 h-8 flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg
                className="w-6 h-6 text-red-500 group-hover:text-yellow-400 transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            </motion.div>
            <div className="text-left">
              <div className="text-white text-sm font-bold uppercase tracking-wide">
                {t.footer.links.yelp}
              </div>
              <div className="text-white/70 text-xs uppercase tracking-wider">
                {t.footer.yelpCta}
              </div>
            </div>
            <motion.div
              className="text-white/60 group-hover:text-white/80 transition-colors duration-300"
              whileHover={{ x: 3 }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

