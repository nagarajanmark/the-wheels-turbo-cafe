export interface GalleryItem {
  id: string;
  title: string;
  tag: "THE GARAGE" | "THE FOOD" | "THE FANS" | "THE MACHINES" | "THE MOMENTS";
  aspectRatio: "16/9" | "4/3" | "1/1" | "3/4" | "21/9";
  colSpan?: string;
  rowSpan?: string;
  imageSrc: string;
  imageLabel: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-01",
    title: "MAIN PADDOCK BAY",
    tag: "THE GARAGE",
    aspectRatio: "16/9",
    colSpan: "col-span-12 md:col-span-8",
    imageSrc: "/images/gallery/garage-main.jpg",
    imageLabel: "GALLERY — MAIN PADDOCK BAY",
    caption: "Central lounge featuring reclaimed racing slicks, carbon fiber bar tops, and live telemetry screens.",
  },
  {
    id: "gal-02",
    title: "V8 FLAME-SEARING STATION",
    tag: "THE FOOD",
    aspectRatio: "4/3",
    colSpan: "col-span-12 md:col-span-4",
    imageSrc: "/images/gallery/food-prep.jpg",
    imageLabel: "GALLERY — FLAME SEARING KITCHEN",
    caption: "Custom open-kitchen grill tuned to deliver high-temperature charcoal sears.",
  },
  {
    id: "gal-03",
    title: "FORMULA 2 REPLICA COCKPIT",
    tag: "THE MACHINES",
    aspectRatio: "1/1",
    colSpan: "col-span-12 md:col-span-4",
    imageSrc: "/images/gallery/machine-f2.jpg",
    imageLabel: "GALLERY — F2 COCKPIT SIMULATOR",
    caption: "Authentic aerodynamic monocoque setup for sim racing trials during race weekends.",
  },
  {
    id: "gal-04",
    title: "RACING HELMET WALL OF CHAMPIONS",
    tag: "THE MOMENTS",
    aspectRatio: "16/9",
    colSpan: "col-span-12 md:col-span-8",
    imageSrc: "/images/gallery/helmet-wall.jpg",
    imageLabel: "GALLERY — HELMET WALL",
    caption: "Curated collection of race-worn and replica helmets from legendary Indian & global circuits.",
  },
  {
    id: "gal-05",
    title: "PETROLHEAD SUNDAY MEET",
    tag: "THE FANS",
    aspectRatio: "21/9",
    colSpan: "col-span-12",
    imageSrc: "/images/gallery/fans-meet.jpg",
    imageLabel: "GALLERY — COMMUNITY CAR MEET",
    caption: "Coimbatore's automotive enthusiasts gathering at dawn for coffee and horsepower conversations.",
  },
  {
    id: "gal-06",
    title: "TURBOCHARGER DISPLAY ART",
    tag: "THE GARAGE",
    aspectRatio: "4/3",
    colSpan: "col-span-12 md:col-span-6",
    imageSrc: "/images/gallery/turbo-art.jpg",
    imageLabel: "GALLERY — TURBOCHARGER ART",
    caption: "Exploded view billet wheel turbo sculpture mounted with ambient neon backlights.",
  },
  {
    id: "gal-07",
    title: "THE NIGHT DRIVERS LOUNGE",
    tag: "THE MOMENTS",
    aspectRatio: "4/3",
    colSpan: "col-span-12 md:col-span-6",
    imageSrc: "/images/gallery/night-lounge.jpg",
    imageLabel: "GALLERY — NIGHT DRIVERS LOUNGE",
    caption: "Moody red ambient glow where late-night drivers gather after spirited canyon drives.",
  },
];
