"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Footer from "./Footer";
import { PhoneIcon, EmailIcon } from "./icons";

const BUBBLE_SIZE = 250;
const HALF = BUBBLE_SIZE / 2;

/*
 * Letter-center positions expressed as a fraction of the column width.
 * Derived from tuned values at ~592px column: 410/592, 80/592, etc.
 */
const bubbles = [
  { from: 0.693, to: 0.135 }, // PARLONS  — S → P
  { from: 0.135, to: 0.726 }, // DE VOTRE — D → E
  { from: 0.591, to: 0.135 }, // PROJET   — ET → P
];

function Bubble({
  hovered,
  fromCenter,
  toCenter,
}: {
  hovered: boolean;
  fromCenter: number;
  toCenter: number;
}) {
  return (
    <motion.div
      className=" bubble absolute top-0  hidden md:block pointer-events-none"
      animate={{ left: (hovered ? toCenter : fromCenter) - HALF }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="bubble" />
    </motion.div>
  );
}

export default function Contact() {
  const [hovered, setHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const colRef = useRef<HTMLDivElement>(null);
  const [colW, setColW] = useState(0);

  // Measure the actual column width so bubble positions scale with the layout
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
      className="section-panel contact-section  bg-black"
    >
      {/* Black spacer — visible while the page is still tilted */}
      {/* <div className="h-[30vh]" /> */}
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
                {/* PARLONS — bubble moves from S → P */}
                <h2 className="relative text-4xl text-shadow-lg md:text-[86px] font-bold text-black leading-[142.8px]">
                  PARLONS
                  <Bubble
                    hovered={hovered}
                    fromCenter={colW * bubbles[0].from}
                    toCenter={colW * bubbles[0].to}
                  />
                </h2>

                {/* DE VOTRE — bubble moves from D → E */}
                <h2 className="relative text-4xl text-shadow-lg md:text-[86px] font-bold text-gray-400 leading-[142.8px]">
                  DE VOTRE
                  <Bubble
                    hovered={hovered}
                    fromCenter={colW * bubbles[1].from}
                    toCenter={colW * bubbles[1].to}
                  />
                </h2>

                {/* PROJET — bubble moves from ET → P */}
                <h2 className="relative text-4xl text-shadow-lg md:text-[86px] font-bold text-black leading-[142.8px]">
                  PROJET
                  <Bubble
                    hovered={hovered}
                    fromCenter={colW * bubbles[2].from}
                    toCenter={colW * bubbles[2].to}
                  />
                </h2>
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
