"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import TrustLogos from "./TrustLogos";
import { useIsMobile } from "@/hooks/useIsMobile";

const portfolioItems = [
  {
    id: 1,
    name: "Alexandre Usereau",
    subtitle: "courtier immobilier résidentiel",
    staticImage: "/images/realisations/6.png",
    logoImage: "/images/realisations/alexander_userau.png",
  },
  {
    id: 2,
    name: "Alexandre Dubé",
    subtitle: "accompagnateur en développement personnel",
    staticImage: "/images/realisations/5.png",
    logoImage: "/images/realisations/alexandre_dube.png",
  },
  {
    id: 3,
    name: "Caroline Boucher",
    subtitle: "courtier immobilier",
    staticImage: "/images/realisations/4.png",
    logoImage: "/images/realisations/caroline_boucher.png",
  },
  {
    id: 4,
    name: "Maxime Joyal",
    subtitle: "courtier immobilier résidentiel et commercial",
    staticImage: "/images/realisations/3.png",
    logoImage: "/images/realisations/maxime_joyal.png",
  },
  {
    id: 5,
    name: "Morin Poupart & Associés",
    subtitle: "courtiers immobiliers résidentiels et commerciaux",
    staticImage: "/images/realisations/2.png",
    logoImage: "/images/realisations/morin_poupart.png",
  },
  {
    id: 6,
    name: "Maxime Jobin",
    subtitle: "courtier immobilier résidentiel",
    staticImage: "/images/realisations/1.png",
    logoImage: "/images/realisations/maxime_jobin.png",
  },
];

interface PortfolioItemProps {
  item: (typeof portfolioItems)[0];
}

function PortfolioItem({ item }: PortfolioItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  return (
    <motion.div
      className="relative aspect-[3/2] bg-gray-800 rounded-lg overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={isMobile ? undefined : { scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image container */}
      <div className="absolute inset-0">
        <Image
          src={item.staticImage}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay - disappears on hover */}
      <motion.div
        className="absolute inset-0 bg-black/70 flex items-center justify-center p-4"
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center">
          <Image
            src={item.logoImage}
            alt={item.name}
            width={250}
            height={300}
            className="mx-auto mb-2"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// Group A (slides from left): indices 0, 3, 4
// Group B (slides from right): indices 1, 2, 5
const GROUP_A = new Set([0, 3, 4]);

export default function Portfolio() {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start 0.15"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["-60%", "0%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["60%", "0%"]);

  return (
    <div ref={containerRef}>
      <section
        id="portfolio"
        className="section-panel portfolio-section bg-black py-12 "
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <div className="text-right mb-16">
            <p className="text-white font-semibold text-[32px] tracking-wider ">
              NOS
            </p>
            <h2 className="text-[48px] font-semibold text-white">
              RÉALISATIONS
            </h2>
          </div>

          {/* Portfolio Grid */}
          <div className="w-[80%] grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mx-auto">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                style={
                  isMobile
                    ? undefined
                    : { x: GROUP_A.has(index) ? leftX : rightX }
                }
              >
                <PortfolioItem item={item} />
              </motion.div>
            ))}
          </div>
        </div>
        <TrustLogos />
      </section>
    </div>
  );
}
