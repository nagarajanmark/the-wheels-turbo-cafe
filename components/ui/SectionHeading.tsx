import React from "react";
import { Gauge, Flame } from "lucide-react";

interface SectionHeadingProps {
  sectorNumber?: string;
  tag?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  highlightGold?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  sectorNumber = "01",
  tag,
  title,
  subtitle,
  align = "left",
  className = "",
  highlightGold = false,
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <div className={`flex flex-col ${alignClasses} mb-10 md:mb-16 ${className}`}>
      {/* Sector Badge & Tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-garage-black border border-racing-red/40 text-racing-red text-[11px] font-racing font-bold tracking-[0.25em] uppercase mb-4 shadow-[0_0_15px_rgba(225,6,0,0.15)]">
        <span className="w-1.5 h-1.5 rounded-full bg-racing-red animate-ping" />
        <span className="text-metallic-silver/60">SECTOR {sectorNumber}</span>
        {tag && (
          <>
            <span className="text-white/30">•</span>
            <span className={highlightGold ? "text-velocity-yellow" : "text-turbo-orange"}>{tag}</span>
          </>
        )}
      </div>

      {/* Main Big Headline */}
      <h2 className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-performance-white tracking-tight uppercase leading-[1.08]">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 font-sans text-sm md:text-base text-metallic-silver/80 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Accent Racing Line */}
      <div
        className={`mt-6 h-[2px] w-24 bg-gradient-to-r ${
          highlightGold
            ? "from-velocity-yellow via-turbo-orange to-transparent"
            : "from-racing-red via-turbo-orange to-transparent"
        } ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
};
