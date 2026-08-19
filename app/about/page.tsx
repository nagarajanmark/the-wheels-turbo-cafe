import React from "react";
import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Best Racing Theme Cafe in Coimbatore",
  description:
    "Discover the story of The Wheels Turbo Cafe in RS Puram, Coimbatore — a leading motorsport and racer Ajith Kumar fan created racing themed cafe in Tamil Nadu. Founded by Akilandeshwari Sunder, inspired by Kari Motor Speedway and Thala Ajith's racing spirit.",
  alternates: {
    canonical: "https://thewheelsturbocafe.com/about",
  },
  openGraph: {
    title: "About Us | Best Racing Theme Cafe in Coimbatore",
    description:
      "The story of passion, endurance, and culinary horsepower in RS Puram, Coimbatore. Explore custom tyre tables, Hotwheels exhibits, and motorsport memorabilia.",
    url: "https://thewheelsturbocafe.com/about",
    siteName: "The Wheels Turbo Cafe",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/about/coimbatore-best-cafe-wheels-turbo-interior.png",
        width: 1200,
        height: 675,
        alt: "The Wheels Turbo Cafe RS Puram Coimbatore - Racing Themed Interior and Tyre Tables",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Best Racing Theme Cafe in Coimbatore",
    description:
      "The story of passion, endurance, and culinary horsepower in RS Puram, Coimbatore.",
    images: ["/images/about/coimbatore-best-cafe-wheels-turbo-interior.png"],
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
        item: "https://thewheelsturbocafe.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://thewheelsturbocafe.com/about",
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
