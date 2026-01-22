"use client";

const logos = [
  { id: 1, name: "Via Capitale", image: "/images/logos/viacapitale.png" },
  { id: 2, name: "Samuel Brouillard", image: "/images/logos/brouillard.png" },
  { id: 3, name: "Patrice Beaubois", image: "/images/logos/beaubois.png" },
  { id: 4, name: "Alexandre Usereau", image: "/images/logos/usereau.png" },
  { id: 5, name: "Alexandre Gagné", image: "/images/logos/gagne.png" },
];

export default function TrustLogos() {
  return (
    <section className=" trust-section bg-black py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-white/60 text-sm tracking-wider mb-2">
            ILS NOUS FONT
          </p>
          <h2 className="text-3xl font-bold text-white">CONFIANCE</h2>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="w-24 h-16 md:w-32 md:h-20 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            >
              {/* Placeholder - replace with actual logos */}
              <div className="text-white/50 text-xs text-center">
                {logo.name}
              </div>
              {/* When images are available:
              <Image
                src={logo.image}
                alt={logo.name}
                width={120}
                height={60}
                className="object-contain filter brightness-0 invert"
              />
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
