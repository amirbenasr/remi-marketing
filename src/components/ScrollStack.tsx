"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollStackProps {
  children: ReactNode;
}

export default function ScrollStack({ children }: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
        // Add z-index so panels stack properly
        endTrigger: panels[index + 1],
        onEnter: () => {
          gsap.set(panel, { zIndex: panels.length - index });
        },
        onLeaveBack: () => {
          gsap.set(panel, { zIndex: panels.length - index });
        },
      });

      // Add subtle shadow animation when next section approaches
      gsap.to(panel, {
        scrollTrigger: {
          trigger: panels[index + 1],
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
        scale: 0.8,
        // filter: "brightness(0.7)",
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="scroll-stack-container">
      {children}
    </div>
  );
}
