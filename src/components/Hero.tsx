"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="section-panel hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%), url('/images/hero-bg.jpg')",
        }}
      />

      {/* Plant decoration - left side */}
      <div className="absolute left-0 bottom-0 w-64 h-96 opacity-60">
        {/* Placeholder for plant image */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Laptop Mockup */}
        <div className="relative w-full max-w-3xl mb-8">
          <div className="relative mx-auto" style={{ maxWidth: "600px" }}>
            {/* Laptop frame */}
            <div className="bg-gray-800 rounded-t-lg p-2">
              <div className="bg-gray-900 rounded aspect-[16/10] flex items-center justify-center">
                {/* Screen content placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded p-4">
                  <div className="grid grid-cols-4 gap-2 h-full opacity-50">
                    <div className="bg-gray-700 rounded"></div>
                    <div className="bg-gray-700 rounded col-span-2"></div>
                    <div className="bg-gray-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Laptop base */}
            <div className="bg-gray-700 h-4 rounded-b-lg mx-auto w-3/4"></div>
            <div className="bg-gray-600 h-1 rounded-b mx-auto w-1/2"></div>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Parlons de votre projet
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
