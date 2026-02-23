"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TrustLogos from "./TrustLogos";

const portfolioItems = [
  {
    id: 1,
    name: "Alexandre Usereau",
    subtitle: "courtier immobilier résidentiel",
    staticImage: "/images/realisations/Property 1=Default.png",
    logoImage: "/images/realisations/Alexandre Usereau.png",
  },
  {
    id: 2,
    name: "Alexandre Dubé",
    subtitle: "accompagnateur en développement personnel",
    staticImage: "/images/realisations/Property 1=Default-5.png",
    logoImage: "/images/realisations/A. Dubé-Doré 1.png",
  },
  {
    id: 3,
    name: "Caroline Boucher",
    subtitle: "courtier immobilier",
    staticImage: "/images/realisations/Property 1=Default-1.png",
    logoImage: "/images/realisations/Logo_CarolineBoucher_Blanc 1.png",
  },
  {
    id: 4,
    name: "Maxime Joyal",
    subtitle: "courtier immobilier résidentiel et commercial",
    staticImage: "/images/realisations/Property 1=Default-2.png",
    logoImage: "/images/realisations/LogoCouleurClair_MaximeJoyal 1.png",
  },
  {
    id: 5,
    name: "Morin Poupart & Associés",
    subtitle: "courtiers immobiliers résidentiels et commerciaux",
    staticImage: "/images/realisations/Property 1=Default-3.png",
    logoImage: "/images/realisations/Variation_Balnc 1.png",
  },
  {
    id: 6,
    name: "Maxime Jobin",
    subtitle: "courtier immobilier résidentiel",
    staticImage: "/images/realisations/Property 1=Default-4.png",
    logoImage: "/images/realisations/Logo_MJ_Blanc 1.png",
  },
];

interface PortfolioItemProps {
  item: (typeof portfolioItems)[0];
}

function PortfolioItem({ item }: PortfolioItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image container - swap between static and GIF on hover */}
      <div className="absolute inset-0">
        {/* Placeholder gradient until images are added */}
        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
          <Image
            src={item.staticImage}
            alt={item.name}
            fill
            className="object-fit"
          />
        </div>
      </div>

      {/* Overlay - disappears on hover */}
      <motion.div
        className="absolute inset-0 bg-black/50 flex items-center justify-center p-4"
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center">
          <Image
            src={item.logoImage}
            alt={item.name}
            width={125}
            height={300}
            className="mx-auto mb-2"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-panel portfolio-section bg-black py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-right mb-16">
          <p className="text-white/60 text-sm tracking-wider mb-2">NOS</p>
          <h2 className="text-4xl font-bold text-white">RÉALISATIONS</h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <TrustLogos />
    </section>
  );
}
