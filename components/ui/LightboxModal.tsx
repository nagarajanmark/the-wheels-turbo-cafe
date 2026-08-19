"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Flame, Maximize2 } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  caption?: string;
  imageSrc: string;
  imageLabel: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  title,
  category,
  caption,
  imageSrc,
  imageLabel,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-turbo-black/95 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          className="relative max-w-4xl w-full bg-garage-black border border-racing-red/50 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(225,6,0,0.3)]"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-carbon-black">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-racing font-bold tracking-widest text-racing-red bg-racing-red/10 px-2.5 py-0.5 rounded border border-racing-red/30 uppercase">
                {category}
              </span>
              <h3 className="font-display font-black text-lg sm:text-xl text-performance-white uppercase tracking-wider">
                {title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-turbo-black/80 border border-white/10 text-metallic-silver hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Visual */}
          <div className="p-4 sm:p-6">
            <ImagePlaceholder
              src={imageSrc}
              label={imageLabel}
              aspectRatio="16/9"
              className="w-full max-h-[60vh]"
            />

            {caption && (
              <p className="mt-4 text-xs sm:text-sm text-metallic-silver/90 font-sans leading-relaxed border-l-2 border-turbo-orange pl-3">
                {caption}
              </p>
            )}
          </div>

          {/* Bottom Telemetry */}
          <div className="px-6 py-3 bg-turbo-black border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-metallic-silver/50">
            <span>THE WHEELS TURBO CAFE // COIMBATORE</span>
            <span>HIGH-DEFINITION MOTORSPORT ARCHIVE</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
