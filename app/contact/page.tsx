"use client";

import React, { useState } from "react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CAFE_DATA } from "@/data/cafeData";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Radio,
  Send,
  CheckCircle2,
  Flame,
  Zap,
  Navigation,
  Compass,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00E676", "#FFC400", "#E10600"],
      });
    }, 1000);
  };

  return (
    <div className="w-full bg-turbo-black text-performance-white select-none min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] flex flex-col justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-carbon-black overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-carbon-pattern opacity-50" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-racing-red/15 blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-garage-black border border-racing-red/40 text-racing-red text-xs font-racing font-bold tracking-[0.25em] uppercase mb-6">
            <Radio className="w-4 h-4 text-turbo-orange animate-pulse" />
            PADDOCK COMMS FREQUENCY // 108.4 MHZ
          </div>

          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-performance-white leading-none">
            YOUR NEXT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-glow-red">
              PIT STOP.
            </span>
          </h1>

          <p className="mt-6 font-sans text-base sm:text-xl text-metallic-silver/90 max-w-2xl leading-relaxed border-l-2 border-turbo-orange pl-4">
            Connect with our paddock crew in Coimbatore for table reservations, car club meetups, or track-day catering.
          </p>
        </div>
      </section>

      {/* 2. MAIN COMMS PANEL & DETAILS */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Motorsport Communication Panel (Contact Form) */}
          <div className="lg:col-span-7">
            <div className="relative bg-garage-black border-2 border-metallic-silver/20 rounded-2xl p-6 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
              {/* Corner Calipers */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-racing-red" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-racing-red" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-racing-red" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-racing-red" />

              {!isSuccess ? (
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 text-xs font-racing font-bold text-velocity-yellow uppercase tracking-widest bg-turbo-black px-3 py-1 rounded border border-velocity-yellow/30 mb-3">
                      <Radio className="w-3.5 h-3.5 text-racing-red" />
                      RADIO TELEMETRY FORM
                    </div>
                    <h2 className="font-display font-black text-3xl sm:text-4xl text-performance-white uppercase">
                      SEND <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red to-turbo-orange">
                        A SIGNAL.
                      </span>
                    </h2>
                    <p className="text-xs sm:text-sm text-metallic-silver/80 mt-2 font-sans">
                      Fill out the comms telemetry below to transmit your message directly to the pit wall.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-racing font-bold text-metallic-silver uppercase tracking-wider mb-2">
                          PILOT NAME / CALLSIGN
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Vikram Chandran"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-carbon-black border border-metallic-silver/30 rounded-lg px-4 py-3 text-sm text-performance-white focus:border-racing-red focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-racing font-bold text-metallic-silver uppercase tracking-wider mb-2">
                          RADIO FREQUENCY / PHONE
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98422 XXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-carbon-black border border-metallic-silver/30 rounded-lg px-4 py-3 text-sm text-performance-white focus:border-racing-red focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-racing font-bold text-metallic-silver uppercase tracking-wider mb-2">
                        EMAIL DISPATCH
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="pilot@turbopaddock.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-carbon-black border border-metallic-silver/30 rounded-lg px-4 py-3 text-sm text-performance-white focus:border-racing-red focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-racing font-bold text-metallic-silver uppercase tracking-wider mb-2">
                        TRANSMISSION / MESSAGE
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Transmit your query, reservation requirements, or car club meetup request..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-carbon-black border border-metallic-silver/30 rounded-lg px-4 py-3 text-sm text-performance-white focus:border-racing-red focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-turbo-black font-racing font-black text-sm tracking-widest uppercase shadow-[0_0_30px_rgba(225,6,0,0.6)] hover:brightness-110 transition-all flex items-center justify-center gap-2"
                      data-cursor-hover
                      data-cursor-text="TRANSMIT"
                    >
                      {isSubmitting ? (
                        <span>TRANSMITTING TELEMETRY...</span>
                      ) : (
                        <>
                          <Flame className="w-4 h-4 fill-turbo-black" />
                          <span>START THE CONVERSATION</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                /* Green Racing Signal Confirmation */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="relative w-24 h-24 rounded-full bg-emerald-500/20 border-4 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.7)] animate-pulse">
                    <CheckCircle2 className="w-14 h-14" />
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-racing font-black tracking-[0.3em] text-emerald-400 uppercase">
                      LIGHTS OUT & AWAY WE GO // SIGNAL RECEIVED
                    </div>
                    <h3 className="font-display font-black text-3xl text-performance-white uppercase">
                      TRANSMISSION LOCKED, {formData.name.toUpperCase() || "RACER"}!
                    </h3>
                    <p className="text-xs sm:text-sm text-metallic-silver/80 max-w-md mx-auto font-sans">
                      Our pit crew at The Wheels Turbo Cafe has received your telemetry data. We will radio back to {formData.email} shortly.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-carbon-black border border-emerald-500/30 max-w-sm mx-auto text-left text-xs font-mono text-metallic-silver space-y-1">
                    <div>STATUS: GREEN FLAG ACKNOWLEDGED</div>
                    <div>FREQ: {formData.phone}</div>
                    <div>TRACK SECTOR: COIMBATORE PADDOCK</div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: "", phone: "", email: "", message: "" });
                    }}
                    className="px-6 py-2.5 rounded-lg bg-garage-black border border-white/20 text-performance-white font-racing font-bold text-xs uppercase tracking-widest hover:border-racing-red transition-colors"
                  >
                    SEND ANOTHER TRANSMISSION
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Column: Telemetry Contact Details & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-garage-black border border-metallic-silver/20 space-y-6">
              <h3 className="font-display font-black text-xl uppercase tracking-wider text-performance-white border-b border-white/10 pb-4">
                PADDOCK TELEMETRY
              </h3>

              <div className="space-y-4 text-xs font-sans">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-carbon-black border border-racing-red/40 text-racing-red shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-racing font-bold text-velocity-yellow text-xs tracking-wider uppercase block">
                      LOCATION
                    </span>
                    <p className="text-metallic-silver/90 leading-relaxed mt-0.5">
                      {CAFE_DATA.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-carbon-black border border-turbo-orange/40 text-turbo-orange shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-racing font-bold text-velocity-yellow text-xs tracking-wider uppercase block">
                      PHONE / RADIO
                    </span>
                    <a
                      href={`tel:${CAFE_DATA.phone}`}
                      className="text-metallic-silver/90 hover:text-white font-mono text-sm block mt-0.5"
                    >
                      {CAFE_DATA.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-carbon-black border border-racing-red/40 text-racing-red shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-racing font-bold text-velocity-yellow text-xs tracking-wider uppercase block">
                      EMAIL
                    </span>
                    <a
                      href={`mailto:${CAFE_DATA.email}`}
                      className="text-metallic-silver/90 hover:text-white font-mono text-sm block mt-0.5"
                    >
                      {CAFE_DATA.email}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-carbon-black border border-turbo-orange/40 text-turbo-orange shrink-0 mt-0.5">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-racing font-bold text-velocity-yellow text-xs tracking-wider uppercase block">
                      INSTAGRAM
                    </span>
                    <a
                      href={`https://instagram.com/${CAFE_DATA.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-metallic-silver/90 hover:text-turbo-orange font-mono text-sm block mt-0.5"
                    >
                      {CAFE_DATA.instagram}
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3 border-t border-white/10 pt-4">
                  <div className="p-2.5 rounded-lg bg-carbon-black border border-velocity-yellow/40 text-velocity-yellow shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-racing font-bold text-velocity-yellow text-xs tracking-wider uppercase block">
                      TRACK HOURS
                    </span>
                    <p className="text-metallic-silver/90 font-medium">
                      {CAFE_DATA.timing.days}
                    </p>
                    <p className="text-metallic-silver/70 font-mono text-xs">
                      {CAFE_DATA.timing.hours}
                    </p>
                    <span className="text-[10px] text-turbo-orange block mt-1">
                      {CAFE_DATA.timing.pitstopNote}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Area Experience */}
            <div className="relative rounded-2xl overflow-hidden bg-carbon-black border border-metallic-silver/20 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-racing font-bold text-velocity-yellow uppercase tracking-widest flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-racing-red" />
                  GOOGLE MAP RADAR
                </span>
                <span className="text-[10px] font-mono text-metallic-silver/60">
                  {CAFE_DATA.coordinates.lat}, {CAFE_DATA.coordinates.lng}
                </span>
              </div>

              <ImagePlaceholder
                src="/images/about/map-preview.jpg"
                label="GOOGLE MAP — THE WHEELS TURBO CAFE"
                aspectRatio="16/9"
                badgeText="RADAR GRID"
              />

              <div className="mt-3 flex items-center justify-between">
                <span className="text-[10px] font-mono text-metallic-silver/70">
                  SECTOR 07 // COIMBATORE
                </span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CAFE_DATA.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-racing font-bold text-turbo-orange hover:text-white uppercase tracking-wider flex items-center gap-1"
                >
                  <span>LAUNCH GPS NAV</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
