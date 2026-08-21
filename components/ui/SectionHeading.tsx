import React from "react";

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
    <div className={`flex flex-col ${alignClasses} mb-6 sm:mb-8 md:mb-10 lg:mb-12 ${className}`}>
      {/* Sector Badge & Tag */}
      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded bg-garage-black border border-racing-red/40 text-racing-red text-[9.5px] sm:text-[11px] font-racing font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-2.5 sm:mb-3.5 shadow-[0_0_15px_rgba(225,6,0,0.15)]">
        <span className="w-1.5 h-1.5 rounded-full bg-racing-red animate-ping" />
        <span className="text-metallic-silver/60">SECTOR {sectorNumber}</span>
        {tag && (
          <>
            <span className="text-white/30">•</span>
            <span className={highlightGold ? "text-velocity-yellow" : "text-turbo-orange"}>{tag}</span>
          </>
        )}
      </div>

      {/* Main Responsive Headline */}
      <h2 className="font-display font-black text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-5xl text-performance-white tracking-tight uppercase leading-[1.08] drop-shadow-md">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-3 sm:mt-4 font-sans text-xs sm:text-sm md:text-base text-metallic-silver/80 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Accent Racing Line */}
      <div
        className={`mt-4 sm:mt-5 md:mt-6 h-[2px] w-20 sm:w-24 bg-gradient-to-r ${
          highlightGold
            ? "from-velocity-yellow via-turbo-orange to-transparent"
            : "from-racing-red via-turbo-orange to-transparent"
        } ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
};
