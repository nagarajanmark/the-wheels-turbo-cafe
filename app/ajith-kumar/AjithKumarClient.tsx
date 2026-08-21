"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { LightboxModal } from "@/components/ui/LightboxModal";
import { RACING_TIMELINE } from "@/data/timelineData";
import { ShieldAlert, Trophy, Award, Flag, Flame, Zap, Maximize2, Compass } from "lucide-react";
import { motion } from "framer-motion";

const MEMORIES_WALL = [
  {
    id: "mem-01",
    label: "PODIUM MOMENT // TRICOLOUR",
    title: "PODIUM CELEBRATION WITH INDIAN FLAG",
    src: "/images/ajith/ajith-kumar-podium-finish-indian-flag-motorsport.jpg",
    alt: "Ajith Kumar celebrating on the international motorsport podium holding the Indian Tricolour flag",
    caption: "Holding the Indian tricolor aloft on the podium during international racing championships with showering confetti.",
  },
  {
    id: "mem-02",
    label: "AKR #901 PORSCHE 911 GT3",
    title: "AKR #901 PORSCHE 911 GT3 RACECAR",
    src: "/images/ajith/ajith-kumar-racing-porsche-992-gt3-cup.jpg",
    alt: "Ajith Kumar standing with #901 Porsche 911 GT3 Cup racecar in the pitlane",
    caption: "Ajith Kumar standing proudly beside his #901 endurance racecar with helmet resting on the roof.",
  },
  {
    id: "mem-03",
    label: "PORSCHE MOTORSPORT SUIT",
    title: "THALA AJITH PORSCHE MOTORSPORT SUIT",
    src: "/images/ajith/thala-ajith-kumar-official-racing-driver-suit.jpg",
    alt: "Thala Ajith Kumar Porsche Motorsport racing suit and aerodynamic helmet tribute",
    caption: "Precision safety gear, HRX racing suit, and aerodynamic helmet design celebrating Thala's motorsport prowess.",
  },
  {
    id: "mem-04",
    label: "24H GT ENDURANCE SERIES",
    title: "CREVENTIC 24H SERIES GT PREPARATION",
    src: "/images/ajith/ajith-kumar-creventic-24h-endurance-series.jpg",
    alt: "Ajith Kumar 24H GT Endurance racing championship in the paddock",
    caption: "Leading the Ajith Kumar Racing GT squad through grueling endurance championships across international circuits.",
  },
  {
    id: "mem-05",
    label: "24H SERIES TRIUMPH",
    title: "24H SERIES TRICOLOUR TRIUMPH",
    src: "/images/ajith/ajith-kumar-24h-dubai-race-victory-celebration.jpg",
    alt: "Ajith Kumar celebrating 24H Series GT victory with team",
    caption: "A montage of triumph, celebration, and devotion to motorsport excellence on the world stage.",
  },
  {
    id: "mem-06",
    label: "MOTORSPORT COMMUNITY TRIBUTE",
    title: "PADDOCK PASSION & FAN DEVOTION",
    src: "/images/ajith/ajith-kumar-fan-tribute-coimbatore-cafe.jpg",
    alt: "Ajith Kumar motorsport fan community tribute wall at The Wheels Turbo Cafe in RS Puram Coimbatore",
    caption: "Heartfelt tributes celebrating the deep bond between motorsport fans, Thala admirers, and racing culture in Coimbatore.",
  },
];

export function AjithKumarClient() {
  const [selectedMemory, setSelectedMemory] = useState<{
    title: string;
    label: string;
    src: string;
    alt?: string;
    caption: string;
  } | null>(null);

  return (
    <div className="w-full bg-turbo-black text-performance-white select-none">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[80vh] flex flex-col justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-carbon-black overflow-hidden border-b border-white/10">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ajith/ajithkumarracing.com-track-test-barcelona-akr-tracktest-13-scaled.jpg"
            alt="Thala Ajith Kumar motorsport tribute at The Wheels Turbo Cafe Coimbatore"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-[center_15%] opacity-85"
          />
          {/* Subtle Directional Gradients for Readability without washing out image */}
          <div className="absolute inset-0 bg-gradient-to-r from-turbo-black/95 via-turbo-black/65 to-turbo-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-turbo-black via-transparent to-turbo-black/40" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-racing-red/15 blur-[170px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Fan Disclaimer Tag */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-garage-black/90 border border-racing-red/40 text-racing-red text-[10px] sm:text-xs font-racing font-bold tracking-[0.2em] uppercase mb-6 sm:mb-8 shadow-[0_0_20px_rgba(225,6,0,0.2)]">
            <ShieldAlert className="w-4 h-4 text-turbo-orange" />
            <span>INDEPENDENT FAN MOTORSPORT TRIBUTE // THE WHEELS TURBO CAFE COIMBATORE</span>
          </div>

          <h1 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-tighter text-performance-white leading-tight">
            PASSION HAS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-glow-red">
              NO FINISH LINE.
            </span>
          </h1>

          <p className="mt-3 sm:mt-5 font-sans text-xs sm:text-sm md:text-base text-metallic-silver/90 max-w-xl leading-relaxed border-l-2 border-velocity-yellow pl-3 sm:pl-4">
            Celebrating Thala Ajith Kumar&apos;s extraordinary pursuit of motorsport excellence—from national single-seaters to the global FIA Formula 2 and 24H GT endurance circuits.
          </p>
        </div>
      </section>

      {/* 2. THE INSPIRATION */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-racing font-bold tracking-[0.25em] text-turbo-orange uppercase">
              SECTOR 01 // THE INSPIRATION
            </div>

            <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl uppercase tracking-tight text-performance-white leading-tight">
              DRIVEN BY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red to-turbo-orange">
                COURAGE, DISCIPLINE &
              </span> <br />
              RAW HORSEPOWER.
            </h2>

            <div className="space-y-3 sm:space-y-4 font-sans text-xs sm:text-sm md:text-base text-metallic-silver/80 leading-relaxed">
              <p>
                In an era where many admire racing from afar, Ajith Kumar strapped himself into formula cockpits, braved intense lateral G-forces, and competed shoulder-to-shoulder with the finest drivers on the planet.
              </p>
              <p>
                His journey is not about fame; it is about pure, unfiltered passion for the asphalt. The rigorous physical training, the mental fortitude required to hit high-speed apexes, and his humble paddock demeanor are the exact values that inspired <strong className="text-performance-white">The Wheels Turbo Cafe — Coimbatore&apos;s dedicated racing themed cafe created by an ardent racer Ajith Kumar fan girl</strong>.
              </p>
              <p>
                When you step into our cafe in RS Puram, the roar of engines, the smell of fresh artisan roasts, and the handcrafted tyre decor honor this relentless pursuit of greatness.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="p-3 sm:p-4 rounded-xl bg-garage-black border border-white/10">
                <Trophy className="w-4 sm:w-5 h-4 sm:h-5 text-velocity-yellow mb-1.5 sm:mb-2" />
                <div className="font-display font-bold text-xs sm:text-sm text-performance-white">BRITISH F3</div>
                <div className="text-[9px] sm:text-[10px] text-metallic-silver/70 font-mono">PODIUM FINISHER</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-garage-black border border-white/10">
                <Flag className="w-4 sm:w-5 h-4 sm:h-5 text-turbo-orange mb-1.5 sm:mb-2" />
                <div className="font-display font-bold text-xs sm:text-sm text-performance-white">FIA F2</div>
                <div className="text-[9px] sm:text-[10px] text-metallic-silver/70 font-mono">WORLD CHAMPIONSHIP</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-garage-black border border-white/10">
                <Flame className="w-4 sm:w-5 h-4 sm:h-5 text-racing-red mb-1.5 sm:mb-2" />
                <div className="font-display font-bold text-xs sm:text-sm text-performance-white">GT RACING</div>
                <div className="text-[9px] sm:text-[10px] text-metallic-silver/70 font-mono">24H ENDURANCE</div>
              </div>
            </div>
          </div>

          {/* Right Dual Visuals */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <ImagePlaceholder
              src="/images/ajith/thala-ajith-kumar-international-motorsport-racer.jpg"
              alt="Ajith Kumar Motorsport montage in racing suit and GT racecar - The Wheels Turbo Cafe Coimbatore"
              label="AJITH KUMAR — MOTORSPORT ICON"
              aspectRatio="4/3"
              badgeText="PADDOCK DISCIPLINE"
              className="w-full shadow-2xl"
            />
            <div className="p-4 sm:p-6 rounded-xl bg-carbon-black border border-racing-red/40 text-xs font-sans text-metallic-silver/90 space-y-1.5 sm:space-y-2">
              <span className="font-racing font-bold text-velocity-yellow text-xs sm:text-sm tracking-wider uppercase block">
                &ldquo;NEVER GIVE UP ON THE DRIVE.&rdquo;
              </span>
              <p className="text-[11px] sm:text-xs">
                A core philosophy guiding our kitchen, our service, and our automotive sanctuary in Coimbatore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE RACING SPIRIT (Interactive Asphalt Racetrack Timeline) */}
      <section className="relative py-16 sm:py-24 bg-garage-black border-t border-b border-white/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            sectorNumber="02"
            tag="TIMELINE"
            title={
              <>
                THE RACING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow">
                  SPIRIT TIMELINE.
                </span>
              </>
            }
            subtitle="Follow the visual asphalt track charting key milestones across national and international circuits."
          />

          {/* Asphalt Track Container */}
          <div className="relative border-l-2 border-racing-red/50 ml-3 sm:ml-8 pl-5 sm:pl-10 space-y-10 sm:space-y-16">
            {RACING_TIMELINE.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Checkered Apex Marker on Track */}
                <div className="absolute -left-[31px] sm:-left-[51px] top-0 w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-turbo-black border-2 border-racing-red flex items-center justify-center text-velocity-yellow group-hover:scale-125 group-hover:bg-racing-red transition-all shadow-[0_0_15px_#e10600]">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-velocity-yellow" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-carbon-black border border-metallic-silver/20 hover:border-racing-red/80 rounded-2xl p-4 sm:p-6 lg:p-6 xl:p-8 transition-all duration-500 shadow-xl">
                  {/* Left Text */}
                  <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="font-display font-black text-2xl sm:text-3xl xl:text-4xl text-velocity-yellow">
                        {milestone.year}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-racing font-bold tracking-widest text-turbo-orange uppercase bg-turbo-black px-2 sm:px-2.5 py-0.5 sm:py-1 rounded border border-turbo-orange/30">
                        {milestone.stage}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-lg sm:text-xl xl:text-2xl uppercase tracking-wider text-performance-white">
                      {milestone.title}
                    </h3>

                    <p className="font-racing text-[11px] sm:text-xs text-metallic-silver font-semibold uppercase tracking-wider">
                      {milestone.subtitle}
                    </p>

                    <p className="font-sans text-xs sm:text-sm text-metallic-silver/80 leading-relaxed">
                      {milestone.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2.5 sm:pt-3 border-t border-white/10 text-xs font-mono">
                      {milestone.stats.map((st, sIdx) => (
                        <div key={sIdx}>
                          <span className="text-[9px] sm:text-[10px] text-metallic-silver/50 uppercase block">
                            {st.label}
                          </span>
                          <span className="font-bold text-performance-white text-[11px] sm:text-xs">
                            {st.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="lg:col-span-5">
                    <ImagePlaceholder
                      src={milestone.imageSrc}
                      alt={milestone.altText}
                      label={milestone.imageLabel}
                      aspectRatio="4/3"
                      objectPosition={milestone.objectPosition || "object-center"}
                      badgeText={milestone.year}
                      className="w-full shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WALL OF MEMORIES */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          sectorNumber="03"
          tag="COMMUNITY ARCHIVE"
          title={
            <>
              WALL OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow">
                MEMORIES.
              </span>
            </>
          }
          subtitle="A visual tribute capturing iconic moments, cockpit telemetry, and racing milestones displayed at The Wheels Turbo Cafe in Coimbatore."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {MEMORIES_WALL.map((mem) => (
            <div
              key={mem.id}
              onClick={() => setSelectedMemory(mem)}
              className="bg-garage-black border border-metallic-silver/20 hover:border-racing-red/80 rounded-xl p-3.5 sm:p-4 cursor-pointer group transition-all duration-300 shadow-xl"
              data-cursor-hover
              data-cursor-text="ZOOM"
              role="button"
              tabIndex={0}
              aria-label={`View photo of ${mem.title}`}
            >
              <div className="mb-3 overflow-hidden rounded-lg">
                <ImagePlaceholder
                  src={mem.src}
                  alt={mem.alt}
                  label={mem.label}
                  aspectRatio="4/3"
                  objectPosition="object-top"
                  badgeText="ARCHIVE"
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-xs sm:text-sm text-performance-white uppercase group-hover:text-turbo-orange transition-colors">
                    {mem.title}
                  </h3>
                  <p className="font-sans text-[11px] sm:text-xs text-metallic-silver/70 mt-0.5 sm:mt-1 line-clamp-1">
                    {mem.caption}
                  </p>
                </div>
                <div className="p-1.5 sm:p-2 rounded bg-turbo-black text-racing-red shrink-0 ml-2">
                  <Maximize2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tribute Footer Note & Internal Linking CTA */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-garage-black border border-white/10 text-center max-w-3xl mx-auto space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-racing font-bold text-velocity-yellow uppercase">
              <ShieldAlert className="w-4 h-4 text-turbo-orange" />
              DISCLAIMER &amp; INTEGRITY NOTICE
            </div>
            <p className="font-sans text-xs text-metallic-silver/80 leading-relaxed">
              This is an independent fan-inspired tribute celebrating motorsport achievements and the passion that connects petrolheads across Coimbatore and the globe.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              size="md"
              variant="gold"
              href="/menu"
              cursorLabel="MENU"
            >
              EXPLORE OUR CAFE MENU
            </MagneticButton>
            <MagneticButton
              size="md"
              variant="secondary"
              href="/contact"
              cursorLabel="VISIT"
            >
              VISIT OUR COIMBATORE PADDOCK
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMemory && (
        <LightboxModal
          isOpen={!!selectedMemory}
          onClose={() => setSelectedMemory(null)}
          title={selectedMemory.title}
          category="WALL OF MEMORIES"
          caption={selectedMemory.caption}
          imageSrc={selectedMemory.src}
          imageLabel={selectedMemory.label}
        />
      )}
    </div>
  );
}
