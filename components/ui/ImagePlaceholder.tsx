"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Gauge, Flame, Camera, Sparkles } from "lucide-react";

interface ImagePlaceholderProps {
  src?: string;
  alt?: string;
  label?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/4" | "21/9" | "auto";
  className?: string;
  priority?: boolean;
  fill?: boolean;
  objectFit?: "cover" | "contain";
  badgeText?: string;
  variant?: "default" | "gold" | "redline";
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt = "The Wheels Turbo Cafe Motorsport Image",
  label = "RACING PADDOCK VISUAL",
  aspectRatio = "16/9",
  className = "",
  priority = false,
  fill = true,
  objectFit = "cover",
  badgeText,
  variant = "default",
}) => {
  const [imageExists, setImageExists] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (!src) {
      setImageExists(false);
      setChecked(true);
      return;
    }

    // Verify if local image exists in public folder
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setImageExists(true);
      setChecked(true);
    };
    img.onerror = () => {
      setImageExists(false);
      setChecked(true);
    };
  }, [src]);

  const aspectRatioClasses = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "3/4": "aspect-[3/4]",
    "21/9": "aspect-[21/9]",
    "auto": "h-full w-full",
  }[aspectRatio];

  const variantBorders = {
    default: "border-metallic-silver/20 group-hover:border-racing-red/60",
    gold: "border-velocity-yellow/30 group-hover:border-velocity-yellow/80",
    redline: "border-racing-red/40 group-hover:border-racing-red/90",
  }[variant];

  const variantAccents = {
    default: "from-racing-red via-turbo-orange to-transparent",
    gold: "from-velocity-yellow via-turbo-orange to-transparent",
    redline: "from-racing-red via-racing-red to-transparent",
  }[variant];

  return (
    <div
      className={`relative group overflow-hidden bg-carbon-black rounded-lg border ${variantBorders} transition-all duration-500 shadow-2xl ${aspectRatioClasses} ${className}`}
    >
      {/* Active Real Image if found */}
      {imageExists && src ? (
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill={fill}
            priority={priority}
            className={`transition-transform duration-700 group-hover:scale-105 ${
              objectFit === "contain" ? "object-contain" : "object-cover"
            }`}
          />
          {/* Subtle Ambient Racing Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-turbo-black/90 via-transparent to-turbo-black/30 pointer-events-none" />
        </div>
      ) : (
        /* Motorsport Telemetry Placeholder */
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center select-none bg-carbon-pattern bg-racing-grid">
          {/* Ambient Corner Calipers / Motorsport Reticle */}
          <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-racing-red/70 transition-colors group-hover:border-racing-red" />
          <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-racing-red/70 transition-colors group-hover:border-racing-red" />
          <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-racing-red/70 transition-colors group-hover:border-racing-red" />
          <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-racing-red/70 transition-colors group-hover:border-racing-red" />

          {/* Animated Speed Scanline */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-racing-red/5 to-transparent h-12 animate-scanline pointer-events-none opacity-60" />

          {/* Animated Velocity Edge Glow */}
          <div
            className={`absolute -inset-[1px] bg-gradient-to-r ${variantAccents} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-lg`}
            style={{ mixBlendMode: "screen" }}
          />

          {/* Center Motorsport Icon & Flame Glow */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-3">
            <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-garage-black/90 border border-racing-red/30 group-hover:border-racing-red/70 group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(225,6,0,0.25)]">
              <Gauge className="w-7 h-7 md:w-8 md:h-8 text-racing-red group-hover:text-turbo-orange transition-colors" />
              <Flame className="absolute -top-1 -right-1 w-4 h-4 text-velocity-yellow animate-pulse" />
            </div>

            {/* Label Display */}
            <div className="space-y-1 max-w-[85%]">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] tracking-widest font-racing font-bold uppercase bg-racing-red/10 border border-racing-red/30 text-racing-red">
                <Sparkles className="w-3 h-3 text-velocity-yellow" />
                <span>IMAGE PLACEHOLDER</span>
              </div>
              <h4 className="font-display font-bold text-xs md:text-sm tracking-wider text-performance-white group-hover:text-turbo-orange transition-colors uppercase line-clamp-2">
                {label}
              </h4>
              {src && (
                <p className="text-[10px] tracking-widest font-mono text-metallic-silver/60 group-hover:text-metallic-silver transition-colors break-all">
                  DROP IN: {src}
                </p>
              )}
            </div>
          </div>

          {/* Telemetry Footer Line */}
          <div className="absolute bottom-2 inset-x-6 flex items-center justify-between text-[9px] font-mono text-metallic-silver/40">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-racing-red animate-ping" />
              TURBO PADDOCK
            </span>
            <span>{aspectRatio.toUpperCase()} READY</span>
          </div>

          {/* Animated Racing Line Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Optional Badge Tag */}
      {badgeText && (
        <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded bg-turbo-black/85 backdrop-blur-md border border-racing-red/40 text-[10px] font-racing font-black tracking-widest text-velocity-yellow uppercase">
          {badgeText}
        </div>
      )}
    </div>
  );
};
