"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  caption?: string;
  imageSrc: string;
  imageLabel?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  title,
  category,
  caption,
  imageSrc,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-turbo-black/95 backdrop-blur-2xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl w-full bg-garage-black border border-racing-red/50 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(225,6,0,0.3)] flex flex-col max-h-[92vh]"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-carbon-black shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-racing font-bold tracking-widest text-racing-red bg-racing-red/10 px-2.5 py-0.5 rounded border border-racing-red/30 uppercase">
                {category}
              </span>
              <h3 className="font-display font-black text-base sm:text-lg md:text-xl text-performance-white uppercase tracking-wider line-clamp-1">
                {title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-turbo-black/80 border border-white/10 text-metallic-silver hover:text-white hover:border-racing-red/50 transition-colors shrink-0 ml-4"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Visual with Perfect Contain Fit */}
          <div className="p-4 sm:p-6 flex flex-col flex-1 overflow-y-auto">
            <div className="relative w-full h-[48vh] sm:h-[60vh] max-h-[620px] bg-black/70 rounded-xl overflow-hidden flex items-center justify-center border border-white/10 shadow-inner">
              <Image
                src={imageSrc}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 85vw"
                className="object-contain p-1"
                priority
                unoptimized={imageSrc.startsWith("http")}
              />
            </div>

            {caption && (
              <p className="mt-4 text-xs sm:text-sm text-metallic-silver/90 font-sans leading-relaxed border-l-2 border-turbo-orange pl-3">
                {caption}
              </p>
            )}
          </div>

          {/* Bottom Telemetry */}
          <div className="px-6 py-2.5 bg-turbo-black border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-metallic-silver/50 shrink-0">
            <span>THE WHEELS TURBO CAFE // COIMBATORE</span>
            <span>HIGH-DEFINITION MOTORSPORT ARCHIVE</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
