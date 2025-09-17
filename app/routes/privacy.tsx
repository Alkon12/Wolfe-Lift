import React from "react";
import { motion } from "framer-motion";
import type { Route } from "./+types/privacy";
import { useLanguage } from "~/hooks/useLanguage";
import { fadeInUp, staggerContainer, staggerItem, viewportConfigLarge } from "~/lib/animations";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy - Wolfe Lift Rentals" },
    { name: "description", content: "Privacy Policy for Wolfe Lift Rentals & Transport LLC" },
  ];
}

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <motion.div
        className="relative bg-gradient-to-r from-black via-gray-900 to-black py-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
          <motion.div
            className="absolute top-0 right-0 w-1/3 h-full bg-red-600 opacity-20"
            style={{ clipPath: "polygon(70% 0%, 100% 0%, 100% 100%, 90% 100%)" }}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            className="mb-6"
            variants={fadeInUp}
          >
            <motion.a
              href="/"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors duration-300"
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
              <span className="font-medium uppercase tracking-wide">Back to Home</span>
            </motion.a>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-black uppercase text-white tracking-wide mb-4"
            variants={fadeInUp}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg"
            variants={fadeInUp}
          >
            Effective Date: September 1, 2025
          </motion.p>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="max-w-4xl mx-auto px-6 lg:px-8 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfigLarge}
        variants={staggerContainer}
      >
        <motion.div className="prose prose-invert prose-lg max-w-none" variants={staggerItem}>
          <motion.p className="text-gray-300 mb-8" variants={fadeInUp}>
            Wolfe Lift Rentals & Transport LLC ("we," "our," or "us") respect your privacy. This Privacy Policy explains how we collect, use, and protect your information when you interact with our website, advertisements, and services.
          </motion.p>

          <motion.section className="mb-12" variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-red-400 mb-6 uppercase tracking-wide">Information We Collect</h2>
            <p className="text-gray-300 mb-4">We may collect the following types of information:</p>
            <ul className="text-gray-300 space-y-3">
              <li><strong className="text-white">Personal Information:</strong> such as your name, email address, phone number, and address when you submit forms, request information, or make a purchase.</li>
              <li><strong className="text-white">Usage Data:</strong> such as IP address, browser type, pages visited, and how you interact with our website or advertisements.</li>
              <li><strong className="text-white">Advertising Data:</strong> information collected through cookies, pixels, and tracking tools used by platforms like Facebook/Meta to deliver and measure ads.</li>
            </ul>
          </motion.section>

          <motion.section className="mb-12" variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-red-400 mb-6 uppercase tracking-wide">How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">We use the information we collect to:</p>
            <ul className="text-gray-300 space-y-3">
              <li>• Provide and improve our products and services.</li>
              <li>• Respond to inquiries and customer requests.</li>
              <li>• Process orders and deliver scissor lift products.</li>
              <li>• Show you relevant ads and measure the effectiveness of our advertising campaigns.</li>
              <li>• Comply with legal requirements.</li>
            </ul>
          </motion.section>

          <motion.section className="mb-12" variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-red-400 mb-6 uppercase tracking-wide">Sharing Your Information</h2>
            <p className="text-gray-300 mb-4">We do not sell or rent your personal information. We may share your information only with:</p>
            <ul className="text-gray-300 space-y-3">
              <li><strong className="text-white">Service Providers:</strong> such as payment processors, shipping providers, and marketing platforms that help us operate our business.</li>
              <li><strong className="text-white">Legal Requirements:</strong> if required by law or to protect our rights and safety.</li>
            </ul>
          </motion.section>

          <motion.section className="mb-12" variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-red-400 mb-6 uppercase tracking-wide">Cookies and Tracking</h2>
            <p className="text-gray-300">
              We use cookies and similar technologies (such as the Meta Pixel) to track website activity, deliver personalized ads, and improve user experience. You can manage or disable cookies in your browser settings.
            </p>
          </motion.section>

          <motion.section className="mb-12" variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-red-400 mb-6 uppercase tracking-wide">Your Privacy Rights</h2>
            <p className="text-gray-300 mb-4">Depending on your location, you may have the right to:</p>
            <ul className="text-gray-300 space-y-3">
              <li>• Access, update, or delete your personal information.</li>
              <li>• Opt out of marketing communications.</li>
              <li>• Request that we limit the use of your data for targeted advertising.</li>
            </ul>
            <p className="text-gray-300 mt-4">To exercise your rights, contact us at the details below.</p>
          </motion.section>

          <motion.section className="mb-12" variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-red-400 mb-6 uppercase tracking-wide">Data Security</h2>
            <p className="text-gray-300">
              We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.
            </p>
          </motion.section>

          <motion.section className="mb-12" variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-red-400 mb-6 uppercase tracking-wide">Children's Privacy</h2>
            <p className="text-gray-300">
              Our services are not directed to children under 13. We do not knowingly collect personal information from children.
            </p>
          </motion.section>

          <motion.section className="mb-12" variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-red-400 mb-6 uppercase tracking-wide">Updates to This Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>
          </motion.section>

          <motion.section className="mb-12" variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-red-400 mb-6 uppercase tracking-wide">Contact Us</h2>
            <p className="text-gray-300 mb-4">If you have questions or concerns about this Privacy Policy, please contact us at:</p>
            <div className="text-gray-300 space-y-2">
              <p><strong className="text-white">Email:</strong> <a href="mailto:Gowithwolfe@gmail.com" className="text-red-400 hover:text-red-300">Gowithwolfe@gmail.com</a></p>
              <p><strong className="text-white">Phone:</strong> <a href="tel:6264222271" className="text-red-400 hover:text-red-300">626-422-2271</a></p>
            </div>
          </motion.section>
        </motion.div>
      </motion.div>
    </div>
  );
}