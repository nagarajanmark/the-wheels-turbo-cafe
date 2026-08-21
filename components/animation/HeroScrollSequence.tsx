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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
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
    }, containerRef);

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
      ref={containerRef}
      className="relative w-full h-screen bg-turbo-black text-performance-white overflow-hidden select-none border-t border-b border-white/5"
    >
      {/* Dynamic Background Volumetric Glow */}
      <div
        ref={bgGlowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] rounded-full bg-racing-red/20 blur-[100px] sm:blur-[130px] pointer-events-none transition-all duration-500"
      />

      {/* Speed Lines */}
      <div
        ref={speedLinesRef}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-turbo-orange/5 to-turbo-black pointer-events-none opacity-20"
      >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(225,6,0,0.08)_41px,transparent_42px)] animate-pulse" />
      </div>

      {/* Persistent Live HUD Sector & RPM Gauge */}
      <div className="absolute top-20 sm:top-24 left-4 sm:left-12 z-30 flex items-center gap-2 sm:gap-3">
        <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded bg-garage-black/80 border border-racing-red/40 backdrop-blur-md flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-racing-red animate-ping" />
          <span className="text-metallic-silver/60 hidden xs:inline">SEQUENCE</span>
          <span className="text-velocity-yellow font-bold">STAGE 0{currentStageNum}/05</span>
        </div>
      </div>

      <div className="absolute top-20 sm:top-24 right-4 sm:right-12 z-30 flex items-center gap-2 sm:gap-3">
        <div className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded bg-garage-black/80 border border-metallic-silver/20 backdrop-blur-md flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono">
          <Gauge className="w-3.5 h-3.5 text-turbo-orange" />
          <span className="text-metallic-silver/60 hidden xs:inline">RPM:</span>
          <span className="text-performance-white font-bold font-display">{liveRpm}</span>
        </div>
      </div>

      {/* STAGE 01 */}
      <div
        ref={stage1Ref}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-racing-red/10 border border-racing-red/40 text-racing-red text-[10px] sm:text-xs font-racing font-bold tracking-[0.25em] uppercase mb-4 sm:mb-6">
          <Flame className="w-3.5 h-3.5 text-turbo-orange" />
          STAGE 01 // COLD START
        </div>
        <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-9xl uppercase tracking-tighter text-performance-white drop-shadow-[0_0_35px_rgba(225,6,0,0.5)]">
          IGNITION ON.
        </h2>
        <p className="mt-3 sm:mt-4 font-sans text-sm sm:text-lg text-metallic-silver/80 max-w-lg px-2">
          The throttle awakens. Spark plugs ignite high-octane passion in the heart of Coimbatore.
        </p>
        <div className="mt-6 sm:mt-8 flex items-center gap-2 text-[11px] sm:text-xs font-racing tracking-widest text-turbo-orange animate-bounce">
          <span>SCROLL TO ACCELERATE</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* STAGE 02 */}
      <div
        ref={stage2Ref}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 opacity-0 pointer-events-none"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-turbo-orange/10 border border-turbo-orange/40 text-turbo-orange text-[10px] sm:text-xs font-racing font-bold tracking-[0.25em] uppercase mb-4 sm:mb-6">
          <Zap className="w-3.5 h-3.5 text-velocity-yellow" />
          STAGE 02 // SPOOLING TURBO
        </div>
        <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-9xl uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-glow-orange leading-none">
          BUILDING SPEED.
        </h2>
        <p className="mt-3 sm:mt-4 font-sans text-sm sm:text-lg text-metallic-silver/80 max-w-lg px-2">
          Boost pressure climbing. 2.0 Bar of pure adrenaline charging the atmosphere.
        </p>
      </div>

      {/* STAGE 03 */}
      <div
        ref={stage3Ref}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 opacity-0 pointer-events-none"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 border border-white/20 text-performance-white text-[10px] sm:text-xs font-racing font-bold tracking-[0.25em] uppercase mb-4 sm:mb-6">
          STAGE 03 // APEX SHIFT
        </div>
        <h2 className="font-display font-black text-4xl sm:text-7xl lg:text-9xl uppercase tracking-tighter leading-[0.95] text-performance-white">
          THIS ISN&apos;T <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red to-turbo-orange">
            JUST A CAFE.
          </span>
        </h2>
        <p className="mt-4 sm:mt-6 font-sans text-sm sm:text-lg text-metallic-silver/80 max-w-md px-2">
          A high-performance sanctuary engineered for the automotive soul.
        </p>
      </div>

      {/* STAGE 04 */}
      <div
        ref={stage4Ref}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center px-3 sm:px-6 opacity-0 pointer-events-none"
      >
        <div className="text-center mb-4 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-velocity-yellow/10 border border-velocity-yellow/40 text-velocity-yellow text-[10px] sm:text-xs font-racing font-bold tracking-[0.25em] uppercase mb-2 sm:mb-3">
            STAGE 04 // 4 CORNERS OF PASSION
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-6xl uppercase tracking-tight text-performance-white">
            THIS IS A DESTINATION FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow">
              PETROLHEADS.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-5xl">
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
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 rounded bg-racing-red/20 border border-racing-red text-velocity-yellow text-[10px] sm:text-xs font-racing font-black tracking-[0.3em] uppercase mb-3 sm:mb-4 shadow-[0_0_20px_rgba(225,6,0,0.5)]">
          <Flame className="w-3.5 h-3.5 text-racing-red" />
          STAGE 05 // MAXIMUM BOOST
        </div>
        <h2 className="font-display font-black text-4xl sm:text-7xl lg:text-9xl uppercase tracking-tighter text-performance-white leading-none">
          THE WHEELS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-glow-red">
            TURBO CAFE.
          </span>
        </h2>
        <p className="mt-3 sm:mt-4 font-sans text-sm sm:text-lg text-metallic-silver/90 max-w-xl px-2">
          Coimbatore&apos;s premier motorsport sanctuary. Step inside the racing garage and experience culinary horsepower.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 relative z-50 pointer-events-auto w-full sm:w-auto max-w-xs sm:max-w-none">
          <MagneticButton size="lg" variant="gold" href="#garage-intro" cursorLabel="ENTER" className="w-full sm:w-auto">
            EXPLORE THE GARAGE
          </MagneticButton>
          <MagneticButton size="lg" variant="secondary" href="/menu" cursorLabel="MENU" className="w-full sm:w-auto">
            VIEW FULL MENU
          </MagneticButton>
        </div>
      </div>

      {/* Pinned Bottom Track Strip */}
      <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-8 z-30 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-metallic-silver/50 border-t border-white/10 pt-2 sm:pt-3">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-velocity-yellow" />
          <span>AUTONOMOUS SCROLL ACTIVE</span>
        </div>
        <div>PROGRESS: {Math.min(100, Math.round(currentStageNum * 20))}%</div>
        <div className="hidden xs:block">KARI MOTOR SPEEDWAY CORRIDOR</div>
      </div>
    </section>
  );
};

