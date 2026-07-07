"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "./Header";
import { ArrowDownIcon } from "./icons";

export default function Hero() {
  return (
    <section className="section-panel hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      <Header />

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://pub-acf282b699734fb7afa0e2499167698f.r2.dev/assets/REMY%20Loop30sec%20Site%20Web.m4v"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start md:items-center text-left md:text-center px-14 md:px-6">
        {/* Headline — animates in first */}
        <motion.h1
          className="text-white font-bold text-4xl md:text-6xl lg:text-5xl leading-tight tracking-wide mb-10"
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
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
          className=""
        >
          <Link
            href="#contact"
            className="bg-white rounded-lg hover:blur-[1px] text-black px-4 py-2 text-base font-black tracking-wide hover:bg-black hover:text-white hover:outline hover:outline-white transition-colors"
          >
            Parlons de votre projet
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDownIcon className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
}
