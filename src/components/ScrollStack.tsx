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

    // Get all section panels
    const panels = container.querySelectorAll<HTMLElement>(".section-panel");

    // Create scroll trigger for each panel
    panels.forEach((panel, index) => {
      // Skip the last panel - it doesn't need to be pinned
      gsap.set(panel, { zIndex: index });
      if (index === panels.length - 1) return;

      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: 1,
        // markers: true,
        // Add z-index so panels stack properly
        endTrigger: panels[index + 1],
        onEnter: () => {
          gsap.set(panel, { zIndex: panels.length - index });
        },
        onLeaveBack: () => {
          gsap.set(panel, { zIndex: panels.length - index });
        },
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  return (
    <div ref={containerRef} className="scroll-stack-container">
      {children}
    </div>
  );
}
