"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";

export default function Contact() {
  const [bubblesHovered, setBubblesHovered] = useState(false);

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
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.2"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 0]);

  return (
    <div
      ref={sectionRef}
      id="contact"
      className="section-panel contact-section overflow-hidden bg-black"
    >
      {/* Black spacer — visible while the page is still tilted */}
      <div className="h-[30vh]" />
      <motion.div
        className="min-h-screen pt-24 md:pt-38 bg-white origin-bottom"
        style={{ rotate }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Title & Contact Info */}
            <div className="relative">
              {/* Decorative circles */}
              <motion.div
                className="absolute right-0 -top-10 hidden md:block"
                animate={{ x: bubblesHovered ? -300 : 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
              >
                <Image
                  src="/images/testimonials/eclipse.png"
                  width={250}
                  height={250}
                  alt="Picture of the author"
                />
              </motion.div>
              <motion.div
                className="absolute left-0 top-10 hidden md:block"
                animate={{ x: bubblesHovered ? "25ch" : 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
              >
                <Image
                  src="/images/testimonials/eclipse.png"
                  width={250}
                  height={250}
                  alt="Picture of the author"
                />
              </motion.div>
              <motion.div
                className="absolute right-20 top-35 hidden md:block"
                animate={{ x: bubblesHovered ? "-25ch" : 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              >
                <Image
                  src="/images/testimonials/eclipse.png"
                  width={250}
                  height={250}
                  alt="Picture of the author"
                />
              </motion.div>
              {/* <div className="absolute top-20 -left-10 w-32 h-32 bg-gray-300 rounded-full blur-2xl opacity-40"></div>
            <div className="absolute bottom-0 left-20 w-24 h-24 bg-gray-200 rounded-full blur-xl opacity-50"></div> */}

              <div
                className="relative z-10"
                onMouseEnter={() => setBubblesHovered(true)}
                onMouseLeave={() => setBubblesHovered(false)}
              >
                <h2 className="text-4xl text-shadow-lg md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                  PARLONS
                  <br />
                  <span className="text-gray-400">DE VOTRE</span>
                  <br />
                  PROJET
                </h2>

                <div className="mt-12 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <span className="text-black">(514) 655-9912</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </div>
                    <span className="text-black">ced@remy.marketing</span>
                  </div>
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
                  className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors float-right"
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
