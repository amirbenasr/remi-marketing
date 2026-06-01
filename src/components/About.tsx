"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, MotionValue } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import { ChevronDownIcon } from "./icons";

const founders = [
  {
    name: "CED REMY",
    description:
      `Propriétaire de REMY.marketing depuis 2018 et consultant en marketing immobilier, Cedrick Remy cumule un fort bagage d’expérience en politique, communications et ventes. Son parcours professionnel a pris son envol dans la jeune vingtaine alors qu’il a agis comme attaché politique à l’Assemblée nationale du Québec auprès du député provincial de Blainville, Mario Laframboise.\n\nDurant les mêmes années, il a animé et produit différentes émissions de télé et podcasts sur la chaîne MaTV Laval ainsi que plusieurs plateformes web. Il a ensuite approfondi son parcours dans les médias comme promoteur et créateur de contenu à la radio sur les ondes de 105,7 Rythme FM ou il a collaboré avec plusieurs personnalités telles que Patrice Bélanger, Etienne Boulay, Marianne St-Gelais et plusieurs autres. Troisième génération dans les médias (après Edward Remy et Erick Remy), Ced se consacre aujourd’hui avec son équipe à faire rayonner les entreprises, professionnels et courtiers immobiliers grâce à une approche créative, humaine et professionnelle. `,
    image: "/images/about/CED.png",
    gif: "/images/about/CED.gif",
  },
  {
    name: "HOURIA",
    description:`Designer graphique chez REMY.marketing, Houria met son talent créatif et sa rigueur au service de l’image de marque de nos clients depuis maintenant plus d’un an. Au fil des années, elle a développé une solide expérience en création de visuels publicitaires, en montage, en traitement d’images ainsi qu’en coordination avec différents intervenants de production.\n\nSon cheminement professionnel, autant en Tunisie qu’au Canada, lui a permis de bâtir une expertise à la fois technique, artistique et orientée vers le service à la clientèle. Formée en arts graphiques et en infographie, Houria est reconnue pour son souci du détail, sa minutie et sa capacité d’adaptation aux nouveaux outils et aux réalités changeantes du milieu créatif. Curieuse, ambitieuse et débrouillarde, elle contribue chaque jour à faire rayonner les projets de l’entreprise avec professionnalisme et sensibilité visuelle.  `,
    image: "/images/about/HOURIA.png",
    gif: "/images/about/HOURIA.gif",
  },
  {
    name: "LORENA",
    description:
      "LORENA  Visionnaire et organisée, Lorena veille à la réussite de chaque projet avec rigueur et créativité. Elle s’assure que chaque idée prenne forme avec clarté, efficacité et impact.",
    image: "/images/about/LORENA.png",
    gif: "/images/about/LORENA.gif",
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
            className="w-[423px] h-[528px] max-w-full mx-auto overflow-hidden relative bg-white cursor-pointer"
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
          <div className="mb-2 flex justify-end">
            <ChevronDownIcon className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-[32px] font-semibold mb-6 text-white">{founder.name}</h3>
          <p className="text-[20px] font-semibold leading-relaxed text-[#E6E6E6] whitespace-pre-line">{founder.description}</p>
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

function MobileFounderPager() {
  const [index, setIndex] = useState(0);

  return (
    <div id="about" className="bg-black text-white min-h-screen flex flex-col">
      <div className="px-6 pt-20 pb-6 max-w-7xl w-full mx-auto">
        <h2 className="text-[32px] font-semibold mb-3 text-white">À PROPOS</h2>
        <div className="h-[2px] bg-white/30" />
      </div>

      <div className="relative flex-1 overflow-hidden">
        <motion.div
          className="flex h-full touch-pan-y"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60 && index < founders.length - 1) setIndex(index + 1);
            else if (info.offset.x > 60 && index > 0) setIndex(index - 1);
          }}
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          style={{ width: `${founders.length * 100}%` }}
        >
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="shrink-0 px-6 pb-28 flex flex-col"
              style={{ width: `${100 / founders.length}%` }}
            >
              <div className="relative w-full aspect-[3/4] max-h-[55vh] overflow-hidden bg-white mb-5">
                <Image src={founder.image} alt={founder.name} fill className="object-cover object-top" />
              </div>
              <h3 className="text-[26px] font-semibold mb-3 text-white">{founder.name}</h3>
              <p className="text-[15px] leading-relaxed text-[#E6E6E6] whitespace-pre-line">
                {founder.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center gap-2 py-6">
        {founders.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Voir ${founders[i].name}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
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

  const inView = useInView(containerRef, { once: true, amount: 0.1 });
  useEffect(() => {
    if (inView) {
      founders.forEach((f) => { new window.Image().src = f.gif; });
    }
  }, [inView]);

  // Mobile: horizontal swipeable pager — one founder per screen
  if (isMobile) return <MobileFounderPager />;

  // Desktop: existing scroll-driven animation
  return (
    <div id="about" ref={containerRef} style={{ height: "300vh" }}>
      <section className="section-panel about-section sticky top-0 h-screen bg-black text-white flex flex-col overflow-hidden">
        {/* Header — always visible */}
        <div className="px-6 pt-8 pb-8 max-w-7xl w-full mx-auto flex-shrink-0">
          <h2 className="text-[36px] font-semibold mb-4 text-white">À PROPOS</h2>
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
