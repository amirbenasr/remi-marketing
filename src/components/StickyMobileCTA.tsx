"use client";

import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function StickyMobileCTA() {
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isMobile) return;
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.6;
      const contact = document.getElementById("contact");
      const contactVisible =
        contact !== null &&
        contact.getBoundingClientRect().top < window.innerHeight * 0.85;
      setVisible(past && !contactVisible);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  if (!isMobile) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-60 px-4 pb-[max(env(safe-area-inset-bottom),1rem)] pt-3 bg-linear-to-t from-black/90 via-black/70 to-transparent transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        onClick={() => {
          const el = document.getElementById("contact");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
        className="w-full bg-white text-black rounded-full py-3 text-base font-bold shadow-lg active:scale-[0.98] transition-transform"
      >
        Parlons de votre projet
      </button>
    </div>
  );
}
