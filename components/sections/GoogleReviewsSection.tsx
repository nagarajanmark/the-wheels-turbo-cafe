"use client";

import React, { useState } from "react";
import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_SUMMARY, GoogleReview } from "@/data/reviewsData";
import {
  Star,
  CheckCircle,
  ExternalLink,
  Sparkles,
  Heart,
  ShieldCheck,
  Play,
  Pause,
  LayoutGrid,
  Radio,
} from "lucide-react";

const GoogleIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

const ReviewCard: React.FC<{ rev: GoogleReview }> = ({ rev }) => (
  <div className="w-[280px] xs:w-[320px] sm:w-[350px] xl:w-[380px] shrink-0 relative bg-garage-black border border-metallic-silver/20 hover:border-racing-red/80 rounded-2xl p-4 sm:p-5 xl:p-6 transition-all duration-300 group shadow-xl flex flex-col justify-between select-none">
    {/* Top Corner Google 'G' watermark */}
    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-40 group-hover:opacity-100 transition-opacity">
      <GoogleIcon className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
    </div>

    <div>
      {/* Reviewer Header */}
      <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
        <div
          className={`w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-gradient-to-tr ${rev.avatarColor} text-white font-racing font-bold text-xs flex items-center justify-center shadow-lg shrink-0 border border-white/20`}
        >
          {rev.avatarText}
        </div>

        <div className="space-y-0.5 max-w-[70%]">
          <h4 className="font-display font-bold text-xs sm:text-sm text-performance-white uppercase tracking-wider group-hover:text-velocity-yellow transition-colors line-clamp-1">
            {rev.author}
          </h4>
          <p className="text-[9.5px] sm:text-[10px] font-sans text-metallic-silver/70 line-clamp-1">
            {rev.role}
          </p>
        </div>
      </div>

      {/* Star Rating & Time */}
      <div className="flex items-center justify-between mb-2.5 sm:mb-3 border-b border-white/5 pb-2">
        <div className="flex items-center gap-0.5">
          {[...Array(rev.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-amber-400 text-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.5)]"
            />
          ))}
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono text-metallic-silver/60">
          {rev.timeAgo}
        </span>
      </div>

      {/* Review Text */}
      <p className="font-sans text-[11px] sm:text-xs text-metallic-silver/90 leading-relaxed mb-3 sm:mb-4 line-clamp-4">
        &ldquo;{rev.content}&rdquo;
      </p>

      {/* Sub-Ratings Tag if available */}
      {rev.ratingsBreakdown && (
        <div className="flex items-center gap-2 mb-2.5 sm:mb-3 text-[9.5px] sm:text-[10px] font-mono text-metallic-silver/70 bg-turbo-black/60 px-2.5 py-1 rounded border border-white/5">
          <span>Food: <strong className="text-emerald-400 font-racing">5/5</strong></span>
          <span>•</span>
          <span>Service: <strong className="text-emerald-400 font-racing">5/5</strong></span>
          <span>•</span>
          <span>Atmosphere: <strong className="text-emerald-400 font-racing">5/5</strong></span>
        </div>
      )}
    </div>

    {/* Bottom Section: Highlights & Owner Response */}
    <div className="space-y-2 pt-1.5 sm:pt-2">
      {/* Highlighted Dish */}
      {rev.highlightDish && (
        <div className="flex items-center gap-1.5 text-[9.5px] sm:text-[10px] font-racing text-velocity-yellow">
          <Sparkles className="w-3 h-3 text-velocity-yellow shrink-0" />
          <span className="uppercase tracking-wider line-clamp-1">
            HIGHLIGHT: {rev.highlightDish}
          </span>
        </div>
      )}

      {/* Owner Response Box */}
      {rev.ownerResponse && (
        <div className="p-2 sm:p-2.5 rounded-xl bg-turbo-black/95 border border-racing-red/30 space-y-0.5">
          <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-racing">
            <span className="text-racing-red flex items-center gap-1 font-bold">
              <ShieldCheck className="w-3 h-3 text-racing-red" />
              THE WHEELS TURBO CAFE (OWNER)
            </span>
            <span className="text-[8.5px] sm:text-[9px] font-mono text-metallic-silver/50">
              {rev.ownerResponse.timeAgo}
            </span>
          </div>
          <p className="text-[10px] sm:text-[11px] font-sans text-metallic-silver/90 italic line-clamp-2">
            &ldquo;{rev.ownerResponse.text}&rdquo;
          </p>
        </div>
      )}

      {/* Bottom Card Footer */}
      <div className="border-t border-white/10 pt-2 flex items-center justify-between text-[9.5px] sm:text-[10px] font-mono text-metallic-silver/60">
        <span className="inline-flex items-center gap-1 text-emerald-400">
          <CheckCircle className="w-3 h-3" />
          Google Verified
        </span>
        {rev.likesCount && (
          <span className="inline-flex items-center gap-1 text-metallic-silver/70">
            <Heart className="w-3 h-3 text-racing-red fill-racing-red/30" />
            {rev.likesCount}
          </span>
        )}
      </div>
    </div>
  </div>
);

export const GoogleReviewsSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<"SCROLL" | "GRID">("SCROLL");
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Split reviews into two lanes for auto scrolling
  const half = Math.ceil(GOOGLE_REVIEWS.length / 2);
  const track1Reviews = [...GOOGLE_REVIEWS.slice(0, half), ...GOOGLE_REVIEWS.slice(0, half)];
  const track2Reviews = [...GOOGLE_REVIEWS.slice(half), ...GOOGLE_REVIEWS.slice(half)];

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-racing-red/10 blur-[180px] pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-garage-black border border-velocity-yellow/40 text-velocity-yellow text-xs font-racing font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4 shadow-[0_0_15px_rgba(255,196,0,0.2)]">
              <GoogleIcon className="w-4 h-4 shrink-0" />
              <span>LIVE GOOGLE REVIEWS TELEMETRY</span>
            </div>

            <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-performance-white leading-none">
              WHAT OUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-velocity-yellow via-turbo-orange to-racing-red">
                GUESTS SAY.
              </span>
            </h2>
          </div>

          {/* Rating Score Summary Widget */}
          <div className="p-4 sm:p-5 rounded-2xl bg-garage-black border border-white/15 shadow-2xl flex items-center gap-4 sm:gap-6 shrink-0">
            <div className="text-center border-r border-white/10 pr-4 sm:pr-6">
              <div className="font-display font-black text-3xl sm:text-4xl text-velocity-yellow">
                {GOOGLE_REVIEWS_SUMMARY.overallRating}
              </div>
              <div className="flex items-center gap-0.5 my-1 text-amber-400">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <Star className="w-3.5 h-3.5 fill-amber-400/80 text-amber-400" />
              </div>
              <span className="text-[10px] font-mono text-metallic-silver/70 uppercase">
                {GOOGLE_REVIEWS_SUMMARY.totalReviews} GOOGLE REVIEWS
              </span>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <strong className="text-white font-racing uppercase tracking-wider">
                  4.7 OUT OF 5.0 RATED
                </strong>
              </div>
              <p className="text-[11px] text-metallic-silver/70 font-sans">
                Real Customer Feedback from R.S. Puram
              </p>
              <a
                href="https://www.google.com/search?q=the+wheels+turbo+cafe+RS+Puram+Coimbatore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-racing font-bold text-turbo-orange hover:text-white uppercase tracking-wider transition-colors pt-1"
              >
                <span>WRITE A REVIEW</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* View Mode & Auto-Scroll Controller Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-8 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("SCROLL")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-racing font-bold tracking-wider uppercase transition-all ${
                viewMode === "SCROLL"
                  ? "bg-gradient-to-r from-racing-red to-turbo-orange text-white shadow-[0_0_15px_rgba(225,6,0,0.5)]"
                  : "bg-garage-black text-metallic-silver hover:text-white border border-white/10"
              }`}
            >
              <Radio className="w-3.5 h-3.5" />
              <span>AUTO-SCROLL MARQUEE</span>
            </button>

            <button
              onClick={() => setViewMode("GRID")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-racing font-bold tracking-wider uppercase transition-all ${
                viewMode === "GRID"
                  ? "bg-gradient-to-r from-velocity-yellow to-amber-500 text-black shadow-[0_0_15px_rgba(255,196,0,0.5)] font-black"
                  : "bg-garage-black text-metallic-silver hover:text-white border border-white/10"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>GRID VIEW</span>
            </button>
          </div>

          {viewMode === "SCROLL" && (
            <div className="flex items-center gap-3 text-xs font-mono text-metallic-silver/70">
              <span className="hidden sm:inline text-[11px] bg-turbo-black px-2.5 py-1 rounded border border-white/10">
                💡 HOVER OVER ANY CARD TO PAUSE SCROLL
              </span>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-garage-black border border-white/10 text-xs font-racing text-white hover:border-racing-red/50 transition-all"
              >
                {isPaused ? <Play className="w-3 h-3 text-emerald-400" /> : <Pause className="w-3 h-3 text-turbo-orange" />}
                <span>{isPaused ? "RESUME" : "PAUSE"}</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* AUTO SCROLLING LANES */}
      {viewMode === "SCROLL" ? (
        <div className="relative w-full overflow-hidden pause-marquee space-y-6">
          {/* Left and Right Edge Gradient Vignettes */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-turbo-black via-turbo-black/90 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-turbo-black via-turbo-black/90 to-transparent z-20 pointer-events-none" />

          {/* Lane 1: Auto Scrolls Left */}
          <div
            className="animate-marquee-left gap-6 px-4"
            style={{
              animationPlayState: isPaused ? "paused" : undefined,
            }}
          >
            {track1Reviews.map((rev, idx) => (
              <ReviewCard key={`track1-${rev.id}-${idx}`} rev={rev} />
            ))}
          </div>

          {/* Lane 2: Auto Scrolls Right */}
          <div
            className="animate-marquee-right gap-6 px-4"
            style={{
              animationPlayState: isPaused ? "paused" : undefined,
            }}
          >
            {track2Reviews.map((rev, idx) => (
              <ReviewCard key={`track2-${rev.id}-${idx}`} rev={rev} />
            ))}
          </div>
        </div>
      ) : (
        /* Static Grid View */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOOGLE_REVIEWS.map((rev) => (
            <ReviewCard key={rev.id} rev={rev} />
          ))}
        </div>
      )}

      {/* Footer Callout */}
      <div className="mt-12 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href={GOOGLE_REVIEWS_SUMMARY.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-garage-black border border-racing-red/40 hover:border-racing-red text-white font-racing font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(225,6,0,0.25)]"
        >
          <GoogleIcon className="w-4 h-4" />
          <span>READ ALL REVIEWS ON GOOGLE MAPS →</span>
        </a>
      </div>
    </section>
  );
};
