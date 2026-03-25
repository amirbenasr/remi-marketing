"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent, MotionValue } from "framer-motion";
import Image from "next/image";
import Footer from "./Footer";
import { PhoneIcon, EmailIcon } from "./icons";

const BUBBLE_SIZE = 250;
const HALF = BUBBLE_SIZE / 2;

const bubbles = [
  { from: 0.693, to: 0.135 }, // PARLONS  — S → P
  { from: 0.135, to: 0.726 }, // DE VOTRE — D → E
  { from: 0.591, to: 0.135 }, // PROJET   — ET → P
];

// Bubble exposes its animated center X via a MotionValue callback
function Bubble({
  hovered,
  fromCenter,
  toCenter,
  motionX,
}: {
  hovered: boolean;
  fromCenter: number;
  toCenter: number;
  motionX: MotionValue<number>;
}) {
  const targetLeft = (hovered ? toCenter : fromCenter) - HALF;

  useEffect(() => {
    // Sync initial value immediately (before spring settles)
    motionX.set((hovered ? toCenter : fromCenter));
  }, [hovered, toCenter, fromCenter, motionX]);

  return (
    <motion.div
      className="absolute top-1/2 -translate-y-1/2 hidden md:block pointer-events-none"
      animate={{ left: targetLeft }}
      transition={{ type: "spring", stiffness: 40, damping: 20, duration: 5 }}
      onUpdate={(latest) => {
        // left = center - HALF, so center = left + HALF
        motionX.set((latest.left as number) + HALF);
      }}
    >
      <div className="bubble" />
    </motion.div>
  );
}

// Renders the text twice: base layer (no shadow) + shadow layer clipped to bubble
function ShadowText({
  text,
  hovered,
  fromCenter,
  toCenter,
  colW,
  shadow,
}: {
  text: string;
  hovered: boolean;
  fromCenter: number;
  toCenter: number;
  colW: number;
  shadow?: string;
}) {
  const motionX = useMotionValue((hovered ? toCenter : fromCenter));
  // clipPath inset values in px — updated on every animation frame via MotionValue
  const [clipLeft, setClipLeft] = useState(9999);
  const [clipRight, setClipRight] = useState(9999);

  useMotionValueEvent(motionX, "change", (centerX) => {
    const left = centerX - HALF;
    const right = centerX + HALF;
    setClipLeft(Math.max(0, left));
    setClipRight(Math.max(0, colW - right));
  });

  const textShadow = shadow ?? "black 3px 0px 1px";

  const sharedClass =
    " relative text-4xl md:text-[86px] font-bold text-black leading-[142.8px]";

  return (
    <div className="relative">
      {/* Layer 1 — base text, no shadow */}
      {/* Bubble lives here so it's positioned relative to this wrapper */}
      <Bubble
        hovered={hovered}
        fromCenter={fromCenter}
        toCenter={toCenter}
        motionX={motionX}
      />
      <h2 className={sharedClass} style={{ zIndex: 50 }}>{text}</h2>

      {/* Layer 2 — shadowed text, clipped to bubble bounds */}
      <h2
        className={`${sharedClass} !absolute inset-0 pointer-events-none select-none z-60  `}
        style={{
          textShadow,
          // clipPath inset: top right bottom left
          transform: "skewX(20deg)",
          opacity: "0.2",
          scale: 1.02,
          clipPath: `inset(0px ${clipRight}px 0px ${clipLeft}px)`,
        }}
        aria-hidden
      >
        {text}
      </h2>


    </div>
  );
}

export default function Contact() {
  const [hovered, setHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const colRef = useRef<HTMLDivElement>(null);
  const [colW, setColW] = useState(592); // fallback to design reference width

  useEffect(() => {
    if (!colRef.current) return;
    const ro = new ResizeObserver(([entry]) =>
      setColW(entry.contentRect.width),
    );
    ro.observe(colRef.current);
    return () => ro.disconnect();
  }, []);

  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    courriel: "",
    telephone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.2"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 0]);

  return (
    <div
      ref={sectionRef}
      id="contact"
      className="section-panel contact-section bg-transparent min-h-screen"
    >
      <motion.div
        className="min-h-screen pt-24 md:pt-38 bg-white origin-bottom"
        style={{ rotate }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Title & Contact Info */}
            <div ref={colRef}>
              <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <ShadowText
                  text="PARLONS"
                  hovered={hovered}
                  fromCenter={colW * bubbles[0].from}
                  toCenter={colW * bubbles[0].to}
                  colW={colW}
                />
                <ShadowText
                  text="DE VOTRE"
                  hovered={hovered}
                  fromCenter={colW * bubbles[1].from}
                  toCenter={colW * bubbles[1].to}
                  colW={colW}
                />
                <ShadowText
                  text="PROJET"
                  hovered={hovered}
                  fromCenter={colW * bubbles[2].from}
                  toCenter={colW * bubbles[2].to}
                  colW={colW}
                />
              </div>

              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <PhoneIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-black">(514) 655-9912</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <EmailIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-black">ced@remy.marketing</span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="prenom"
                    placeholder="Prénom"
                    value={formData.prenom}
                    onChange={handleChange}
                    className="w-full border-2 border-black bg-transparent p-2 text-black placeholder-gray-400 focus:outline-none focus:border-gray-600"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="nom"
                    placeholder="Nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full border-2 border-black bg-transparent p-2 text-black placeholder-gray-400 focus:outline-none focus:border-gray-600"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="courriel"
                    placeholder="Courriel"
                    value={formData.courriel}
                    onChange={handleChange}
                    className="w-full border-2 border-black bg-transparent p-2 text-black placeholder-gray-400 focus:outline-none focus:border-gray-600"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="Téléphone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full border-2 border-black bg-transparent p-2 text-black placeholder-gray-400 focus:outline-none focus:border-gray-600"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-2 border-black bg-transparent p-3 text-black placeholder-gray-400 focus:outline-none focus:border-gray-600 resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="bg-black text-white px-8 py-3 font-medium hover:bg-white hover:text-black border-2 border-black transition-colors float-right"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ENVOYER
                </motion.button>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </motion.div>
    </div>
  );
}