"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "./BrandLogo";
import { Flame } from "lucide-react";

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [rpm, setRpm] = useState<number>(0);
  const [stage, setStage] = useState<"IDLE" | "REV_1" | "REV_2" | "REV_3" | "REDLINE" | "FINISHED">("IDLE");
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    // Stage 1: Initial Ignition (0000 -> 2500 RPM)
    const t1 = setTimeout(() => {
      setRpm(2500);
      setStage("REV_1");
    }, 400);

    // Stage 2: Spooling Turbo (2500 -> 4500 RPM)
    const t2 = setTimeout(() => {
      setRpm(4500);
      setStage("REV_2");
    }, 900);

    // Stage 3: Boost Climax (4500 -> 6500 RPM)
    const t3 = setTimeout(() => {
      setRpm(6500);
      setStage("REV_3");
    }, 1400);

    // Stage 4: REDLINE OVERDRIVE
    const t4 = setTimeout(() => {
      setRpm(8800);
      setStage("REDLINE");
    }, 1900);

    // Stage 5: Website Reveal
    const t5 = setTimeout(() => {
      setStage("FINISHED");
      setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 700);
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  const rpmProgress = Math.min(100, (rpm / 8800) * 100);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(20px)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-turbo-black overflow-hidden select-none"
        >
          {/* Ambient Red & Orange Radial Glow */}
          <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-racing-red/20 via-turbo-orange/15 to-transparent blur-[120px] pointer-events-none animate-pulse" />

          {/* Flash Racing Lines at Redline */}
          {stage === "REDLINE" && (
            <>
              <div className="absolute inset-0 bg-racing-red/15 animate-ping pointer-events-none" />
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,90,0,0.2)_3px,transparent_4px)] pointer-events-none" />
            </>
          )}

          {/* Center Brand Identity & RPM Dashboard */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-lg w-full">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <BrandLogo size="hero" showTagline={true} isLink={false} />
            </motion.div>

            {/* Tachometer Display Box */}
            <div className="w-full bg-carbon-black/80 border border-metallic-silver/20 rounded-xl p-6 backdrop-blur-md relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)]">
              {/* Corner Calipers */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-racing-red" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-racing-red" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-racing-red" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-racing-red" />

              {/* Digital RPM Counter */}
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span
                  className={`font-display text-4xl md:text-5xl font-black tracking-wider transition-colors duration-150 ${
                    stage === "REDLINE"
                      ? "text-racing-red text-glow-red animate-redline"
                      : "text-performance-white"
                  }`}
                >
                  {rpm.toString().padStart(4, "0")}
                </span>
                <span className="font-racing font-bold text-xs tracking-[0.25em] text-metallic-silver uppercase">
                  {stage === "REDLINE" ? "REDLINE" : "RPM"}
                </span>
              </div>

              {/* Tachometer Bar Gauge */}
              <div className="relative w-full h-3.5 bg-garage-black rounded-full overflow-hidden border border-white/10 p-0.5 mb-4">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-velocity-yellow via-turbo-orange to-racing-red"
                  style={{ width: `${rpmProgress}%` }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                />
              </div>

              {/* RPM Ticks Indicator */}
              <div className="flex justify-between items-center text-[10px] font-mono text-metallic-silver/60 tracking-wider">
                <span>0</span>
                <span>2.5K</span>
                <span>4.5K</span>
                <span>6.5K</span>
                <span className="text-racing-red font-bold flex items-center gap-0.5">
                  <Flame className="w-3 h-3 text-racing-red inline" />
                  REDLINE
                </span>
              </div>
            </div>

            {/* Cinematic Action Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 space-y-1"
            >
              <h2
                className={`font-display text-xl md:text-2xl font-black tracking-[0.25em] uppercase transition-all duration-300 ${
                  stage === "REDLINE"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-glow-red scale-105"
                    : "text-performance-white"
                }`}
              >
                START YOUR ENGINES.
              </h2>
              <p className="text-[11px] font-racing tracking-[0.3em] text-metallic-silver/70 uppercase">
                COIMBATORE MOTORSPORT PADDOCK CAFE
              </p>
            </motion.div>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="absolute bottom-6 inset-x-8 flex justify-between items-center text-[10px] font-mono text-metallic-silver/40 border-t border-white/5 pt-3">
            <span>SYSTEM: READY // BOOST: MAXIMUM</span>
            <span>LAT: 11.0168° N | LNG: 76.9558° E</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
