import React from "react";
import type { Metadata } from "next";
import { MenuClient } from "./MenuClient";
import { MENU_ITEMS } from "@/data/menuData";

import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Best Food Cafe Menu | Food, Coffee & Burgers in Coimbatore",
  description:
    "Explore the complete food and beverage menu at The Wheels Turbo Cafe in RS Puram, Coimbatore — known for the best food cafe experience. Signature Mutka pizzas, double-patty smash burgers, artisan pastas, momos, nitro coffee, and mocktails.",
  alternates: {
    canonical: `${SITE_URL}/menu`,
  },
  openGraph: {
    title: "Best Food Cafe Menu | The Wheels Turbo Cafe Coimbatore",
    description:
      "Full menu of gourmet smash burgers, Mutka pizzas, artisan pastas, nitro brews, and coolers at Coimbatore's premier racing-themed cafe in RS Puram.",
    url: `${SITE_URL}/menu`,
    siteName: "The Wheels Turbo Cafe",
    locale: "en_IN",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Food Cafe Menu | The Wheels Turbo Cafe Coimbatore",
    description:
      "Full menu of gourmet smash burgers, pizzas, artisan pastas, nitro brews, and coolers at Coimbatore's premier racing-themed cafe in RS Puram.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function MenuPage() {
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${SITE_URL}/menu/#menu`,
    name: "The Wheels Turbo Cafe Menu",
    description:
      "Continental, fast food, and specialty beverage menu of The Wheels Turbo Cafe in RS Puram, Coimbatore.",
    inLanguage: "en-IN",
    hasMenuItem: MENU_ITEMS.slice(0, 10).map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      description: item.description,
      offers: {
        "@type": "Offer",
        price: item.price.toString(),
        priceCurrency: "INR",
      },
      suitableForDiet:
        item.dietary === "VEG"
          ? "https://schema.org/VegetarianDiet"
          : undefined,
    })),
  };

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
        name: "Menu",
        item: `${SITE_URL}/menu`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MenuClient />
    </>
  );
}
