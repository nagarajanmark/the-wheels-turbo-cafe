"use client";

import React, { useState } from "react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { LightboxModal } from "@/components/ui/LightboxModal";
import { Gauge, Flame, Wrench, Shield, Flag, Users, Coffee, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const GARAGE_TOUR = [
  {
    title: "MAIN COCKPIT DINING",
    label: "CAFE INTERIOR 01",
    src: "/images/about/about-01.jpg",
    caption: "Bespoke carbon fiber tables engineered with genuine brake rotors as centerpiece fixtures.",
  },
  {
    title: "PADDOCK ESPRESSO BAR",
    label: "CAFE INTERIOR 02",
    src: "/images/about/about-02.jpg",
    caption: "High-pressure multi-boiler Slayer machine tuned like a racing engine to extract flawless espresso crema.",
  },
  {
    title: "CHAMPIONS HELMET REPLICA",
    label: "RACING HELMET",
    src: "/images/gallery/helmet-wall.jpg",
    caption: "Hand-painted race helmets celebrating international Formula racing and Indian circuit heroes.",
  },
  {
    title: "SLICK TYRE LOUNGE",
    label: "TYRE SEATING",
    src: "/images/about/tyre-seating.jpg",
    caption: "Genuine racing slicks repurposed into ultra-comfortable paddock lounge seating.",
  },
  {
    title: "TURBOCHARGER WALL ART",
    label: "WALL ART",
    src: "/images/gallery/turbo-art.jpg",
    caption: "Exploded engineering diagrams and backlit billet aluminum turbocharger sculptures.",
  },
  {
    title: "COMMUNITY PODIUM WALL",
    label: "MEMORIES",
    src: "/images/gallery/night-lounge.jpg",
    caption: "Photographs, signed racing gloves, and memories from South India's automotive brotherhood.",
  },
];

const FOUR_PILLARS = [
  {
    num: "01",
    title: "EAT.",
    subtitle: "High-Octane Culinary Engineering",
    description:
      "Crafted with chef-grade precision. Double-smashed prime patties, artisanal brioche, and nitro-infused beverages engineered to stimulate your tastebuds.",
    icon: Flame,
    color: "from-racing-red to-turbo-orange",
  },
  {
    num: "02",
    title: "EXPLORE.",
    subtitle: "Authentic Motorsport Heritage",
    description:
      "Step into a living paddock. Explore real turbochargers, sim cockpits, aerodynamic wings, and tribute walls that celebrate racing history.",
    icon: Gauge,
    color: "from-turbo-orange to-velocity-yellow",
  },
  {
    num: "03",
    title: "CONNECT.",
    subtitle: "The Petrolhead Sanctuary",
    description:
      "A home base for automotive enthusiasts. Weekend track-day briefings, live Grand Prix screenings, and community engine talks under one roof.",
    icon: Users,
    color: "from-velocity-yellow to-racing-red",
  },
  {
    num: "04",
    title: "REMEMBER.",
    subtitle: "Unforgettable Track Memories",
    description:
      "Every visit leaves a mark. From late-night coffee runs to post-drive victory feasts, make your moments part of our garage legacy.",
    icon: Flag,
    color: "from-racing-red via-turbo-orange to-velocity-yellow",
  },
];

export default function AboutPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    title: string;
    label: string;
    src: string;
    caption: string;
  } | null>(null);

  return (
    <div className="w-full bg-turbo-black text-performance-white select-none">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[75vh] flex flex-col justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-carbon-black overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-carbon-pattern opacity-50" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-racing-red/15 blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-garage-black border border-racing-red/40 text-racing-red text-xs font-racing font-bold tracking-[0.25em] uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-racing-red animate-ping" />
            ABOUT THE GARAGE // COIMBATORE
          </div>

          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-performance-white leading-none">
            MORE THAN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-glow-red">
              A CAFE.
            </span>
          </h1>

          <p className="mt-6 font-sans text-base sm:text-xl text-metallic-silver/90 max-w-2xl leading-relaxed border-l-2 border-turbo-orange pl-4">
            Built around passion, motorsport and unforgettable memories. We engineered a space where the energy of the track meets world-class culinary flavour.
          </p>
        </div>
      </section>

      {/* 2. THE STORY */}
      <section className="relative py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-racing font-bold tracking-[0.25em] text-turbo-orange uppercase">
              SECTOR 01 // ORIGIN STORY
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter text-performance-white leading-[1.05]">
              EVERY GREAT <br />
              JOURNEY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red to-turbo-orange">
                STARTS WITH
              </span> <br />
              A PASSION.
            </h2>

            <div className="space-y-4 font-sans text-sm md:text-base text-metallic-silver/80 leading-relaxed pt-2">
              <p>
                Coimbatore holds a revered position in Indian motorsport history—the home of iconic racing circuits, legendary tuners, and generations of speed enthusiasts.
              </p>
              <p>
                The Wheels Turbo Cafe was born from a singular obsession: to create an authentic paddock environment where automotive lovers can gather, refuel with artisanal food and specialty coffee, and celebrate the unyielding spirit of racing.
              </p>
              <p>
                Drawing deep inspiration from Ajith Kumar&apos;s celebrated racing career in Formula 3 and FIA Formula 2, our garage embodies the core racing principles: discipline, uncompromising precision, and an unquenchable thirst for performance.
              </p>
            </div>
          </div>

          {/* Right Dual Image Showcase */}
          <div className="lg:col-span-6 space-y-6">
            <ImagePlaceholder
              src="/images/about/about-01.jpg"
              label="ABOUT — RACING DNA"
              aspectRatio="16/9"
              badgeText="GARAGE FOUNDATION"
              className="w-full shadow-2xl"
            />
            <div className="grid grid-cols-2 gap-4">
              <ImagePlaceholder
                src="/images/about/about-02.jpg"
                label="ABOUT — PADDOCK BREW"
                aspectRatio="4/3"
                badgeText="ARTISAN ROAST"
              />
              <div className="p-6 rounded-xl bg-garage-black border border-racing-red/40 flex flex-col justify-center text-center">
                <span className="font-display font-black text-3xl text-velocity-yellow">
                  100%
                </span>
                <span className="font-racing font-bold text-xs text-metallic-silver uppercase tracking-wider mt-1">
                  PETROLHEAD SOUL
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INSIDE THE GARAGE (Interactive Tour) */}
      <section className="relative py-24 bg-garage-black border-t border-b border-white/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            sectorNumber="02"
            tag="PADDOCK TOUR"
            title={
              <>
                INSIDE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow">
                  THE GARAGE.
                </span>
              </>
            }
            subtitle="Explore the automotive details and custom engineering that makes our Coimbatore cafe truly one-of-a-kind."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GARAGE_TOUR.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPhoto(item)}
                className="bg-carbon-black border border-metallic-silver/20 hover:border-racing-red/80 rounded-xl p-4 cursor-pointer group transition-all duration-300 shadow-xl"
                data-cursor-hover
                data-cursor-text="INSPECT"
              >
                <div className="mb-3 overflow-hidden rounded-lg">
                  <ImagePlaceholder
                    src={item.src}
                    label={item.label}
                    aspectRatio="16/9"
                    badgeText={`ZONE 0${idx + 1}`}
                  />
                </div>
                <h4 className="font-display font-bold text-base text-performance-white uppercase group-hover:text-turbo-orange transition-colors">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-metallic-silver/70 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE FOUR PILLARS */}
      <section className="relative py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          sectorNumber="03"
          tag="CORE ETHOS"
          title={
            <>
              THE FOUR PILLARS OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow">
                OUR EXPERIENCE.
              </span>
            </>
          }
          subtitle="Every detail in our cafe was tuned to deliver an unmatched motorsport sanctuary."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUR_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="relative bg-carbon-black border border-metallic-silver/20 hover:border-racing-red/80 rounded-2xl p-6 group transition-all duration-500 hover:-translate-y-2 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-3xl text-metallic-silver/30 group-hover:text-turbo-orange transition-colors">
                      {pillar.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-garage-black border border-white/10 flex items-center justify-center text-racing-red group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-black text-3xl text-performance-white uppercase tracking-wider mb-2">
                    {pillar.title}
                  </h3>

                  <div className="text-xs font-racing font-bold text-velocity-yellow uppercase tracking-widest mb-4">
                    {pillar.subtitle}
                  </div>

                  <p className="font-sans text-xs text-metallic-silver/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-metallic-silver/50">
                  <span>TELEMETRY ACTIVE</span>
                  <span className="text-racing-red">READY</span>
                </div>

                {/* Bottom Glowing Racing Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <MagneticButton
            size="lg"
            variant="gold"
            href="/menu"
            cursorLabel="MENU"
          >
            EXPERIENCE OUR MENU ON THE GRID
          </MagneticButton>
        </div>
      </section>

      {/* Lightbox for Inspection */}
      {selectedPhoto && (
        <LightboxModal
          isOpen={!!selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          title={selectedPhoto.title}
          category="INSIDE THE GARAGE"
          caption={selectedPhoto.caption}
          imageSrc={selectedPhoto.src}
          imageLabel={selectedPhoto.label}
        />
      )}
    </div>
  );
}
