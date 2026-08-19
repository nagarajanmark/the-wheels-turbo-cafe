"use client";

import React, { useState, useMemo } from "react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  MENU_ADDONS,
  MenuItem,
} from "@/data/menuData";
import {
  Flame,
  Zap,
  Sparkles,
  Award,
  Heart,
  Search,
  Check,
  PlusCircle,
  Layers,
  UtensilsCrossed,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ITEMS_PER_PAGE = 6;

export function MenuClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [dietaryFilter, setDietaryFilter] = useState<"ALL" | "VEG" | "NON-VEG" | "EGG">("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const featuredPicks = useMemo(
    () => MENU_ITEMS.filter((item) => item.isPitstopPick),
    []
  );

  const displayedItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      const matchesCategory =
        selectedCategory === "ALL" || item.category === selectedCategory;

      // Dietary filter
      const matchesDietary =
        dietaryFilter === "ALL" || item.dietary === dietaryFilter;

      // Search query filter
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  // Total pages
  const totalPages = Math.max(1, Math.ceil(displayedItems.length / ITEMS_PER_PAGE));

  // Current page items (6 per page)
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return displayedItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [displayedItems, currentPage]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleDietaryChange = (diet: "ALL" | "VEG" | "NON-VEG" | "EGG") => {
    setDietaryFilter(diet);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const gridElem = document.getElementById("menu-grid-section");
      if (gridElem) {
        gridElem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="w-full bg-turbo-black text-performance-white select-none min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[55vh] flex flex-col justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-carbon-black overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-carbon-pattern opacity-50" />
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-turbo-orange/15 blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Fan Dedication & Cafe Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-garage-black border border-racing-red/40 text-racing-red text-xs font-racing font-bold tracking-[0.25em] uppercase">
              <span className="w-2 h-2 rounded-full bg-racing-red animate-ping" />
              AUTHENTIC FOOD & DRINKS MENU // COIMBATORE
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-velocity-yellow/10 border border-velocity-yellow/30 text-velocity-yellow text-[11px] font-racing font-bold tracking-wider uppercase">
              <Heart className="w-3 h-3 text-racing-red fill-racing-red" />
              CURATED WITH LOVE BY AN AJITH KUMAR FAN GIRL
            </div>
          </div>

          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-performance-white leading-none">
            FUEL FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-glow-red">
              THE JOURNEY.
            </span>
          </h1>

          <p className="mt-6 font-sans text-base sm:text-xl text-metallic-silver/90 max-w-2xl leading-relaxed border-l-2 border-racing-red pl-4">
            A high-octane culinary tribute in Coimbatore. Explore all {MENU_ITEMS.length} dishes, coolers, and desserts fresh from our turbo kitchen.
          </p>
        </div>
      </section>

      {/* 2. PIT STOP PICKS (VIP Items) */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          sectorNumber="01"
          tag="CHEF SIGNATURES"
          title={
            <>
              PIT STOP <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-velocity-yellow via-turbo-orange to-racing-red">
                PICKS.
              </span>
            </>
          }
          subtitle="Our highest-octane signature dishes crafted for maximum culinary horsepower and flavor."
          highlightGold={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPicks.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="relative bg-garage-black border-2 border-velocity-yellow/40 hover:border-velocity-yellow rounded-2xl p-5 sm:p-6 transition-all duration-500 group shadow-[0_0_35px_rgba(255,196,0,0.12)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-racing font-black text-xs tracking-widest text-velocity-yellow bg-turbo-black px-2.5 py-1 rounded border border-velocity-yellow/30">
                    {item.raceNo}
                  </span>
                  <span className="text-[10px] font-racing font-bold text-turbo-orange uppercase flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-velocity-yellow" />
                    VIP SIGNATURE
                  </span>
                </div>

                <div className="mb-4 overflow-hidden rounded-xl">
                  <ImagePlaceholder
                    src={item.imageSrc}
                    alt={`${item.name} served at The Wheels Turbo Cafe in Coimbatore`}
                    label={item.imageLabel}
                    aspectRatio="16/9"
                    variant="gold"
                    badgeText={item.octaneRating}
                  />
                </div>

                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-wider text-performance-white group-hover:text-velocity-yellow transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-racing font-black text-xl sm:text-2xl text-velocity-yellow shrink-0">
                    ₹{item.price}
                  </span>
                </div>

                <p className="font-sans text-xs text-metallic-silver/80 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.variants && (
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {item.variants.map((v) => (
                      <span
                        key={v.label}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-turbo-black border border-white/10 text-metallic-silver"
                      >
                        {v.label}: <strong className="text-velocity-yellow font-racing">₹{v.price}</strong>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Showcase Badges Footer */}
              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[11px] font-racing font-bold px-2.5 py-1 rounded border ${
                      item.dietary === "VEG"
                        ? "text-emerald-400 border-emerald-500/30 bg-emerald-950/40"
                        : item.dietary === "NON-VEG"
                        ? "text-racing-red border-racing-red/30 bg-racing-red/10"
                        : "text-velocity-yellow border-velocity-yellow/30 bg-velocity-yellow/10"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        item.dietary === "VEG"
                          ? "bg-emerald-400 shadow-[0_0_8px_#34d399]"
                          : item.dietary === "NON-VEG"
                          ? "bg-racing-red shadow-[0_0_8px_#e10600]"
                          : "bg-velocity-yellow shadow-[0_0_8px_#ffc400]"
                      }`}
                    />
                    {item.dietary}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-racing font-bold text-velocity-yellow uppercase tracking-wider">
                  <Award className="w-4 h-4 text-velocity-yellow" />
                  <span>{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STICKY FILTER & SEARCH TELEMETRY CONTROLS */}
      <div className="sticky top-20 z-30 bg-turbo-black/95 backdrop-blur-xl border-y border-racing-red/20 py-4 px-4 sm:px-6 lg:px-8 shadow-2xl space-y-3">
        <div className="max-w-7xl mx-auto space-y-3">
          {/* Top Row: Search + Dietary Filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-metallic-silver/60" />
              <input
                type="text"
                placeholder="Search food, drinks, ingredients..."
                aria-label="Search cafe menu items"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-garage-black border border-white/15 focus:border-racing-red rounded-lg text-xs font-sans text-white placeholder-metallic-silver/50 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-metallic-silver hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Dietary Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar" role="group" aria-label="Dietary filter options">
              <span className="text-[10px] font-mono text-metallic-silver/60 uppercase mr-1 shrink-0">
                DIET:
              </span>
              {(["ALL", "VEG", "NON-VEG", "EGG"] as const).map((diet) => {
                const active = dietaryFilter === diet;
                return (
                  <button
                    key={diet}
                    onClick={() => handleDietaryChange(diet)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-racing font-bold tracking-wider uppercase transition-all duration-200 shrink-0 ${
                      active
                        ? diet === "VEG"
                          ? "bg-emerald-600 text-white shadow-[0_0_12px_rgba(16,185,129,0.5)] border border-emerald-400"
                          : diet === "NON-VEG"
                          ? "bg-racing-red text-white shadow-[0_0_12px_rgba(225,6,0,0.5)] border border-red-400"
                          : diet === "EGG"
                          ? "bg-amber-500 text-black shadow-[0_0_12px_rgba(245,158,11,0.5)] border border-amber-300"
                          : "bg-performance-white text-black font-black shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                        : "bg-garage-black text-metallic-silver hover:text-white border border-white/10"
                    }`}
                  >
                    {diet === "VEG" && "🟢 "}
                    {diet === "NON-VEG" && "🔴 "}
                    {diet === "EGG" && "🟡 "}
                    {diet}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Row: Category Buttons (Two-line wrapped layout - no scroll) */}
          <div className="pt-2 border-t border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono text-metallic-silver/60 uppercase shrink-0">
                GEAR SELECTOR:
              </span>
              <span className="text-[10px] font-mono text-velocity-yellow">
                [ {MENU_CATEGORIES.length} CATEGORIES ]
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2" role="group" aria-label="Menu categories">
              {MENU_CATEGORIES.map((cat, idx) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-racing font-bold tracking-wider uppercase transition-all duration-200 ${
                      isSelected
                        ? "bg-gradient-to-r from-racing-red to-turbo-orange text-white shadow-[0_0_18px_rgba(225,6,0,0.6)] border-t border-white/40"
                        : "bg-garage-black text-metallic-silver hover:text-white border border-white/10 hover:border-racing-red/40"
                    }`}
                    data-cursor-hover
                    data-cursor-text={`G${idx}`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 4. ADD-ONS BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-gradient-to-r from-garage-black via-carbon-black to-garage-black border border-racing-red/30 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-racing-red/20 border border-racing-red/40 flex items-center justify-center shrink-0">
              <PlusCircle className="w-5 h-5 text-racing-red" />
            </div>
            <div>
              <h2 className="font-display font-bold text-sm tracking-wider uppercase text-performance-white">
                PITSTOP EXTRA ADD-ONS
              </h2>
              <p className="text-xs text-metallic-silver/70 font-sans">
                Customize any dish or fries with extra gourmet toppings
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {MENU_ADDONS.map((addon) => (
              <div
                key={addon.id}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-turbo-black border border-velocity-yellow/30 text-xs font-racing"
              >
                <span className="text-white font-bold">{addon.name}</span>
                <span className="text-velocity-yellow font-black">₹{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. MAIN MENU GRID */}
      <section
        id="menu-grid-section"
        className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-36"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-xs font-racing text-metallic-silver/70">
            <Flame className="w-4 h-4 text-racing-red" />
            <span>
              SHOWING {displayedItems.length > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0} -{" "}
              {Math.min(currentPage * ITEMS_PER_PAGE, displayedItems.length)} OF{" "}
              {displayedItems.length} CREATIONS
            </span>
          </div>

          {(selectedCategory !== "ALL" || dietaryFilter !== "ALL" || searchQuery) && (
            <button
              onClick={() => {
                handleCategoryChange("ALL");
                handleDietaryChange("ALL");
                handleSearchChange("");
              }}
              className="text-xs font-racing text-racing-red hover:underline uppercase tracking-wider"
            >
              RESET ALL FILTERS
            </button>
          )}
        </div>

        {displayedItems.length === 0 ? (
          <div className="text-center py-24 bg-garage-black border border-white/10 rounded-2xl p-8">
            <UtensilsCrossed className="w-12 h-12 text-racing-red mx-auto mb-4 opacity-70" />
            <h3 className="font-display font-black text-2xl uppercase text-white mb-2">
              No Dishes Found
            </h3>
            <p className="text-sm text-metallic-silver/70 font-sans max-w-md mx-auto mb-6">
              We couldn&apos;t find any items matching your selected criteria. Try adjusting your filters or search term.
            </p>
            <button
              onClick={() => {
                handleCategoryChange("ALL");
                handleDietaryChange("ALL");
                handleSearchChange("");
              }}
              className="px-6 py-2 rounded-lg bg-racing-red text-white font-racing font-bold text-xs uppercase"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <AnimatePresence mode="popLayout">
                {paginatedItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="bg-garage-black border border-metallic-silver/20 hover:border-racing-red/80 rounded-2xl p-5 sm:p-6 group transition-all duration-500 shadow-xl flex flex-col justify-between relative overflow-hidden"
                  >
                    {/* Racing Line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-racing-red to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-racing font-black text-xs tracking-widest text-turbo-orange">
                          {item.raceNo}
                        </span>
                        <span className="text-[10px] font-mono text-velocity-yellow px-2 py-0.5 rounded bg-turbo-black border border-velocity-yellow/30 uppercase">
                          {item.octaneRating}
                        </span>
                      </div>

                      <div className="mb-4 overflow-hidden rounded-xl">
                        <ImagePlaceholder
                          src={item.imageSrc}
                          alt={`${item.name} - The Wheels Turbo Cafe Coimbatore`}
                          label={item.imageLabel}
                          aspectRatio="16/9"
                          badgeText={item.category}
                        />
                      </div>

                      <div className="flex items-baseline justify-between gap-2 mb-2">
                        <h3 className="font-display font-black text-lg uppercase tracking-wider text-performance-white group-hover:text-turbo-orange transition-colors">
                          {item.name}
                        </h3>
                        <span className="font-racing font-black text-xl text-velocity-yellow shrink-0">
                          ₹{item.price}
                        </span>
                      </div>

                      <p className="font-sans text-xs text-metallic-silver/80 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {item.variants && (
                        <div className="flex flex-wrap items-center gap-1.5 mb-4 bg-turbo-black/70 p-2 rounded-lg border border-white/5">
                          <span className="text-[10px] font-racing text-metallic-silver/60 uppercase">OPTIONS:</span>
                          {item.variants.map((v) => (
                            <span
                              key={v.label}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-garage-black border border-white/10 text-metallic-silver"
                            >
                              {v.label}: <strong className="text-velocity-yellow font-racing">₹{v.price}</strong>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Telemetry Footer */}
                    <div className="border-t border-white/10 pt-4 flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 text-[10px] font-racing font-bold px-2.5 py-1 rounded border ${
                            item.dietary === "VEG"
                              ? "text-emerald-400 border-emerald-500/30 bg-emerald-950/40"
                              : item.dietary === "NON-VEG"
                              ? "text-racing-red border-racing-red/30 bg-racing-red/10"
                              : "text-velocity-yellow border-velocity-yellow/30 bg-velocity-yellow/10"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              item.dietary === "VEG"
                                ? "bg-emerald-400"
                                : item.dietary === "NON-VEG"
                                ? "bg-racing-red"
                                : "bg-velocity-yellow"
                            }`}
                          />
                          {item.dietary}
                        </span>
                      </div>

                      <div className="text-[11px] font-racing font-bold tracking-wider text-metallic-silver/80 group-hover:text-turbo-orange transition-colors uppercase flex items-center gap-1.5">
                        <span>{item.category}</span>
                        <Flame className="w-3.5 h-3.5 text-racing-red group-hover:text-turbo-orange transition-colors" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* 6. MOTORSPORT PAGINATION TELEMETRY BAR */}
            {totalPages > 1 && (
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-garage-black border border-racing-red/30 shadow-2xl">
                {/* Telemetry info */}
                <div className="flex items-center gap-2 text-xs font-mono text-metallic-silver/70">
                  <span className="w-2 h-2 rounded-full bg-racing-red animate-ping" />
                  <span>
                    LAP / PAGE <strong className="text-velocity-yellow font-racing text-sm">{currentPage}</strong> OF <strong className="text-white font-racing text-sm">{totalPages}</strong>
                  </span>
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {/* First Page */}
                  <button
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                    aria-label="First page"
                    className="p-2 rounded-lg bg-turbo-black border border-white/10 text-metallic-silver hover:text-white hover:border-racing-red/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronsLeft className="w-4 h-4" />
                  </button>

                  {/* Previous Page */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-turbo-black border border-white/10 text-xs font-racing font-bold text-metallic-silver hover:text-white hover:border-racing-red/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">PREV</span>
                  </button>

                  {/* Numeric Page Buttons */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter((p) => {
                        if (totalPages <= 7) return true;
                        return (
                          p === 1 ||
                          p === totalPages ||
                          Math.abs(p - currentPage) <= 1
                        );
                      })
                      .map((p, idx, arr) => {
                        const prev = arr[idx - 1];
                        const showEllipsis = prev && p - prev > 1;

                        return (
                          <React.Fragment key={p}>
                            {showEllipsis && (
                              <span className="px-1 text-xs font-mono text-metallic-silver/50">
                                ...
                              </span>
                            )}
                            <button
                              onClick={() => handlePageChange(p)}
                              aria-label={`Go to page ${p}`}
                              className={`w-8 h-8 rounded-lg text-xs font-racing font-bold transition-all duration-200 ${
                                currentPage === p
                                  ? "bg-gradient-to-r from-racing-red to-turbo-orange text-white shadow-[0_0_14px_rgba(225,6,0,0.7)] border border-red-400"
                                  : "bg-turbo-black text-metallic-silver hover:text-white border border-white/10 hover:border-racing-red/40"
                              }`}
                            >
                              {p}
                            </button>
                          </React.Fragment>
                        );
                      })}
                  </div>

                  {/* Next Page */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-turbo-black border border-white/10 text-xs font-racing font-bold text-metallic-silver hover:text-white hover:border-racing-red/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <span className="hidden sm:inline">NEXT</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Last Page */}
                  <button
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                    aria-label="Last page"
                    className="p-2 rounded-lg bg-turbo-black border border-white/10 text-metallic-silver hover:text-white hover:border-racing-red/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronsRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* Fan & Cafe Tribute Banner */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-garage-black via-carbon-black to-garage-black border border-racing-red/30 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-racing-red/5 blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-racing font-bold text-velocity-yellow uppercase tracking-widest">
                <Heart className="w-4 h-4 text-racing-red fill-racing-red" />
                AK RACING FAN CREATION
              </div>
              <h3 className="font-display font-black text-2xl uppercase text-performance-white">
                EXPERIENCE THE REAL TASTE AT THE WHEELS TURBO CAFE
              </h3>
              <p className="text-xs sm:text-sm text-metallic-silver/80 max-w-xl font-sans">
                Curated to celebrate the speed, style, and culinary energy of Coimbatore&apos;s ultimate motorsport cafe. Visit us in RS Puram to taste all these creations fresh on the grid!
              </p>
            </div>

            <MagneticButton
              size="md"
              variant="primary"
              href="/contact"
              cursorLabel="VISIT"
            >
              VISIT CAFE COIMBATORE →
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
