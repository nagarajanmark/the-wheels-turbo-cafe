"use client";

import React from "react";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";
import { SectionHeading } from "../ui/SectionHeading";
import { MagneticButton } from "../ui/MagneticButton";
import { Gauge, Flame, Wrench, Shield, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const HomeIntro: React.FC = () => {
  return (
    <section id="garage-intro" className="relative py-24 md:py-36 bg-turbo-black text-performance-white overflow-hidden select-none">
      {/* Background Subtle Racing Grid */}
      <div className="absolute inset-0 bg-racing-grid opacity-30 pointer-events-none" />
      <div className="absolute -top-32 right-0 w-96 h-96 bg-racing-red/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          sectorNumber="02"
          tag="PHILOSOPHY"
          title={
            <>
              BUILT FOR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow">
                PEOPLE WHO LOVE THE DRIVE.
              </span>
            </>
          }
          subtitle="From the thrill of Kari Motor Speedway to the rich aroma of fresh artisan coffee, The Wheels Turbo Cafe in RS Puram was forged to honor the unyielding spirit of racing."
        />

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & High-Tech Features */}
          <div className="lg:col-span-6 space-y-8">
            <div className="p-6 md:p-8 rounded-2xl bg-carbon-black border border-metallic-silver/20 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-racing-red to-turbo-orange" />
              
              <h3 className="font-display font-black text-2xl uppercase tracking-wider text-performance-white mb-4">
                THE PADDOCK CULTURE
              </h3>
              
              <p className="font-sans text-sm md:text-base text-metallic-silver/80 leading-relaxed mb-6">
                We didn&apos;t build a typical cafe with generic tables. We engineered an immersive racing theme restaurant and unique cafe in Coimbatore. Custom-fabricated brake rotor tables, race-spec bucket seating, authentic helmet galleries, and turbocharger sculptures bring the paddock straight to your dining experience.
              </p>

              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 font-racing text-xs tracking-wider">
                <div className="flex items-center gap-2 text-metallic-silver">
                  <CheckCircle2 className="w-4 h-4 text-racing-red shrink-0" />
                  <span>KARI SPEEDWAY PROXIMITY</span>
                </div>
                <div className="flex items-center gap-2 text-metallic-silver">
                  <CheckCircle2 className="w-4 h-4 text-turbo-orange shrink-0" />
                  <span>MOTORSPORT MEMORABILIA</span>
                </div>
                <div className="flex items-center gap-2 text-metallic-silver">
                  <CheckCircle2 className="w-4 h-4 text-velocity-yellow shrink-0" />
                  <span>100-OCTANE FLAVOURS</span>
                </div>
                <div className="flex items-center gap-2 text-metallic-silver">
                  <CheckCircle2 className="w-4 h-4 text-racing-red shrink-0" />
                  <span>PETROLHEAD MEETUPS</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MagneticButton
                size="md"
                variant="primary"
                href="/about"
                cursorLabel="STORY"
              >
                READ THE FULL STORY
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Large Image Placeholder with Parallax Accent */}
          <div className="lg:col-span-6 relative">
            <div className="relative group">
              <ImagePlaceholder
                src="/images/gallery/coimbatore-motorsport-cafe-indoor-dining-ambience.jpg"
                alt="Handcrafted racing tyre tables and ambient paddock seating at The Wheels Turbo Cafe in RS Puram Coimbatore"
                label="PADDOCK GARAGE INTERIOR // RS PURAM"
                aspectRatio="4/3"
                badgeText="RS PURAM COIMBATORE"
                className="w-full shadow-2xl"
              />

              {/* Floating Telemetry Metric Card */}
              <div className="absolute -bottom-6 -left-6 sm:bottom-4 sm:left-4 z-20 p-4 rounded-xl bg-turbo-black/90 border border-racing-red/40 backdrop-blur-xl shadow-2xl max-w-[220px]">
                <div className="flex items-center gap-2 text-[10px] font-racing font-bold text-velocity-yellow uppercase mb-1">
                  <Flame className="w-3.5 h-3.5 text-racing-red" />
                  MOTORSPORT DNA
                </div>
                <div className="font-display font-black text-xl text-performance-white">
                  100% PASSION
                </div>
                <p className="text-[10px] text-metallic-silver/70 font-sans mt-0.5">
                  Inspired by circuit racing and Thala Ajith&apos;s relentless spirit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
