"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "SAMUEL BROUILLARD",
    company: "RE/MAX ÉLITE",
    image: "/images/testimonials/brouillard.jpg",
    rating: 5,
    text: `Avec Ced et toute son équipe, ce fut un « fit » a été parfait dès le jour 1 ! J'ai eu affaire à un professionnel aguerri sur les médias sociaux qui met en avant plan ses connaissances pour maximiser mes performances selon mes objectifs et budgets établis. L'équipe de Remy Médias m'a permis de passer au prochain niveau dans ma carrière de courtier tout en étant très disponible, soucieux du détail et des plus sympathiques !`,
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

  // Auto-play — resets timer on manual navigation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="section-panel testimonials-section min-h-screen bg-black flex flex-col items-center justify-between py-16 md:py-20"
    >
      {/* Speech bubble header */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="bg-[#1a1a1a] rounded-2xl px-6 py-4 md:px-10 md:py-6">
            <h2 className="text-white text-center">
              <span className="block text-xl font-bold tracking-widest">CE QUE DISENT</span>
              <span className="block text-2xl font-bold tracking-widest">NOS PARTENAIRES</span>
            </h2>
          </div>
          {/* Tail pointing down */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[14px] border-r-[14px] border-t-[16px] border-l-transparent border-r-transparent border-t-[#1a1a1a]" />
        </div>
      </div>

      {/* Testimonial content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col items-center text-center max-w-2xl px-6"
        >
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-2 ring-white/20">
            <Image
              src={current.image}
              alt={current.name}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name & Company */}
          <h3 className="text-white font-bold text-lg tracking-wide">{current.name}</h3>
          <p className="text-white/50 text-sm mb-4 tracking-widest">{current.company}</p>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < current.rating ? "text-yellow-400" : "text-gray-600"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <p className="text-white/90 leading-relaxed text-sm md:text-base">
            &ldquo;{current.text}&rdquo;
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Dots navigation — always at the bottom */}
      <div className="flex justify-center items-center gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-3 h-3 bg-white"
                : "w-3 h-3 bg-transparent border border-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
