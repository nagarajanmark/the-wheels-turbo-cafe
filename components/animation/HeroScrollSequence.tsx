"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";
import { MagneticButton } from "../ui/MagneticButton";
import { Gauge, Flame, Zap, Compass, ChevronDown } from "lucide-react";

export const HeroScrollSequence: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stage1Ref = useRef<HTMLDivElement>(null);
  const stage2Ref = useRef<HTMLDivElement>(null);
  const stage3Ref = useRef<HTMLDivElement>(null);
  const stage4Ref = useRef<HTMLDivElement>(null);
  const stage5Ref = useRef<HTMLDivElement>(null);
  const rpmCounterRef = useRef<HTMLSpanElement>(null);
  const bgGlowRef = useRef<HTMLDivElement>(null);
  const speedLinesRef = useRef<HTMLDivElement>(null);

  const [currentStageNum, setCurrentStageNum] = useState<number>(1);
  const [liveRpm, setLiveRpm] = useState<number>(1200);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=380%",
          pin: true,
          scrub: 0.8,
          onUpdate: (self) => {
            const progress = self.progress;
            const computedRpm = Math.round(1200 + progress * 7600);
            setLiveRpm(computedRpm);

            if (progress < 0.2) setCurrentStageNum(1);
            else if (progress < 0.42) setCurrentStageNum(2);
            else if (progress < 0.65) setCurrentStageNum(3);
            else if (progress < 0.85) setCurrentStageNum(4);
            else setCurrentStageNum(5);
          },
        },
      });

      // STAGE 01 -> STAGE 02
      tl.to(stage1Ref.current, {
        opacity: 0,
        scale: 0.9,
        filter: "blur(8px)",
        duration: 1,
      })
      .fromTo(
        stage2Ref.current,
        { opacity: 0, scale: 1.15, filter: "blur(12px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1 },
        "-=0.4"
      )
      .to(bgGlowRef.current, {
        opacity: 0.6,
        scale: 1.3,
        duration: 1,
      }, "<")
      .to(speedLinesRef.current, {
        opacity: 0.8,
        duration: 1,
      }, "<");

      // STAGE 02 -> STAGE 03
      tl.to(stage2Ref.current, {
        opacity: 0,
        y: -40,
        filter: "blur(8px)",
        duration: 1,
      })
      .fromTo(
        stage3Ref.current,
        { opacity: 0, scale: 0.85, filter: "blur(10px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1 },
        "-=0.4"
      )
      .to(bgGlowRef.current, {
        backgroundColor: "#e10600",
        opacity: 0.45,
        duration: 1,
      }, "<");

      // STAGE 03 -> STAGE 04 (Floating petrolhead placeholders)
      tl.to(stage3Ref.current, {
        opacity: 0,
        scale: 1.2,
        duration: 1,
      })
      .fromTo(
        stage4Ref.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1 },
        "-=0.4"
      );

      // STAGE 04 -> STAGE 05 (Grand Wheels Turbo Cafe reveal)
      tl.to(stage4Ref.current, {
        opacity: 0,
        y: -50,
        filter: "blur(10px)",
        duration: 1,
      })
      .fromTo(
        stage5Ref.current,
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2 },
        "-=0.3"
      )
      .to(bgGlowRef.current, {
        opacity: 0.8,
        scale: 1.6,
        duration: 1,
      }, "<");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-turbo-black text-performance-white overflow-hidden select-none"
    >
      {/* Dynamic Background Volumetric Glow */}
      <div
        ref={bgGlowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-racing-red/20 blur-[150px] pointer-events-none transition-all duration-700"
      />

      {/* Speed Lines & Motion Blur Canvas */}
      <div
        ref={speedLinesRef}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-turbo-orange/5 to-turbo-black pointer-events-none opacity-20 transition-opacity"
      >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(225,6,0,0.08)_41px,transparent_42px)] animate-pulse" />
      </div>

      {/* Persistent Live HUD Sector & RPM Gauge (Top / Bottom corner) */}
      <div className="absolute top-24 left-6 md:left-12 z-30 flex items-center gap-3">
        <div className="px-3 py-1.5 rounded bg-garage-black/80 border border-racing-red/40 backdrop-blur-md flex items-center gap-2 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-racing-red animate-ping" />
          <span className="text-metallic-silver/60">CINEMATIC SEQUENCE</span>
          <span className="text-velocity-yellow font-bold">STAGE 0{currentStageNum} / 05</span>
        </div>
      </div>

      <div className="absolute top-24 right-6 md:right-12 z-30 hidden sm:flex items-center gap-3">
        <div className="px-3.5 py-1.5 rounded bg-garage-black/80 border border-metallic-silver/20 backdrop-blur-md flex items-center gap-2 text-xs font-mono">
          <Gauge className="w-4 h-4 text-turbo-orange" />
          <span className="text-metallic-silver/60">LIVE TELEMETRY:</span>
          <span className="text-performance-white font-bold font-display">{liveRpm} RPM</span>
        </div>
      </div>

      {/* ========================================================
          STAGE 01 — IGNITION ON
         ======================================================== */}
      <div
        ref={stage1Ref}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-racing-red/10 border border-racing-red/40 text-racing-red text-xs font-racing font-bold tracking-[0.3em] uppercase mb-6">
          <Flame className="w-4 h-4 text-turbo-orange" />
          STAGE 01 // COLD START
        </div>

        <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-performance-white drop-shadow-[0_0_35px_rgba(225,6,0,0.5)]">
          IGNITION ON.
        </h1>

        <p className="mt-4 font-sans text-sm md:text-lg text-metallic-silver/80 max-w-lg">
          The throttle awakens. Spark plugs ignite high-octane passion in the heart of Coimbatore.
        </p>

        <div className="mt-8 flex items-center gap-2 text-xs font-racing tracking-widest text-turbo-orange animate-bounce">
          <span>SCROLL TO ACCELERATE</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* ========================================================
          STAGE 02 — BUILDING SPEED
         ======================================================== */}
      <div
        ref={stage2Ref}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 opacity-0 pointer-events-none"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-turbo-orange/10 border border-turbo-orange/40 text-turbo-orange text-xs font-racing font-bold tracking-[0.3em] uppercase mb-6">
          <Zap className="w-4 h-4 text-velocity-yellow" />
          STAGE 02 // SPOOLING TURBO
        </div>

        <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-glow-orange">
          BUILDING SPEED.
        </h2>

        <p className="mt-4 font-sans text-sm md:text-lg text-metallic-silver/80 max-w-lg">
          Boost pressure climbing. 2.0 Bar of pure adrenaline charging the atmosphere.
        </p>

        {/* Speed blur motion graphic bars */}
        <div className="mt-6 flex items-center gap-2">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="h-1 bg-gradient-to-r from-racing-red to-velocity-yellow rounded-full animate-pulse"
              style={{
                width: `${(i + 1) * 12}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* ========================================================
          STAGE 03 — THIS ISN'T JUST A CAFE
         ======================================================== */}
      <div
        ref={stage3Ref}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 opacity-0 pointer-events-none"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 border border-white/20 text-performance-white text-xs font-racing font-bold tracking-[0.3em] uppercase mb-6">
          STAGE 03 // APEX SHIFT
        </div>

        <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.95] text-performance-white">
          THIS ISN&apos;T <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red to-turbo-orange">
            JUST A CAFE.
          </span>
        </h2>

        <p className="mt-6 font-sans text-sm md:text-lg text-metallic-silver/80 max-w-md">
          A high-performance sanctuary engineered for the automotive soul.
        </p>
      </div>

      {/* ========================================================
          STAGE 04 — DESTINATION FOR PETROLHEADS (Floating HUD)
         ======================================================== */}
      <div
        ref={stage4Ref}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 opacity-0 pointer-events-none"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-velocity-yellow/10 border border-velocity-yellow/40 text-velocity-yellow text-xs font-racing font-bold tracking-[0.3em] uppercase mb-3">
            STAGE 04 // 4 CORNERS OF PASSION
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-performance-white">
            THIS IS A DESTINATION FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow">
              PETROLHEADS.
            </span>
          </h2>
        </div>

        {/* 4 Floating Placeholders around the screen */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
          <div className="transform hover:scale-105 transition-transform">
            <ImagePlaceholder
              src="/images/hero/hero-racing.jpg"
              alt="Circuit racing action representing motorsport speed at The Wheels Turbo Cafe"
              label="RACING"
              aspectRatio="4/3"
              badgeText="01 // SPEED"
            />
          </div>
          <div className="transform hover:scale-105 transition-transform">
            <ImagePlaceholder
              src="/images/menu/burger-01.jpg"
              alt="Artisanal smash burgers and culinary flavours served at The Wheels Turbo Cafe in Coimbatore"
              label="FOOD"
              aspectRatio="4/3"
              badgeText="02 // FLAVOUR"
            />
          </div>
          <div className="transform hover:scale-105 transition-transform">
            <ImagePlaceholder
              src="/images/ajith/racing-01.jpg"
              alt="Ajith Kumar international motorsport racing legacy tribute"
              label="PASSION"
              aspectRatio="4/3"
              badgeText="03 // LEGACY"
            />
          </div>
          <div className="transform hover:scale-105 transition-transform">
            <ImagePlaceholder
              src="/images/gallery/gallery-01.jpg"
              alt="Petrolhead community and dining moments at The Wheels Turbo Cafe RS Puram Coimbatore"
              label="MEMORIES"
              aspectRatio="4/3"
              badgeText="04 // COMMUNITY"
            />
          </div>
        </div>
      </div>

      {/* ========================================================
          STAGE 05 — THE WHEELS TURBO CAFE FINAL REVEAL
         ======================================================== */}
      <div
        ref={stage5Ref}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 opacity-0 pointer-events-none"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded bg-racing-red/20 border border-racing-red text-velocity-yellow text-xs font-racing font-black tracking-[0.3em] uppercase mb-4 shadow-[0_0_20px_rgba(225,6,0,0.5)]">
          <Flame className="w-4 h-4 text-racing-red" />
          STAGE 05 // MAXIMUM BOOST
        </div>

        <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-performance-white leading-none">
          THE WHEELS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-glow-red">
            TURBO CAFE.
          </span>
        </h1>

        <p className="mt-4 font-sans text-sm md:text-lg text-metallic-silver/90 max-w-xl">
          Coimbatore&apos;s premier motorsport sanctuary. Step inside the racing garage and experience culinary horsepower.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <MagneticButton
            size="lg"
            variant="gold"
            href="#garage-intro"
            cursorLabel="ENTER"
          >
            EXPLORE THE GARAGE
          </MagneticButton>
          <MagneticButton
            size="lg"
            variant="secondary"
            href="/menu"
            cursorLabel="MENU"
          >
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
        <div className="hidden sm:block">
          SECTOR PROGRESS: {Math.min(100, Math.round(currentStageNum * 20))}%
        </div>
        <div>KARI MOTOR SPEEDWAY CORRIDOR</div>
      </div>
    </section>
  );
};
