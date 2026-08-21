import React from "react";
import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | Best Racing Theme Cafe in Coimbatore",
  description:
    "Discover the story of The Wheels Turbo Cafe in RS Puram, Coimbatore — a leading motorsport and racer Ajith Kumar fan created racing themed cafe in Tamil Nadu. Founded by Akilandeshwari Sunder, inspired by Kari Motor Speedway and Thala Ajith's racing spirit.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Us | Best Racing Theme Cafe in Coimbatore",
    description:
      "The story of passion, endurance, and culinary horsepower in RS Puram, Coimbatore. Explore custom tyre tables, Hotwheels exhibits, and motorsport memorabilia.",
    url: `${SITE_URL}/about`,
    siteName: "The Wheels Turbo Cafe",
    locale: "en_IN",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Best Racing Theme Cafe in Coimbatore",
    description:
      "The story of passion, endurance, and culinary horsepower in RS Puram, Coimbatore.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${SITE_URL}/about`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutClient />
    </>
  );
}
