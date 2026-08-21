"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "./BrandLogo";
import { Flame, FastForward } from "lucide-react";

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [rpm, setRpm] = useState<number>(0);
  const [stage, setStage] = useState<"IDLE" | "REV" | "REDLINE" | "FINISHED">("IDLE");
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const finishPreloader = useCallback(() => {
    setRpm(8800);
    setStage("FINISHED");
    setIsVisible(false);
    if (onComplete) onComplete();
  }, [onComplete]);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1200; // 1.2s rapid supercar throttle rev
    let animationFrameId: number;

    const animateRpm = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);

      // Supercar throttle ramp curve
      const easeProgress = Math.pow(progress, 1.4);
      const currentRpm = Math.round(easeProgress * 8800);

      setRpm(currentRpm);

      if (currentRpm >= 7500) {
        setStage("REDLINE");
      } else if (currentRpm > 400) {
        setStage("REV");
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateRpm);
      } else {
        // Full RPM 8800 reached -> INSTANTLY dismiss preloader and reveal website!
        finishPreloader();
      }
    };

    animationFrameId = requestAnimationFrame(animateRpm);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [finishPreloader]);

  const rpmProgress = Math.min(100, (rpm / 8800) * 100);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.01,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-turbo-black overflow-hidden select-none pointer-events-none"
        >
          {/* Ambient Red & Orange Radial Glow */}
          <div className="absolute w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] rounded-full bg-gradient-to-tr from-racing-red/25 via-turbo-orange/15 to-transparent blur-[80px] pointer-events-none" />

          {/* Flash Racing Lines at Redline */}
          {stage === "REDLINE" && (
            <div className="absolute inset-0 bg-racing-red/10 pointer-events-none animate-pulse" />
          )}

          {/* Center Brand Identity & RPM Dashboard */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-md w-full">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mb-6"
            >
              <BrandLogo size="hero" showTagline={true} isLink={false} />
            </motion.div>

            {/* Tachometer Display Box */}
            <div className="w-full bg-carbon-black/90 border border-metallic-silver/20 rounded-xl p-5 backdrop-blur-sm relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)]">
              {/* Corner Calipers */}
              <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-racing-red" />
              <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-racing-red" />
              <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-racing-red" />
              <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-racing-red" />

              {/* Digital RPM Counter */}
              <div className="flex items-baseline justify-center gap-2 mb-3">
                <span
                  className={`font-display text-4xl sm:text-5xl font-black tracking-wider transition-colors duration-150 ${
                    stage === "REDLINE"
                      ? "text-racing-red text-glow-red"
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
              <div className="relative w-full h-3 bg-garage-black rounded-full overflow-hidden border border-white/10 p-0.5 mb-3">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-velocity-yellow via-turbo-orange to-racing-red"
                  style={{ width: `${rpmProgress}%` }}
                  transition={{ ease: "easeOut", duration: 0.15 }}
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
            <div className="mt-6 space-y-1">
              <h2
                className={`font-display text-lg sm:text-xl font-black tracking-[0.2em] uppercase transition-all duration-200 ${
                  stage === "REDLINE"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-glow-red"
                    : "text-performance-white"
                }`}
              >
                START YOUR ENGINES.
              </h2>
              <p className="text-[10px] font-racing tracking-[0.25em] text-metallic-silver/70 uppercase">
                COIMBATORE MOTORSPORT PADDOCK CAFE
              </p>
            </div>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="absolute bottom-4 inset-x-6 flex justify-between items-center text-[9px] font-mono text-metallic-silver/40 border-t border-white/5 pt-2">
            <span>SYSTEM: IGNITION ON // MAX BOOST AT 8800 RPM</span>
            <span>RS PURAM, COIMBATORE</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

