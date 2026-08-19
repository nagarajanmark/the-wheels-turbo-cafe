"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SECTORS = [
  { id: "01", label: "START", min: 0, max: 0.2 },
  { id: "02", label: "STORY", min: 0.2, max: 0.4 },
  { id: "03", label: "MENU", min: 0.4, max: 0.65 },
  { id: "04", label: "LEGACY", min: 0.65, max: 0.85 },
  { id: "05", label: "PIT STOP", min: 0.85, max: 1.0 },
];

export const ScrollProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const progress = Math.min(1, Math.max(0, window.scrollY / docHeight));
      setScrollPercentage(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Track Telemetry Progress"
      className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3 select-none pointer-events-none"
    >
      <div className="p-3 rounded-2xl bg-turbo-black/85 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col gap-2 pointer-events-auto">
        <div className="text-[9px] font-mono text-metallic-silver/50 tracking-widest uppercase border-b border-white/10 pb-1 mb-1 text-center">
          TRACK SECTOR
        </div>

        {SECTORS.map((sector) => {
          const isActive =
            scrollPercentage >= sector.min && scrollPercentage <= sector.max;

          return (
            <div
              key={sector.id}
              className={`flex items-center gap-2 text-[10px] font-racing transition-all duration-300 ${
                isActive
                  ? "text-performance-white font-bold scale-105"
                  : "text-metallic-silver/40 font-normal"
              }`}
            >
              <span
                className={`font-mono text-[9px] ${
                  isActive ? "text-velocity-yellow" : "text-metallic-silver/30"
                }`}
              >
                {sector.id}
              </span>
              <span className="tracking-wider uppercase">{sector.label}</span>
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  isActive
                    ? "bg-racing-red shadow-[0_0_8px_#e10600] scale-125"
                    : "bg-white/20"
                }`}
              />
            </div>
          );
        })}

        {/* Vertical Progress Needle */}
        <div className="w-full h-1 bg-garage-black rounded-full overflow-hidden mt-1 border border-white/5">
          <div
            className="h-full bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow transition-all duration-150"
            style={{ width: `${scrollPercentage * 100}%` }}
          />
        </div>
      </div>
    </aside>
  );
};
