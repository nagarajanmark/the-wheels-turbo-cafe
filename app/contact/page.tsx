import React from "react";
import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";
import { CAFE_DATA } from "@/data/cafeData";

import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Location | Best Hangout Place & Theme Restaurant in Coimbatore",
  description:
    "Visit The Wheels Turbo Cafe in RS Puram, Coimbatore — known as a top hangout place and racing theme restaurant created by an ardent racer Ajith fan girl. Get directions, contact phone (+91 81470 12883), track hours (11:00 AM - 11:30 PM), and table reservations.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact & Location | The Wheels Turbo Cafe Coimbatore",
    description:
      "Find The Wheels Turbo Cafe on West Arokiasamy Road (Opposite Yamaha Showroom), RS Puram, Coimbatore. Contact details, maps radar, and track hours.",
    url: `${SITE_URL}/contact`,
    siteName: "The Wheels Turbo Cafe",
    locale: "en_IN",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Location | The Wheels Turbo Cafe Coimbatore",
    description:
      "Find The Wheels Turbo Cafe on West Arokiasamy Road (Opposite Yamaha Showroom), RS Puram, Coimbatore. Contact details, maps radar, and track hours.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact/#contactpage`,
    name: "Contact The Wheels Turbo Cafe",
    url: `${SITE_URL}/contact`,
    mainEntity: {
      "@type": "Restaurant",
      name: CAFE_DATA.name,
      telephone: CAFE_DATA.phone,
      email: CAFE_DATA.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "West Arokiasamy Road, R.S. Puram (Opposite Yamaha Showroom)",
        addressLocality: "Coimbatore",
        addressRegion: "Tamil Nadu",
        postalCode: "641002",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 11.005679,
        longitude: 76.945888,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "11:00",
          closes: "23:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "11:00",
          closes: "23:30",
        },
      ],
    },
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
        name: "Contact",
        item: `${SITE_URL}/contact`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactClient />
    </>
  );
}
