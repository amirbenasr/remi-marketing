"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate, MotionValue } from "framer-motion";
import Image from "next/image";
import Footer from "./Footer";
import { PhoneIcon, EmailIcon } from "./icons";
import { useIsMobile } from "@/hooks/useIsMobile";

// Line-height of the heading rows — bubble must not bleed past this.
const LINE_HEIGHT = 142.8;
// Sphere diameter ≈ 55% of the PNG render size.
// At 270px: sphere ≈ 148px wide, center-X ≈ 75px from left edge → matches HALF exactly.
const BUBBLE_IMG_SIZE = 270;
const BUBBLE_SIZE = 150;
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
  const targetLeft = (hovered ? toCenter : fromCenter) - HALF -50 ;

  useEffect(() => {
    // Sync initial value immediately (before spring settles)
    motionX.set((hovered ? toCenter : fromCenter));
  }, [hovered, toCenter, fromCenter, motionX]);

  return (
    <motion.div
      className="absolute hidden md:block pointer-events-none z-[5]"
      style={{
        top: 0,
        height: LINE_HEIGHT,
      }}
      animate={{ left: targetLeft }}
      transition={{ type: "spring", stiffness: 40, damping: 20, duration: 5 }}
      onUpdate={(latest) => {
        motionX.set((latest.left as number) + HALF);
      }}
    >
      <Image
        src="/images/bubble.png"
        width={BUBBLE_IMG_SIZE}
        height={BUBBLE_IMG_SIZE}
        alt=""
        style={{ display: "block" }}
        priority={false}
      />
    </motion.div>
  );
}

// Bubble acts as a "mirror": a larger, rotated copy of the text sits behind
// it and is revealed only through a circular radial mask centered on the bubble.
const MASK_INNER = 30;  // px — fully opaque radius
const MASK_OUTER = 90;  // px — fade-to-transparent radius
const BUBBLE_CENTER_Y = LINE_HEIGHT / 2;

function ShadowText({
  text,
  hovered,
  fromCenter,
  toCenter,
}: {
  text: string;
  hovered: boolean;
  fromCenter: number;
  toCenter: number;
}) {
  const motionX = useMotionValue((hovered ? toCenter : fromCenter));

  // Radial mask follows the bubble center every frame — no React re-render.
  const maskImage = useMotionTemplate`radial-gradient(circle at ${motionX}px ${BUBBLE_CENTER_Y}px, black 0px, black ${MASK_INNER}px, transparent ${MASK_OUTER}px)`;

  const sharedClass =
    "text-4xl md:text-[86px] font-bold text-black leading-[142.8px]";

  return (
    <div className="relative">
      {/* Layer 1 — "reflected" text: larger, rotated, soft-shadowed.
          Revealed only inside the bubble via a radial mask so the edges fade
          naturally with the sphere instead of being clipped by a straight line. */}
      <motion.h2
        className={`${sharedClass} absolute inset-0 pointer-events-none select-none z-[1]`}
        aria-hidden
        style={{
          transform: "translate(-3px, -6px) scale(1.00)",
          transformOrigin: "center center",
          filter: "url(#bubble-warp) blur(0.8px)",
          opacity: 0.35,
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      >
        {text}
      </motion.h2>

      {/* Layer 2 — bubble PNG sits between the reflected text and the crisp text */}
      <Bubble
        hovered={hovered}
        fromCenter={fromCenter}
        toCenter={toCenter}
        motionX={motionX}
      />

      {/* Layer 3 — crisp foreground text */}
      <h2 className={`${sharedClass} relative z-[10]`}>{text}</h2>
    </div>
  );
}

export default function Contact() {
  const isMobile = useIsMobile();
  if (isMobile) return <MobileContact />;
  return <DesktopContact />;
}

function MobileContact() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    courriel: "",
    telephone: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const fields: { name: keyof typeof formData; label: string; type: string; rows?: number }[] = [
    { name: "prenom", label: "Prénom", type: "text" },
    { name: "nom", label: "Nom", type: "text" },
    { name: "courriel", label: "Courriel", type: "email" },
    { name: "telephone", label: "Téléphone", type: "tel" },
    { name: "message", label: "Message", type: "textarea", rows: 4 },
  ];

  return (
    <section id="contact" className="contact-section bg-black text-white min-h-screen relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 w-[360px] h-[360px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
      />

      <div className="relative px-6 pt-20 pb-32 max-w-md mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-[44px] leading-[1.02] font-bold tracking-tight mb-10"
        >
          PARLONS<br />
          DE VOTRE<br />
          PROJET
        </motion.h2>

        <div className="flex flex-col gap-3 mb-10">
          <a
            href="tel:+15146559912"
            className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-4 py-4 active:scale-[0.98] transition-transform"
          >
            <div className="w-11 h-11 shrink-0 rounded-full bg-white flex items-center justify-center">
              <PhoneIcon className="w-5 h-5 text-black" />
            </div>
            <span className="text-white text-[16px] font-semibold">(514) 655-9912</span>
          </a>
          <a
            href="mailto:ced@remy.marketing"
            className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-4 py-4 active:scale-[0.98] transition-transform"
          >
            <div className="w-11 h-11 shrink-0 rounded-full bg-white flex items-center justify-center">
              <EmailIcon className="w-5 h-5 text-black" />
            </div>
            <span className="text-white text-[16px] font-semibold">ced@remy.marketing</span>
          </a>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          {fields.map((f) => {
            const isActive = focused === f.name || !!formData[f.name];
            return (
              <div key={f.name} className="relative">
                <label
                  htmlFor={f.name}
                  className={`absolute pointer-events-none transition-all duration-200 ${
                    isActive
                      ? "-top-2 left-3 text-[11px] tracking-wider uppercase text-white/70 bg-black px-1.5"
                      : f.type === "textarea"
                        ? "top-4 left-4 text-[16px] text-white/50"
                        : "top-1/2 -translate-y-1/2 left-4 text-[16px] text-white/50"
                  }`}
                >
                  {f.label}
                </label>
                {f.type === "textarea" ? (
                  <textarea
                    id={f.name}
                    name={f.name}
                    rows={f.rows}
                    value={formData[f.name]}
                    onChange={onChange}
                    onFocus={() => setFocused(f.name)}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent text-white text-[16px] border border-white/25 rounded-xl focus:border-white outline-hidden px-4 py-3.5 resize-none transition-colors"
                  />
                ) : (
                  <input
                    id={f.name}
                    type={f.type}
                    name={f.name}
                    value={formData[f.name]}
                    onChange={onChange}
                    onFocus={() => setFocused(f.name)}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent text-white text-[16px] border border-white/25 rounded-xl focus:border-white outline-hidden px-4 py-3.5 transition-colors"
                  />
                )}
              </div>
            );
          })}

          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            className="self-end mt-4 bg-white text-black px-8 py-3 text-[15px] font-bold tracking-wide border-2 border-white"
          >
            ENVOYER
          </motion.button>
        </form>
      </div>

      <Footer />
    </section>
  );
}

function DesktopContact() {
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
      className="section-panel contact-section bg-transparent min-h-screen relative"
    >
      {/* Refraction filter — turbulence-driven displacement map.
          Warps the masked shadow text inside the bubble so it reads as glass-bent
          letters rather than a flat duplicate. baseFrequency controls wave size,
          scale controls warp intensity. */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
        <defs>
          <filter id="bubble-warp" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012"
              numOctaves="2"
              seed="4"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="22"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <motion.div
        className="min-h-screen pt-24 md:pt-38 bg-white origin-bottom"
        style={{ rotate }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-start">
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
                />
                <ShadowText
                  text="DE VOTRE"
                  hovered={hovered}
                  fromCenter={colW * bubbles[1].from}
                  toCenter={colW * bubbles[1].to}
                />
                <ShadowText
                  text="PROJET"
                  hovered={hovered}
                  fromCenter={colW * bubbles[2].from}
                  toCenter={colW * bubbles[2].to}
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