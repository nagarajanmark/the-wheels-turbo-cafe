import React from "react";
import type { Metadata } from "next";
import { AjithKumarClient } from "./AjithKumarClient";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ajith Kumar Themed Cafe in Coimbatore | The Wheels Turbo Cafe",
  description:
    "Explore the unique Ajith Kumar themed cafe in Coimbatore at The Wheels Turbo Cafe. A dedicated motorsport destination created by an ardent racer Ajith fan girl, celebrating Thala's racing career from Formula BMW and British F3 to FIA Formula 2 and international 24H GT endurance championships.",
  alternates: {
    canonical: `${SITE_URL}/ajith-kumar`,
  },
  openGraph: {
    title: "Ajith Kumar Themed Cafe in Coimbatore | The Wheels Turbo Cafe",
    description:
      "Motorsport career timeline, British F3 podium memories, FIA F2 championships, and 24H endurance GT racing tribute in RS Puram, Coimbatore.",
    url: `${SITE_URL}/ajith-kumar`,
    siteName: "The Wheels Turbo Cafe",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/ajith/ajith-kumar-fia-formula-racing-career-montage.jpg`,
        width: 1200,
        height: 675,
        type: "image/jpeg",
        alt: "Ajith Kumar Themed Cafe and Racing Legacy Tribute at The Wheels Turbo Cafe Coimbatore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajith Kumar Themed Cafe in Coimbatore | The Wheels Turbo Cafe",
    description:
      "Motorsport career timeline, British F3 podium memories, FIA F2 championships, and 24H endurance GT racing tribute.",
    images: [
      `${SITE_URL}/images/ajith/ajith-kumar-fia-formula-racing-career-montage.jpg`,
    ],
  },
};

export default function AjithKumarPage() {
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
        name: "Ajith Kumar Tribute",
        item: `${SITE_URL}/ajith-kumar`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AjithKumarClient />
    </>
  );
}
