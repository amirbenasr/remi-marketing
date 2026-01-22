"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "SAMUEL BROUILLARD",
    company: "RE/MAX ÉLITE",
    image: "/images/testimonials/brouillard.jpg",
    rating: 5,
    text: `Avec Ced et toute son équipe, ce fut un « fit » a été parfait dès le jour 1 !
J'ai eu affaire à un professionnel aguerri sur les médias sociaux qui met en avant plan ses connaissances pour maximiser mes performances selon mes objectifs et budgets établis.
L'équipe de Remy Médias m'a permis de passer au prochain niveau dans ma carrière de courtier tout en étant très disponible, soucieux du détail et des plus sympathiques !
Pour un service marketing haut de gamme qui répond aux standards les plus élevés du marché, c'est Remy Marketing !`,
  },
  {
    id: 2,
    name: "ALEXANDRE USEREAU",
    company: "COURTIER IMMOBILIER",
    image: "/images/testimonials/usereau.jpg",
    rating: 5,
    text: `Une équipe exceptionnelle qui comprend vraiment les besoins des professionnels de l'immobilier. Leur expertise en marketing digital a transformé ma présence en ligne et généré des résultats concrets.`,
  },
  {
    id: 3,
    name: "CAROLINE BOUCHER",
    company: "COURTIER IMMOBILIER",
    image: "/images/testimonials/boucher.jpg",
    rating: 5,
    text: `Professionnalisme, créativité et résultats. REMY Marketing a su créer une image de marque qui me représente parfaitement et qui attire les bons clients.`,
  },
  {
    id: 4,
    name: "MAXIME JOYAL",
    company: "COURTIER IMMOBILIER",
    image: "/images/testimonials/joyal.jpg",
    rating: 5,
    text: `Grâce à l'équipe de REMY, j'ai pu me démarquer dans un marché compétitif. Leur approche personnalisée et leur attention aux détails font toute la différence.`,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-panel testimonials-section min-h-screen bg-black py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Speech Bubble Header */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="bg-white rounded-2xl px-8 py-6 relative">
              <h2 className="text-black text-center">
                <span className="block text-xl font-bold">CE QUE DISENT</span>
                <span className="block text-2xl font-bold">NOS PARTENAIRES</span>
              </h2>
              {/* Speech bubble tail */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[16px] border-r-[16px] border-t-[16px] border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </div>
        </div>

        {/* Testimonial Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {/* Avatar */}
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-700">
              {/* Placeholder for avatar */}
              <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                <span className="text-white/50 text-2xl">
                  {currentTestimonial.name.charAt(0)}
                </span>
              </div>
            </div>

            {/* Name & Company */}
            <h3 className="text-white font-bold text-lg">{currentTestimonial.name}</h3>
            <p className="text-white/60 text-sm mb-4">{currentTestimonial.company}</p>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < currentTestimonial.rating ? "text-yellow-400" : "text-gray-600"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p className="text-white text-center leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
              &ldquo;{currentTestimonial.text}&rdquo;
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
