"use client";

import React, { useState } from "react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from "@/data/menuData";
import { Flame, Zap, Sparkles, Award, Heart, Compass, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const featuredPicks = MENU_ITEMS.filter((item) => item.isPitstopPick);

  const displayedItems =
    selectedCategory === "ALL"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full bg-turbo-black text-performance-white select-none min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] flex flex-col justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-carbon-black overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-carbon-pattern opacity-50" />
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-turbo-orange/15 blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Fan Dedication & Cafe Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-garage-black border border-racing-red/40 text-racing-red text-xs font-racing font-bold tracking-[0.25em] uppercase">
              <span className="w-2 h-2 rounded-full bg-racing-red animate-ping" />
              CULINARY FUEL STATION // COIMBATORE
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-velocity-yellow/10 border border-velocity-yellow/30 text-velocity-yellow text-[11px] font-racing font-bold tracking-wider uppercase">
              <Heart className="w-3 h-3 text-racing-red fill-racing-red" />
              CURATED WITH LOVE BY AN AJITH KUMAR FAN GIRL
            </div>
          </div>

          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-performance-white leading-none">
            FUEL FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-glow-red">
              THE JOURNEY.
            </span>
          </h1>

          <p className="mt-6 font-sans text-base sm:text-xl text-metallic-silver/90 max-w-2xl leading-relaxed border-l-2 border-racing-red pl-4">
            A tribute to speed, cinema, and culinary art. Explore our authentic cafe menu crafted with racing precision and high-octane passion.
          </p>
        </div>
      </section>

      {/* 2. PIT STOP PICKS (3 Large Featured VIP Items) */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          sectorNumber="01"
          tag="CHEF SIGNATURES"
          title={
            <>
              PIT STOP <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-velocity-yellow via-turbo-orange to-racing-red">
                PICKS.
              </span>
            </>
          }
          subtitle="Our highest-octane signature dishes crafted for maximum culinary horsepower and flavor."
          highlightGold={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPicks.map((item) => (
            <div
              key={item.id}
              className="relative bg-garage-black border-2 border-velocity-yellow/40 hover:border-velocity-yellow rounded-2xl p-6 transition-all duration-500 group shadow-[0_0_35px_rgba(255,196,0,0.15)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-racing font-black text-xs tracking-widest text-velocity-yellow bg-turbo-black px-2.5 py-1 rounded border border-velocity-yellow/30">
                    {item.raceNo}
                  </span>
                  <span className="text-[10px] font-racing font-bold text-turbo-orange uppercase flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-velocity-yellow" />
                    VIP SIGNATURE
                  </span>
                </div>

                <div className="mb-5 overflow-hidden rounded-xl">
                  <ImagePlaceholder
                    src={item.imageSrc}
                    label={item.imageLabel}
                    aspectRatio="16/9"
                    variant="gold"
                    badgeText={item.octaneRating}
                  />
                </div>

                <h3 className="font-display font-black text-xl uppercase tracking-wider text-performance-white group-hover:text-velocity-yellow transition-colors mb-2">
                  {item.name}
                </h3>

                <p className="font-sans text-xs text-metallic-silver/80 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Showcase Badges Footer */}
              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[11px] font-racing font-bold px-2.5 py-1 rounded border ${
                      item.dietary === "VEG"
                        ? "text-emerald-400 border-emerald-500/30 bg-emerald-950/40"
                        : item.dietary === "NON-VEG"
                        ? "text-racing-red border-racing-red/30 bg-racing-red/10"
                        : "text-velocity-yellow border-velocity-yellow/30 bg-velocity-yellow/10"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        item.dietary === "VEG"
                          ? "bg-emerald-400 shadow-[0_0_8px_#34d399]"
                          : item.dietary === "NON-VEG"
                          ? "bg-racing-red shadow-[0_0_8px_#e10600]"
                          : "bg-velocity-yellow shadow-[0_0_8px_#ffc400]"
                      }`}
                    />
                    {item.dietary}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-racing font-bold text-velocity-yellow uppercase tracking-wider">
                  <Award className="w-4 h-4 text-velocity-yellow" />
                  <span>{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STICKY GEAR SELECTOR NAVIGATION */}
      <div className="sticky top-20 z-30 bg-turbo-black/95 backdrop-blur-xl border-y border-racing-red/20 py-4 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block text-[11px] font-mono text-metallic-silver/60 uppercase mr-2">
              GEAR SELECTOR:
            </span>
            {MENU_CATEGORIES.map((cat, idx) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-racing font-bold tracking-widest uppercase transition-all duration-300 shrink-0 ${
                    isSelected
                      ? "bg-gradient-to-r from-racing-red to-turbo-orange text-white shadow-[0_0_20px_rgba(225,6,0,0.6)] border-t border-white/40"
                      : "bg-garage-black text-metallic-silver hover:text-white border border-white/10 hover:border-racing-red/40"
                  }`}
                  data-cursor-hover
                  data-cursor-text={`G${idx}`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Item Count Telemetry Tag */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-garage-black border border-white/10 text-xs font-racing text-metallic-silver/70 shrink-0">
            <Flame className="w-3.5 h-3.5 text-racing-red" />
            <span>SHOWING {displayedItems.length} SELECTIONS</span>
          </div>
        </div>
      </div>

      {/* 4. MAIN MENU GRID */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-garage-black border border-metallic-silver/20 hover:border-racing-red/80 rounded-2xl p-6 group transition-all duration-500 shadow-xl flex flex-col justify-between relative overflow-hidden"
              >
                {/* Racing Line that travels across on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-racing-red to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-racing font-black text-xs tracking-widest text-turbo-orange">
                      {item.raceNo}
                    </span>
                    <span className="text-[10px] font-mono text-velocity-yellow px-2 py-0.5 rounded bg-turbo-black border border-velocity-yellow/30 uppercase">
                      {item.octaneRating}
                    </span>
                  </div>

                  <div className="mb-5 overflow-hidden rounded-xl">
                    <ImagePlaceholder
                      src={item.imageSrc}
                      label={item.imageLabel}
                      aspectRatio="16/9"
                      badgeText={item.category}
                    />
                  </div>

                  <h3 className="font-display font-black text-xl uppercase tracking-wider text-performance-white group-hover:text-turbo-orange transition-colors mb-2">
                    {item.name}
                  </h3>

                  <p className="font-sans text-xs text-metallic-silver/80 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Card Telemetry Footer */}
                <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[10px] font-racing font-bold px-2.5 py-1 rounded border ${
                        item.dietary === "VEG"
                          ? "text-emerald-400 border-emerald-500/30 bg-emerald-950/40"
                          : item.dietary === "NON-VEG"
                          ? "text-racing-red border-racing-red/30 bg-racing-red/10"
                          : "text-velocity-yellow border-velocity-yellow/30 bg-velocity-yellow/10"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          item.dietary === "VEG"
                            ? "bg-emerald-400"
                            : item.dietary === "NON-VEG"
                            ? "bg-racing-red"
                            : "bg-velocity-yellow"
                        }`}
                      />
                      {item.dietary}
                    </span>
                  </div>

                  <div className="text-[11px] font-racing font-bold tracking-wider text-metallic-silver/80 group-hover:text-turbo-orange transition-colors uppercase flex items-center gap-1.5">
                    <span>{item.category}</span>
                    <Flame className="w-3.5 h-3.5 text-racing-red group-hover:text-turbo-orange transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Fan & Cafe Tribute Banner */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-garage-black via-carbon-black to-garage-black border border-racing-red/30 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-racing-red/5 blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-racing font-bold text-velocity-yellow uppercase tracking-widest">
                <Heart className="w-4 h-4 text-racing-red fill-racing-red" />
                AK RACING FAN CREATION
              </div>
              <h3 className="font-display font-black text-2xl uppercase text-performance-white">
                EXPERIENCE THE REAL TASTE AT THE WHEELS TURBO CAFE
              </h3>
              <p className="text-xs sm:text-sm text-metallic-silver/80 max-w-xl font-sans">
                Curated by an Ajith Kumar fan girl to celebrate the speed, style, and culinary energy of Coimbatore&apos;s ultimate motorsport cafe. Visit us to taste all these creations fresh on the grid!
              </p>
            </div>

            <MagneticButton
              size="md"
              variant="primary"
              href="/contact"
              cursorLabel="VISIT"
            >
              VISIT CAFE COIMBATORE →
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
