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
        <div className="relative inline-flex items-center justify-center">
          {/* Speech bubble icon — behind the text */}
          <svg
            width="200"
            height="250"
            viewBox="0 0 217 191"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[25%]"
          >
            <path
              d="M63.9017 4H190.845C196.656 4.19431 202.164 6.6461 206.205 10.8372C210.246 15.0284 212.503 20.6305 212.5 26.4597V160.619C212.496 162.03 212.094 163.411 211.341 164.603C210.588 165.796 209.514 166.75 208.244 167.357C207.037 167.893 205.711 168.1 204.399 167.955C203.088 167.81 201.838 167.32 200.776 166.533L165.083 138.758H63.9017C57.9604 138.758 52.2625 136.392 48.0613 132.18C43.8602 127.968 41.5 122.255 41.5 116.298V26.4597C41.5 20.503 43.8602 14.7903 48.0613 10.5783C52.2625 6.36628 57.9604 4 63.9017 4Z"
              fill="white"
              fillOpacity="0.1"
            />
          </svg>
          <h2 className="text-center relative z-10 text-white mb-12 ml-18">
            <span className="block text-xl md:text-2xl font-bold tracking-[0.2em]">
              CE QUE DISENT
            </span>
            <span className="block text-2xl md:text-3xl font-bold tracking-[0.2em]">
              NOS PARTENAIRES
            </span>
          </h2>
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
          <h3 className="text-white font-bold text-lg tracking-wide">
            {current.name}
          </h3>
          <p className="text-white/50 text-sm mb-4 tracking-widest">
            {current.company}
          </p>

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
