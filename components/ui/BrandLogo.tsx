import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg" | "hero";
  showTagline?: boolean;
  className?: string;
  isLink?: boolean;
  priority?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = "md",
  showTagline = false,
  className = "",
  isLink = true,
  priority = false,
}) => {
  const sizeMap = {
    sm: "h-9 sm:h-10",
    md: "h-11 sm:h-13",
    lg: "h-16 sm:h-20",
    hero: "h-24 sm:h-32",
  };

  const content = (
    <div className={`inline-flex flex-col items-start group select-none ${className}`}>
      <div className={`relative ${sizeMap[size]} w-auto flex items-center`}>
        <Image
          src="/logo.png"
          alt="The Wheels Turbo Cafe - Racing Themed Cafe in Coimbatore"
          width={1774}
          height={887}
          priority={priority || size === "hero" || size === "md" || size === "sm"}
          className="h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(225,6,0,0.35)] transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_22px_rgba(225,6,0,0.6)]"
        />
      </div>
      {/* {showTagline && (
        <span className="text-[9px] tracking-[0.35em] text-metallic-silver/75 uppercase mt-1 font-racing">
          COIMBATORE • MOTORSPORT PADDOCK
        </span>
      )} */}
    </div>
  );

  if (isLink) {
    return (
      <Link href="/" className="inline-block focus:outline-none" aria-label="The Wheels Turbo Cafe Home">
        {content}
      </Link>
    );
  }

  return content;
};

