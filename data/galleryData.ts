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
    imageLabel: "GARAGE AMBIENCE // RS PURAM",
    altText: "The Wheels Turbo Cafe dining area with custom racing tyre tables, bucket seating, and motorsport wall graphics in RS Puram Coimbatore",
    caption: "Real garage interior featuring custom racing tyre tables, carbon fiber decor, and motorsport wall graphics in RS Puram Coimbatore.",
  },
  {
    id: "gal-02",
    title: "FOUNDER & OWNER AKILANDESHWARI SUNDER",
    tag: "THE MOMENTS",
    aspectRatio: "4/3",
    colSpan: "col-span-12 md:col-span-4",
    imageSrc: "/images/owner/coimbatore-best-cafe-founder-akhila-sundar-ajith-kumar.png",
    imageLabel: "FOUNDER AKILANDESHWARI SUNDER",
    altText: "Founder Akilandeshwari Sunder standing beside Thala Ajith Kumar Racing suit standee at The Wheels Turbo Cafe in Coimbatore",
    caption: "Founder Akilandeshwari Sunder who turned her racing passion and inspiration from Thala Ajith into Coimbatore's unique motorsport cafe destination.",
  },
  {
    id: "gal-03",
    title: "AJITH KUMAR RACING #901 PORSCHE",
    tag: "THE MACHINES",
    aspectRatio: "1/1",
    colSpan: "col-span-12 md:col-span-4",
    imageSrc: "/images/ajith/coimbatore-best-cafe-akr-porsche-901-track.jpg",
    imageLabel: "AKR 901 PORSCHE GT3 ON TRACK",
    altText: "Ajith Kumar Racing Porsche 911 GT3 Cup racecar cornering on track - The Wheels Turbo Cafe tribute",
    caption: "Honoring Ajith Kumar's high-speed endurance racing mastery on international GT circuits.",
  },
  {
    id: "gal-04",
    title: "DINAMALAR NEWSPAPER FEATURE",
    tag: "THE MOMENTS",
    aspectRatio: "16/9",
    colSpan: "col-span-12 md:col-span-8",
    imageSrc: "/images/about/coimbatore-best-cafe-wheels-turbo-newspaper-feature.png",
    imageLabel: "DINAMALAR NEWSPAPER COVERAGE",
    altText: "Dinamalar Tamil newspaper article featuring Akilandeshwari Sunder and The Wheels Turbo Cafe in RS Puram Coimbatore",
    caption: "Featured in leading Tamil press as the pioneering motorsport and Hotwheels themed cafe in RS Puram, Coimbatore.",
  },
  {
    id: "gal-05",
    title: "INDIAN TRICOLOUR PODIUM CELEBRATION",
    tag: "THE MOMENTS",
    aspectRatio: "21/9",
    colSpan: "col-span-12",
    imageSrc: "/images/ajith/coimbatore-best-cafe-ajith-kumar-podium-indian-flag.jpg",
    imageLabel: "INDIAN FLAG PODIUM TRIUMPH",
    altText: "Ajith Kumar holding the Indian Tricolour flag on the racing podium with victory confetti",
    caption: "Ajith Kumar hoisting the Indian national flag on the international motorsport podium amid showering victory confetti.",
  },
  {
    id: "gal-06",
    title: "AK RACING RED CIRCUIT ART",
    tag: "THE GARAGE",
    aspectRatio: "4/3",
    colSpan: "col-span-12 md:col-span-6",
    imageSrc: "/images/ajith/coimbatore-best-cafe-ak-racing-red-circuit.jpg",
    imageLabel: "AK RACING RED CIRCUIT WALL ART",
    altText: "AK Racing Red Circuit and helmet wall graphics at The Wheels Turbo Cafe in Coimbatore",
    caption: "High-octane redline wall graphics capturing speed, precision, and championship adrenaline.",
  },
  {
    id: "gal-07",
    title: "24H DUBAI GT ENDURANCE",
    tag: "THE MACHINES",
    aspectRatio: "4/3",
    colSpan: "col-span-12 md:col-span-6",
    imageSrc: "/images/ajith/coimbatore-best-cafe-akr-24h-dubai-porsche.jpg",
    imageLabel: "AKR 24H DUBAI GT PORSCHE",
    altText: "Ajith Kumar Racing Team Porsche GT3 racecar competing in 24H Dubai endurance championship",
    caption: "Endurance racing heritage celebrating Indian presence on the 24H Series international grid.",
  },
  {
    id: "gal-08",
    title: "THALA AJITH RACING SUIT POSTER",
    tag: "THE FANS",
    aspectRatio: "16/9",
    colSpan: "col-span-12",
    imageSrc: "/images/ajith/coimbatore-best-cafe-thala-ajith-kumar-racing-suit.jpg",
    imageLabel: "THALA AJITH RACING SUIT POSTER",
    altText: "Thala Ajith Kumar Porsche Motorsport Racing Suit Poster tribute at The Wheels Turbo Cafe Coimbatore",
    caption: "Iconic racing suit tribute poster displayed proudly for motorsport fans and food lovers in Coimbatore.",
  },
];
