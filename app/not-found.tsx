import React from "react";
import Link from "next/link";
import { Flag, Home, UtensilsCrossed, Phone, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-turbo-black text-performance-white text-center select-none relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-carbon-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-racing-red/15 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        {/* Flag telemetry badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-garage-black border border-racing-red/40 text-racing-red text-xs font-racing font-bold tracking-[0.25em] uppercase">
          <Flag className="w-4 h-4 text-turbo-orange animate-bounce" />
          YELLOW FLAG // TRACK POSITION LOST (404)
        </div>

        <h1 className="font-display font-black text-6xl sm:text-8xl lg:text-9xl uppercase tracking-tighter text-performance-white leading-none">
          OFF <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-glow-red">
            TRACK.
          </span>
        </h1>

        <p className="font-sans text-base sm:text-lg text-metallic-silver/80 max-w-md mx-auto leading-relaxed">
          Looks like you took a turn into the gravel trap. The pit lane is open—rejoin the circuit using the links below.
        </p>

        {/* Action recovery buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-racing-red to-turbo-orange text-white font-racing font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(225,6,0,0.5)] hover:scale-105 transition-all"
          >
            <Home className="w-4 h-4" />
            RETURN TO START / HOME
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-garage-black border border-white/20 text-performance-white font-racing font-bold text-xs uppercase tracking-widest hover:border-racing-red hover:text-turbo-orange transition-all"
          >
            <UtensilsCrossed className="w-4 h-4" />
            VIEW CAFE MENU
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-garage-black border border-white/20 text-performance-white font-racing font-bold text-xs uppercase tracking-widest hover:border-velocity-yellow hover:text-velocity-yellow transition-all"
          >
            <Phone className="w-4 h-4" />
            CONTACT PIT CREW
          </Link>
        </div>
      </div>
    </div>
  );
}
