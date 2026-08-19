import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Orbitron, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/ui/Preloader";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

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

export const metadata: Metadata = {
  title: "The Wheels Turbo Cafe | Coimbatore's Premier Automotive & Racing Paddock Cafe",
  description:
    "An adrenaline-infused racing garage and culinary destination in Coimbatore, India. Flame-seared smash burgers, nitro coffee, motorsport telemetry, and homage to Ajith Kumar's racing spirit.",
  keywords: [
    "The Wheels Turbo Cafe",
    "Racing Cafe Coimbatore",
    "Automotive Cafe India",
    "Ajith Kumar Racing Tribute",
    "Kari Motor Speedway Cafe",
    "Motorsport Theme Restaurant",
    "Nitro Cold Brew Coimbatore",
    "Smash Burger Coimbatore",
  ],
  authors: [{ name: "The Wheels Turbo Cafe" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "The Wheels Turbo Cafe | Coimbatore Motorsport Cafe",
    description:
      "Entering a high-performance racing garage that happens to serve food. Coimbatore, start your engines.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/logo.png",
        width: 1774,
        height: 887,
        alt: "The Wheels Turbo Cafe",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${chakra.variable} ${orbitron.variable} ${inter.variable} dark`}>
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
            <main className="flex-grow">{children}</main>

            {/* Bottom Footer */}
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
