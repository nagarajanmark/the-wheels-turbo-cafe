"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoverLabel, setHoverLabel] = useState("GO");

  useEffect(() => {
    // Only enable on non-touch devices
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest("button, a, input, select, textarea, [data-cursor-hover]");
      if (interactiveEl) {
        setIsHovered(true);
        setIsPointer(true);
        const customLabel = interactiveEl.getAttribute("data-cursor-text") || "GO";
        setHoverLabel(customLabel);
      } else {
        setIsHovered(false);
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Speedometer Ring / Crosshairs */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        animate={{
          x: position.x,
          y: position.y,
          scale: isHovered ? 1.6 : 1,
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 400,
          mass: 0.2,
        }}
      >
        <div
          className={`relative rounded-full flex items-center justify-center transition-all duration-300 ${
            isHovered
              ? "w-12 h-12 bg-racing-red/20 border-2 border-racing-red shadow-[0_0_20px_rgba(225,6,0,0.6)] backdrop-blur-xs"
              : "w-8 h-8 border border-racing-red/60"
          }`}
        >
          {/* Crosshair Notches */}
          {!isHovered && (
            <>
              <div className="absolute -top-1 w-0.5 h-1.5 bg-turbo-orange" />
              <div className="absolute -bottom-1 w-0.5 h-1.5 bg-turbo-orange" />
              <div className="absolute -left-1 h-0.5 w-1.5 bg-turbo-orange" />
              <div className="absolute -right-1 h-0.5 w-1.5 bg-turbo-orange" />
            </>
          )}

          {/* Hover Text Badge "GO" */}
          {isHovered && (
            <span className="font-racing font-black text-[9px] tracking-widest text-performance-white select-none">
              {hoverLabel}
            </span>
          )}
        </div>
      </motion.div>

      {/* Center Core Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: position.x,
          y: position.y,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 900,
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-velocity-yellow shadow-[0_0_8px_#ffc400]" />
      </motion.div>
    </>
  );
};
