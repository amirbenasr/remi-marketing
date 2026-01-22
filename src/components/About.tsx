"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-panel about-section min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">À PROPOS</h2>
          <div className="w-full h-px bg-white/30"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="bg-white aspect-[3/4] max-w-md mx-auto flex items-end justify-center overflow-hidden">
              {/* Placeholder for Ced's photo */}
              <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Photo placeholder</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            {/* Chevron decoration */}
            <div className="mb-8 flex justify-end">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <h3 className="text-3xl font-bold mb-6">CED REMY</h3>

            <p className="text-gray-300 leading-relaxed">
              Fondateur de l&apos;agence REMY, est un stratège passionné par le marketing et la
              création de marques fortes. Fort d&apos;un parcours entre politique, médias et
              entrepreneuriat, il accompagne entreprises et créateurs dans le développement d&apos;une
              communication authentique, percutante et humaine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
