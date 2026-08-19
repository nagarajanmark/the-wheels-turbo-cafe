import React from "react";
import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/HomeHero";
import { HeroScrollSequence } from "@/components/animation/HeroScrollSequence";
import { HomeIntro } from "@/components/sections/HomeIntro";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HomeMenuPreview } from "@/components/sections/HomeMenuPreview";
import { HomeAjithPreview } from "@/components/sections/HomeAjithPreview";
import { HomeGallery } from "@/components/sections/HomeGallery";
import { GoogleReviewsSection } from "@/components/sections/GoogleReviewsSection";

export const metadata: Metadata = {
  title: "The Wheels Turbo Cafe | Best Racing Theme Cafe in Coimbatore",
  description:
    "Welcome to The Wheels Turbo Cafe in RS Puram — a unique racing and Ajith Kumar themed cafe created by an ardent racer Ajith fan girl in Coimbatore. Discover delicious food, signature smash burgers, and authentic motorsport tribute decor in Tamil Nadu.",
  alternates: {
    canonical: "https://thewheelsturbocafe.com",
  },
  openGraph: {
    title: "The Wheels Turbo Cafe | Best Racing Theme Cafe in Coimbatore",
    description:
      "A unique motorsport and Ajith Kumar themed cafe experience in RS Puram, Coimbatore. Delicious food, craft brews, and the best hangout place for motorsport and car enthusiasts.",
    url: "https://thewheelsturbocafe.com",
    siteName: "The Wheels Turbo Cafe",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1774,
        height: 887,
        alt: "The Wheels Turbo Cafe - Best Racing Theme Cafe in Coimbatore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wheels Turbo Cafe | Best Racing Theme Cafe in Coimbatore",
    description:
      "A unique motorsport and Ajith Kumar themed cafe experience in RS Puram, Coimbatore. Delicious food, craft brews, and the best hangout place for motorsport enthusiasts.",
    images: ["/logo.png"],
  },
};

export default function HomePage() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://thewheelsturbocafe.com/#website",
    url: "https://thewheelsturbocafe.com",
    name: "The Wheels Turbo Cafe",
    description:
      "Best racing theme cafe and unique hangout place in Coimbatore, Tamil Nadu created by an ardent racer Ajith Kumar fan girl.",
    publisher: {
      "@id": "https://thewheelsturbocafe.com/#restaurant",
    },
    inLanguage: "en-IN",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <div className="w-full bg-turbo-black">
        {/* 1. Cinematic Hero Splash with H1 */}
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

        {/* 8. Verified Google Reviews Showcase */}
        <div className="border-t border-white/10 bg-carbon-black/60">
          <GoogleReviewsSection />
        </div>
      </div>
    </>
  );
}
