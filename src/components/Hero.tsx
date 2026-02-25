"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "./Header";

export default function Hero() {
  return (
    <section className="section-panel hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      <Header />

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://remy.marketing/wp-content/uploads/2023/10/REMY-Loop30sec.mp4"
        poster="/images/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Headline — animates in first */}
        <motion.h1
          className="text-white font-bold text-5xl md:text-6xl lg:text-5xl leading-tight tracking-wide mb-10"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          LÀ OÙ CRÉATIVITÉ
          <br />
          RENCONTRE STRATÉGIE
        </motion.h1>

        {/* CTA Button — animates in after headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <Link
            href="#contact"
            className="bg-white rounded-lg text-black px-4 py-2 text-base font-black tracking-wide hover:bg-gray-100 transition-colors"
          >
            Parlons de votre projet
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
