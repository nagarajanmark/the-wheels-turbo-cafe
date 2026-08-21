import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Chakra_Petch, Orbitron, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/ui/Preloader";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CAFE_DATA } from "@/data/cafeData";
import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_SUMMARY } from "@/data/reviewsData";

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-chakra",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const SITE_URL = "https://thewheelsturbocafe.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Wheels Turbo Cafe | Best Racing Theme Cafe in Coimbatore",
    template: "%s | The Wheels Turbo Cafe",
  },
  description:
    "Experience The Wheels Turbo Cafe in RS Puram, Coimbatore — a premier racing and Ajith Kumar themed cafe created by an ardent racer Ajith fan girl. A unique hangout destination in Tamil Nadu serving delicious food and coffee.",
  keywords: [
    "Best Cafe in Coimbatore",
    "Best Racing Theme Cafe in Coimbatore",
    "Ajith Kumar Themed Cafe in Coimbatore",
    "Racer Ajith Kumar Fan Cafe Coimbatore",
    "Hotwheels Themed Cafe Coimbatore",
    "Best Cafe in Tamil Nadu",
    "Unique Cafe in Coimbatore",
    "Theme Restaurant in Coimbatore",
    "Best Hangout Place in Coimbatore",
    "Cafe for Car Lovers in Coimbatore",
    "Motorsport Cafe Coimbatore",
    "Best Food Cafe in Coimbatore",
    "The Wheels Turbo Cafe RS Puram",
  ],
  authors: [{ name: "The Wheels Turbo Cafe", url: SITE_URL }],
  creator: "The Wheels Turbo Cafe",
  publisher: "The Wheels Turbo Cafe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "The Wheels Turbo Cafe",
    title: "The Wheels Turbo Cafe | Best Racing Theme Cafe in Coimbatore",
    description:
      "A premier motorsport and Ajith Kumar themed cafe in RS Puram, Coimbatore. Artisanal smash burgers, specialty brews, and the ultimate hangout spot for motorsport and car lovers in Tamil Nadu.",
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
      "Motorsport and automobile-themed cafe in RS Puram, Coimbatore created by an ardent racer Ajith fan girl. Artisanal burgers, specialty coffee, and track vibes.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Build JSON-LD structured data for Restaurant / CafeOrCoffeeShop
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "CafeOrCoffeeShop"],
    "@id": `${SITE_URL}/#restaurant`,
    name: CAFE_DATA.name,
    alternateName: [
      "The Wheels Turbo Café Coimbatore",
      "The Wheels Turbo Cafe - Racing Theme Cafe",
    ],
    description:
      "The Wheels Turbo Cafe is a premier motorsport, racing & Ajith Kumar themed restaurant and cafe destination in RS Puram, Coimbatore, Tamil Nadu. Created by an ardent racer Ajith Kumar fan girl, offering an immersive motorsport atmosphere, Thala Ajith tribute decor, artisanal smash burgers, authentic pizzas, and specialty coffee.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: [
      `${SITE_URL}/logo.png`,
      `${SITE_URL}/images/about/coimbatore-best-cafe-wheels-turbo-interior.png`,
    ],
    telephone: CAFE_DATA.phone,
    email: CAFE_DATA.email,
    priceRange: "₹₹",
    servesCuisine: [
      "Continental",
      "Cafe",
      "Fast Food",
      "Burgers",
      "Pizza",
      "Beverages",
      "Coffee",
    ],
    hasMenu: `${SITE_URL}/menu`,
    sameAs: [
      "https://www.instagram.com/the_wheels_turbo_cafe",
      "https://maps.google.com/?cid=1100567898915737",
    ],
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: GOOGLE_REVIEWS_SUMMARY.overallRating.toString(),
      reviewCount: GOOGLE_REVIEWS_SUMMARY.totalReviews.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: GOOGLE_REVIEWS.slice(0, 5).map((rev) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: rev.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: rev.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: rev.content,
    })),
  };

  return (
    <html lang="en" className={`${chakra.variable} ${orbitron.variable} ${inter.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="bg-turbo-black text-performance-white font-sans antialiased selection:bg-racing-red selection:text-white min-h-screen flex flex-col">
        {/* Cinematic Preloader */}
        <Preloader />

        {/* Custom Racing Crosshair Cursor */}
        <CustomCursor />

        {/* Lenis Smooth Scroll Engine */}
        <SmoothScroll>
          <div className="flex flex-col min-h-screen relative">
            {/* Top Navigation */}
            <Navbar />

            {/* Main Sector Progress Telemetry */}
            <ScrollProgress />

            {/* Page Content */}
            <main id="main-content" className="flex-grow">
              {children}
            </main>

            {/* Bottom Footer */}
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
