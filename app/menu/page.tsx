import React from "react";
import type { Metadata } from "next";
import { MenuClient } from "./MenuClient";
import { MENU_ITEMS } from "@/data/menuData";

export const metadata: Metadata = {
  title: "Best Food Cafe Menu | Food, Coffee & Burgers in Coimbatore",
  description:
    "Explore the complete food and beverage menu at The Wheels Turbo Cafe in RS Puram, Coimbatore — known for the best food cafe experience. Signature Mutka pizzas, double-patty smash burgers, artisan pastas, momos, nitro coffee, and mocktails.",
  alternates: {
    canonical: "https://thewheelsturbocafe.com/menu",
  },
  openGraph: {
    title: "Best Food Cafe Menu | The Wheels Turbo Cafe Coimbatore",
    description:
      "Full menu of gourmet smash burgers, Mutka pizzas, artisan pastas, nitro brews, and coolers at Coimbatore's premier racing-themed cafe in RS Puram.",
    url: "https://thewheelsturbocafe.com/menu",
    siteName: "The Wheels Turbo Cafe",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "The Wheels Turbo Cafe Menu - Coimbatore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Food Cafe Menu | The Wheels Turbo Cafe Coimbatore",
    description:
      "Full menu of gourmet smash burgers, pizzas, artisan pastas, nitro brews, and coolers at Coimbatore's premier racing-themed cafe in RS Puram.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Wheels Turbo Cafe Menu - Coimbatore",
      },
    ],
  },
};

export default function MenuPage() {
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": "https://thewheelsturbocafe.com/menu/#menu",
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
        item: "https://thewheelsturbocafe.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Menu",
        item: "https://thewheelsturbocafe.com/menu",
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
