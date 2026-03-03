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

const services = [
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

const newServices = [
  {
    id: 4,
    title: "SEO &\nRÉFÉRENCEMENT\nNATUREL",
    details: [
      {
        title: "Audit SEO Complet",
        description:
          "Analyse approfondie de votre site pour identifier toutes les opportunités d'optimisation.",
      },
      {
        title: "Stratégie de Mots-Clés",
        description:
          "Ciblage précis des requêtes à fort potentiel de trafic qualifié pour votre secteur.",
      },
      {
        title: "Netlinking Éditorial",
        description:
          "Construction d'un profil de liens naturels pour renforcer votre autorité de domaine.",
      },
    ],
  },
  {
    id: 5,
    title: "EMAIL\nMARKETING\n& CRM",
    details: [
      {
        title: "Séquences Automatisées",
        description:
          "Scénarios d'emailing intelligents pour convertir et fidéliser vos prospects automatiquement.",
      },
      {
        title: "Newsletter Créative",
        description:
          "Des newsletters qui se lisent vraiment, conçues pour maximiser l'engagement.",
      },
      {
        title: "Segmentation Avancée",
        description:
          "Personnalisez vos messages selon le comportement et le profil de chaque segment.",
      },
    ],
  },
  {
    id: 6,
    title: "ANALYTICS\n& DATA\nSTRATÉGIE",
    details: [
      {
        title: "Tableaux de Bord",
        description:
          "Visualisez vos KPIs clés en temps réel pour des décisions marketing éclairées.",
      },
      {
        title: "Tracking & Attribution",
        description:
          "Comprenez précisément quels canaux et actions génèrent votre croissance.",
      },
      {
        title: "Reporting Mensuel",
        description:
          "Des rapports clairs et actionnables pour piloter et affiner votre stratégie.",
      },
    ],
  },
];

type Service = (typeof services)[0];

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
              <div className="flex flex-col h-full justify-center divide-y divide-black/10">
                {service.details.map((detail, i) => (
                  <div key={i} className="py-3 first:pt-0 last:pb-0">
                    <p className="text-[#1F201F] font-semibold text-xs mb-1">
                      {detail.title}
                    </p>
                    <p className="text-[#8C8C8C] text-xs leading-relaxed">
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
    <div className="relative bg-[#1a1a1a] rounded-3xl p-8 min-h-[200px] md:min-h-[400px] flex flex-col overflow-hidden">
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
            className="absolute inset-0 bg-white rounded-3xl p-8 flex flex-col justify-center items-center text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col h-full justify-center divide-y divide-black/10">
              {service.details.map((detail, i) => (
                <div key={i} className="py-5 first:pt-0 last:pb-0">
                  <p className="text-[#1F201F] font-semibold text-[24px] mb-1">
                    {detail.title}
                  </p>
                  <p className="text-[#8C8C8C] font-semibold text-[16px] leading-relaxed">
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>
            <button
              className="absolute bottom-6 right-6 text-black/40 hover:text-black/70 transition-colors cursor-pointer"
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
