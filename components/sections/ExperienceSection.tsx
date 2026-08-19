"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";
import { SectionHeading } from "../ui/SectionHeading";
import { MagneticButton } from "../ui/MagneticButton";
import { Wrench, Shield, Utensils, Award, ArrowRight } from "lucide-react";

interface ExperienceCard {
  id: string;
  code: string;
  title: string;
  category: string;
  placeholderLabel: string;
  src: string;
  description: string;
  features: string[];
}

const EXPERIENCES: ExperienceCard[] = [
  {
    id: "exp-01",
    code: "BAY 01",
    title: "THE GARAGE",
    category: "PADDOCK ATMOSPHERE",
    placeholderLabel: "CAFE INTERIOR",
    src: "/images/about/about-01.jpg",
    description: "Reclaimed racing slicks, carbon fiber high-tops, authentic telemetry dashboards, and ambient paddock redline lighting.",
    features: ["Bespoke Tyre Tables", "Pitlane Bar Counters", "Live Track Broadcasts"],
  },
  {
    id: "exp-02",
    code: "BAY 02",
    title: "THE MACHINES",
    category: "RACING SIMULATORS & ARTIFACTS",
    placeholderLabel: "AUTOMOTIVE / RACING",
    src: "/images/gallery/machine-f2.jpg",
    description: "Formula 2 monocoque sim cockpit, authentic turbocharger cutaways, and historic motorsport gear displays.",
    features: ["Pro Racing Simulators", "Billet Turbo Wall", "Exhaust Art Installations"],
  },
  {
    id: "exp-03",
    code: "BAY 03",
    title: "THE FOOD",
    category: "HIGH-OCTANE FLAVOURS",
    placeholderLabel: "FOOD EXPERIENCE",
    src: "/images/menu/burger-01.jpg",
    description: "Flame-seared smash burgers, nitrogen-charged cold brews, and podium-worthy gourmet desserts crafted for connoisseurs.",
    features: ["V8 Turbo Smash Burgers", "Nitro Coffee On Tap", "Podium Finish Desserts"],
  },
  {
    id: "exp-04",
    code: "BAY 04",
    title: "THE LEGACY",
    category: "TRIBUTE & SPIRIT",
    placeholderLabel: "AJITH KUMAR TRIBUTE",
    src: "/images/ajith/racing-01.jpg",
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
      // Only do pinned horizontal scroll on desktop (screens >= 1024px)
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const totalWidth = scrollTrackRef.current!.scrollWidth - window.innerWidth + 120;

        gsap.to(scrollTrackRef.current, {
          x: () => -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${totalWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-carbon-black text-performance-white py-24 lg:py-0 lg:flex lg:flex-col lg:justify-center overflow-hidden select-none border-t border-b border-white/5"
    >
      {/* Top Background Atmosphere */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] rounded-full bg-turbo-orange/10 blur-[150px] pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8 lg:mb-12">
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
        />
      </div>

      {/* Horizontal Scroll Track Container */}
      <div className="w-full overflow-x-auto lg:overflow-visible no-scrollbar">
        <div
          ref={scrollTrackRef}
          className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 lg:px-8 lg:w-max pb-8 lg:pb-0"
        >
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className="w-full lg:w-[480px] shrink-0 bg-garage-black border border-metallic-silver/20 rounded-2xl p-6 relative group hover:border-racing-red/60 transition-all duration-500 shadow-xl overflow-hidden"
            >
              {/* Top Card Race Bay Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-racing font-black text-velocity-yellow tracking-[0.25em] bg-turbo-black px-3 py-1 rounded border border-velocity-yellow/30">
                  {exp.code}
                </span>
                <span className="text-[10px] font-mono text-metallic-silver/60 uppercase">
                  {exp.category}
                </span>
              </div>

              {/* Placeholder Visual */}
              <div className="mb-6 overflow-hidden rounded-xl">
                <ImagePlaceholder
                  src={exp.src}
                  label={exp.placeholderLabel}
                  aspectRatio="16/9"
                  badgeText={exp.code}
                />
              </div>

              {/* Title & Description */}
              <h3 className="font-display font-black text-2xl uppercase tracking-wider text-performance-white group-hover:text-turbo-orange transition-colors mb-3">
                {exp.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-metallic-silver/80 leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Features List */}
              <div className="space-y-2 border-t border-white/10 pt-4 mb-6 text-xs font-racing tracking-wider text-metallic-silver">
                {exp.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-racing-red" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Card Action */}
              <div className="pt-2">
                <MagneticButton
                  size="sm"
                  variant="outline"
                  href={exp.id === "exp-04" ? "/ajith-kumar" : exp.id === "exp-03" ? "/menu" : "/about"}
                  cursorLabel="EXP"
                >
                  DISCOVER {exp.title}
                </MagneticButton>
              </div>

              {/* Hover Speed Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
