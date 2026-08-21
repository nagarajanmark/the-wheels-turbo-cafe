"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Only initialize smooth scroll engine on desktop/fine-pointer devices
    // Mobile touch devices perform best with native 60/120Hz kinetic touch scrolling
    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0 || window.matchMedia("(max-width: 1023px)").matches);

    gsap.registerPlugin(ScrollTrigger);

    if (isTouchDevice) {
      // Let mobile handle scroll natively without touch hijacking
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      infinite: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateTicker);
    };
  }, []);

  return <>{children}</>;
};

