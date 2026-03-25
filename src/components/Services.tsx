"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import {
  PerformanceMediaIcon,
  StudioCreatifIcon,
  CroissanceOrganiqueIcon,
  EyeIcon,
  StrategiePropulsionIcon,
  ArchitectureMarqueIcon,
  StudioVideoIcon,
} from "./icons";

interface Service {
  id: number;
  title: string;
  details: {
    title: string;
    subtitle?: string;
    description: string;
  }[];
}

const services: Service[] = [
  {
    id: 1,
    title: "PERFORMANCE\nMÉDIA",
    details: [
      {
        title: "Facebook & Instagram Ads",
        description:
          "Campagnes ciblées pour générer des leads qualifiés et maximiser votre retour sur investissement.",
      },
      {
        title: "Google Ads",
        description:
          "Référencement payant optimisé pour capter l'intention d'achat au bon moment.",
      },
      {
        title: "TikTok Ads",
        description:
          "Contenus performants adaptés aux codes de la nouvelle génération.",
      },
    ],
  },
  {
    id: 2,
    title: "STUDIO\nCRÉATIF\nSUR MESURE",
    details: [
      {
        title: "Design Graphique",
        description:
          "Identités visuelles fortes qui reflètent l'essence de votre marque.",
      },
      {
        title: "Montage Vidéo",
        description:
          "Contenus vidéo percutants conçus pour capter et retenir l'attention.",
      },
      {
        title: "Branding Complet",
        description:
          "Du logo à la charte graphique, un univers cohérent et mémorable.",
      },
    ],
  },
  {
    id: 3,
    title: "CROISSANCE\nORGANIQUE\nRÉSEAUX\nSOCIAUX",
    details: [
      {
        title: "Stratégie de Contenu",
        description:
          "Un calendrier éditorial pensé pour engager votre communauté en profondeur.",
      },
      {
        title: "Gestion de Communauté",
        description:
          "Animation quotidienne de vos réseaux pour fidéliser votre audience.",
      },
      {
        title: "Croissance Authentique",
        description:
          "Des méthodes durables pour développer votre présence sans dépendre de la pub.",
      },
    ],
  },
];

const newServices: Service[] = [
  {
    id: 6,
    title: "STUDIO\nVIDÉO\nREMY",
    details: [
      {
        title: "VIDÉO PRÉSENTATION ENTREPRISE\n(1-2 min)",
        description:
          "Tournage, direction, montage, habillage visuel, musique et sous-titres.",
      },
      {
        title: "CAPTATION VIDÉO\n(1h, sans montage)",
        description: "Pour événements, témoignages ou prises de contenu brut.",
      },
      {
        title: "MONTAGE À LA CARTE\n(10h)",
        description: "Vidéos sociales, reels, shorts ou montage d'événement.",
      },
      {
        title: "FORFAIT CONTENU RÉCURRENT\n(2 vidéos/mois)",
        description:
          "Création de contenu mensuel pour YouTube, Instagram, Facebook.",
      },
    ],
  },
  {
    id: 5,
    title: "ARCHITECTURE\nDE MARQUE",
    details: [
      {
        title: "DÉMARRAGE",
        subtitle: "Logo, palette, typographie",
        description:
          "Création d'une base visuelle professionnelle, prête à l'emploi.",
      },
      {
        title: "IDENTITÉ",
        subtitle: "Brandbook, templates visuels",
        description:
          "Cohérence graphique et guide d'utilisation de marque sur tous vos canaux.",
      },
      {
        title: "POSITIONNEMENT STRATÉGIQUE",
        subtitle: "Analyse, persona, mission/vision",
        description:
          "Une marque ancrée dans un positionnement clair, compétitif et durable.",
      },
    ],
  },
  {
    id: 4,
    title: "STRATÉGIE &\nPROPULSION",
    details: [
      {
        title: "CONSULTATION MARKETING/BRANDING\n(1h)",
        description:
          "Pour débloquer une problématique ou valider une stratégie avec un expert.",
      },
      {
        title: "COORDINATION MÉDIAS TRADITIONNELS\n(télé, radio, journaux) forfait sur mesure",
        description:
          "Planification, négociation, placement et suivi de performance inclus.",
      },
      {
        title: "CRÉATION ET HÉBERGEMENT SITE WEB",
        description:
          "Site WordPress optimisé, mobile friendly, rédaction SEO et intégration visuelle.",
      },
    ],
  },
];

const serviceIcons: Record<number, React.ReactNode> = {
  1: <PerformanceMediaIcon />,
  2: <StudioCreatifIcon />,
  3: <CroissanceOrganiqueIcon />,
  4: <StrategiePropulsionIcon />,
  5: <ArchitectureMarqueIcon />,
  6: <StudioVideoIcon />,
};

function ServiceCard({
  service,
  mobile = false,
}: {
  service: Service;
  mobile?: boolean;
}) {
  const [isActive, setIsActive] = useState(false);

  if (mobile) {
    return (
      <div
        className="relative bg-[#1a1a1a] rounded-3xl p-6 min-h-[200px] flex flex-col overflow-hidden"
        onClick={() => setIsActive((prev) => !prev)}
      >
        {/* Default Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          {serviceIcons[service.id] && (
            <div className="w-10 h-10 mb-3 text-white/80 [&>svg]:w-10 [&>svg]:h-10">
              {serviceIcons[service.id]}
            </div>
          )}
          <h3 className="text-white font-bold text-sm leading-tight whitespace-pre-line">
            {service.title}
          </h3>
        </div>

        {/* Eye icon */}
        <div className=" absolute bottom-4 right-4 text-white/60">
          <EyeIcon />
        </div>

        {/* Tap overlay — white background */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              className="absolute inset-0 bg-white rounded-3xl p-6 flex flex-col justify-center items-center text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col h-full w-full justify-start overflow-y-auto no-scrollbar divide-y divide-black/10 pb-6">
                {service.details.map((detail, i) => (
                  <div key={i} className="py-3 first:pt-2 last:pb-0">
                    <p className="text-[#1F201F] font-bold text-xs mb-0.5 whitespace-pre-line leading-tight">
                      {detail.title}
                    </p>
                    {detail.subtitle && (
                      <p className="text-[#1F201F] font-semibold text-[10px] mb-0.5 leading-tight">
                        {detail.subtitle}
                      </p>
                    )}
                    <p className="text-[#8C8C8C] font-medium text-[11px] leading-snug whitespace-pre-line mt-1">
                      {detail.description}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-black/40 text-xs text-center mt-3">
                Appuyer pour fermer
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="relative bg-[#1a1a1a] rounded-3xl p-8 min-h-[200px] md:min-h-[400px] flex flex-col overflow-hidden"
      onMouseLeave={() => setIsActive(false)}
    >
      {/* Default Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        {serviceIcons[service.id] ? (
          <div className="w-16 h-16 mb-8 text-white/80 drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]">
            {serviceIcons[service.id]}
          </div>
        ) : (
          <div className="w-16 h-16 mb-8 text-white/80" />
        )}
        <h3 className="text-white font-semibold text-[32px] leading-tight whitespace-pre-line">
          {service.title}
        </h3>
      </div>

      {/* Eye icon */}
      <button
        className=" absolute bottom-6 right-6 text-white/60 hover:text-white/90 transition-colors cursor-pointer"
        onClick={() => setIsActive((prev) => !prev)}
      >
        <EyeIcon />
      </button>

      {/* Eye click overlay — white background */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute inset-0 bg-white rounded-3xl p-6 md:p-8 flex flex-col items-center text-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col h-full w-full justify-start overflow-y-auto no-scrollbar divide-y divide-black/10 pb-8">
              {service.details.map((detail, i) => (
                <div key={i} className="py-4 first:pt-4 last:pb-0">
                  <p className="text-[#1F201F] font-bold text-[16px] md:text-[17px] mb-1 whitespace-pre-line leading-tight">
                    {detail.title}
                  </p>
                  {detail.subtitle && (
                    <p className="text-[#1F201F] font-semibold text-[13px] md:text-[14px] mb-1 whitespace-pre-line leading-tight">
                      {detail.subtitle}
                    </p>
                  )}
                  <p className="text-[#8C8C8C] font-medium text-[13px] md:text-[14px] leading-relaxed whitespace-pre-line mt-1">
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>
            <button
              className="absolute bottom-6 right-6 text-black/40 hover:text-black/70 transition-colors cursor-pointer bg-white rounded-full p-1 shadow-[0_0_10px_rgba(255,255,255,1)]"
              onClick={() => setIsActive(false)}
            >
              {!isActive && <EyeIcon />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SlidingCard({
  service,
  scrollYProgress,
}: {
  service: Service;
  scrollYProgress: MotionValue<number>;
}) {
  const y = useTransform(scrollYProgress, [0.1, 0.7], ["100vh", "0vh"]);

  return (
    <motion.div style={{ y }} className="pointer-events-auto">
      <ServiceCard service={service} />
    </motion.div>
  );
}

export default function Services() {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Mobile: static grid, tap-toggle cards
  if (isMobile) {
    const allServices = [...services, ...newServices];
    return (
      <div id="services" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[36px] font-semibold text-black mb-4">
            SERVICES
          </h2>
          <motion.div
            className="h-2 bg-black/30 mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ originX: 1 }}
            viewport={{ once: true }}
          />
          <div className="grid grid-cols-2 gap-4">
            {allServices.map((service) => (
              <ServiceCard key={service.id} service={service} mobile />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop: existing scroll-driven animation
  return (
    <div id="services" ref={containerRef} style={{ height: "250vh" }}>
      <section className="section-panel services-section sticky top-0 h-screen bg-white overflow-hidden flex flex-col">
        {/* Section Title */}
        <div className="max-w-7xl mx-auto px-6 w-full pt-20 pb-8 flex-shrink-0">
          <h2 className="text-[36px] font-semibold text-black mb-4">
            SERVICES
          </h2>
          {/* <motion.div
            className="h-px bg-black/30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ originX: 1 }}
            viewport={{ once: true }}
          /> */}
          <motion.div
            className="h-[2px] bg-black my-3"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ originX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>

        {/* Cards — vertically centered in remaining space */}
        <div className="flex-1 flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="relative  overflow-hidden">
              {/* Original 3 cards — always visible underneath */}
              <div className="grid md:grid-cols-3 gap-8 ">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>

              {/* New 3 cards — slide up progressively on scroll */}
              <motion.div className="absolute top-0 overflow-hidden   left-0 right-0 grid md:grid-cols-3 gap-8 pointer-events-none">
                {newServices.map((service) => (
                  <SlidingCard
                    key={service.id}
                    service={service}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
