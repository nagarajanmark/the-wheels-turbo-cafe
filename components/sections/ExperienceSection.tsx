"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";
import { SectionHeading } from "../ui/SectionHeading";

interface ExperienceCard {
  id: string;
  code: string;
  title: string;
  category: string;
  placeholderLabel: string;
  src: string;
  alt?: string;
  description: string;
  features: string[];
}

const EXPERIENCES: ExperienceCard[] = [
  {
    id: "exp-01",
    code: "BAY 01",
    title: "THE GARAGE",
    category: "PADDOCK ATMOSPHERE",
    placeholderLabel: "GARAGE AMBIENCE // RS PURAM",
    src: "/images/gallery/coimbatore-theme-cafe-garage-seating-area.jpg",
    alt: "The Wheels Turbo Cafe dining area with custom racing tyre tables, bucket seating, and motorsport wall graphics in RS Puram Coimbatore",
    description: "Reclaimed racing slicks, carbon fiber high-tops, authentic telemetry dashboards, and ambient paddock redline lighting in RS Puram Coimbatore.",
    features: ["Bespoke Tyre Tables", "Pitlane Bar Counters", "Live Track Broadcasts"],
  },
  {
    id: "exp-02",
    code: "BAY 02",
    title: "THE MACHINES",
    category: "RACING SIMULATORS & ARTIFACTS",
    placeholderLabel: "RACING SIMULATORS & MACHINES",
    src: "/images/ajith/ak-racing-team-porsche-on-track.jpg",
    alt: "Ajith Kumar Racing Porsche 911 GT3 Cup on track - The Wheels Turbo Cafe Coimbatore tribute",
    description: "Formula 2 monocoque sim cockpit, authentic turbocharger cutaways, and historic motorsport gear displays.",
    features: ["Pro Racing Simulators", "Billet Turbo Wall", "Exhaust Art Installations"],
  },
  {
    id: "exp-03",
    code: "BAY 03",
    title: "THE FOOD",
    category: "HIGH-OCTANE FLAVOURS",
    placeholderLabel: "ARTISANAL SMASH BURGERS & FOOD",
    src: "/images/menu/best-double-patty-chicken-burger-in-coimbatore.jpg",
    alt: "Double patty smash burger served fresh at The Wheels Turbo Cafe in Coimbatore",
    description: "Flame-seared smash burgers, nitrogen-charged cold brews, and podium-worthy gourmet desserts crafted for connoisseurs.",
    features: ["V8 Turbo Smash Burgers", "Nitro Coffee On Tap", "Podium Finish Desserts"],
  },
  {
    id: "exp-04",
    code: "BAY 04",
    title: "THE LEGACY",
    category: "TRIBUTE & SPIRIT",
    placeholderLabel: "MOTORSPORT LEGACY TRIBUTE",
    src: "/images/ajith/thala-ajith-kumar-official-racing-driver-suit.jpg",
    alt: "Thala Ajith Kumar Racing Legacy Tribute Montage at The Wheels Turbo Cafe Coimbatore",
    description: "Celebrating Indian motorsport achievements, international Formula racing heritage, and Ajith Kumar's championship racing journey.",
    features: ["F2 & F3 Racing Archives", "Helmets of Champions", "Fan Motorsport Community"],
  },
];

export const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !scrollTrackRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Pinned horizontal scroll on desktop (screens >= 1024px)
      mm.add("(min-width: 1024px)", () => {
        const track = scrollTrackRef.current;
        const section = sectionRef.current;
        if (!track || !section) return;

        const getDistance = () => track.scrollWidth - window.innerWidth + 100;

        gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.max(1200, getDistance() * 1.2)}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="garage-intro"
      className="relative w-full bg-carbon-black text-performance-white py-16 lg:py-8 lg:min-h-screen lg:flex lg:flex-col lg:justify-center select-none border-t border-b border-white/5 overflow-hidden"
    >
      {/* Background Volumetric Glows */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] rounded-full bg-turbo-orange/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] rounded-full bg-racing-red/10 blur-[150px] pointer-events-none" />

      {/* Header Container (Compact for seamless vertical alignment) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-2 lg:pt-4 shrink-0 relative z-10">
        <SectionHeading
          sectorNumber="03"
          tag="PADDOCK BAYS"
          title={
            <>
              THE FOUR CORNERS OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow">
                THE TURBO EXPERIENCE.
              </span>
            </>
          }
          subtitle="Explore the four interactive zones that define The Wheels Turbo Cafe in Coimbatore."
          className="mb-3 md:mb-5"
        />
      </div>

      {/* Horizontal Scroll Track (Pinned on Desktop) */}
      <div className="w-full overflow-x-auto lg:overflow-visible no-scrollbar relative z-10 pb-2 lg:pb-6 shrink-0">
        <div
          ref={scrollTrackRef}
          className="flex flex-col lg:flex-row gap-4 sm:gap-5 px-4 sm:px-6 lg:px-8 lg:w-max items-stretch"
        >
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="w-full lg:w-[320px] xl:w-[360px] 2xl:w-[390px] shrink-0 bg-garage-black border border-metallic-silver/20 hover:border-racing-red/60 rounded-xl p-4 sm:p-5 relative group transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Corner Calipers */}
              <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t-2 border-l-2 border-racing-red/50 group-hover:border-racing-red transition-colors" />
              <div className="absolute top-2.5 right-2.5 w-2 h-2 border-t-2 border-r-2 border-racing-red/50 group-hover:border-racing-red transition-colors" />

              <div>
                {/* Top Card Race Bay Tag */}
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-racing font-black text-velocity-yellow tracking-[0.2em] bg-turbo-black px-2.5 py-0.5 rounded border border-velocity-yellow/30">
                    {exp.code}
                  </span>
                  <span className="text-[10px] font-mono text-metallic-silver/60 uppercase tracking-wider">
                    {exp.category}
                  </span>
                </div>

                {/* Visual */}
                <div className="mb-3 overflow-hidden rounded-lg">
                  <ImagePlaceholder
                    src={exp.src}
                    alt={exp.alt}
                    label={exp.placeholderLabel}
                    aspectRatio="16/9"
                  />
                </div>

                {/* Bay Title & Description */}
                <h3 className="font-display font-black text-base sm:text-lg xl:text-xl uppercase tracking-wider text-performance-white mb-1.5 group-hover:text-turbo-orange transition-colors">
                  {exp.title}
                </h3>
                <p className="font-sans text-[11px] sm:text-xs text-metallic-silver/80 leading-relaxed mb-3 line-clamp-3">
                  {exp.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-1.5 border-t border-white/10 pt-2.5 mt-1">
                {exp.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-center gap-2 text-[10.5px] sm:text-[11px] font-racing text-metallic-silver"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-racing-red shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



