"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "../ui/BrandLogo";
import { MagneticButton } from "../ui/MagneticButton";
import { Menu, X, Flame, MapPin, Clock, Calendar, CheckCircle2, Phone, User, Users } from "lucide-react";
import { CAFE_DATA } from "@/data/cafeData";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "2",
    date: "",
    timeSlot: "19:30",
    seatingArea: "RACING SIMULATOR BAY",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#E10600", "#FF5A00", "#FFC400"],
    });
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
          className="absolute top-4 right-4 p-2 text-metallic-silver hover:text-white rounded-lg bg-turbo-black/60 border border-white/10"
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

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-racing font-bold text-metallic-silver uppercase tracking-wider mb-1">
                    Pilot Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-metallic-silver/50" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-carbon-black border border-white/15 rounded px-3 py-2.5 pl-9 text-xs text-performance-white focus:border-racing-red focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-racing font-bold text-metallic-silver uppercase tracking-wider mb-1">
                    Contact Radio / Phone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-metallic-silver/50" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98422 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-carbon-black border border-white/15 rounded px-3 py-2.5 pl-9 text-xs text-performance-white focus:border-racing-red focus:outline-none"
                    />
                  </div>
                </div>
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
                    Race Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-carbon-black border border-white/15 rounded px-3 py-2.5 text-xs text-performance-white focus:border-racing-red focus:outline-none"
                  />
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
                  className="w-full py-3.5 rounded bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-turbo-black font-racing font-black tracking-widest uppercase text-sm shadow-[0_0_30px_rgba(225,6,0,0.6)] hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <Flame className="w-4 h-4 fill-turbo-black" />
                  CONFIRM PIT STOP RESERVATION
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
                Your bay has been reserved at The Wheels Turbo Cafe Coimbatore for {formData.guests} guests.
              </p>
            </div>

            <div className="p-4 bg-turbo-black rounded-lg border border-white/10 text-left text-xs font-mono space-y-1 max-w-xs mx-auto text-metallic-silver">
              <div>RADIO: {formData.phone}</div>
              <div>EXPERIENCE: {formData.seatingArea}</div>
              <div>SLOT: {formData.timeSlot} HRS</div>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded bg-garage-black border border-metallic-silver/30 text-performance-white font-racing font-bold text-xs uppercase tracking-widest hover:border-racing-red"
            >
              CLOSE TELEMETRY
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
