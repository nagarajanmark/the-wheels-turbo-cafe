"use client";

import React from "react";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";
import { MagneticButton } from "../ui/MagneticButton";
import { ChevronDown, Gauge, Flame, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-turbo-black overflow-hidden select-none">
      {/* Background Hero Image with dark atmospheric overlay */}
      <div className="absolute inset-0 z-0">
        <ImagePlaceholder
          src="/images/gallery/best-motorsport-theme-cafe-in-coimbatore.jpeg"
          alt="The Wheels Turbo Cafe racing garage interior and dining atmosphere in RS Puram Coimbatore"
          label="THE WHEELS TURBO CAFE // RS PURAM COIMBATORE"
          aspectRatio="auto"
          priority={true}
          className="w-full h-full rounded-none border-none opacity-40"
        />
        {/* Cinematic Overlays: Black gradient, red ambient glow, orange speed lines */}
        <div className="absolute inset-0 bg-gradient-to-t from-turbo-black via-turbo-black/50 to-turbo-black/50" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-racing-red/20 blur-[160px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-turbo-orange/15 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_60px,rgba(225,6,0,0.03)_61px,transparent_62px)] pointer-events-none" />
      </div>

      {/* Top Telemetry Sector Badge */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-garage-black/90 border border-racing-red/40 backdrop-blur-md text-racing-red text-xs font-racing font-bold tracking-[0.25em] uppercase shadow-[0_0_20px_rgba(225,6,0,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-racing-red animate-ping" />
          <span>DESTINATION COIMBATORE // RS PURAM</span>
        </motion.div>
      </div>

      {/* Main Headline Block */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        <div className="max-w-4xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.92] text-performance-white drop-shadow-2xl">
              START <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-glow-red">
                YOUR ENGINES.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-xl md:text-2xl font-sans text-metallic-silver/90 max-w-2xl leading-relaxed border-l-2 border-racing-red pl-4"
          >
            Coimbatore&apos;s premier racing and Ajith Kumar themed cafe, created with sheer passion by an ardent racer Ajith fan girl. Entering an authentic racing garage that happens to serve extraordinary food in RS Puram.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              size="lg"
              variant="primary"
              href="#hero-scroll"
              cursorLabel="START"
            >
              ENTER THE EXPERIENCE
            </MagneticButton>

            <MagneticButton
              size="lg"
              variant="secondary"
              href="/menu"
              cursorLabel="MENU"
            >
              VIEW THE MENU
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between border-t border-white/10 pt-4 text-xs font-racing tracking-widest text-metallic-silver/60">
        <div className="flex items-center gap-2 text-turbo-orange animate-bounce">
          <span>SCROLL TO ACCELERATE</span>
          <ChevronDown className="w-4 h-4" />
        </div>

        <div className="hidden sm:flex items-center gap-4 font-mono text-[11px]">
          <span>GRID: RS PURAM, COIMBATORE</span>
          <span>•</span>
          <span>STATUS: GREEN FLAG</span>
        </div>
      </div>
    </section>
  );
};
