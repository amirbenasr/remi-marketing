"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: 1,
    title: "PERFORMANCE\nMÉDIA",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="12" width="48" height="36" rx="2" />
        <line x1="8" y1="44" x2="56" y2="44" />
        <rect x="24" y="48" width="16" height="4" />
        <path d="M20 28 L28 22 L28 34 Z" />
        <circle cx="40" cy="28" r="8" />
        <line x1="36" y1="24" x2="44" y2="32" />
      </svg>
    ),
    description:
      "Maximisez votre ROI avec des campagnes publicitaires ciblées sur Facebook, Instagram, Google et TikTok. Nous optimisons chaque dollar investi pour générer des leads qualifiés et des conversions.",
  },
  {
    id: 2,
    title: "STUDIO\nCRÉATIF\nSUR MESURE",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M32 8 L32 56" />
        <path d="M32 8 L24 20 L32 18 L40 20 Z" />
        <circle cx="40" cy="16" r="3" />
      </svg>
    ),
    description:
      "Des visuels qui captent l'attention et racontent votre histoire. Design graphique, montage vidéo, branding complet - notre équipe créative transforme vos idées en contenus mémorables.",
  },
  {
    id: 3,
    title: "CROISSANCE\nORGANIQUE\nRÉSEAUX\nSOCIAUX",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="32" cy="32" r="20" />
        <path d="M32 12 L32 20" />
        <path d="M32 44 L32 52" />
        <path d="M12 32 L20 32" />
        <path d="M44 32 L52 32" />
        <circle cx="32" cy="32" r="8" />
        <path d="M26 26 L20 16" />
      </svg>
    ),
    description:
      "Construisez une communauté engagée sans dépendre uniquement de la publicité. Stratégie de contenu, calendrier éditorial, gestion de communauté - nous développons votre présence de manière authentique.",
  },
];

export default function Services() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleService = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="section-panel services-section min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">SERVICES</h2>
          <div className="w-full h-px bg-black/30"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="relative bg-[#1a1a1a] rounded-3xl p-8 min-h-[400px] flex flex-col cursor-pointer overflow-hidden"
              onClick={() => toggleService(service.id)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Default Content */}
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="text-white/80 mb-8">{service.icon}</div>
                <h3 className="text-white font-bold text-lg leading-tight whitespace-pre-line">
                  {service.title}
                </h3>
              </div>

              {/* Eye Icon Button */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <motion.div
                  className="text-white/60 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                    {/* Plus icon */}
                    <line x1="20" y1="4" x2="20" y2="8" strokeWidth="2" />
                    <line x1="18" y1="6" x2="22" y2="6" strokeWidth="2" />
                  </svg>
                </motion.div>
              </div>

              {/* Expanded Description Overlay */}
              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div
                    className="absolute inset-0 bg-[#1a1a1a] rounded-3xl p-8 flex flex-col justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-white font-bold text-xl mb-4">
                      {service.title.replace(/\n/g, " ")}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>

                    {/* Close hint */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-sm">
                      Cliquez pour fermer
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
