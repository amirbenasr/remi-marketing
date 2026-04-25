"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const logos = [
  { id: 1, name: "Samuel Brouillard", image: "/images/logos/brouillard.png" },
  { id: 2, name: "Patrice Beaubois", image: "/images/logos/beaubois.png" },
  { id: 3, name: "Alexandre Usereau", image: "/images/logos/usereau.png" },
  { id: 4, name: "Alexandre Gagné", image: "/images/logos/gagne.png" },
  { id: 5, name: "Via Capitale", image: "/images/logos/viacapitale.png" },
  { id: 6, name: "Excellence", image: "/images/logos/excellence.png" },
];

export default function TrustLogos() {
  return (
    <section className=" trust-section bg-black h-[20%]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Animated HR */}
        <motion.div
          className="h-[2px] bg-white mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ originX: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        />

        {/* Logos Marquee */}
        <div className="overflow-hidden   ">
          <div className="flex  animate-marquee items-center my-auto">
            {[logos, logos, logos, logos].flat().map((logo, i) => (
              <Image
                key={i}
                src={logo.image}
                alt={logo.name}
                width={200}
                height={100}
                className="shrink-0 mb-4 object-contain max-h-[80px] w-auto mx-6 md:mx-10"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
