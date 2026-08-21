"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "../ui/BrandLogo";
import { MagneticButton } from "../ui/MagneticButton";
import { Menu, X, Flame, MapPin, Clock, Calendar, CheckCircle2, Phone, User, Users, Mail } from "lucide-react";
import { CAFE_DATA } from "@/data/cafeData";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  filterLettersOnly,
  filterNumbersOnly,
  validateName,
  validatePhone,
  validateDate,
  validateEmail,
} from "@/lib/validations";

const NAV_LINKS = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "MENU", href: "/menu" },
  { name: "AJITH KUMAR", href: "/ajith-kumar" },
  { name: "CONTACT", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-turbo-black/90 backdrop-blur-xl border-b border-racing-red/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "py-6 bg-gradient-to-b from-turbo-black/80 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center">
            <BrandLogo size={isScrolled ? "sm" : "md"} showTagline={!isScrolled} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-garage-black/80 px-4 py-1.5 rounded-full border border-metallic-silver/20 backdrop-blur-md shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-xs font-racing font-bold tracking-[0.2em] transition-colors duration-300 rounded-full ${
                    isActive
                      ? "text-performance-white"
                      : "text-metallic-silver hover:text-turbo-orange"
                  }`}
                  data-cursor-hover
                  data-cursor-text="VIEW"
                >
                  {link.name}
                  {/* Animated Racing Underline on Active */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavStripe"
                      className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow rounded-full shadow-[0_0_12px_#e10600]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <MagneticButton
              size="sm"
              variant="primary"
              onClick={() => setBookingModalOpen(true)}
              cursorLabel="PITSTOP"
            >
              VISIT THE CAFE
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-garage-black border border-racing-red/40 text-performance-white focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-racing-red" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-turbo-black/98 backdrop-blur-2xl pt-24 px-6 pb-12 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-4">
              <div className="text-[10px] font-racing font-bold tracking-[0.3em] text-racing-red uppercase border-b border-racing-red/20 pb-2">
                PADDOCK NAVIGATION
              </div>
              <div className="flex flex-col space-y-2">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`flex items-center justify-between py-3 px-4 rounded-lg font-display text-lg font-bold tracking-wider uppercase transition-colors ${
                        isActive
                          ? "bg-racing-red/20 text-performance-white border-l-4 border-racing-red"
                          : "text-metallic-silver hover:text-turbo-orange bg-garage-black/50"
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className="text-xs font-racing text-metallic-silver/50 font-normal">
                        SECTOR 0{idx + 1}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBookingModalOpen(true);
                }}
                className="w-full py-4 rounded bg-gradient-to-r from-racing-red to-turbo-orange text-performance-white font-racing font-black tracking-widest uppercase text-sm shadow-[0_0_20px_rgba(225,6,0,0.5)]"
              >
                BOOK A PIT STOP TABLE
              </button>

              <div className="p-4 rounded bg-carbon-black border border-white/10 text-xs font-sans text-metallic-silver space-y-1">
                <div className="flex items-center gap-2 text-performance-white font-racing">
                  <MapPin className="w-4 h-4 text-racing-red" />
                  <span>{CAFE_DATA.city}, {CAFE_DATA.state}</span>
                </div>
                <div className="flex items-center gap-2 text-metallic-silver/70">
                  <Clock className="w-4 h-4 text-turbo-orange" />
                  <span>{CAFE_DATA.timing.hours}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pitstop Table Booking Modal */}
      <AnimatePresence>
        {bookingModalOpen && (
          <BookingModal onClose={() => setBookingModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

// Table Booking Modal
const BookingModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "2",
    date: "",
    timeSlot: "19:30",
    seatingArea: "RACING SIMULATOR BAY",
  });

  const todayStr = new Date().toISOString().split("T")[0];

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
    if (touched.email && val.trim()) {
      const valRes = validateEmail(val);
      setErrors((prev) => ({ ...prev, email: valRes.error || "" }));
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, date: val }));
    if (touched.date) {
      const valRes = validateDate(val);
      setErrors((prev) => ({ ...prev, date: valRes.error || "" }));
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
    } else if (field === "email" && formData.email.trim()) {
      const res = validateEmail(formData.email);
      setErrors((prev) => ({ ...prev, email: res.error || "" }));
    } else if (field === "date") {
      const res = validateDate(formData.date);
      setErrors((prev) => ({ ...prev, date: res.error || "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    const nameVal = validateName(formData.name);
    const phoneVal = validatePhone(formData.phone);
    const dateVal = validateDate(formData.date);

    const newErrors: Record<string, string> = {};
    if (!nameVal.isValid) newErrors.name = nameVal.error || "Invalid name";
    if (!phoneVal.isValid) newErrors.phone = phoneVal.error || "Invalid phone";
    if (!dateVal.isValid) newErrors.date = dateVal.error || "Invalid date";
    if (formData.email.trim()) {
      const emailVal = validateEmail(formData.email);
      if (!emailVal.isValid) newErrors.email = emailVal.error || "Invalid email";
    }

    setTouched({ name: true, phone: true, date: true, email: true });
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "reservation",
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim() || undefined,
          guests: formData.guests,
          date: formData.date,
          timeSlot: formData.timeSlot,
          seatingArea: formData.seatingArea,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to confirm reservation. Please try again.");
      }

      setSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#E10600", "#FF5A00", "#FFC400"],
      });
    } catch (err: any) {
      setServerError(err?.message || "Booking dispatch failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-turbo-black/90 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-lg bg-carbon-pattern bg-racing-grid bg-garage-black border border-racing-red/50 rounded-xl p-6 sm:p-8 shadow-[0_0_50px_rgba(225,6,0,0.3)] overflow-hidden"
      >
        {/* Corner Calipers */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-racing-red" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-racing-red" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-racing-red" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-racing-red" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-metallic-silver hover:text-white rounded-lg bg-turbo-black/60 border border-white/10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 text-[10px] font-racing font-bold tracking-widest text-racing-red uppercase bg-racing-red/10 px-2.5 py-0.5 rounded border border-racing-red/30 mb-2">
                <Flame className="w-3.5 h-3.5 text-turbo-orange" />
                PITSTOP RESERVATION
              </div>
              <h3 className="font-display font-black text-2xl text-performance-white uppercase">
                RESERVE YOUR PADDOCK BAY
              </h3>
              <p className="text-xs text-metallic-silver/70 mt-1">
                Lock in your table at The Wheels Turbo Cafe, Coimbatore.
              </p>
            </div>

            {serverError && (
              <div className="mb-4 p-3 rounded-lg bg-racing-red/10 border border-racing-red text-racing-red text-xs font-mono">
                ⚠ {serverError}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[11px] font-racing font-bold text-metallic-silver uppercase tracking-wider">
                      Pilot Name <span className="text-racing-red">*</span>
                    </label>
                    <span className="text-[9px] font-mono text-metallic-silver/50">LETTERS ONLY</span>
                  </div>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-metallic-silver/50" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Kumar"
                      value={formData.name}
                      onChange={handleNameChange}
                      onBlur={() => handleBlur("name")}
                      className={`w-full bg-carbon-black border rounded px-3 py-2.5 pl-9 text-xs text-performance-white focus:outline-none ${
                        errors.name ? "border-racing-red shadow-[0_0_8px_rgba(225,6,0,0.3)]" : "border-white/15 focus:border-racing-red"
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-[10px] font-mono text-racing-red">⚠ {errors.name}</p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[11px] font-racing font-bold text-metallic-silver uppercase tracking-wider">
                      Radio Phone <span className="text-racing-red">*</span>
                    </label>
                    <span className="text-[9px] font-mono text-velocity-yellow">{formData.phone.length}/10</span>
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-metallic-silver/50" />
                    <input
                      type="tel"
                      required
                      placeholder="9842212345"
                      maxLength={10}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      onBlur={() => handleBlur("phone")}
                      className={`w-full bg-carbon-black border rounded px-3 py-2.5 pl-9 text-xs text-performance-white focus:outline-none ${
                        errors.phone ? "border-racing-red shadow-[0_0_8px_rgba(225,6,0,0.3)]" : "border-white/15 focus:border-racing-red"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-[10px] font-mono text-racing-red">⚠ {errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Optional Email for Booking Receipt */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-[11px] font-racing font-bold text-metallic-silver uppercase tracking-wider">
                    Email Dispatch <span className="text-metallic-silver/50 font-normal">(For Confirmation Receipt)</span>
                  </label>
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-metallic-silver/50" />
                  <input
                    type="email"
                    placeholder="pilot@example.com (to receive booking ticket)"
                    value={formData.email}
                    onChange={handleEmailChange}
                    onBlur={() => handleBlur("email")}
                    className={`w-full bg-carbon-black border rounded px-3 py-2.5 pl-9 text-xs text-performance-white focus:outline-none ${
                      errors.email ? "border-racing-red shadow-[0_0_8px_rgba(225,6,0,0.3)]" : "border-white/15 focus:border-racing-red"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-[10px] font-mono text-racing-red">⚠ {errors.email}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-racing font-bold text-metallic-silver uppercase tracking-wider mb-1">
                    Pit Crew Count
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-carbon-black border border-white/15 rounded px-3 py-2.5 text-xs text-performance-white focus:border-racing-red focus:outline-none"
                  >
                    <option value="1">1 Person (Solo Racer)</option>
                    <option value="2">2 Persons (Co-Pilot)</option>
                    <option value="4">4 Persons (Full Crew)</option>
                    <option value="6">6+ Persons (Paddock Party)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-racing font-bold text-metallic-silver uppercase tracking-wider mb-1">
                    Race Date <span className="text-racing-red">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={todayStr}
                    value={formData.date}
                    onChange={handleDateChange}
                    onBlur={() => handleBlur("date")}
                    className={`w-full bg-carbon-black border rounded px-3 py-2.5 text-xs text-performance-white focus:outline-none ${
                      errors.date ? "border-racing-red shadow-[0_0_8px_rgba(225,6,0,0.3)]" : "border-white/15 focus:border-racing-red"
                    }`}
                  />
                  {errors.date && (
                    <p className="mt-1 text-[10px] font-mono text-racing-red">⚠ {errors.date}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-racing font-bold text-metallic-silver uppercase tracking-wider mb-1">
                    Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-carbon-black border border-white/15 rounded px-3 py-2.5 text-xs text-performance-white focus:border-racing-red focus:outline-none"
                  >
                    <option value="12:30">12:30 PM (Lunch Lap)</option>
                    <option value="16:00">04:00 PM (Pitstop Coffee)</option>
                    <option value="19:30">07:30 PM (Prime Sprint)</option>
                    <option value="21:00">09:00 PM (Night Driver)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-racing font-bold text-metallic-silver uppercase tracking-wider mb-1">
                  Seating Experience
                </label>
                <select
                  value={formData.seatingArea}
                  onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value })}
                  className="w-full bg-carbon-black border border-white/15 rounded px-3 py-2.5 text-xs text-performance-white focus:border-racing-red focus:outline-none"
                >
                  <option value="RACING SIMULATOR BAY">Racing Simulator Bay (Cockpit View)</option>
                  <option value="TYRE LOUNGE">Tyre Lounge (Casual Paddock Seating)</option>
                  <option value="CHAMPIONS PODIUM">Champions Podium VIP Area</option>
                  <option value="ALFRESCO DECK">Alfresco Night Drive Deck</option>
                </select>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-turbo-black font-racing font-black tracking-widest uppercase text-sm shadow-[0_0_30px_rgba(225,6,0,0.6)] hover:brightness-110 disabled:opacity-60 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-turbo-black border-t-transparent rounded-full animate-spin" />
                      DISPATCHING RESERVATION...
                    </span>
                  ) : (
                    <>
                      <Flame className="w-4 h-4 fill-turbo-black" />
                      <span>CONFIRM PIT STOP RESERVATION</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-racing-red/20 border-2 border-racing-red flex items-center justify-center mx-auto text-racing-red animate-pulse">
              <CheckCircle2 className="w-10 h-10 text-racing-red" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-racing font-bold text-velocity-yellow uppercase tracking-widest">
                GREEN FLAG // PITSTOP CONFIRMED
              </div>
              <h3 className="font-display font-black text-2xl text-performance-white uppercase">
                SEE YOU ON THE GRID, {formData.name.toUpperCase() || "RACER"}!
              </h3>
              <p className="text-xs text-metallic-silver/80 max-w-sm mx-auto">
                Your reservation details have been dispatched to our team for {formData.guests} guests on {formData.date}.
              </p>
            </div>

            <div className="p-4 bg-turbo-black rounded-lg border border-white/10 text-left text-xs font-mono space-y-1 max-w-xs mx-auto text-metallic-silver">
              <div>PILOT: {formData.name}</div>
              <div>RADIO: +91 {formData.phone}</div>
              <div>DATE: {formData.date}</div>
              <div>SLOT: {formData.timeSlot} HRS</div>
              <div>EXPERIENCE: {formData.seatingArea}</div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  phone: "",
                  email: "",
                  guests: "2",
                  date: "",
                  timeSlot: "19:30",
                  seatingArea: "RACING SIMULATOR BAY",
                });
                setTouched({});
                setErrors({});
                onClose();
              }}
              className="px-6 py-2.5 rounded bg-garage-black border border-metallic-silver/30 text-performance-white font-racing font-bold text-xs uppercase tracking-widest hover:border-racing-red cursor-pointer"
            >
              CLOSE TELEMETRY
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
