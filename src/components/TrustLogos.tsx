"use client";
import Image from "next/image";
const logos = [
  { id: 1, name: "Via Capitale", image: "/images/logos/viacapitale.png" },
  { id: 2, name: "Samuel Brouillard", image: "/images/logos/brouillard.png" },
  { id: 3, name: "Patrice Beaubois", image: "/images/logos/beaubois.png" },
  { id: 4, name: "Alexandre Usereau", image: "/images/logos/usereau.png" },
  { id: 5, name: "Alexandre Gagné", image: "/images/logos/gagne.png" },
];

export default function TrustLogos() {
  return (
    <section className=" trust-section bg-black  border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12 mt-6">
          <p className="text-white/60 text-sm tracking-wider mb-2">
            ILS NOUS FONT
          </p>
          <h2 className="text-3xl font-bold text-white">CONFIANCE</h2>
        </div>

        {/* Logos Marquee */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee will-change-transform">
            {[logos, logos].map((group, gi) => (
              <div key={gi} className="flex shrink-0">
                {group.map((logo) => (
                  <div
                    key={logo.id}
                    className="object-cover md:w-32 md:h-20 flex items-center shrink-0 mr-16"
                  >
                    <Image
                      src={logo.image}
                      alt={logo.name}
                      width={80}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
