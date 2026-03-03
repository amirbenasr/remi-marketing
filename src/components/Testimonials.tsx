"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SpeechBubbleIcon, StarIcon } from "./icons";

const testimonials = [
  {
    id: 1,
    name: "SAMUEL BROUILLARD",
    company: "RE/MAX ÉLITE",
    image: "/images/testimonials/brouillard.png",
    rating: 5,
    text: `Avec Ced et toute son équipe, ce fut un « fit » a été parfait dès le jour 1 ! J'ai eu affaire à un professionnel aguerri sur les médias sociaux qui met en avant plan ses connaissances pour maximiser mes performances selon mes objectifs et budgets établis. L'équipe de Remy Médias m'a permis de passer au prochain niveau dans ma carrière de courtier tout en étant très disponible, soucieux du détail et des plus sympathiques !`,
  },
  {
    id: 2,
    name: "ALEXANDRE USEREAU",
    company: "COURTIER IMMOBILIER",
    image: "/images/testimonials/usereau.png",
    rating: 5,
    text: `Une équipe exceptionnelle qui comprend vraiment les besoins des professionnels de l'immobilier. Leur expertise en marketing digital a transformé ma présence en ligne et généré des résultats concrets.`,
  },
  {
    id: 3,
    name: "CAROLINE BOUCHER",
    company: "COURTIER IMMOBILIER",
    image: "/images/testimonials/boucher.png",
    rating: 5,
    text: `Professionnalisme, créativité et résultats. REMY Marketing a su créer une image de marque qui me représente parfaitement et qui attire les bons clients.`,
  },
  {
    id: 4,
    name: "MAXIME JOYAL",
    company: "COURTIER IMMOBILIER",
    image: "/images/testimonials/joyal.png",
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
      className="section-panel testimonials-section min-h-screen bg-black flex flex-col items-center justify-start py-16 md:py-20 gap-8"
    >
      {/* Speech bubble header */}
      <div className="flex justify-center">
        <div className="relative inline-flex items-center justify-center">
          {/* Speech bubble icon — behind the text */}
          <SpeechBubbleIcon className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[25%]" />
          <h2 className="text-center relative z-10 text-white mb-12 ml-18">
            <span className="block text-[36px] font-semibold ">
              CE QUE DISENT
            </span>
            <span className="block text-[36px] font-semibold ">
              NOS PARTENAIRES
            </span>
          </h2>
        </div>
      </div>

      {/* Testimonial content */}
      <AnimatePresence mode="wait" >
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col items-center  text-center max-w-2xl px-6 "
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
          <h3 className="text-white font-bold text-[20px] ">
            {current.name}
          </h3>
          <p className="text-white/50 text-[14px] mb-4 ">
            {current.company}
          </p>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} filled={i < current.rating} />
            ))}
          </div>

          {/* Quote */}
          <p className="text-white/90  text-[24px] h-[20ch] text-ellipsis overflow-hidden">
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
            className={`rounded-full transition-all duration-300 ${index === currentIndex
              ? "w-3 h-3 bg-white"
              : "w-3 h-3 bg-transparent border border-white/40"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
