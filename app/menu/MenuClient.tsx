"use client";

import React, { useState, useMemo, useEffect } from "react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
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
  Layers,
  UtensilsCrossed,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  SlidersHorizontal,
  Filter,
  X,
  RotateCcw,
  ArrowUpDown,
  DollarSign,
  Tag,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ITEMS_PER_PAGE = 6;

export function MenuClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [dietaryFilter, setDietaryFilter] = useState<"ALL" | "VEG" | "NON-VEG" | "EGG">("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc" | "name-asc">("default");
  const [priceRange, setPriceRange] = useState<"all" | "under-100" | "100-200" | "above-200">("all");
  const [vipOnly, setVipOnly] = useState<boolean>(false);

  // Close modal on Escape key press and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsFilterModalOpen(false);
      }
    };

    if (isFilterModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFilterModalOpen]);

  const featuredPicks = useMemo(
    () => MENU_ITEMS.filter((item) => item.isPitstopPick),
    []
  );

  const displayedItems = useMemo(() => {
    let items = MENU_ITEMS.filter((item) => {
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

      // VIP filter
      const matchesVip = !vipOnly || item.isPitstopPick;

      // Price range filter
      let matchesPrice = true;
      if (priceRange === "under-100") {
        matchesPrice = item.price < 100;
      } else if (priceRange === "100-200") {
        matchesPrice = item.price >= 100 && item.price <= 200;
      } else if (priceRange === "above-200") {
        matchesPrice = item.price > 200;
      }

      return matchesCategory && matchesDietary && matchesSearch && matchesVip && matchesPrice;
    });

    // Sorting
    if (sortBy === "price-asc") {
      items = [...items].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      items = [...items].sort((a, b) => b.price - a.price);
    } else if (sortBy === "name-asc") {
      items = [...items].sort((a, b) => a.name.localeCompare(b.name));
    }

    return items;
  }, [selectedCategory, dietaryFilter, searchQuery, vipOnly, priceRange, sortBy]);

  // Active filter count
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== "ALL") count++;
    if (dietaryFilter !== "ALL") count++;
    if (vipOnly) count++;
    if (priceRange !== "all") count++;
    if (sortBy !== "default") count++;
    return count;
  }, [selectedCategory, dietaryFilter, vipOnly, priceRange, sortBy]);

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

  const handleResetAllFilters = () => {
    setSelectedCategory("ALL");
    setDietaryFilter("ALL");
    setSearchQuery("");
    setVipOnly(false);
    setPriceRange("all");
    setSortBy("default");
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
                    alt={`${item.name} (${item.category}) - Signature Dish at The Wheels Turbo Cafe RS Puram Coimbatore`}
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
          {/* Top Row: Search + Filter Popup Trigger + Dietary Filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Box with Integrated Filter Icon Trigger */}
            <div className="flex items-center gap-2 flex-1 max-w-lg">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-metallic-silver/60" />
                <input
                  type="text"
                  placeholder="Search food, drinks, ingredients..."
                  aria-label="Search cafe menu items"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 bg-garage-black border border-white/15 focus:border-racing-red rounded-xl text-xs font-sans text-white placeholder-metallic-silver/50 focus:outline-none transition-colors"
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

              {/* Filter Popup Button */}
              <button
                onClick={() => setIsFilterModalOpen(true)}
                className={`relative flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-racing font-bold uppercase transition-all duration-200 shrink-0 border cursor-pointer ${
                  activeFiltersCount > 0
                    ? "bg-gradient-to-r from-racing-red to-turbo-orange text-white border-racing-red shadow-[0_0_16px_rgba(225,6,0,0.5)]"
                    : "bg-garage-black text-metallic-silver hover:text-white hover:border-racing-red/50 border-white/15"
                }`}
                aria-label="Open Filter Dialog"
                title="Open Advanced Menu Filters"
                data-cursor-hover
                data-cursor-text="FILTER"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="hidden xs:inline sm:inline">FILTERS</span>
                {activeFiltersCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-white text-black text-[11px] font-black flex items-center justify-center shrink-0">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
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

          {/* Active Applied Filters Pill Strip (if any active filters from popup) */}
          {(activeFiltersCount > 0 || searchQuery) && (
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
              <span className="text-[10px] font-mono text-metallic-silver/60 uppercase">
                ACTIVE FILTERS:
              </span>

              {selectedCategory !== "ALL" && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-turbo-orange/15 border border-turbo-orange/40 text-turbo-orange text-[11px] font-racing">
                  Gear: {selectedCategory}
                  <button
                    onClick={() => handleCategoryChange("ALL")}
                    className="hover:text-white font-bold"
                    aria-label="Remove category filter"
                  >
                    ✕
                  </button>
                </span>
              )}

              {dietaryFilter !== "ALL" && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-racing-red/15 border border-racing-red/40 text-racing-red text-[11px] font-racing">
                  Diet: {dietaryFilter}
                  <button
                    onClick={() => handleDietaryChange("ALL")}
                    className="hover:text-white font-bold"
                    aria-label="Remove dietary filter"
                  >
                    ✕
                  </button>
                </span>
              )}

              {vipOnly && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-velocity-yellow/15 border border-velocity-yellow/40 text-velocity-yellow text-[11px] font-racing">
                  ★ VIP Pitstop Only
                  <button
                    onClick={() => setVipOnly(false)}
                    className="hover:text-white font-bold"
                    aria-label="Remove VIP filter"
                  >
                    ✕
                  </button>
                </span>
              )}

              {priceRange !== "all" && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-[11px] font-racing">
                  Price: {priceRange === "under-100" ? "Under ₹100" : priceRange === "100-200" ? "₹100 - ₹200" : "Above ₹200"}
                  <button
                    onClick={() => setPriceRange("all")}
                    className="hover:text-white font-bold"
                    aria-label="Remove price filter"
                  >
                    ✕
                  </button>
                </span>
              )}

              {sortBy !== "default" && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/15 border border-blue-500/40 text-blue-400 text-[11px] font-racing">
                  Sort: {sortBy === "price-asc" ? "Price: Low to High" : sortBy === "price-desc" ? "Price: High to Low" : "Name A-Z"}
                  <button
                    onClick={() => setSortBy("default")}
                    className="hover:text-white font-bold"
                    aria-label="Remove sort filter"
                  >
                    ✕
                  </button>
                </span>
              )}

              <button
                onClick={handleResetAllFilters}
                className="text-[11px] font-racing font-bold text-metallic-silver hover:text-racing-red ml-auto uppercase underline cursor-pointer"
              >
                Clear All
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3.1 INTERACTIVE RACING FILTER POPUP MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isFilterModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterModalOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-2xl bg-garage-black border-2 border-racing-red/50 rounded-2xl sm:rounded-3xl shadow-[0_0_50px_rgba(225,6,0,0.3)] z-10 overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Carbon Header */}
              <div className="relative bg-gradient-to-r from-carbon-black via-garage-black to-carbon-black p-5 sm:p-6 border-b border-racing-red/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-racing-red/20 border border-racing-red/50 flex items-center justify-center text-racing-red">
                    <SlidersHorizontal className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-turbo-orange uppercase">
                        PITSTOP TUNER
                      </span>
                      {activeFiltersCount > 0 && (
                        <span className="px-2 py-0.5 rounded-full bg-racing-red text-white text-[10px] font-mono font-black">
                          {activeFiltersCount} ACTIVE
                        </span>
                      )}
                    </div>
                    <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-wider text-white">
                      FILTER MENU SPECS
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleResetAllFilters}
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-turbo-black border border-white/10 text-metallic-silver hover:text-racing-red hover:border-racing-red/40 text-xs font-racing uppercase transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset
                  </button>
                  <button
                    onClick={() => setIsFilterModalOpen(false)}
                    aria-label="Close Filter Popup"
                    className="w-9 h-9 rounded-xl bg-turbo-black border border-white/10 hover:border-racing-red text-metallic-silver hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable Filters Body */}
              <div className="p-5 sm:p-6 space-y-6 overflow-y-auto custom-scrollbar flex-1">
                {/* 1. DIETARY PREFERENCE */}
                <div>
                  <label className="flex items-center gap-2 text-xs font-racing font-bold text-metallic-silver tracking-wider uppercase mb-3">
                    <Flame className="w-4 h-4 text-racing-red" />
                    DIETARY PREFERENCE
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                    {(
                      [
                        { id: "ALL", label: "ALL DISHES", icon: "⚡" },
                        { id: "VEG", label: "PURE VEG", icon: "🟢" },
                        { id: "NON-VEG", label: "NON-VEG", icon: "🔴" },
                        { id: "EGG", label: "EGG ONLY", icon: "🟡" },
                      ] as const
                    ).map((diet) => {
                      const isSelected = dietaryFilter === diet.id;
                      return (
                        <button
                          key={diet.id}
                          onClick={() => handleDietaryChange(diet.id)}
                          className={`p-3 rounded-xl border text-xs font-racing font-bold tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                            isSelected
                              ? diet.id === "VEG"
                                ? "bg-emerald-950/60 border-emerald-500 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                                : diet.id === "NON-VEG"
                                ? "bg-red-950/60 border-racing-red text-red-300 shadow-[0_0_15px_rgba(225,6,0,0.4)]"
                                : diet.id === "EGG"
                                ? "bg-amber-950/60 border-amber-500 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                                : "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                              : "bg-turbo-black border-white/10 text-metallic-silver hover:text-white hover:border-white/30"
                          }`}
                        >
                          <span>{diet.icon}</span>
                          <span>{diet.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. GEAR SELECTOR (CATEGORIES) */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="flex items-center gap-2 text-xs font-racing font-bold text-metallic-silver tracking-wider uppercase">
                      <Layers className="w-4 h-4 text-turbo-orange" />
                      GEAR CATEGORY ({MENU_CATEGORIES.length} OPTIONS)
                    </label>
                    <span className="text-[11px] font-mono text-velocity-yellow">
                      Active: {selectedCategory}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-1 border border-white/10 rounded-xl bg-turbo-black/50">
                    {MENU_CATEGORIES.map((cat) => {
                      const isSelected = selectedCategory === cat;
                      return (
                        <button
                          key={cat}
                          onClick={() => handleCategoryChange(cat)}
                          className={`px-3 py-2 rounded-lg text-xs font-racing font-bold tracking-wider uppercase transition-all text-left flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? "bg-gradient-to-r from-racing-red to-turbo-orange text-white shadow-[0_0_12px_rgba(225,6,0,0.5)] border border-racing-red/50"
                              : "bg-garage-black/80 text-metallic-silver hover:text-white border border-white/5 hover:border-white/20"
                          }`}
                        >
                          <span className="truncate">{cat}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. PRICE RANGE & SORTING */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Price Range */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-racing font-bold text-metallic-silver tracking-wider uppercase mb-2">
                      <DollarSign className="w-4 h-4 text-emerald-400" />
                      PRICE BUDGET
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {(
                        [
                          { id: "all", label: "ALL PRICES" },
                          { id: "under-100", label: "UNDER ₹100" },
                          { id: "100-200", label: "₹100 - ₹200" },
                          { id: "above-200", label: "ABOVE ₹200" },
                        ] as const
                      ).map((range) => {
                        const isSelected = priceRange === range.id;
                        return (
                          <button
                            key={range.id}
                            onClick={() => {
                              setPriceRange(range.id);
                              setCurrentPage(1);
                            }}
                            className={`p-2.5 rounded-xl border text-[11px] font-racing font-bold text-center transition-all cursor-pointer ${
                              isSelected
                                ? "bg-emerald-950/70 border-emerald-400 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                                : "bg-turbo-black border-white/10 text-metallic-silver hover:text-white"
                            }`}
                          >
                            {range.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Sort By */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-racing font-bold text-metallic-silver tracking-wider uppercase mb-2">
                      <ArrowUpDown className="w-4 h-4 text-velocity-yellow" />
                      SORT TELEMETRY
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {(
                        [
                          { id: "default", label: "RECOMMENDED" },
                          { id: "price-asc", label: "PRICE: LOW → HIGH" },
                          { id: "price-desc", label: "PRICE: HIGH → LOW" },
                          { id: "name-asc", label: "NAME: A → Z" },
                        ] as const
                      ).map((sort) => {
                        const isSelected = sortBy === sort.id;
                        return (
                          <button
                            key={sort.id}
                            onClick={() => {
                              setSortBy(sort.id);
                              setCurrentPage(1);
                            }}
                            className={`p-2.5 rounded-xl border text-[11px] font-racing font-bold text-center transition-all cursor-pointer ${
                              isSelected
                                ? "bg-velocity-yellow/15 border-velocity-yellow text-velocity-yellow shadow-[0_0_12px_rgba(255,196,0,0.3)]"
                                : "bg-turbo-black border-white/10 text-metallic-silver hover:text-white"
                            }`}
                          >
                            {sort.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 4. SPECIAL FILTER: VIP / PITSTOP PICKS */}
                <div>
                  <button
                    onClick={() => {
                      setVipOnly(!vipOnly);
                      setCurrentPage(1);
                    }}
                    className={`w-full p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                      vipOnly
                        ? "bg-velocity-yellow/15 border-velocity-yellow shadow-[0_0_20px_rgba(255,196,0,0.25)]"
                        : "bg-turbo-black border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-3 text-left">
                      <div className="w-9 h-9 rounded-xl bg-velocity-yellow/20 border border-velocity-yellow/40 flex items-center justify-center text-velocity-yellow shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-racing font-bold text-performance-white uppercase flex items-center gap-2">
                          SHOW ONLY VIP PITSTOP PICKS
                          <span className="text-[10px] font-mono text-velocity-yellow px-1.5 py-0.5 rounded bg-velocity-yellow/10">
                            SIGNATURES
                          </span>
                        </div>
                        <p className="text-[11px] text-metallic-silver/70 font-sans">
                          Filter exclusively to chef&apos;s premium octane specials & top-sellers
                        </p>
                      </div>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${
                        vipOnly
                          ? "bg-velocity-yellow border-velocity-yellow text-black"
                          : "border-white/20 bg-garage-black"
                      }`}
                    >
                      {vipOnly && <Check className="w-4 h-4 font-black" />}
                    </div>
                  </button>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="p-4 sm:p-6 bg-carbon-black border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-racing text-metallic-silver">
                  <Flame className="w-4 h-4 text-racing-red" />
                  <span>
                    <strong className="text-velocity-yellow font-black">{displayedItems.length}</strong> MATCHING ITEMS FOUND
                  </span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleResetAllFilters}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-turbo-black border border-white/15 text-metallic-silver hover:text-white text-xs font-racing font-bold uppercase transition-colors cursor-pointer"
                  >
                    RESET ALL
                  </button>
                  <button
                    onClick={() => {
                      setIsFilterModalOpen(false);
                      const gridElem = document.getElementById("menu-grid-section");
                      if (gridElem) {
                        gridElem.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-racing-red to-turbo-orange hover:brightness-110 text-white text-xs font-racing font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(225,6,0,0.5)] transition-all cursor-pointer"
                  >
                    APPLY FILTERS ({displayedItems.length})
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. MAIN MENU GRID */}
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
                          alt={`${item.name} - Best ${item.category} in Coimbatore | The Wheels Turbo Cafe RS Puram`}
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
