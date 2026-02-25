"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

const founders = [
  {
    name: "CED REMY",
    description:
      "Fondateur de l'agence REMY, est un stratège passionné par le marketing et la création de marques fortes. Fort d'un parcours entre politique, médias et entrepreneuriat, il accompagne entreprises et créateurs dans le développement d'une communication authentique, percutante et humaine.",
    image: "/images/about/ANIMATION CED.png",
    gif: "/images/about/ANIMATION CED.gif",
  },
  {
    name: "HOURIA",
    description:
      "Co-fondatrice de l'agence REMY, est une experte en communication et en stratégie digitale. Avec une expérience riche dans le domaine du marketing, elle apporte une vision innovante et créative pour aider les marques à se démarquer et à atteindre leurs objectifs.",
    image: "/images/about/ANIMATION HOURIA.png",
    gif: "/images/about/ANIMATION HOURIA.gif",
  },
  {
    name: "LORENA",
    description:
      "Directrice Créative de l'agence REMY, elle transforme les idées en identités visuelles mémorables. Avec un sens aigu de l'esthétique et une maîtrise des tendances actuelles, elle donne vie aux projets avec une créativité sans limites et une attention particulière aux détails.",
    image: "/images/about/ANIMATION LORENA.png",
    gif: "/images/about/ANIMATION LORENA.gif",
  },
];

type Founder = (typeof founders)[0];

function FounderCard({
  founder,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  founder: Founder;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
}) {
  return (
    <div className="absolute inset-0 bg-black flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Image — swaps to GIF on hover */}
        <div className="relative">
          <div
            className="aspect-[3/4] max-w-md mx-auto overflow-hidden relative bg-white cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              key={
                hoveredIndex === index
                  ? `${founder.name}-gif`
                  : `${founder.name}-png`
              }
              src={hoveredIndex === index ? founder.gif : founder.image}
              alt={founder.name}
              fill
              unoptimized={hoveredIndex === index}
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <div className="mb-8 flex justify-end">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <h3 className="text-3xl font-bold mb-6 text-white">{founder.name}</h3>
          <p className="text-gray-300 leading-relaxed">{founder.description}</p>
        </div>
      </div>
    </div>
  );
}

function SlidingFounder({
  founder,
  index,
  scrollYProgress,
  hoveredIndex,
  setHoveredIndex,
}: {
  founder: Founder;
  index: number;
  scrollYProgress: MotionValue<number>;
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
}) {
  // index 1 → slides in at progress 0.0 → 0.5
  // index 2 → slides in at progress 0.5 → 1.0
  const start = (index - 1) / 2;
  const end = index / 2;
  const y = useTransform(scrollYProgress, [start, end], ["100vh", "0vh"]);

  return (
    <motion.div style={{ y }} className="absolute inset-0">
      <FounderCard
        founder={founder}
        index={index}
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
      />
    </motion.div>
  );
}

export default function About() {
  const isMobile = useIsMobile();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Mobile: static vertical list, no scroll-driven animations
  if (isMobile) {
    return (
      <div id="about" className="bg-black text-white">
        <div className="px-6 pt-20 pb-8 max-w-7xl w-full mx-auto">
          <h2 className="text-4xl font-bold mb-4">À PROPOS</h2>
          <motion.div
            className="h-[2px] bg-white"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ originX: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 pb-16 flex flex-col gap-12">
          {founders.map((founder) => (
            <div key={founder.name}>
              <div className="aspect-[3/4] max-h-72 overflow-hidden relative bg-white mb-6">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                {founder.name}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {founder.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop: existing scroll-driven animation
  return (
    <div id="about" ref={containerRef} style={{ height: "300vh" }}>
      <section className="section-panel about-section sticky top-0 h-screen bg-black text-white flex flex-col overflow-hidden">
        {/* Header — always visible */}
        <div className="px-6 pt-20 pb-8 max-w-7xl w-full mx-auto flex-shrink-0">
          <h2 className="text-4xl font-bold mb-4">À PROPOS</h2>
          <motion.div
            className="h-[2px] bg-white"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ originX: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>

        {/* Founder cards — stack on scroll */}
        <div className="flex-1 relative overflow-hidden">
          {/* Founder 1 — always visible base */}
          <FounderCard
            founder={founders[0]}
            index={0}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />

          {/* Founders 2 & 3 — slide in progressively */}
          {founders.slice(1).map((founder, i) => (
            <SlidingFounder
              key={founder.name}
              founder={founder}
              index={i + 1}
              scrollYProgress={scrollYProgress}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
