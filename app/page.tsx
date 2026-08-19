import React from "react";
import { HomeHero } from "@/components/sections/HomeHero";
import { HeroScrollSequence } from "@/components/animation/HeroScrollSequence";
import { HomeIntro } from "@/components/sections/HomeIntro";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HomeMenuPreview } from "@/components/sections/HomeMenuPreview";
import { HomeAjithPreview } from "@/components/sections/HomeAjithPreview";
import { HomeGallery } from "@/components/sections/HomeGallery";

export default function HomePage() {
  return (
    <div className="w-full bg-turbo-black">
      {/* 1. Cinematic Hero Splash */}
      <HomeHero />

      {/* 2. Pinned GSAP Scroll Experience (Stages 01 - 05) */}
      <div id="hero-scroll">
        <HeroScrollSequence />
      </div>

      {/* 3. Editorial Philosophy Intro */}
      <HomeIntro />

      {/* 4. Horizontal Paddock Experience Showcase */}
      <ExperienceSection />

      {/* 5. Octane Flavours Dashboard Menu Preview */}
      <HomeMenuPreview />

      {/* 6. Ajith Kumar Tribute Teaser */}
      <HomeAjithPreview />

      {/* 7. Masonry Paddock Gallery Archive */}
      <HomeGallery />
    </div>
  );
}
