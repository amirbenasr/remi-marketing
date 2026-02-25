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

const PerformanceMediaIcon = () => (
  <svg
    className="w-16 h-16"
    viewBox="0 0 93 86"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.79"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M44.5219 71.917V85.2322M27.9032 85.2322H61.1405M5.05313 0.897179H88.1422C88.1422 0.897179 92.2979 0.897179 92.2979 5.337V67.4772C92.2979 67.4772 92.2979 71.917 88.1422 71.917H5.05313C5.05313 71.917 0.897461 71.917 0.897461 67.4772V5.337C0.897461 5.337 0.897461 0.897179 5.05313 0.897179Z" />
    <path d="M40.7277 50.5644L36.2348 52.8342C34.2586 53.7729 32.017 53.8486 29.9892 53.0449C27.9614 52.2413 26.3083 50.6222 25.383 48.5336C24.4578 46.445 24.334 44.0527 25.0379 41.8678C25.7419 39.6829 27.2178 37.8789 29.1503 36.8413L33.6431 34.5671L40.7277 50.5644ZM40.7277 50.5644C49.509 46.1192 59.3266 44.5546 68.9399 46.0681L71.9176 46.5368L56.347 11.3437L54.7952 14.0996C49.7953 23.0062 42.4358 30.1289 33.6472 34.5671L40.7277 50.5644ZM40.7277 50.5644C41.6549 52.659 42.971 54.5305 44.596 56.0652C46.221 57.5998 48.1209 58.7656 50.1805 59.4917" />
  </svg>
);

const StudioCreatifIcon = () => (
  <svg
    className="w-16 h-16"
    viewBox="0 0 66 67"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.79"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5.3705 64.4968L26.5409 41.8991M53.2002 31.8502L46.8631 52.1434C46.7619 52.4687 46.5888 52.7631 46.3583 53.0017C46.1278 53.2403 45.8468 53.4161 45.5391 53.514L6.69116 65.839C6.34117 65.95 5.96938 65.9563 5.61624 65.8574C5.2631 65.7585 4.94215 65.558 4.68831 65.2779C4.43447 64.9978 4.25747 64.6488 4.17657 64.2688C4.09567 63.8887 4.11397 63.4923 4.22948 63.1226L16.8439 22.7352C16.9343 22.4452 17.0821 22.1794 17.2773 21.9557C17.4724 21.7321 17.7104 21.5559 17.975 21.4391L35.8953 13.5633C36.2596 13.4027 36.6603 13.3608 37.0469 13.443C37.4335 13.5251 37.7886 13.7276 38.0676 14.0249L52.7179 29.67C52.98 29.9498 53.164 30.3019 53.2492 30.687C53.3344 31.0721 53.3174 31.4749 53.2002 31.8502Z" />
    <path d="M53.5924 30.6003L63 20.555C64.2473 19.2232 64.948 17.4172 64.948 15.5341C64.948 13.6509 64.2473 11.8449 63 10.5132L55.9476 2.97824C55.3298 2.31848 54.5962 1.79511 53.7889 1.43804C52.9815 1.08097 52.1161 0.897179 51.2422 0.897179C50.3682 0.897179 49.5029 1.08097 48.6955 1.43804C47.8881 1.79511 47.1546 2.31848 46.5367 2.97824L37.1291 13.0236M33.5963 34.3642C33.1328 33.8697 32.5826 33.4775 31.9771 33.21C31.3715 32.9424 30.7226 32.8048 30.0673 32.805C29.4119 32.8051 28.763 32.9431 28.1576 33.2109C27.5522 33.4788 27.0022 33.8713 26.5389 34.366C26.0756 34.8608 25.7082 35.4481 25.4575 36.0944C25.2069 36.7407 25.078 37.4334 25.0781 38.133C25.0783 38.8325 25.2075 39.5251 25.4584 40.1713C25.7094 40.8175 26.0771 41.4046 26.5406 41.8992C27.4767 42.8979 28.7461 43.4588 30.0696 43.4584C31.3931 43.4581 32.6623 42.8966 33.5979 41.8974C34.5336 40.8982 35.0591 39.5432 35.0587 38.1304C35.0584 36.7177 34.5324 35.363 33.5963 34.3642Z" />
  </svg>
);

const CroissanceOrganiqueIcon = () => (
  <svg
    className="w-16 h-16"
    viewBox="0 0 88 93"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.79"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.3666 79.2091C8.36107 72.7934 4.27122 64.619 2.61425 55.7198C0.957277 46.8206 1.80762 37.5963 5.05774 29.2135C8.30785 20.8306 13.8118 13.6658 20.8734 8.62495C27.9351 3.58414 36.2373 0.893814 44.7301 0.894203M75.0936 14.3298C81.0991 20.7455 85.189 28.9199 86.846 37.8191C88.5029 46.7183 87.6526 55.9426 84.4025 64.3254C81.1524 72.7083 75.6484 79.8731 68.5868 84.914C61.5251 89.9548 53.2229 92.6451 44.7301 92.6447" />
    <path d="M68.5194 18.8726C72.3648 18.8726 75.4821 15.5421 75.4821 11.4338C75.4821 7.3254 72.3648 3.99491 68.5194 3.99491C64.674 3.99491 61.5566 7.3254 61.5566 11.4338C61.5566 15.5421 64.674 18.8726 68.5194 18.8726Z" />
    <path d="M20.9403 89.5442C24.7857 89.5442 27.903 86.2138 27.903 82.1054C27.903 77.997 24.7857 74.6665 20.9403 74.6665C17.0949 74.6665 13.9775 77.997 13.9775 82.1054C13.9775 86.2138 17.0949 89.5442 20.9403 89.5442Z" />
    <path d="M35.0762 38.1695L42.0411 53.0495L65.2503 50.5699L51.3248 20.8098L35.0762 38.1695Z" />
    <path d="M35.6398 38.0624L26.3562 43.0216C23.5662 44.5108 23.8018 49.9617 25.1957 52.9425C26.5896 55.9232 30.5312 59.3909 33.3211 57.9017L42.6048 52.9425M40.5525 54.2081L46.3548 66.6062L41.713 69.0858L35.9107 56.6878" />
  </svg>
);

const serviceIcons: Record<number, React.ReactNode> = {
  1: <PerformanceMediaIcon />,
  2: <StudioCreatifIcon />,
  3: <CroissanceOrganiqueIcon />,
};

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
        <div className="absolute bottom-4 right-4 text-white/60">
          <EyeIcon />
        </div>

        {/* Tap overlay */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              className="absolute inset-0 bg-[#1a1a1a] rounded-3xl p-6 flex flex-col justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col h-full justify-center divide-y divide-white/20">
                {service.details.map((detail, i) => (
                  <div key={i} className="py-3 first:pt-0 last:pb-0">
                    <p className="text-white font-semibold text-xs mb-1">
                      {detail.title}
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {detail.description}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-xs text-center mt-3">
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
          <div className="w-16 h-16 mb-8 text-white/80">
            {serviceIcons[service.id]}
          </div>
        ) : (
          <div className="w-16 h-16 mb-8 text-white/80" />
        )}
        <h3 className="text-white font-bold text-lg leading-tight whitespace-pre-line">
          {service.title}
        </h3>
      </div>

      {/* Eye icon */}
      <button
        className="absolute bottom-6 right-6 text-white/60 hover:text-white/90 transition-colors cursor-pointer"
        onClick={() => setIsActive((prev) => !prev)}
      >
        <EyeIcon />
      </button>

      {/* Hover overlay */}
      <AnimatePresence>
        {isActive && (
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
            <button
              className="absolute bottom-6 right-6 text-white/60 hover:text-white/90 transition-colors cursor-pointer"
              onClick={() => setIsActive(false)}
            >
              <EyeIcon />
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
          <h2 className="text-4xl font-bold text-black mb-4">SERVICES</h2>
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
          <h2 className="text-4xl font-bold text-black mb-4">SERVICES</h2>
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
