"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { SpeechBubbleIcon, StarIcon } from "./icons";

const testimonials = [
  {
    id: 1,
    name: "SAMUEL BROUILLARD",
    company: "RE/MAX ÉLITE",
    image: "/images/testimonials/brouillard.png",
    rating: 5,
    text: `Avec Ced et toute son équipe, ce fut un « fit » a été parfait dès le jour 1 !
J'ai eu affaire à un professionnel aguerri sur les médias sociaux qui met en avant plan ses connaissances pour maximiser mes performances selon mes objectifs et budgets établis.
L'équipe de Remy Médias m'a permis de passer au prochain niveau dans ma carrière de courtier tout en étant très disponible, soucieux du détail et des plus sympathiques !
Pour un service marketing haut de gamme qui répond aux standards les plus élevés du marché, c'est Remy Marketing ! `,
  },
  {
    id: 2,
    name: "GABRIEL LALANCETTE",
    company: "REAL ESTATE PLAYA",
    image: "/images/testimonials/usereau.png",
    rating: 5,
    text: `Ced se démarque dans le marché du marketing et branding immobilier par ses connaissances poussée, ses années d’expérience et ses stratégies qui évoluent avec les nouvelles technologies.
Si vous recherchez quelqu’un de passionné et dédié qui amène des résultats, ne cherchez pas plus loin. Je recommande fortement !`,
  },
  {
    id: 4,
    name: "LYNE OUELLETTE",
    company: "VIA CAPITALE PARTENAIRES",
    image: "/images/testimonials/joyal.png",
    rating: 5,
    text: `WOW et REWOW, la chimie s'est installée dès les premières minutes. Une écoute attentive, une approche stimulante et proactive le tout en toute simplicité. J'adore !`,
  },
  {
    id: 3,
    name: "MÉLISSA MERCIER",
    company: "VIA CAPITALE PARTENAIRES",
    image: "/images/testimonials/boucher.png",
    rating: 5,
    text: `Équipe professionnel et offre des idées/concepts exceptionnels. Une rencontre et vous serez charmez mais surtout vous vous sentirez en confiance !`,
  },
  
  {
    id: 5,
    name: "CINDY BUSSIÈRES",
    company: "SUTTON SYNERGIE",
    image: "/images/testimonials/cindy_bussieres.png",
    rating: 5,
    text: `Travailler avec Ced est un vrai privilège! Son énergie est contagieuse, ses idées sont toujours pertinentes et ses fameux « coups de pied au derrière » sont exactement ce qu’il me faut pour avancer et me dépasser. Il a un don pour motiver, structurer et amener les choses plus loin. Chaque rencontre est un plaisir et un boost de productivité. Je recommande à 100%!`,
  },
  {
    id: 6,
    name: "ALEXANDRE DUBÉ",
    company: "COACH",
    image: "/images/testimonials/alexandre_dube.png",
    rating: 5,
    text: `Quel plaisir de travailler avec Remy marketing ! Avec son approche humaine, Ced et son équipe ont su bien m'écouter et me suggérer afin que le produit final puisse bien me représenter. J'ai fait affaire avec Ced pour 2 mandats différents et n'hésiterai pas pour en faire un autre avec son équipe. Ils sont professionnels dans leur démarche. Maintenant, j'ai hâte de faire rayonner ma marque sur les réseaux sociaux afin de pouvoir proposer mon offre à mon public cible. Ce n'est qu'un début d'une belle relation d'affaire. Merci`,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.15"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["-1000px", "0px"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["1000px", "0px"]);

  // Auto-play — pauses on touch/drag, 7s cadence to give long quotes time to read
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIndex, paused]);

  const next = () => setCurrentIndex((v) => (v + 1) % testimonials.length);
  const prev = () => setCurrentIndex((v) => (v - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[currentIndex];

  return (
    <div ref={sectionRef} className="relative">
      <section
        id="testimonials"
        className="section-panel testimonials-section min-h-screen  bg-black flex flex-col items-center justify-start py-16 md:py-20 gap-8"
      >
        <div className="flex justify-center">
          <div className="relative inline-flex items-center justify-center">
            {/* Speech bubble icon — behind the text */}
            <motion.div style={{ x: leftX }}>
              <SpeechBubbleIcon className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[25%]" />
            </motion.div>
            <motion.h2
              className="text-center relative z-10 text-white mb-12 ml-18"
              style={{ x: rightX }}
            >
              <span className="block text-[36px] font-semibold ">
                CE QUE DISENT
              </span>
              <span className="block text-[36px] font-semibold ">
                NOS PARTENAIRES
              </span>
            </motion.h2>
          </div>
        </div>

        {/* Testimonial content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.35 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setPaused(true)}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) next();
              else if (info.offset.x > 60) prev();
            }}
            onPointerDown={() => setPaused(true)}
            className="flex flex-col items-center text-center max-w-2xl px-6 cursor-pointer touch-pan-y select-none"
            onClick={next}
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
            <p className="text-white/50 text-[14px] mb-4 ">{current.company}</p>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} filled={i < current.rating} />
              ))}
            </div>

            {/* Quote */}
            <p className="text-white/90 text-[16px] md:text-[18px] min-h-64 md:min-h-80 flex items-start justify-start">
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
    </div>
  );
}
