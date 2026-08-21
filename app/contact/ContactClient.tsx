"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CAFE_DATA } from "@/data/cafeData";
import { GoogleReviewsSection } from "@/components/sections/GoogleReviewsSection";
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
import {
  filterLettersOnly,
  filterNumbersOnly,
  validateName,
  validatePhone,
  validateEmail,
  validateMessage,
} from "@/lib/validations";

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Handle on-type sanitization & state update
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = filterLettersOnly(e.target.value);
    setFormData((prev) => ({ ...prev, name: sanitized }));
    if (touched.name) {
      const val = validateName(sanitized);
      setErrors((prev) => ({ ...prev, name: val.error || "" }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = filterNumbersOnly(e.target.value, 10);
    setFormData((prev) => ({ ...prev, phone: sanitized }));
    if (touched.phone) {
      const val = validatePhone(sanitized);
      setErrors((prev) => ({ ...prev, phone: val.error || "" }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, email: val }));
    if (touched.email) {
      const emailVal = validateEmail(val);
      setErrors((prev) => ({ ...prev, email: emailVal.error || "" }));
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, message: val }));
    if (touched.message) {
      const msgVal = validateMessage(val);
      setErrors((prev) => ({ ...prev, message: msgVal.error || "" }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    if (field === "name") {
      const res = validateName(formData.name);
      setErrors((prev) => ({ ...prev, name: res.error || "" }));
    } else if (field === "phone") {
      const res = validatePhone(formData.phone);
      setErrors((prev) => ({ ...prev, phone: res.error || "" }));
    } else if (field === "email") {
      const res = validateEmail(formData.email);
      setErrors((prev) => ({ ...prev, email: res.error || "" }));
    } else if (field === "message") {
      const res = validateMessage(formData.message);
      setErrors((prev) => ({ ...prev, message: res.error || "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // Validate all fields
    const nameVal = validateName(formData.name);
    const phoneVal = validatePhone(formData.phone);
    const emailVal = validateEmail(formData.email);
    const msgVal = validateMessage(formData.message);

    const newErrors: Record<string, string> = {};
    if (!nameVal.isValid) newErrors.name = nameVal.error || "Invalid name";
    if (!phoneVal.isValid) newErrors.phone = phoneVal.error || "Invalid phone";
    if (!emailVal.isValid) newErrors.email = emailVal.error || "Invalid email";
    if (!msgVal.isValid) newErrors.message = msgVal.error || "Invalid message";

    setTouched({ name: true, phone: true, email: true, message: true });
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to transmit message. Please try again.");
      }

      setIsSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00E676", "#FFC400", "#E10600"],
      });
    } catch (err: any) {
      setServerError(err?.message || "Radio dispatch failed. Please check connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-turbo-black text-performance-white select-none min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] flex flex-col justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-carbon-black overflow-hidden border-b border-white/10">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/coimbatore-motorsport-cafe-indoor-dining-ambience.jpg"
            alt="The Wheels Turbo Cafe RS Puram Coimbatore Paddock Location & Dining Atmosphere"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-[center_35%] opacity-80"
          />
          {/* Subtle Directional Gradients for Readability without washing out image */}
          <div className="absolute inset-0 bg-gradient-to-r from-turbo-black/95 via-turbo-black/75 to-turbo-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-turbo-black via-transparent to-turbo-black/40" />
          <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-racing-red/15 blur-[160px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-garage-black border border-racing-red/40 text-racing-red text-[10px] sm:text-xs font-racing font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-4 sm:mb-6">
            <Radio className="w-4 h-4 text-turbo-orange animate-pulse" />
            PADDOCK COMMS FREQUENCY // 108.4 MHZ
          </div>

          <h1 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-tight text-performance-white leading-tight">
            YOUR NEXT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-glow-red">
              PIT STOP.
            </span>
          </h1>

          <p className="mt-3 sm:mt-5 font-sans text-xs sm:text-sm md:text-base text-metallic-silver/90 max-w-xl leading-relaxed border-l-2 border-turbo-orange pl-3 sm:pl-4">
            Connect with our paddock crew in RS Puram, Coimbatore for table reservations, car club meetups, or track-day catering.
          </p>
        </div>
      </section>

      {/* 2. MAIN COMMS PANEL & DETAILS */}
      <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 sm:space-y-12">
        {/* Top Row: Contact Form (Left) & Contact Details (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Motorsport Communication Panel (Contact Form) */}
          <div className="lg:col-span-7">
            <div className="relative bg-garage-black border-2 border-metallic-silver/20 rounded-2xl p-5 sm:p-8 xl:p-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden h-full">
              {/* Corner Calipers */}
              <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-racing-red" />
              <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-racing-red" />
              <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-racing-red" />
              <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-racing-red" />

              {!isSuccess ? (
                <div>
                  <div className="mb-6 sm:mb-8">
                    <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-racing font-bold text-velocity-yellow uppercase tracking-widest bg-turbo-black px-2.5 sm:px-3 py-1 rounded border border-velocity-yellow/30 mb-2.5 sm:mb-3">
                      <Radio className="w-3.5 h-3.5 text-racing-red" />
                      RADIO TELEMETRY FORM
                    </div>
                    <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl text-performance-white uppercase">
                      SEND <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red to-turbo-orange">
                        A SIGNAL.
                      </span>
                    </h2>
                    <p className="text-xs sm:text-sm text-metallic-silver/80 mt-1.5 sm:mt-2 font-sans">
                      Fill out the comms telemetry below to transmit your message directly to our Coimbatore team.
                    </p>
                  </div>

                  {serverError && (
                    <div className="mb-6 p-4 rounded-xl bg-racing-red/10 border border-racing-red text-racing-red text-xs font-mono flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-racing-red animate-ping" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label htmlFor="contact-name" className="block text-xs font-racing font-bold text-metallic-silver uppercase tracking-wider">
                            PILOT NAME / CALLSIGN <span className="text-racing-red">*</span>
                          </label>
                          <span className="text-[10px] font-mono text-metallic-silver/50">LETTERS ONLY</span>
                        </div>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          placeholder="e.g. Vikram Chandran"
                          value={formData.name}
                          onChange={handleNameChange}
                          onBlur={() => handleBlur("name")}
                          className={`w-full bg-carbon-black border rounded-lg px-4 py-3 text-sm text-performance-white focus:outline-none transition-colors ${
                            errors.name ? "border-racing-red shadow-[0_0_10px_rgba(225,6,0,0.3)]" : "border-metallic-silver/30 focus:border-racing-red"
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-[11px] font-mono text-racing-red flex items-center gap-1">
                            <span>⚠</span> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label htmlFor="contact-phone" className="block text-xs font-racing font-bold text-metallic-silver uppercase tracking-wider">
                            RADIO PHONE <span className="text-racing-red">*</span>
                          </label>
                          <span className="text-[10px] font-mono text-velocity-yellow">
                            {formData.phone.length}/10 DIGITS
                          </span>
                        </div>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          placeholder="9842212345"
                          maxLength={10}
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          onBlur={() => handleBlur("phone")}
                          className={`w-full bg-carbon-black border rounded-lg px-4 py-3 text-sm text-performance-white focus:outline-none transition-colors ${
                            errors.phone ? "border-racing-red shadow-[0_0_10px_rgba(225,6,0,0.3)]" : "border-metallic-silver/30 focus:border-racing-red"
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1.5 text-[11px] font-mono text-racing-red flex items-center gap-1">
                            <span>⚠</span> {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label htmlFor="contact-email" className="block text-xs font-racing font-bold text-metallic-silver uppercase tracking-wider">
                          EMAIL DISPATCH <span className="text-racing-red">*</span>
                        </label>
                      </div>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="pilot@turbopaddock.com"
                        value={formData.email}
                        onChange={handleEmailChange}
                        onBlur={() => handleBlur("email")}
                        className={`w-full bg-carbon-black border rounded-lg px-4 py-3 text-sm text-performance-white focus:outline-none transition-colors ${
                          errors.email ? "border-racing-red shadow-[0_0_10px_rgba(225,6,0,0.3)]" : "border-metallic-silver/30 focus:border-racing-red"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-[11px] font-mono text-racing-red flex items-center gap-1">
                          <span>⚠</span> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label htmlFor="contact-message" className="block text-xs font-racing font-bold text-metallic-silver uppercase tracking-wider">
                          TRANSMISSION / MESSAGE <span className="text-racing-red">*</span>
                        </label>
                      </div>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        placeholder="Transmit your query, table reservation requirements, or car club meetup request..."
                        value={formData.message}
                        onChange={handleMessageChange}
                        onBlur={() => handleBlur("message")}
                        className={`w-full bg-carbon-black border rounded-lg px-4 py-3 text-sm text-performance-white focus:outline-none transition-colors resize-none ${
                          errors.message ? "border-racing-red shadow-[0_0_10px_rgba(225,6,0,0.3)]" : "border-metallic-silver/30 focus:border-racing-red"
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-[11px] font-mono text-racing-red flex items-center gap-1">
                          <span>⚠</span> {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-turbo-black font-racing font-black text-sm tracking-widest uppercase shadow-[0_0_30px_rgba(225,6,0,0.6)] hover:brightness-110 disabled:opacity-60 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      data-cursor-hover
                      data-cursor-text="TRANSMIT"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-turbo-black border-t-transparent rounded-full animate-spin" />
                          TRANSMITTING TELEMETRY...
                        </span>
                      ) : (
                        <>
                          <Flame className="w-4 h-4 fill-turbo-black" />
                          <span>TRANSMIT TELEMETRY SIGNAL</span>
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
                      LIGHTS OUT & AWAY WE GO // DISPATCH SUCCESSFUL
                    </div>
                    <h3 className="font-display font-black text-3xl text-performance-white uppercase">
                      TRANSMISSION LOCKED, {formData.name.toUpperCase() || "RACER"}!
                    </h3>
                    <p className="text-xs sm:text-sm text-metallic-silver/80 max-w-md mx-auto font-sans">
                      Our pit crew at The Wheels Turbo Cafe has received your telemetry data via email dispatch. We will radio back to {formData.email} or call {formData.phone} shortly.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-carbon-black border border-emerald-500/30 max-w-sm mx-auto text-left text-xs font-mono text-metallic-silver space-y-1">
                    <div>STATUS: GREEN FLAG ACKNOWLEDGED</div>
                    <div>PILOT: {formData.name}</div>
                    <div>FREQ: +91 {formData.phone}</div>
                    <div>TRACK SECTOR: COIMBATORE PADDOCK</div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: "", phone: "", email: "", message: "" });
                      setTouched({});
                      setErrors({});
                    }}
                    className="px-6 py-2.5 rounded-lg bg-garage-black border border-white/20 text-performance-white font-racing font-bold text-xs uppercase tracking-widest hover:border-racing-red transition-colors cursor-pointer"
                  >
                    SEND ANOTHER TRANSMISSION
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Column: Telemetry Contact Details Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-garage-black border-2 border-metallic-silver/20 space-y-6 h-full shadow-[0_0_40px_rgba(0,0,0,0.8)]">
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
                      href={`tel:${CAFE_DATA.phone.replace(/\s+/g, '')}`}
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

                {/* Day-Wise Track Hours */}
                <div className="flex items-start gap-3 border-t border-white/10 pt-4">
                  <div className="p-2.5 rounded-lg bg-carbon-black border border-velocity-yellow/40 text-velocity-yellow shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-racing font-bold text-velocity-yellow text-xs tracking-wider uppercase">
                        TRACK HOURS // DAY-WISE
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono font-bold uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        PADDOCK GRID
                      </span>
                    </div>

                    {/* Day-by-Day Schedule */}
                    <div className="space-y-1.5 bg-carbon-black/60 rounded-xl p-3 border border-white/10">
                      {CAFE_DATA.timing.schedule.map((item) => {
                        const todayName = new Date().toLocaleDateString("en-US", { weekday: "long" });
                        const isToday = todayName === item.day;
                        return (
                          <div
                            key={item.day}
                            className={`flex items-center justify-between text-xs py-1 px-2 rounded transition-colors ${
                              isToday
                                ? "bg-racing-red/20 border border-racing-red/50 text-performance-white font-bold"
                                : "text-metallic-silver/80"
                            }`}
                          >
                            <div className="flex items-center gap-1.5">
                              <span>{item.day}</span>
                              {isToday && (
                                <span className="text-[9px] font-racing text-velocity-yellow bg-turbo-black px-1.5 py-0.5 rounded border border-velocity-yellow/40">
                                  TODAY
                                </span>
                              )}
                            </div>
                            <span
                              className={`font-mono text-[11px] ${
                                item.isOpen
                                  ? isToday
                                    ? "text-emerald-400 font-bold"
                                    : "text-metallic-silver/90"
                                  : "text-racing-red font-bold"
                              }`}
                            >
                              {item.hours}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <span className="text-[10px] text-turbo-orange block mt-2">
                      ⚡ {CAFE_DATA.timing.pitstopNote}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Full Width Live Map Radar */}
        <div className="w-full relative rounded-2xl overflow-hidden bg-garage-black border-2 border-racing-red/40 hover:border-racing-red transition-all duration-300 p-6 sm:p-8 shadow-[0_0_45px_rgba(225,6,0,0.2)]">
          {/* Corner Calipers */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-racing-red pointer-events-none z-10" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-racing-red pointer-events-none z-10" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-racing-red pointer-events-none z-10" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-racing-red pointer-events-none z-10" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <span className="text-xs font-racing font-bold text-velocity-yellow uppercase tracking-widest flex items-center gap-2">
                <Navigation className="w-4 h-4 text-racing-red animate-pulse" />
                LIVE GOOGLE MAP RADAR // GPS TELEMETRY
              </span>
              <h3 className="font-display font-black text-2xl text-performance-white uppercase mt-1">
                PADDOCK NAVIGATION COORDINATES
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-metallic-silver/90 bg-turbo-black px-3 py-1.5 rounded border border-white/10">
                LAT: {CAFE_DATA.coordinates.lat} | LNG: {CAFE_DATA.coordinates.lng}
              </span>
            </div>
          </div>

          {/* Embedded Google Maps iFrame */}
          <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] rounded-xl overflow-hidden border border-white/10 bg-carbon-black shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.438643882638!2d76.94330307504518!3d11.00567898915737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAwJzIwLjQiTiA3NsKwNTYnNDUuMiJF!5e0!3m2!1sen!2sin!4v1787159435268!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="The Wheels Turbo Cafe Location Map in RS Puram Coimbatore"
              className="w-full h-full"
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono text-metallic-silver/90">
                SECTOR 07 // WEST AROKIASAMY RD (OPP. YAMAHA SHOWROOM), RS PURAM, COIMBATORE, TAMIL NADU 641002
              </span>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=11.00567898915737,76.945888"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-turbo-black font-racing font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(225,6,0,0.5)] hover:brightness-110 transition-all cursor-pointer"
            >
              <span>GET DIRECTIONS ON MAPS</span>
              <Navigation className="w-4 h-4 fill-turbo-black" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. REAL GOOGLE REVIEWS SHOWCASE */}
      <div className="border-t border-white/10 bg-carbon-black/60">
        <GoogleReviewsSection />
      </div>
    </div>
  );
}
