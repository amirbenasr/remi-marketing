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
      className="relative h-full w-full  bg-gray-800 rounded-lg overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={isMobile ? undefined : { scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image container */}
      <div className="absolute inset-0">
        <Image
          src={item.staticImage}
          alt={item.name}
          fill
          className="object-cover object-center"
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

  if (isMobile) {
    return (
      <section id="portfolio" className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-right mb-8">
            <p className="text-white font-semibold text-[22px] tracking-wider">NOS</p>
            <h2 className="text-[36px] font-semibold text-white leading-none">RÉALISATIONS</h2>
          </div>
          {/* Scroll-pinned card stack: each realisation sticks near the top and
              the next slides up to stack over it as you scroll. */}
          <div className="relative">
            {portfolioItems.map((item, i) => (
              <div
                key={item.id}
                className="sticky"
                style={{
                  top: `${72 + i * 12}px`,
                  marginBottom: i === portfolioItems.length - 1 ? 0 : "2rem",
                }}
              >
                <div className="relative w-full max-w-xs mx-auto aspect-[4/3] overflow-hidden rounded-2xl bg-gray-800 shadow-2xl shadow-black/60">
                  <Image
                    src={item.staticImage}
                    alt={item.name}
                    fill
                    className="object-cover object-center"
                  />
                  {/* Bottom gradient + caption */}
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                    <h3 className="text-white font-semibold text-[18px] leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-white/70 text-[13px] mt-0.5">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <TrustLogos />
        </div>
      </section>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <section
        id="portfolio"
        className="section-panel   flex flex-col  h-screen portfolio-section bg-black py-12 "
      >
        <div className="max-w-7xl mx-auto px-6 h-[80%] w-full   ">
          {/* Section Title */}
          <div className="text-right mb-4">
            <p className="text-white font-semibold text-[32px] tracking-wider ">
              NOS
            </p>
            <h2 className="text-[48px] font-semibold text-white">
              RÉALISATIONS
            </h2>
          </div>

          {/* Portfolio Grid */}
          <div className=" grid  h-[70%] w-full  grid-cols-2  md:grid-cols-3 grid-rows-2 gap-4 md:gap-6 mx-auto">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                style={{ x: GROUP_A.has(index) ? leftX : rightX }}
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
