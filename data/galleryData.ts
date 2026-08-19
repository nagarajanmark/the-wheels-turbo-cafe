export interface GalleryItem {
  id: string;
  title: string;
  tag: "THE GARAGE" | "THE FOOD" | "THE FANS" | "THE MACHINES" | "THE MOMENTS";
  aspectRatio: "16/9" | "4/3" | "1/1" | "3/4" | "21/9";
  colSpan?: string;
  rowSpan?: string;
  imageSrc: string;
  imageLabel: string;
  altText: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-01",
    title: "MAIN PADDOCK BAY",
    tag: "THE GARAGE",
    aspectRatio: "16/9",
    colSpan: "col-span-12 md:col-span-8",
    imageSrc: "/images/gallery/coimbatore-best-cafe-garage-ambience.png",
    imageLabel: "BEST CAFE IN COIMBATORE — WHEELS TURBO AMBIENCE",
    altText: "The Wheels Turbo Cafe RS Puram Coimbatore - Best Motorsport Theme Cafe with Tyre Tables and Racing Decor",
    caption: "Real garage interior featuring custom racing tyre tables, carbon fiber decor, and motorsport wall graphics in RS Puram Coimbatore.",
  },
  {
    id: "gal-02",
    title: "FOUNDER & OWNER AKILANDESHWARI SUNDER",
    tag: "THE MOMENTS",
    aspectRatio: "4/3",
    colSpan: "col-span-12 md:col-span-4",
    imageSrc: "/images/owner/coimbatore-best-cafe-founder-akhila-sundar-ajith-kumar.png",
    imageLabel: "COIMBATORE BEST CAFE FOUNDER AKILANDESHWARI SUNDER",
    altText: "Founder Akilandeshwari Sunder at The Wheels Turbo Cafe RS Puram Coimbatore with Thala Ajith Kumar Racing tribute standee",
    caption: "Founder Akilandeshwari Sunder who turned her racing passion and inspiration from Thala Ajith into Coimbatore's most viral cafe.",
  },
  {
    id: "gal-03",
    title: "AJITH KUMAR RACING #901 PORSCHE",
    tag: "THE MACHINES",
    aspectRatio: "1/1",
    colSpan: "col-span-12 md:col-span-4",
    imageSrc: "/images/ajith/coimbatore-best-cafe-akr-porsche-901-track.jpg",
    imageLabel: "COIMBATORE BEST CAFE — AJITH KUMAR RACING GT3",
    altText: "Ajith Kumar Racing Porsche 911 GT3 racecar on circuit track - The Wheels Turbo Cafe Coimbatore",
    caption: "Honoring Ajith Kumar's high-speed endurance racing mastery on international GT circuits.",
  },
  {
    id: "gal-04",
    title: "DINAMALAR NEWSPAPER FEATURE",
    tag: "THE MOMENTS",
    aspectRatio: "16/9",
    colSpan: "col-span-12 md:col-span-8",
    imageSrc: "/images/about/coimbatore-best-cafe-wheels-turbo-newspaper-feature.png",
    imageLabel: "COIMBATORE BEST CAFE — DINAMALAR PRESS FEATURE",
    altText: "Dinamalar newspaper feature article about Akilandeshwari Sunder founding The Wheels Turbo Cafe in RS Puram Coimbatore",
    caption: "Featured in leading Tamil press as the pioneering motorsport and Hotwheels themed cafe in RS Puram, Coimbatore.",
  },
  {
    id: "gal-05",
    title: "INDIAN TRICOLOUR PODIUM CELEBRATION",
    tag: "THE MOMENTS",
    aspectRatio: "21/9",
    colSpan: "col-span-12",
    imageSrc: "/images/ajith/coimbatore-best-cafe-ajith-kumar-podium-indian-flag.jpg",
    imageLabel: "COIMBATORE BEST CAFE — INDIAN FLAG PODIUM TRIUMPH",
    altText: "Ajith Kumar holding the Indian Flag on the racing podium with confetti - The Wheels Turbo Cafe Coimbatore",
    caption: "Ajith Kumar hoisting the Indian national flag on the international motorsport podium amid showering victory confetti.",
  },
  {
    id: "gal-06",
    title: "AK RACING RED CIRCUIT ART",
    tag: "THE GARAGE",
    aspectRatio: "4/3",
    colSpan: "col-span-12 md:col-span-6",
    imageSrc: "/images/ajith/coimbatore-best-cafe-ak-racing-red-circuit.jpg",
    imageLabel: "COIMBATORE BEST CAFE — AK RACING SPEEDWAY ART",
    altText: "AK Racing Red Circuit and helmet wall graphic at The Wheels Turbo Cafe Coimbatore",
    caption: "High-octane redline wall graphics capturing speed, precision, and championship adrenaline.",
  },
  {
    id: "gal-07",
    title: "24H DUBAI GT ENDURANCE",
    tag: "THE MACHINES",
    aspectRatio: "4/3",
    colSpan: "col-span-12 md:col-span-6",
    imageSrc: "/images/ajith/coimbatore-best-cafe-akr-24h-dubai-porsche.jpg",
    imageLabel: "COIMBATORE BEST CAFE — AKR 24H DUBAI GT",
    altText: "Ajith Kumar Racing Team 24H Dubai Porsche racecar - The Wheels Turbo Cafe Coimbatore",
    caption: "Endurance racing heritage celebrating Indian presence on the 24H Series international grid.",
  },
  {
    id: "gal-08",
    title: "THALA AJITH RACING SUIT POSTER",
    tag: "THE FANS",
    aspectRatio: "16/9",
    colSpan: "col-span-12",
    imageSrc: "/images/ajith/coimbatore-best-cafe-thala-ajith-kumar-racing-suit.jpg",
    imageLabel: "COIMBATORE BEST CAFE — THALA AJITH RACING SUIT",
    altText: "Thala Ajith Kumar Porsche Motorsport Racing Suit Poster at The Wheels Turbo Cafe Coimbatore",
    caption: "Iconic racing suit tribute poster displayed proudly for motorsport fans and food lovers in Coimbatore.",
  },
];
