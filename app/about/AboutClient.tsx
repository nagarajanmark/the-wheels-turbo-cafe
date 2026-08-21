"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { LightboxModal } from "@/components/ui/LightboxModal";
import { Gauge, Flame, Wrench, Shield, Flag, Users, Sparkles, Heart, Award, Newspaper, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const GARAGE_TOUR = [
  {
    title: "MAIN COCKPIT & TYRE SEATING",
    label: "CAFE GARAGE INTERIOR // RS PURAM",
    src: "/images/gallery/wheels-turbo-cafe-rs-puram-garage-view.jpg",
    alt: "Handcrafted racing tyre tables and ambient paddock seating at The Wheels Turbo Cafe in RS Puram, Coimbatore",
    caption: "Bespoke handcrafted racing tyre tables, redline paddock lounge seating, and immersive full-wall motorsport murals in RS Puram, Coimbatore.",
    aspectRatio: "4/3" as const,
    objectPosition: "object-center",
  },
  {
    title: "FOUNDER AKILANDESHWARI SUNDER",
    label: "FOUNDER & OWNER PORTRAIT",
    src: "/images/owner/akhila-sundar-founder-the-wheels-turbo-cafe-coimbatore.jpg",
    alt: "Portrait of Founder Akilandeshwari Sunder of The Wheels Turbo Cafe in Coimbatore",
    caption: "Founder Akilandeshwari Sunder, driving the vision of Coimbatore's premier motorsport and Ajith Kumar tribute cafe.",
    aspectRatio: "4/3" as const,
    objectPosition: "object-top",
  },
  {
    title: "CUSTOM RACING TYRE TABLES",
    label: "PADDOCK COCKPIT SEATING",
    src: "/images/gallery/coimbatore-motorsport-cafe-indoor-dining-ambience.jpg",
    alt: "Racing tyre dining tables and bucket seats at The Wheels Turbo Cafe in RS Puram Coimbatore",
    caption: "Authentic racing tyre tables custom fabricated to give diners a true motorsport paddock feel.",
    aspectRatio: "4/3" as const,
    objectPosition: "object-center",
  },
  {
    title: "FOUNDER WITH AJITH TRIBUTE STANDEE",
    label: "FOUNDER AKILANDESHWARI SUNDER",
    src: "/images/owner/akhila-sundar-with-thala-ajith-kumar-tribute.png",
    alt: "Founder Akilandeshwari Sunder at The Wheels Turbo Cafe in RS Puram Coimbatore posing with Thala Ajith Kumar racing suit tribute standee",
    caption: "Founder Akilandeshwari Sunder at the cafe posing with the life-sized Thala Ajith Kumar Racing suit standee.",
    aspectRatio: "4/3" as const,
    objectPosition: "object-top",
  },
  {
    title: "BIRTHDAY & SPECIAL CELEBRATIONS",
    label: "CANDLELIGHT & PARTY DECOR",
    src: "/images/gallery/coimbatore-cafe-candlelight-birthday-setup.jpg",
    alt: "Bespoke birthday celebration, candlelight party decor and surprise events setup at The Wheels Turbo Cafe in RS Puram Coimbatore",
    caption: "Custom candlelight party setup with rose petals, celebratory dining, and personalized birthday surprises in RS Puram Coimbatore.",
    aspectRatio: "4/3" as const,
    objectPosition: "object-center",
  },
  {
    title: "DINAMALAR NEWSPAPER FEATURE",
    label: "PRESS COVERAGE IN DINAMALAR",
    src: "/images/owner/the-wheels-turbo-cafe-dinamalar-newspaper-feature.png",
    alt: "Dinamalar Tamil daily newspaper feature article covering Akilandeshwari Sunder and The Wheels Turbo Cafe in RS Puram Coimbatore",
    caption: "Dinamalar Tamil news feature: 'ரேசிங்கை ரசித்த பெண்... இன்று ரேசிங் கஃபே ஓனர்' celebrating Coimbatore's motorsport themed cafe.",
    aspectRatio: "4/3" as const,
    objectPosition: "object-top",
  },
];

const FOUR_PILLARS = [
  {
    num: "01",
    title: "EAT.",
    subtitle: "High-Octane Culinary Engineering",
    description:
      "Crafted with precision. Double-smashed prime patties, artisanal brioche, and nitro-infused beverages engineered to satisfy your tastebuds.",
    icon: Flame,
    color: "from-racing-red to-turbo-orange",
  },
  {
    num: "02",
    title: "EXPLORE.",
    subtitle: "Authentic Motorsport Heritage",
    description:
      "Step into a living paddock. Explore real tyre tables, Hotwheels diecast displays, aerodynamic posters, and tribute walls that celebrate racing history.",
    icon: Gauge,
    color: "from-turbo-orange to-velocity-yellow",
  },
  {
    num: "03",
    title: "CONNECT.",
    subtitle: "The Coimbatore Petrolhead Sanctuary",
    description:
      "A home base for automotive enthusiasts. Weekend car meets, motorsport pitstops, live Grand Prix screenings, and community engine talks under one roof.",
    icon: Users,
    color: "from-velocity-yellow to-racing-red",
  },
  {
    num: "04",
    title: "REMEMBER.",
    subtitle: "Unforgettable Track Memories",
    description:
      "Every visit leaves a mark. From late-night coffee runs to post-drive victory feasts, make your moments part of our Coimbatore garage legacy.",
    icon: Flag,
    color: "from-racing-red via-turbo-orange to-velocity-yellow",
  },
];

export function AboutClient() {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    title: string;
    label: string;
    src: string;
    alt?: string;
    caption: string;
  } | null>(null);

  return (
    <div className="w-full bg-turbo-black text-performance-white select-none">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] flex flex-col justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-carbon-black overflow-hidden border-b border-white/10">
        {/* Background Image Layer (Positioned on Right Side of Hero with Smooth Shadow Blending) */}
        <div className="absolute top-0 bottom-0 right-0 w-full sm:w-[60%] md:w-[48%] lg:w-[42%] xl:w-[38%] 2xl:w-[35%] z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/owner/akhila-sundar-founder-the-wheels-turbo-cafe-coimbatore.jpg"
            alt="Founder Akilandeshwari Sunder of The Wheels Turbo Cafe in RS Puram Coimbatore"
            fill
            priority
            quality={95}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            className="object-cover object-[center_top] sm:object-[center_12%]"
          />
          {/* Full dark shadow & gradient overlay on mobile for perfect readability */}
          <div className="absolute inset-0 bg-carbon-black/85 sm:bg-carbon-black/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 via-carbon-black/85 to-carbon-black sm:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-carbon-black via-carbon-black/90 to-carbon-black/70 sm:hidden" />

          {/* Smooth shadow & edge gradients blending cleanly into dark theme on desktop/laptop */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-36 lg:w-48 bg-gradient-to-r from-carbon-black to-transparent hidden sm:block" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-carbon-black to-transparent opacity-80" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-carbon-black to-transparent" />
        </div>

        {/* Ambient Left & Center Glows */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-racing-red/15 blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Fan Dedication & Story Badge */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-garage-black border border-racing-red/40 text-racing-red text-[10px] sm:text-xs font-racing font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase">
              <span className="w-2 h-2 rounded-full bg-racing-red animate-ping" />
              FOUNDER STORY // THE WHEELS TURBO CAFE
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-velocity-yellow/10 border border-velocity-yellow/30 text-velocity-yellow text-[10px] sm:text-[11px] font-racing font-bold tracking-wider uppercase">
              <Heart className="w-3 h-3 text-racing-red fill-racing-red" />
              CURATED WITH LOVE BY AN AJITH KUMAR FAN GIRL
            </div>
          </div>

          <h1 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-tight text-performance-white leading-tight">
            BORN FROM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow text-glow-red">
              PURE PASSION.
            </span>
          </h1>

          <p className="mt-3 sm:mt-5 font-sans text-xs sm:text-sm md:text-base text-metallic-silver/90 max-w-xl leading-relaxed border-l-2 border-racing-red pl-3 sm:pl-4">
            Founded by ardent motorsport racer and Ajith Kumar fan girl <strong className="text-performance-white">Akilandeshwari Sunder</strong>, The Wheels Turbo Cafe was built to give Coimbatore an authentic motorsport sanctuary where high-octane racing spirit meets handcrafted flavours.
          </p>
        </div>
      </section>

      {/* 2. THE STORY */}
      <section className="relative py-14 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-racing font-bold tracking-[0.25em] text-turbo-orange uppercase">
              SECTOR 01 // ORIGIN STORY
            </div>

            <h2 className="font-display font-black text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase tracking-tight text-performance-white leading-tight">
              EVERY GREAT <br />
              JOURNEY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red to-turbo-orange">
                STARTS WITH
              </span> <br />
              A PASSION.
            </h2>

            <div className="space-y-3 sm:space-y-4 font-sans text-xs sm:text-sm md:text-base text-metallic-silver/80 leading-relaxed pt-1 sm:pt-2">
              <p>
                Coimbatore holds a revered position in Indian motorsport history—the home of Kari Motor Speedway, legendary tuners, and generations of speed enthusiasts.
              </p>
              <p>
                <strong className="text-performance-white font-semibold">The Wheels Turbo Cafe</strong> was born from a singular obsession: to create an authentic racing theme cafe and unique hangout place founded by an ardent racer Ajith Kumar fan girl, where automotive lovers, friends, and families can gather, refuel with artisanal food and specialty coffee, and celebrate the unyielding spirit of racing in the heart of RS Puram, Coimbatore.
              </p>
              <p>
                Drawing deep inspiration from Thala Ajith Kumar&apos;s celebrated racing career in British F3, FIA Formula 2, and 24H GT endurance racing, our garage embodies the core racing principles: discipline, uncompromising precision, and an unquenchable thirst for performance.
              </p>
            </div>
          </div>

          {/* Right Dual Image Showcase */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <ImagePlaceholder
              src="/images/gallery/best-motorsport-theme-cafe-in-coimbatore.jpeg"
              alt="Handcrafted racing tyre tables and ambient paddock seating at The Wheels Turbo Cafe in RS Puram, Coimbatore"
              label="GARAGE INTERIOR // RS PURAM COIMBATORE"
              aspectRatio="16/9"
              badgeText="RS PURAM COIMBATORE"
              className="w-full shadow-2xl"
            />
            <div className="grid grid-cols-2 gap-3 sm:gap-4 items-stretch">
              <ImagePlaceholder
                src="/images/owner/akhila-sundar-founder-the-wheels-turbo-cafe-coimbatore.jpg"
                alt="Founder Akilandeshwari Sunder posing with Thala Ajith Kumar racing suit tribute standee at The Wheels Turbo Cafe in RS Puram Coimbatore"
                label="FOUNDER & AJITH TRIBUTE"
                aspectRatio="3/4"
                objectPosition="object-top"
                badgeText="THALA TRIBUTE"
                className="w-full h-full shadow-xl"
              />
              <div className="p-4 sm:p-6 rounded-xl bg-garage-black border border-racing-red/40 flex flex-col justify-center text-center h-full relative overflow-hidden shadow-xl">
                <div className="w-2 h-2 rounded-full bg-velocity-yellow animate-ping mx-auto mb-3" />
                <span className="font-display font-black text-xl sm:text-2xl xl:text-3xl text-velocity-yellow leading-tight">
                  RACING <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red to-turbo-orange">
                    THEME
                  </span>
                </span>
                <span className="font-racing font-bold text-[10px] sm:text-xs text-metallic-silver uppercase tracking-widest mt-2">
                  PADDOCK CAFE IN COIMBATORE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER & OWNER STORY SPOTLIGHT */}
      <section className="relative py-16 sm:py-24 bg-carbon-black border-t border-b border-white/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            sectorNumber="02"
            tag="THE FOUNDER'S JOURNEY"
            title={
              <>
                MEET THE FOUNDER: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow">
                  AKILANDESHWARI SUNDER.
                </span>
              </>
            }
            subtitle="From fearless passion to building Coimbatore's most talked-about motorsport cafe in RS Puram."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center bg-garage-black/80 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 xl:p-12 shadow-2xl relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-racing-red/10 rounded-full blur-[140px] pointer-events-none" />

            {/* Left: Founder Photos Grid */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-metallic-silver/20 group">
                <ImagePlaceholder
                  src="/images/owner/akhila-sundar-with-thala-ajith-kumar-tribute.png"
                  alt="Akilandeshwari Sunder founder of The Wheels Turbo Cafe in Coimbatore with Ajith Kumar Standee"
                  label="FOUNDER WITH AJITH TRIBUTE // RS PURAM"
                  aspectRatio="3/4"
                  objectPosition="object-top"
                  badgeText="CAFE FOUNDER & RACER"
                  className="w-full shadow-2xl"
                />
              </div>

              {/* Newspaper Clipping Preview */}
              <div
                onClick={() =>
                  setSelectedPhoto({
                    title: "DINAMALAR NEWSPAPER FEATURE",
                    label: "PRESS COVERAGE IN DINAMALAR",
                    src: "/images/owner/the-wheels-turbo-cafe-dinamalar-newspaper-feature.png",
                    alt: "Dinamalar Tamil daily newspaper feature article covering Akilandeshwari Sunder and The Wheels Turbo Cafe in RS Puram Coimbatore",
                    caption:
                      "Dinamalar feature story: 'ரேசிங்கை ரசித்த பெண்... இன்று ரேசிங் கஃபே ஓனர்' documenting Akilandeshwari Sunder's inspiring story and the success of Wheels Turbo Cafe in RS Puram Coimbatore.",
                  })
                }
                className="p-3 sm:p-4 rounded-xl bg-turbo-black/90 border border-velocity-yellow/30 hover:border-velocity-yellow flex items-center justify-between cursor-pointer group transition-all"
                data-cursor-hover
                data-cursor-text="READ NEWS"
                role="button"
                tabIndex={0}
                aria-label="Read Dinamalar newspaper article about The Wheels Turbo Cafe"
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-velocity-yellow/10 text-velocity-yellow">
                    <Newspaper className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div>
                    <div className="font-racing font-bold text-[10px] sm:text-xs text-velocity-yellow uppercase tracking-wider">
                      FEATURED IN DINAMALAR TAMIL DAILY
                    </div>
                    <div className="font-sans text-[11px] sm:text-xs text-metallic-silver/80 line-clamp-1">
                      &ldquo;ரேசிங்கை ரசித்த பெண்... இன்று ரேசிங் கஃபே ஓனர்&rdquo;
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-velocity-yellow group-hover:translate-x-0.5 transition-transform shrink-0" />
              </div>
            </div>

            {/* Right: Inspiring Story Content */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-racing-red/10 border border-racing-red/30 text-racing-red text-[10px] sm:text-xs font-racing font-bold tracking-widest uppercase">
                <Heart className="w-3.5 h-3.5 text-racing-red" />
                <span>INSPIRING ENTREPRENEURIAL STORY</span>
              </div>

              <h3 className="font-display font-black text-xl xs:text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-performance-white leading-tight">
                &ldquo;If You Turbocharge Your Dreams, <br />
                <span className="text-turbo-orange">Life Itself Becomes A Race.&rdquo;</span>
              </h3>

              <div className="space-y-3 sm:space-y-4 font-sans text-xs sm:text-sm md:text-base text-metallic-silver/80 leading-relaxed">
                <p>
                  Hailing from a village near Bengaluru, <strong className="text-performance-white">Akilandeshwari Sunder</strong> overcame immense personal life hurdles with sheer resilience and unwavering determination. For four years, she carved her own path, working in modeling while holding onto a burning dream: to create an unforgettable sanctuary built on speed and community.
                </p>
                <p>
                  Inspired not just by Ajith Kumar&apos;s cinematic stardom, but by his genuine motorsport dedication, intense discipline, and love for circuit racing, Akilandeshwari decided to translate that passion into a real destination: <strong className="text-performance-white">The Wheels Turbo Cafe in RS Puram, Coimbatore</strong>.
                </p>
                <p>
                  From designing custom tyre tables and brake disc wall fixtures by hand to engineering a fresh-to-order continental menu and hotwheels diecast collections, Akilandeshwari has established Coimbatore&apos;s go-to hotspot for youth, families, and motorsport enthusiasts alike.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 sm:gap-3 font-racing text-[10px] sm:text-xs tracking-wider">
                <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-turbo-black border border-white/15 text-metallic-silver">
                  📍 WEST AROKIASAMY RD, RS PURAM
                </span>
                <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-turbo-black border border-racing-red/30 text-racing-red">
                  🏁 HOTWHEELS & THALA THEMED
                </span>
                <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-turbo-black border border-velocity-yellow/30 text-velocity-yellow">
                  🍔 FRESH PREP ON ORDER
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INSIDE THE GARAGE (Interactive Tour) */}
      <section className="relative py-16 sm:py-24 bg-garage-black border-b border-white/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            sectorNumber="03"
            tag="PADDOCK TOUR"
            title={
              <>
                INSIDE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow">
                  THE GARAGE.
                </span>
              </>
            }
            subtitle="Explore the real automotive aesthetics, tribute walls, and custom engineering that make our Coimbatore cafe unique."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {GARAGE_TOUR.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPhoto(item)}
                className="bg-carbon-black border border-metallic-silver/20 hover:border-racing-red/80 rounded-xl p-3.5 sm:p-4 cursor-pointer group transition-all duration-300 shadow-xl"
                data-cursor-hover
                data-cursor-text="INSPECT"
                role="button"
                tabIndex={0}
                aria-label={`View photo of ${item.title}`}
              >
                <div className="mb-3 overflow-hidden rounded-lg">
                  <ImagePlaceholder
                    src={item.src}
                    alt={item.alt || item.title}
                    label={item.label}
                    aspectRatio={item.aspectRatio || "4/3"}
                    objectPosition={item.objectPosition || "object-center"}
                    badgeText={`ZONE 0${idx + 1}`}
                  />
                </div>
                <h3 className="font-display font-bold text-sm sm:text-base text-performance-white uppercase group-hover:text-turbo-orange transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-[11px] sm:text-xs text-metallic-silver/70 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE FOUR PILLARS */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          sectorNumber="04"
          tag="CORE ETHOS"
          title={
            <>
              THE FOUR PILLARS OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-turbo-orange to-velocity-yellow">
                OUR EXPERIENCE.
              </span>
            </>
          }
          subtitle="Every detail in our Coimbatore cafe was tuned to deliver an authentic motorsport sanctuary."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FOUR_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="relative bg-carbon-black border border-metallic-silver/20 hover:border-racing-red/80 rounded-2xl p-5 sm:p-6 group transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <span className="font-display font-black text-2xl sm:text-3xl text-metallic-silver/30 group-hover:text-turbo-orange transition-colors">
                      {pillar.num}
                    </span>
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-garage-black border border-white/10 flex items-center justify-center text-racing-red group-hover:scale-110 transition-transform">
                      <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-performance-white uppercase tracking-wider mb-1.5 sm:mb-2">
                    {pillar.title}
                  </h3>

                  <div className="text-[11px] sm:text-xs font-racing font-bold text-velocity-yellow uppercase tracking-widest mb-3 sm:mb-4">
                    {pillar.subtitle}
                  </div>

                  <p className="font-sans text-xs text-metallic-silver/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-metallic-silver/50">
                  <span>TELEMETRY ACTIVE</span>
                  <span className="text-racing-red">READY</span>
                </div>

                {/* Bottom Glowing Racing Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <MagneticButton
            size="lg"
            variant="gold"
            href="/menu"
            cursorLabel="MENU"
          >
            EXPERIENCE OUR MENU ON THE GRID
          </MagneticButton>
        </div>
      </section>

      {/* Lightbox for Inspection */}
      {selectedPhoto && (
        <LightboxModal
          isOpen={!!selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          title={selectedPhoto.title}
          category="INSIDE THE GARAGE"
          caption={selectedPhoto.caption}
          imageSrc={selectedPhoto.src}
          imageLabel={selectedPhoto.label}
        />
      )}
    </div>
  );
}
