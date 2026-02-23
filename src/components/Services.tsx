"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";

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

const EyeIcon = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

function ServiceCard({ service }: { service: Service }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-[#1a1a1a] rounded-3xl p-8 min-h-[400px] flex flex-col overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 mb-8 text-white/80" />
        <h3 className="text-white font-bold text-lg leading-tight whitespace-pre-line">
          {service.title}
        </h3>
      </div>

      {/* Eye icon */}
      <div className="absolute bottom-6 right-6 text-white/60">
        <EyeIcon />
      </div>

      {/* Hover overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-[#1a1a1a] rounded-3xl p-8 flex flex-col justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col h-full justify-center divide-y divide-white/20">
              {service.details.map((detail, i) => (
                <div key={i} className="py-5 first:pt-0 last:pb-0">
                  <p className="text-white font-semibold text-sm mb-1">
                    {detail.title}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="absolute bottom-6 right-6 text-white/60">
              <EyeIcon />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SlidingCard({
  service,
  index,
  scrollYProgress,
}: {
  service: Service;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const y = useTransform(
    scrollYProgress,
    [index / 3, (index + 1) / 3],
    ["100vh", "0vh"]
  );

  return (
    <motion.div style={{ y }} className="pointer-events-auto">
      <ServiceCard service={service} />
    </motion.div>
  );
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} style={{ height: "250vh" }}>
      <section
        id="services"
        className="section-panel services-section sticky top-0 h-screen bg-white overflow-hidden flex flex-col"
      >
        {/* Section Title */}
        <div className="max-w-7xl mx-auto px-6 w-full pt-20 pb-8 flex-shrink-0">
          <h2 className="text-4xl font-bold text-black mb-4">SERVICES</h2>
          <div className="w-full h-px bg-black/30" />
        </div>

        {/* Cards — vertically centered in remaining space */}
        <div className="flex-1 flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="relative">
              {/* Original 3 cards — always visible underneath */}
              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>

              {/* New 3 cards — slide up progressively on scroll */}
              <div className="absolute inset-0 grid md:grid-cols-3 gap-8 pointer-events-none">
                {newServices.map((service, i) => (
                  <SlidingCard
                    key={service.id}
                    service={service}
                    index={i}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
