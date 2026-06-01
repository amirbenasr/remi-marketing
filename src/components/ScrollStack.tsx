"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "@/hooks/useIsMobile";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollStackProps {
  children: ReactNode;
}

export default function ScrollStack({ children }: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const container = containerRef.current;
    if (!container) return;

    // gsap.context() scopes every trigger created inside it so ctx.revert()
    // restores the original DOM. Without it, ScrollTrigger leaves pin-spacer
    // wrappers behind and React's unmount hits a stale parent → NotFoundError
    // on removeChild when resizing across the mobile breakpoint.
    const ctx = gsap.context(() => {
      const panels = container.querySelectorAll<HTMLElement>(".section-panel");

      panels.forEach((panel, index) => {
        gsap.set(panel, { zIndex: index });
        if (index === panels.length - 1) return;

        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: 1,
          endTrigger: panels[index + 1],
          onEnter: () => {
            gsap.set(panel, { zIndex: panels.length - index });
          },
          onLeaveBack: () => {
            gsap.set(panel, { zIndex: panels.length - index });
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div ref={containerRef} className="scroll-stack-container">
      {children}
    </div>
  );
}
