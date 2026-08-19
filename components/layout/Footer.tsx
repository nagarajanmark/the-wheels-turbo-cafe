"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CAFE_DATA } from "@/data/cafeData";
import { Flame, ShieldAlert } from "lucide-react";

export const Footer: React.FC = () => {
  const [coimbatoreTime, setCoimbatoreTime] = useState<string>("");
  const currentYear = 2026;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // IST is UTC+5:30
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCoimbatoreTime(new Intl.DateTimeFormat("en-IN", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-turbo-black text-performance-white border-t border-racing-red/20 overflow-hidden select-none">
      {/* Top Multi-Color Racing Stripe */}
      <div className="h-1 w-full bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow animate-racing-line" />

      {/* Ambient Red & Orange Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-racing-red/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-turbo-orange/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Ambient 3D Silhouette Curves & Dome Light */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      {/* Main Callout Banner & Telemetry Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 mb-12 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-racing font-bold tracking-[0.3em] text-racing-red uppercase bg-garage-black px-3 py-1 rounded border border-racing-red/40 mb-4">
              <span className="w-2 h-2 rounded-full bg-racing-red animate-ping" />
              DESTINATION COIMBATORE
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-performance-white leading-none">
              SEE YOU AT THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow">
                PIT STOP.
              </span>
            </h2>
          </div>

          {/* Telemetry Status Box */}
          <div className="p-4 sm:p-5 rounded-xl bg-carbon-black border border-metallic-silver/20 backdrop-blur-md min-w-[280px]">
            <div className="flex items-center justify-between text-[11px] font-mono text-metallic-silver/60 border-b border-white/10 pb-2 mb-2">
              <span className="flex items-center gap-1.5 text-performance-white font-racing">
                <Flame className="w-3.5 h-3.5 text-turbo-orange" />
                PADDOCK STATUS
              </span>
              <span className="text-velocity-yellow font-bold">GRID LIVE</span>
            </div>
            <div className="space-y-1.5 text-xs font-mono">
              <div className="flex justify-between text-metallic-silver">
                <span>COIMBATORE TIME:</span>
                <span className="text-performance-white font-bold">{coimbatoreTime || "11:00 AM IST"}</span>
              </div>
              <div className="flex justify-between text-metallic-silver">
                <span>COORDINATES:</span>
                <span className="text-turbo-orange">{CAFE_DATA.coordinates.lat}, {CAFE_DATA.coordinates.lng}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Giant Watermark Typography */}
        <div className="relative w-full flex items-center justify-center pt-10 pb-4 select-none pointer-events-none overflow-hidden">
          <h2 className="text-[40px] sm:text-[100px] font-black tracking-[0.06em] uppercase text-transparent bg-clip-text bg-gradient-to-b from-white/[0.14] via-white/[0.06] to-white/[0.01] text-center leading-none scale-y-95 whitespace-nowrap">
            THE WHEELS TURBO
          </h2>
        </div>

        {/* Center Glowing Logo Badge */}
        <div className="relative -mt-6 sm:-mt-8 mb-6 z-20 flex items-center justify-center">
          {/* Ambient Glow */}
          <div className="absolute w-36 h-20 rounded-full bg-racing-red/25 blur-2xl pointer-events-none animate-pulse" />

          {/* Badge Container */}
          <Link
            href="/"
            className="relative px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-[18px] sm:rounded-[20px] bg-[#0c0c0d]/90 backdrop-blur-md border-[1.5px] border-racing-red/40 shadow-[0_0_25px_rgba(225,6,0,0.35),inset_0_0_12px_rgba(225,6,0,0.15)] flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:border-racing-red hover:shadow-[0_0_35px_rgba(225,6,0,0.7)]"
            aria-label="The Wheels Turbo Cafe"
          >
            <Image
              src="/logo.png"
              alt="The Wheels Turbo Cafe"
              width={1774}
              height={887}
              className="h-9 sm:h-12 w-auto object-contain"
            />
          </Link>
        </div>
      </div>

      {/* Horizontal Divider Line */}
      <div className="w-full border-t border-white/[0.08]" />

      {/* Footer Bottom Bar (3-Column Layout exactly like reference) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-neutral-400 font-sans relative z-10">
        {/* Left: Small Circular Badge */}
        <div className="flex items-center">
          <div className="w-7 h-7 rounded-full border border-white/20 bg-white/[0.02] flex items-center justify-center text-[11px] font-bold text-white/90 hover:border-white/40 transition-colors">
            W
          </div>
        </div>

        {/* Center: Copyright Notice */}
        <div className="text-center text-neutral-400">
          ©{currentYear} The Wheels Turbo Cafe. All rights reserved. Made with{" "}
          <span className="text-red-500 inline-block px-0.5">♥</span> in India.
        </div>

        {/* Right: Credits */}
        <div className="text-center sm:text-right text-neutral-400">
          Crafted by{" "}
          <a href="https://niyozenix.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors cursor-pointer font-normal">
            Niyozenix
          </a>
        </div>
      </div>
    </footer>
  );
};
