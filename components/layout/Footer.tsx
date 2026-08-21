"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Flame, ShieldAlert, Phone, Mail } from "lucide-react";
import { CAFE_DATA } from "@/data/cafeData";

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const [coimbatoreTime, setCoimbatoreTime] = useState<string>("");
  const [todayDay, setTodayDay] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const currentYear = 2026;

  useEffect(() => {
    const updateTimeAndStatus = () => {
      const now = new Date();

      // Formatter for time display
      const timeOptions: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCoimbatoreTime(new Intl.DateTimeFormat("en-IN", timeOptions).format(now));

      // Day Formatter
      const dayOptions: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        weekday: "long",
      };
      setTodayDay(new Intl.DateTimeFormat("en-IN", dayOptions).format(now).toUpperCase());

      // Calculate IST open/closed status
      const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      }).formatToParts(now);

      const weekday = parts.find((p) => p.type === "weekday")?.value || "";
      const hour = parseInt(parts.find((p) => p.type === "hour")?.value || "0", 10);
      const minute = parseInt(parts.find((p) => p.type === "minute")?.value || "0", 10);
      const timeInMinutes = hour * 60 + minute;
      const openTime = 11 * 60; // 11:00 AM (660 mins)

      if (weekday === "Sun") {
        setIsOpen(false);
      } else if (weekday === "Sat") {
        const closeTimeSat = 23 * 60 + 30; // 11:30 PM (1410 mins)
        setIsOpen(timeInMinutes >= openTime && timeInMinutes < closeTimeSat);
      } else {
        // Mon - Fri: 11:00 AM to 11:00 PM (1380 mins)
        const closeTimeWeekday = 23 * 60; // 11:00 PM (1380 mins)
        setIsOpen(timeInMinutes >= openTime && timeInMinutes < closeTimeWeekday);
      }
    };

    updateTimeAndStatus();
    const interval = setInterval(updateTimeAndStatus, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-turbo-black text-performance-white border-t border-racing-red/20 overflow-hidden select-none">
      {/* Top Multi-Color Racing Stripe */}
      <div className="h-1 w-full bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow animate-racing-line" />

      {/* Ambient Red & Orange Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-racing-red/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-turbo-orange/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Ambient 3D Silhouette Curves & Dome Light */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      {/* Main Callout Banner & Telemetry Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 mb-12 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-racing font-bold tracking-[0.3em] text-racing-red uppercase bg-garage-black px-3 py-1 rounded border border-racing-red/40 mb-4">
              <span className="w-2 h-2 rounded-full bg-racing-red animate-ping" />
              DESTINATION COIMBATORE
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-performance-white leading-none">
              SEE YOU AT THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow">
                PIT STOP.
              </span>
            </h2>
          </div>

          {/* Telemetry Status Box */}
          <div className="p-4 sm:p-5 rounded-xl bg-carbon-black border border-metallic-silver/20 backdrop-blur-md min-w-[280px]">
            <div className="flex items-center justify-between text-[11px] font-mono text-metallic-silver/60 border-b border-white/10 pb-2 mb-2">
              <span className="flex items-center gap-1.5 text-performance-white font-racing">
                <Flame className="w-3.5 h-3.5 text-turbo-orange" />
                PADDOCK STATUS
              </span>
              <span
                className={`font-racing font-bold text-xs tracking-wider flex items-center gap-1.5 ${
                  isOpen
                    ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                    : "text-racing-red drop-shadow-[0_0_8px_rgba(225,6,0,0.5)]"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isOpen ? "bg-emerald-400 animate-ping" : "bg-racing-red"
                  }`}
                />
                {isOpen ? "GRID OPEN" : "GRID CLOSED"}
              </span>
            </div>
            <div className="space-y-1.5 text-xs font-mono">
              <div className="flex justify-between text-metallic-silver">
                <span>TODAY:</span>
                <span className="text-velocity-yellow font-bold">{todayDay || "TODAY"}</span>
              </div>
              <div className="flex justify-between text-metallic-silver">
                <span>COIMBATORE TIME:</span>
                <span className="text-performance-white font-bold">{coimbatoreTime || "11:00 AM IST"}</span>
              </div>
              <div className="flex justify-between text-metallic-silver items-center">
                <span>LOCATION:</span>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=11.00567898915737,76.945888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-turbo-orange hover:text-velocity-yellow font-bold underline decoration-dotted underline-offset-2 transition-colors cursor-pointer inline-flex items-center gap-1"
                >
                  <span>RS PURAM, COIMBATORE</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Hub: Centered Logo, Navigation Links & Contact Channels */}
        <div className="flex flex-col items-center justify-center text-center my-8 md:my-12 space-y-6 sm:space-y-8">
          {/* Centered Brand Logo Badge */}
          <div className="relative z-20 flex items-center justify-center">
            <div className="absolute w-40 h-24 rounded-full bg-racing-red/20 blur-2xl pointer-events-none" />
            <Link
              href="/"
              className="relative px-6 py-3 rounded-2xl bg-garage-black/90 backdrop-blur-md border border-racing-red/40 shadow-[0_0_25px_rgba(225,6,0,0.3)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:border-racing-red hover:shadow-[0_0_35px_rgba(225,6,0,0.6)]"
              aria-label="The Wheels Turbo Cafe Home"
            >
              <Image
                src="/logo.png"
                alt="The Wheels Turbo Cafe - Motorsport Theme Cafe in Coimbatore"
                width={1774}
                height={887}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Quick Nav Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-3">
            {[
              { label: "HOME", href: "/" },
              { label: "MENU", href: "/menu" },
              { label: "ABOUT US", href: "/about" },
              { label: "AJITH TRIBUTE", href: "/ajith-kumar" },
              { label: "CONTACT & LOCATION", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs sm:text-sm font-racing font-bold tracking-widest text-metallic-silver/90 hover:text-velocity-yellow transition-colors relative group py-1"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-racing-red to-velocity-yellow transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Contact Details Bar: Phone, Email, Instagram */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            {/* Phone */}
            <a
              href={`tel:${CAFE_DATA.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-garage-black/80 border border-white/10 hover:border-racing-red/60 text-performance-white hover:text-velocity-yellow transition-all text-xs font-mono group"
            >
              <Phone className="w-3.5 h-3.5 text-racing-red group-hover:scale-110 transition-transform" />
              <span>{CAFE_DATA.phone}</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CAFE_DATA.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-garage-black/80 border border-white/10 hover:border-racing-red/60 text-performance-white hover:text-velocity-yellow transition-all text-xs font-mono group"
            >
              <Mail className="w-3.5 h-3.5 text-turbo-orange group-hover:scale-110 transition-transform" />
              <span>{CAFE_DATA.email}</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/the_wheels_turbo_cafe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-garage-black/80 border border-white/10 hover:border-racing-red/60 text-performance-white hover:text-velocity-yellow transition-all text-xs font-mono group"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-velocity-yellow group-hover:scale-110 transition-transform" />
              <span>{CAFE_DATA.instagram}</span>
            </a>
          </div>
        </div>

        {/* Giant Watermark Typography */}
        <div className="relative w-full flex items-center justify-center pt-6 pb-2 select-none pointer-events-none overflow-hidden">
          <h2 className="text-[36px] sm:text-[90px] font-black tracking-[0.06em] uppercase text-transparent bg-clip-text bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-transparent text-center leading-none scale-y-95 whitespace-nowrap">
            THE WHEELS TURBO
          </h2>
        </div>
      </div>

      {/* Horizontal Divider Line */}
      <div className="w-full border-t border-white/[0.08]" />

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-neutral-400 font-sans relative z-10">
        {/* Left: Location */}
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=11.00567898915737,76.945888"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center sm:text-left text-neutral-400 hover:text-velocity-yellow transition-colors cursor-pointer"
        >
          📍 West Arokiasamy Road, RS Puram, Coimbatore
        </a>

        {/* Center: Copyright Notice */}
        <div className="text-center text-neutral-400">
          ©{currentYear} The Wheels Turbo Cafe. All rights reserved.
        </div>

        {/* Right: Credits */}
        <div className="text-center sm:text-right text-neutral-400">
          Crafted by{" "}
          <a href="https://niyozenix.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors cursor-pointer font-normal">
            Niyozenix
          </a>
        </div>
      </div>
    </footer>
  );
};
