"use client";
import { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => {
      // Revert pin-spacer DOM wrappers BEFORE React re-renders. React's
      // useEffect cleanup runs after commit, but the conditional desktop/mobile
      // subtree swap mutates DOM during commit — at which point the pinned
      // parents no longer match what React remembers → removeChild crash.
      // Killing triggers here (synchronously, before setState batches) returns
      // the DOM to its original shape so the swap is clean.
      try {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      } catch {}
      setIsMobile(e.matches);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);
  return isMobile;
}
