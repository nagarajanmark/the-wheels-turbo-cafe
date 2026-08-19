"use client";

import React from "react";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";
import { SectionHeading } from "../ui/SectionHeading";
import { MagneticButton } from "../ui/MagneticButton";
import { MENU_ITEMS } from "@/data/menuData";
import { Flame, Gauge, Zap, Sparkles } from "lucide-react";

export const HomeMenuPreview: React.FC = () => {
  // Grab top 4 highlights
  const previewItems = MENU_ITEMS.slice(0, 4);

  return (
    <section className="relative py-24 md:py-36 bg-turbo-black text-performance-white overflow-hidden select-none">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-carbon-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-racing-red/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            sectorNumber="04"
            tag="OCTANE FLAVOURS"
            title={
              <>
                FUEL <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow">
                  YOUR PASSION.
                </span>
              </>
            }
            subtitle="Engineered with chef-level precision, flame-seared meats, and high-performance ingredients to power your day."
            className="mb-0"
          />

          <MagneticButton
            size="md"
            variant="gold"
            href="/menu"
            cursorLabel="ALL"
          >
            VIEW FULL MENU →
          </MagneticButton>
        </div>

        {/* 4 Dashboard Item Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewItems.map((item, idx) => (
            <div
              key={item.id}
              className="bg-garage-black border border-metallic-silver/20 hover:border-racing-red/70 rounded-xl p-5 transition-all duration-500 group shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Race Number Tag */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-racing font-black text-xs tracking-widest text-turbo-orange">
                    {item.raceNo}
                  </span>
                  <span className="text-[10px] font-mono text-velocity-yellow px-2 py-0.5 rounded bg-turbo-black border border-velocity-yellow/30 uppercase">
                    {item.octaneRating}
                  </span>
                </div>

                {/* Image Placeholder */}
                <div className="mb-4">
                  <ImagePlaceholder
                    src={item.imageSrc}
                    label={item.imageLabel}
                    aspectRatio="4/3"
                    badgeText={item.category}
                  />
                </div>

                {/* Item Name */}
                <h3 className="font-display font-black text-lg uppercase tracking-wider text-performance-white group-hover:text-turbo-orange transition-colors mb-2 line-clamp-1">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs text-metallic-silver/70 line-clamp-2 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Culinary & Octane Telemetry Badges */}
              <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] font-racing font-bold px-2 py-0.5 rounded border ${
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

                <div className="text-[10px] font-racing font-bold tracking-widest text-metallic-silver/70 group-hover:text-turbo-orange transition-colors uppercase flex items-center gap-1">
                  <span>{item.category}</span>
                  <Flame className="w-3.5 h-3.5 text-racing-red group-hover:text-turbo-orange transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
