"use client";

import React from "react";
import Image from "next/image";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";
import { SectionHeading } from "../ui/SectionHeading";
import { MagneticButton } from "../ui/MagneticButton";
import { Award, ShieldAlert, Zap, Flag, Trophy } from "lucide-react";

export const HomeAjithPreview: React.FC = () => {
  return (
    <section className="relative py-28 md:py-40 bg-garage-black text-performance-white overflow-hidden select-none border-t border-b border-white/10">
      {/* Background Hero Layer with motorsport lighting */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ajith/ajithkumarracing.com-track-test-barcelona-akr-tracktest-13-scaled.jpg"
          alt="Thala Ajith Kumar motorsport tribute at The Wheels Turbo Cafe Coimbatore"
          fill
          sizes="100vw"
          quality={88}
          className="object-cover object-[center_20%] opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-turbo-black/95 via-turbo-black/75 to-turbo-black/40" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-racing-red/15 blur-[160px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Independent Fan Tribute Disclaimer Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-turbo-black/90 border border-white/15 text-[11px] font-sans text-metallic-silver/80 backdrop-blur-md mb-8">
          <ShieldAlert className="w-4 h-4 text-turbo-orange shrink-0" />
          <span>INDEPENDENT MOTORSPORT FAN TRIBUTE // NOT AN OFFICIAL ENDORSEMENT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Big Headline & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-racing font-bold tracking-[0.25em] text-racing-red uppercase">
              <span className="w-2 h-2 rounded-full bg-racing-red animate-ping" />
              THE RACING LEGACY
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tighter text-performance-white leading-none">
              PASSION HAS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-glow-red">
                NO FINISH LINE.
              </span>
            </h2>

            <p className="text-sm md:text-base font-sans text-metallic-silver/90 max-w-xl leading-relaxed">
              As a dedicated Ajith Kumar themed cafe in Coimbatore, we celebrate Thala&apos;s relentless pursuit of motorsport excellence—from British F3 and FIA Formula 2 to 24H Endurance GT racing across international circuits.
            </p>

            {/* Racing Credentials Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="p-3.5 rounded-xl bg-carbon-black border border-white/10 text-center">
                <div className="font-display font-black text-xl text-velocity-yellow">FIA F2</div>
                <div className="text-[10px] font-racing text-metallic-silver/70 tracking-wider uppercase">Championship</div>
              </div>
              <div className="p-3.5 rounded-xl bg-carbon-black border border-white/10 text-center">
                <div className="font-display font-black text-xl text-turbo-orange">BRITISH F3</div>
                <div className="text-[10px] font-racing text-metallic-silver/70 tracking-wider uppercase">Podium Finisher</div>
              </div>
              <div className="p-3.5 rounded-xl bg-carbon-black border border-white/10 text-center">
                <div className="font-display font-black text-xl text-racing-red">24H GT</div>
                <div className="text-[10px] font-racing text-metallic-silver/70 tracking-wider uppercase">Endurance Team</div>
              </div>
            </div>

            <div className="pt-4">
              <MagneticButton
                size="lg"
                variant="primary"
                href="/ajith-kumar"
                cursorLabel="TRIBUTE"
              >
                EXPLORE THE TRIBUTE
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Layered Image Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main Tribute Card */}
              <div className="transform sm:-rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                <ImagePlaceholder
                  src="/images/gallery/best-motorsport-theme-cafe-in-coimbatore.jpeg"
                  alt="Ajith Kumar motorsport career montage tribute at The Wheels Turbo Cafe Coimbatore"
                  label="AJITH KUMAR — MOTORSPORT ICON"
                  aspectRatio="4/3"
                  badgeText="MOTORSPORT ICON"
                  className="w-full border-racing-red/50 shadow-2xl"
                />
              </div>

              {/* Overlapping Secondary Card */}
              <div className="hidden sm:block absolute -bottom-10 -right-6 w-3/5 transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl z-20">
                <ImagePlaceholder
                  src="/images/ajith/ak-racing-team-porsche-on-track.jpg"
                  alt="Ajith Kumar Racing #901 Porsche on track tribute at The Wheels Turbo Cafe Coimbatore"
                  label="AKR 901 PORSCHE GT3"
                  aspectRatio="16/9"
                  badgeText="TRACK ACTION"
                  className="w-full border-velocity-yellow/50 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
