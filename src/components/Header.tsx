"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#about", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

function scrollTo(href: string) {
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", href);
  }
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" absolute top-0 left-0 right-0 bg-transparent z-50  backdrop-blur-sm px-8 ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="REMY Marketing"
            width={120}
            height={34}
            priority
          />
        </Link>

        {/* Navigation — desktop only */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-white  overflow-hidden text-sm hover:text-gray-300 transition-colors cursor-pointer"
            >
              <motion.div
                className="flex flex-col h-5"
                whileHover={{ y: "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <span className="leading-5">{link.label}</span>
                <span className="leading-5" aria-hidden="true">
                  {link.label}
                </span>
              </motion.div>
            </motion.button>
          ))}
        </nav>

        {/* CTA Button — desktop only */}
        <motion.button
          onClick={() => scrollTo("#contact")}
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="hidden md:block relative border border-white px-6 py-1 text-sm overflow-hidden cursor-pointer rounded-lg"
        >
          <motion.span
            className="absolute inset-0 bg-white"
            variants={{
              rest: { clipPath: "circle(0% at 50% 50%)" },
              hover: { clipPath: "circle(150% at 50% 50%)" },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="relative z-10"
            variants={{
              rest: { color: "#ffffff" },
              hover: { color: "#000000" },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            Contactez-nous
          </motion.span>
        </motion.button>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-white/10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => {
                scrollTo(link.href);
                setMenuOpen(false);
              }}
              className="w-full text-left text-white px-6 py-4 text-sm border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              scrollTo("#contact");
              setMenuOpen(false);
            }}
            className="w-full text-left text-white px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors cursor-pointer"
          >
            Contactez-nous
          </button>
        </div>
      )}
    </header>
  );
}
