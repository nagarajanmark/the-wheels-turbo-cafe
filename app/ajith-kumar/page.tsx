"use client";

import React, { useState } from "react";
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
    label: "MEMORY 01",
    title: "PODIUM CELEBRATION BRITISH F3",
    src: "/images/ajith/memory-01.jpg",
    caption: "Holding the Indian tricolor aloft on the podium at historic British racing circuits.",
  },
  {
    id: "mem-02",
    label: "MEMORY 02",
    title: "FIA FORMULA 2 COCKPIT INTENSITY",
    src: "/images/ajith/memory-02.jpg",
    caption: "Focused telemetry check before unleashing 425+ BHP at Monza speedway.",
  },
  {
    id: "mem-03",
    label: "MEMORY 03",
    title: "RACE GEAR & SAFETY HARNESS",
    src: "/images/ajith/memory-03.jpg",
    caption: "Precision safety equipment, customized race suit, and aero-tested helmets.",
  },
  {
    id: "mem-04",
    label: "MEMORY 04",
    title: "ENDURANCE 24H GT PREPARATION",
    src: "/images/ajith/memory-04.jpg",
    caption: "Leading the Ajith Kumar Racing GT team through grueling nighttime pitstop drills.",
  },
  {
    id: "mem-05",
    label: "MEMORY 05",
    title: "KARI SPEEDWAY PADDOCK BRIEFING",
    src: "/images/ajith/memory-05.jpg",
    caption: "Mentoring emerging racing talents and mechanics right here in Coimbatore.",
  },
  {
    id: "mem-06",
    label: "MEMORY 06",
    title: "THE UNBROKEN SPIRIT",
    src: "/images/ajith/memory-06.jpg",
    caption: "A testament to resilience, recovering from high-speed crashes to race again.",
  },
];

export default function AjithKumarTributePage() {
  const [selectedMemory, setSelectedMemory] = useState<{
    title: string;
    label: string;
    src: string;
    caption: string;
  } | null>(null);

  return (
    <div className="w-full bg-turbo-black text-performance-white select-none">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[80vh] flex flex-col justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-carbon-black overflow-hidden border-b border-white/10">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder
            src="/images/ajith/ajith-01.jpg"
            label="AJITH KUMAR — HERO"
            aspectRatio="auto"
            className="w-full h-full rounded-none border-none opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-turbo-black via-turbo-black/80 to-transparent" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-racing-red/20 blur-[170px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Fan Disclaimer Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-garage-black/90 border border-racing-red/40 text-racing-red text-xs font-racing font-bold tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(225,6,0,0.2)]">
            <ShieldAlert className="w-4 h-4 text-turbo-orange" />
            <span>INDEPENDENT FAN MOTORSPORT TRIBUTE // NOT AN OFFICIAL ENDORSEMENT</span>
          </div>

          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-9xl uppercase tracking-tighter text-performance-white leading-none">
            PASSION HAS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-glow-red">
              NO FINISH LINE.
            </span>
          </h1>

          <p className="mt-6 font-sans text-base sm:text-xl text-metallic-silver/90 max-w-2xl leading-relaxed border-l-2 border-velocity-yellow pl-4">
            Celebrating Ajith Kumar&apos;s extraordinary pursuit of motorsport excellence—from national single-seaters to the global FIA Formula 2 grid.
          </p>
        </div>
      </section>

      {/* 2. THE INSPIRATION */}
      <section className="relative py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-racing font-bold tracking-[0.25em] text-turbo-orange uppercase">
              SECTOR 01 // THE INSPIRATION
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-performance-white leading-[1.05]">
              DRIVEN BY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red to-turbo-orange">
                COURAGE, DISCIPLINE &
              </span> <br />
              RAW HORSEPOWER.
            </h2>

            <div className="space-y-4 font-sans text-sm md:text-base text-metallic-silver/80 leading-relaxed">
              <p>
                In an era where many admire racing from afar, Ajith Kumar strapped himself into formula cockpits, braved high-speed G-forces, and competed shoulder-to-shoulder with the finest drivers on the planet.
              </p>
              <p>
                His journey is not about fame; it is about pure, unfiltered passion for the track. The intense physical discipline, the mental resilience required to conquer high-speed apexes, and the humility in the paddock are the very values we built into The Wheels Turbo Cafe.
              </p>
              <p>
                When you step into our Coimbatore cafe, the roar of the engines, the smell of fresh brews, and the metallic aesthetics reflect this relentless pursuit of greatness.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-garage-black border border-white/10">
                <Trophy className="w-5 h-5 text-velocity-yellow mb-2" />
                <div className="font-display font-bold text-sm text-performance-white">BRITISH F3</div>
                <div className="text-[10px] text-metallic-silver/70 font-mono">PODIUM FINISHER</div>
              </div>
              <div className="p-4 rounded-xl bg-garage-black border border-white/10">
                <Flag className="w-5 h-5 text-turbo-orange mb-2" />
                <div className="font-display font-bold text-sm text-performance-white">FIA F2</div>
                <div className="text-[10px] text-metallic-silver/70 font-mono">WORLD CHAMPIONSHIP</div>
              </div>
              <div className="p-4 rounded-xl bg-garage-black border border-white/10">
                <Flame className="w-5 h-5 text-racing-red mb-2" />
                <div className="font-display font-bold text-sm text-performance-white">GT RACING</div>
                <div className="text-[10px] text-metallic-silver/70 font-mono">24H ENDURANCE</div>
              </div>
            </div>
          </div>

          {/* Right Dual Visuals */}
          <div className="lg:col-span-5 space-y-6">
            <ImagePlaceholder
              src="/images/ajith/ajith-02.jpg"
              label="AJITH KUMAR — MOTORSPORT ICON"
              aspectRatio="4/3"
              badgeText="PADDOCK DISCIPLINE"
              className="w-full shadow-2xl"
            />
            <div className="p-6 rounded-xl bg-carbon-black border border-racing-red/40 text-xs font-sans text-metallic-silver/90 space-y-2">
              <span className="font-racing font-bold text-velocity-yellow text-sm tracking-wider uppercase block">
                &ldquo;NEVER GIVE UP ON THE DRIVE.&rdquo;
              </span>
              <p>
                A core philosophy guiding our kitchen, our service, and our automotive sanctuary in Coimbatore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE RACING SPIRIT (Interactive Asphalt Racetrack Timeline) */}
      <section className="relative py-24 bg-garage-black border-t border-b border-white/10 px-4 sm:px-6 lg:px-8">
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
          <div className="relative border-l-2 border-racing-red/50 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-16">
            {RACING_TIMELINE.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Checkered Apex Marker on Track */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-6 h-6 rounded-full bg-turbo-black border-2 border-racing-red flex items-center justify-center text-velocity-yellow group-hover:scale-125 group-hover:bg-racing-red transition-all shadow-[0_0_15px_#e10600]">
                  <div className="w-2 h-2 rounded-full bg-velocity-yellow" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-carbon-black border border-metallic-silver/20 hover:border-racing-red/80 rounded-2xl p-6 sm:p-8 transition-all duration-500 shadow-xl">
                  {/* Left Text */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-display font-black text-3xl sm:text-4xl text-velocity-yellow">
                        {milestone.year}
                      </span>
                      <span className="text-[10px] font-racing font-bold tracking-widest text-turbo-orange uppercase bg-turbo-black px-2.5 py-1 rounded border border-turbo-orange/30">
                        {milestone.stage}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-2xl uppercase tracking-wider text-performance-white">
                      {milestone.title}
                    </h3>

                    <p className="font-racing text-xs text-metallic-silver font-semibold uppercase tracking-wider">
                      {milestone.subtitle}
                    </p>

                    <p className="font-sans text-xs sm:text-sm text-metallic-silver/80 leading-relaxed">
                      {milestone.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/10 text-xs font-mono">
                      {milestone.stats.map((st, sIdx) => (
                        <div key={sIdx}>
                          <span className="text-[10px] text-metallic-silver/50 uppercase block">
                            {st.label}
                          </span>
                          <span className="font-bold text-performance-white text-xs">
                            {st.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Image Placeholder */}
                  <div className="lg:col-span-5">
                    <ImagePlaceholder
                      src={milestone.imageSrc}
                      label={milestone.imageLabel}
                      aspectRatio="16/9"
                      badgeText={milestone.year}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WALL OF MEMORIES */}
      <section className="relative py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
          subtitle="A visual tribute capturing iconic moments, cockpit telemetry, and racing milestones."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MEMORIES_WALL.map((mem) => (
            <div
              key={mem.id}
              onClick={() => setSelectedMemory(mem)}
              className="bg-garage-black border border-metallic-silver/20 hover:border-racing-red/80 rounded-xl p-4 cursor-pointer group transition-all duration-300 shadow-xl"
              data-cursor-hover
              data-cursor-text="ZOOM"
            >
              <div className="mb-3 overflow-hidden rounded-lg">
                <ImagePlaceholder
                  src={mem.src}
                  label={mem.label}
                  aspectRatio="16/9"
                  badgeText={mem.label}
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-performance-white uppercase group-hover:text-turbo-orange transition-colors">
                    {mem.title}
                  </h4>
                  <p className="font-sans text-xs text-metallic-silver/70 mt-1 line-clamp-1">
                    {mem.caption}
                  </p>
                </div>
                <div className="p-2 rounded bg-turbo-black text-racing-red shrink-0 ml-2">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tribute Footer Note */}
        <div className="mt-16 p-6 rounded-2xl bg-garage-black border border-white/10 text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-racing font-bold text-velocity-yellow uppercase">
            <ShieldAlert className="w-4 h-4 text-turbo-orange" />
            DISCLAIMER & INTEGRITY NOTICE
          </div>
          <p className="font-sans text-xs text-metallic-silver/80 leading-relaxed">
            This is an independent fan-inspired tribute and is not an official website or endorsement. We celebrate motorsport achievements and the passion that connects petrolheads across the globe.
          </p>
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
