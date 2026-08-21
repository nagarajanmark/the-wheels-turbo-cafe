"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";
import { MagneticButton } from "../ui/MagneticButton";
import { Gauge, Flame, Zap, Compass, ChevronDown, CheckCircle2 } from "lucide-react";

export const HeroScrollSequence: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stage1Ref = useRef<HTMLDivElement>(null);
  const stage2Ref = useRef<HTMLDivElement>(null);
  const stage3Ref = useRef<HTMLDivElement>(null);
  const stage4Ref = useRef<HTMLDivElement>(null);
  const stage5Ref = useRef<HTMLDivElement>(null);
  const bgGlowRef = useRef<HTMLDivElement>(null);
  const speedLinesRef = useRef<HTMLDivElement>(null);

  const [currentStageNum, setCurrentStageNum] = useState<number>(1);
  const [liveRpm, setLiveRpm] = useState<number>(1200);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // DESKTOP ONLY: Cinematic Pinned Scroll Experience
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=220%",
            pin: true,
            scrub: 0.6,
            onUpdate: (self) => {
              const progress = self.progress;
              const computedRpm = Math.round(1200 + progress * 7600);
              setLiveRpm(computedRpm);

              if (progress < 0.22) setCurrentStageNum(1);
              else if (progress < 0.45) setCurrentStageNum(2);
              else if (progress < 0.68) setCurrentStageNum(3);
              else if (progress < 0.88) setCurrentStageNum(4);
              else setCurrentStageNum(5);
            },
          },
        });

        // STAGE 01 -> STAGE 02
        tl.to(stage1Ref.current, {
          autoAlpha: 0,
          scale: 0.95,
          pointerEvents: "none",
          duration: 0.8,
        })
        .fromTo(
          stage2Ref.current,
          { autoAlpha: 0, scale: 1.08, pointerEvents: "none" },
          { autoAlpha: 1, scale: 1, pointerEvents: "auto", duration: 0.8 },
          "-=0.3"
        )
        .to(bgGlowRef.current, {
          opacity: 0.5,
          scale: 1.2,
          duration: 0.8,
        }, "<");

        // STAGE 02 -> STAGE 03
        tl.to(stage2Ref.current, {
          autoAlpha: 0,
          y: -30,
          pointerEvents: "none",
          duration: 0.8,
        })
        .fromTo(
          stage3Ref.current,
          { autoAlpha: 0, scale: 0.9, pointerEvents: "none" },
          { autoAlpha: 1, scale: 1, pointerEvents: "auto", duration: 0.8 },
          "-=0.3"
        )
        .to(bgGlowRef.current, {
          backgroundColor: "#e10600",
          opacity: 0.4,
          duration: 0.8,
        }, "<");

        // STAGE 03 -> STAGE 04 (Floating 4 Corners)
        tl.to(stage3Ref.current, {
          autoAlpha: 0,
          scale: 1.1,
          pointerEvents: "none",
          duration: 0.8,
        })
        .fromTo(
          stage4Ref.current,
          { autoAlpha: 0, scale: 0.92, pointerEvents: "none" },
          { autoAlpha: 1, scale: 1, pointerEvents: "auto", duration: 0.8 },
          "-=0.3"
        );

        // STAGE 04 -> STAGE 05 (Grand Wheels Turbo Cafe reveal)
        tl.to(stage4Ref.current, {
          autoAlpha: 0,
          y: -30,
          pointerEvents: "none",
          duration: 0.8,
        })
        .fromTo(
          stage5Ref.current,
          { autoAlpha: 0, scale: 0.95, y: 20, pointerEvents: "none" },
          { autoAlpha: 1, scale: 1, y: 0, pointerEvents: "auto", duration: 1 },
          "-=0.2"
        )
        .to(bgGlowRef.current, {
          opacity: 0.7,
          scale: 1.4,
          duration: 0.8,
        }, "<");
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ========================================================
          DESKTOP VIEW (Pinned GSAP Timeline >= 1024px)
         ======================================================== */}
      <section
        ref={containerRef}
        className="hidden lg:block relative w-full h-screen bg-turbo-black text-performance-white overflow-hidden select-none"
      >
        {/* Dynamic Background Volumetric Glow */}
        <div
          ref={bgGlowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-racing-red/20 blur-[130px] pointer-events-none transition-all duration-500"
        />

        {/* Speed Lines */}
        <div
          ref={speedLinesRef}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-turbo-orange/5 to-turbo-black pointer-events-none opacity-20"
        >
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(225,6,0,0.08)_41px,transparent_42px)] animate-pulse" />
        </div>

        {/* Persistent Live HUD Sector & RPM Gauge */}
        <div className="absolute top-24 left-12 z-30 flex items-center gap-3">
          <div className="px-3 py-1.5 rounded bg-garage-black/80 border border-racing-red/40 backdrop-blur-md flex items-center gap-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-racing-red animate-ping" />
            <span className="text-metallic-silver/60">CINEMATIC SEQUENCE</span>
            <span className="text-velocity-yellow font-bold">STAGE 0{currentStageNum} / 05</span>
          </div>
        </div>

        <div className="absolute top-24 right-12 z-30 flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded bg-garage-black/80 border border-metallic-silver/20 backdrop-blur-md flex items-center gap-2 text-xs font-mono">
            <Gauge className="w-4 h-4 text-turbo-orange" />
            <span className="text-metallic-silver/60">LIVE TELEMETRY:</span>
            <span className="text-performance-white font-bold font-display">{liveRpm} RPM</span>
          </div>
        </div>

        {/* STAGE 01 */}
        <div
          ref={stage1Ref}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-racing-red/10 border border-racing-red/40 text-racing-red text-xs font-racing font-bold tracking-[0.3em] uppercase mb-6">
            <Flame className="w-4 h-4 text-turbo-orange" />
            STAGE 01 // COLD START
          </div>
          <h2 className="font-display font-black text-7xl lg:text-9xl uppercase tracking-tighter text-performance-white drop-shadow-[0_0_35px_rgba(225,6,0,0.5)]">
            IGNITION ON.
          </h2>
          <p className="mt-4 font-sans text-lg text-metallic-silver/80 max-w-lg">
            The throttle awakens. Spark plugs ignite high-octane passion in the heart of Coimbatore.
          </p>
          <div className="mt-8 flex items-center gap-2 text-xs font-racing tracking-widest text-turbo-orange animate-bounce">
            <span>SCROLL TO ACCELERATE</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* STAGE 02 */}
        <div
          ref={stage2Ref}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 opacity-0 pointer-events-none"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-turbo-orange/10 border border-turbo-orange/40 text-turbo-orange text-xs font-racing font-bold tracking-[0.3em] uppercase mb-6">
            <Zap className="w-4 h-4 text-velocity-yellow" />
            STAGE 02 // SPOOLING TURBO
          </div>
          <h2 className="font-display font-black text-7xl lg:text-9xl uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-glow-orange">
            BUILDING SPEED.
          </h2>
          <p className="mt-4 font-sans text-lg text-metallic-silver/80 max-w-lg">
            Boost pressure climbing. 2.0 Bar of pure adrenaline charging the atmosphere.
          </p>
        </div>

        {/* STAGE 03 */}
        <div
          ref={stage3Ref}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 opacity-0 pointer-events-none"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 border border-white/20 text-performance-white text-xs font-racing font-bold tracking-[0.3em] uppercase mb-6">
            STAGE 03 // APEX SHIFT
          </div>
          <h2 className="font-display font-black text-7xl lg:text-9xl uppercase tracking-tighter leading-[0.95] text-performance-white">
            THIS ISN&apos;T <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red to-turbo-orange">
              JUST A CAFE.
            </span>
          </h2>
          <p className="mt-6 font-sans text-lg text-metallic-silver/80 max-w-md">
            A high-performance sanctuary engineered for the automotive soul.
          </p>
        </div>

        {/* STAGE 04 */}
        <div
          ref={stage4Ref}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 opacity-0 pointer-events-none"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-velocity-yellow/10 border border-velocity-yellow/40 text-velocity-yellow text-xs font-racing font-bold tracking-[0.3em] uppercase mb-3">
              STAGE 04 // 4 CORNERS OF PASSION
            </div>
            <h2 className="font-display font-black text-4xl lg:text-6xl uppercase tracking-tight text-performance-white">
              THIS IS A DESTINATION FOR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow">
                PETROLHEADS.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-4 w-full max-w-5xl">
            <div className="transform hover:scale-105 transition-transform">
              <ImagePlaceholder
                src="/images/hero/the-wheels-turbo-cafe-coimbatore-hero-speed-experience.jpg"
                alt="Circuit racing action at The Wheels Turbo Cafe"
                label="RACING"
                aspectRatio="4/3"
                badgeText="01 // SPEED"
              />
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <ImagePlaceholder
                src="/images/menu/best-double-patty-chicken-burger-in-coimbatore.jpg"
                alt="Artisanal smash burgers at The Wheels Turbo Cafe"
                label="FOOD"
                aspectRatio="4/3"
                badgeText="02 // FLAVOUR"
              />
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <ImagePlaceholder
                src="/images/ajith/ajith-kumar-racing-porsche-gt3-cup-car.jpg"
                alt="Ajith Kumar international motorsport racing legacy tribute"
                label="PASSION"
                aspectRatio="4/3"
                badgeText="03 // LEGACY"
              />
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <ImagePlaceholder
                src="/images/gallery/coimbatore-trending-aesthetic-cafe-experience.jpg"
                alt="Petrolhead community dining moments"
                label="MEMORIES"
                aspectRatio="4/3"
                badgeText="04 // COMMUNITY"
              />
            </div>
          </div>
        </div>

        {/* STAGE 05 */}
        <div
          ref={stage5Ref}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4 opacity-0 pointer-events-none"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded bg-racing-red/20 border border-racing-red text-velocity-yellow text-xs font-racing font-black tracking-[0.3em] uppercase mb-4 shadow-[0_0_20px_rgba(225,6,0,0.5)]">
            <Flame className="w-4 h-4 text-racing-red" />
            STAGE 05 // MAXIMUM BOOST
          </div>
          <h2 className="font-display font-black text-7xl lg:text-9xl uppercase tracking-tighter text-performance-white leading-none">
            THE WHEELS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-glow-red">
              TURBO CAFE.
            </span>
          </h2>
          <p className="mt-4 font-sans text-lg text-metallic-silver/90 max-w-xl">
            Coimbatore&apos;s premier motorsport sanctuary. Step inside the racing garage and experience culinary horsepower.
          </p>
          <div className="mt-8 flex items-center gap-4 relative z-50 pointer-events-auto">
            <MagneticButton size="lg" variant="gold" href="#garage-intro" cursorLabel="ENTER">
              EXPLORE THE GARAGE
            </MagneticButton>
            <MagneticButton size="lg" variant="secondary" href="/menu" cursorLabel="MENU">
              VIEW FULL MENU
            </MagneticButton>
          </div>
        </div>

        {/* Pinned Bottom Track Strip */}
        <div className="absolute bottom-6 inset-x-8 z-30 flex items-center justify-between text-[10px] font-mono text-metallic-silver/50 border-t border-white/10 pt-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-velocity-yellow" />
            <span>AUTONOMOUS SCROLL CAM ACTIVE</span>
          </div>
          <div>SECTOR PROGRESS: {Math.min(100, Math.round(currentStageNum * 20))}%</div>
          <div>KARI MOTOR SPEEDWAY CORRIDOR</div>
        </div>
      </section>

      {/* ========================================================
          MOBILE / TABLET VIEW (Smooth Native Scrolling < 1024px)
         ======================================================== */}
      <section className="block lg:hidden w-full bg-turbo-black text-performance-white py-12 px-4 sm:px-6 relative overflow-hidden border-t border-white/5">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-racing-red/15 blur-[90px] pointer-events-none" />

        {/* Mobile Telemetry Header */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10 text-[11px] font-mono">
          <div className="flex items-center gap-2 text-velocity-yellow">
            <span className="w-2 h-2 rounded-full bg-racing-red animate-ping" />
            <span className="font-bold">THE MOTORSPORT SANCTUARY</span>
          </div>
          <div className="text-metallic-silver/60">RS PURAM, CBE</div>
        </div>

        {/* Dynamic Mobile Hero Block */}
        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-racing-red/15 border border-racing-red/40 text-racing-red text-[10px] font-racing font-bold tracking-[0.25em] uppercase">
            <Flame className="w-3.5 h-3.5 text-turbo-orange" />
            STAGE 01 // COLD START TO REDLINE
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-performance-white leading-none">
            THIS ISN&apos;T <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow">
              JUST A CAFE.
            </span>
          </h2>

          <p className="text-sm font-sans text-metallic-silver/90 max-w-md mx-auto leading-relaxed">
            Coimbatore&apos;s premier high-performance racing garage themed sanctuary. Engineered for automotive souls, food lovers, and Thala Ajith fans.
          </p>
        </div>

        {/* 4 Pillars Grid on Mobile */}
        <div className="grid grid-cols-2 gap-3 mb-10">
          <div className="space-y-1.5">
            <ImagePlaceholder
              src="/images/hero/the-wheels-turbo-cafe-coimbatore-hero-speed-experience.jpg"
              alt="Circuit racing speed atmosphere"
              label="RACING"
              aspectRatio="4/3"
              badgeText="01 // SPEED"
            />
            <p className="text-[10px] font-mono text-metallic-silver/70 text-center">Track Heritage</p>
          </div>
          <div className="space-y-1.5">
            <ImagePlaceholder
              src="/images/menu/best-double-patty-chicken-burger-in-coimbatore.jpg"
              alt="Artisanal smash burger"
              label="FOOD"
              aspectRatio="4/3"
              badgeText="02 // FLAVOUR"
            />
            <p className="text-[10px] font-mono text-metallic-silver/70 text-center">V8 Smash Burgers</p>
          </div>
          <div className="space-y-1.5">
            <ImagePlaceholder
              src="/images/ajith/ajith-kumar-racing-porsche-gt3-cup-car.jpg"
              alt="Ajith Kumar racing tribute"
              label="PASSION"
              aspectRatio="4/3"
              badgeText="03 // LEGACY"
            />
            <p className="text-[10px] font-mono text-metallic-silver/70 text-center">Ajith Kumar Legacy</p>
          </div>
          <div className="space-y-1.5">
            <ImagePlaceholder
              src="/images/gallery/coimbatore-trending-aesthetic-cafe-experience.jpg"
              alt="Community dining atmosphere"
              label="MEMORIES"
              aspectRatio="4/3"
              badgeText="04 // COMMUNITY"
            />
            <p className="text-[10px] font-mono text-metallic-silver/70 text-center">Paddock Hangout</p>
          </div>
        </div>

        {/* Mobile Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <MagneticButton size="md" variant="gold" href="#garage-intro" cursorLabel="ENTER" className="w-full sm:w-auto text-center">
            EXPLORE THE GARAGE
          </MagneticButton>
          <MagneticButton size="md" variant="secondary" href="/menu" cursorLabel="MENU" className="w-full sm:w-auto text-center">
            VIEW FULL MENU
          </MagneticButton>
        </div>
      </section>
    </>
  );
};

