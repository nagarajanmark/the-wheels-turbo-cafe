"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Zap } from "lucide-react";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "gold" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  cursorLabel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon = true,
  type = "button",
  disabled = false,
  cursorLabel = "REV",
}) => {
  const btnRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!btnRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }[size];

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-racing-red to-turbo-orange text-performance-white font-racing font-bold tracking-widest shadow-[0_0_25px_rgba(225,6,0,0.4)] hover:shadow-[0_0_35px_rgba(255,90,0,0.7)] border-t border-white/30",
    secondary:
      "bg-garage-black/90 text-performance-white font-racing font-bold tracking-widest border border-metallic-silver/30 hover:border-racing-red hover:bg-carbon-black shadow-lg",
    gold:
      "bg-gradient-to-r from-velocity-yellow via-turbo-orange to-racing-red text-turbo-black font-racing font-black tracking-widest shadow-[0_0_30px_rgba(255,196,0,0.5)] hover:shadow-[0_0_40px_rgba(255,196,0,0.8)] border-t border-white/60",
    outline:
      "bg-transparent text-performance-white font-racing font-bold tracking-widest border border-racing-red/60 hover:bg-racing-red/15 hover:border-racing-red shadow-[0_0_15px_rgba(225,6,0,0.2)]",
  }[variant];

  const innerContent = (
    <motion.div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 250, damping: 15, mass: 0.1 }}
      className="inline-block"
      data-cursor-hover
      data-cursor-text={cursorLabel}
    >
      <div
        className={`relative group inline-flex items-center justify-center gap-3 select-none uppercase clip-chamfer-sm transition-all duration-300 ${sizeClasses} ${variantStyles} ${className} ${
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        {/* Animated Speed Line Sweep */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 pointer-events-none" />

        {/* Text */}
        <span className="relative z-10 font-bold">{children}</span>

        {/* Icon */}
        {icon && (
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5">
            {variant === "gold" ? (
              <Zap className="w-4 h-4 fill-turbo-black text-turbo-black" />
            ) : (
              <ArrowRight className="w-4 h-4 text-performance-white" />
            )}
          </span>
        )}

        {/* Corner Caliper Accent */}
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/50" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/50" />
      </div>
    </motion.div>
  );

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick();
    }
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (href) {
    return (
      <Link
        href={href}
        onClick={handleClick}
        className={`inline-block focus:outline-none ${disabled ? "pointer-events-none" : ""}`}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className="inline-block focus:outline-none bg-transparent p-0 border-0 cursor-pointer"
    >
      {innerContent}
    </button>
  );
};
