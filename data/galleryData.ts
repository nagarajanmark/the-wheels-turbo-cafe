export interface GalleryItem {
  id: string;
  title: string;
  tag: "THE GARAGE" | "THE FOOD" | "THE FANS" | "THE MACHINES" | "THE MOMENTS";
  aspectRatio: "16/9" | "4/3" | "1/1" | "3/4" | "21/9" | "auto";
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
    title: "MAIN PADDOCK BAY & RACE TABLES",
    tag: "THE GARAGE",
    aspectRatio: "16/9",
    colSpan: "col-span-12 md:col-span-8",
    imageSrc: "/images/gallery/wheels-turbo-cafe-rs-puram-garage-view.jpg",
    imageLabel: "GARAGE AMBIENCE // RS PURAM",
    altText: "The Wheels Turbo Cafe dining area with custom racing tyre tables, bucket seating, and motorsport wall graphics in RS Puram Coimbatore",
    caption: "Real garage interior featuring handcrafted racing tyre tables, carbon fiber decor, and motorsport wall graphics in RS Puram Coimbatore.",
  },
  {
    id: "gal-02",
    title: "FOUNDER AKILANDESHWARI SUNDER",
    tag: "THE MOMENTS",
    aspectRatio: "auto",
    colSpan: "col-span-12 md:col-span-4",
    imageSrc: "/images/owner/akhila-sundar-founder-the-wheels-turbo-cafe-coimbatore.jpg",
    imageLabel: "FOUNDER AKILANDESHWARI SUNDER",
    altText: "Portrait of Founder Akilandeshwari Sunder of The Wheels Turbo Cafe in RS Puram Coimbatore",
    caption: "Founder Akilandeshwari Sunder, whose deep passion for motorsport and inspiration from Thala Ajith built Coimbatore's premier racing cafe.",
  },
  {
    id: "gal-03",
    title: "AJITH KUMAR RACING #901 PORSCHE GT3",
    tag: "THE MACHINES",
    aspectRatio: "4/3",
    colSpan: "col-span-12 md:col-span-4",
    imageSrc: "/images/ajith/ak-racing-team-porsche-on-track.jpg",
    imageLabel: "AKR 901 PORSCHE GT3 CUP",
    altText: "Ajith Kumar Racing Porsche 911 GT3 Cup racecar cornering on track - The Wheels Turbo Cafe tribute",
    caption: "Honoring Ajith Kumar's high-speed endurance racing mastery on international GT circuits.",
  },
  {
    id: "gal-04",
    title: "V8 TURBO DOUBLE SMASH BURGER",
    tag: "THE FOOD",
    aspectRatio: "4/3",
    colSpan: "col-span-12 md:col-span-4",
    imageSrc: "/images/menu/best-double-patty-chicken-burger-in-coimbatore.jpg",
    imageLabel: "HIGH-OCTANE CULINARY FLAVOURS",
    altText: "Fresh handcrafted gourmet burger served at The Wheels Turbo Cafe RS Puram Coimbatore",
    caption: "Freshly seared gourmet smash patties on artisanal brioche, engineered to perfection.",
  },
  {
    id: "gal-05",
    title: "BIRTHDAY & SPECIAL CELEBRATIONS",
    tag: "THE MOMENTS",
    aspectRatio: "4/3",
    colSpan: "col-span-12 md:col-span-4",
    imageSrc: "/images/gallery/coimbatore-cafe-candlelight-birthday-setup.jpg",
    imageLabel: "BIRTHDAY & CELEBRATION DECOR",
    altText: "Bespoke birthday celebration, candlelight party table setup with rose petals at The Wheels Turbo Cafe RS Puram Coimbatore",
    caption: "Custom surprise birthday parties, romantic candlelight setups, and special celebrations at our paddock cafe.",
  },
];

export const PARALLAX_MATRIX_IMAGES: string[] = [
  // Col 1 (5 unique images)
  "/images/gallery/wheels-turbo-cafe-rs-puram-garage-view.jpg",
  "/images/ajith/ak-racing-team-porsche-on-track.jpg",
  "/images/menu/best-double-patty-chicken-burger-in-coimbatore.jpg",
  "/images/gallery/coimbatore-cafe-candlelight-birthday-setup.jpg",
  "/images/owner/akhila-sundar-founder-the-wheels-turbo-cafe-coimbatore.jpg",

  // Col 2 (5 unique images)
  "/images/gallery/motorsport-themed-cafe-coimbatore-interior.jpg",
  "/images/ajith/ajith-kumar-podium-finish-indian-flag-motorsport.jpg",
  "/images/menu/filter-roasted-hot-brewed-coffee-coimbatore.jpg",
  "/images/gallery/coimbatore-motorsport-cafe-indoor-dining-ambience.jpg",
  "/images/owner/akhila-sundar-with-thala-ajith-kumar-tribute.png",

  // Col 3 (5 unique images)
  "/images/gallery/ak-racing-wall-decor-cafe-coimbatore.jpg",
  "/images/ajith/akr-24h-dubai-porsche-racing-team.jpg",
  "/images/menu/creamy-alfredo-white-sauce-penne-pasta-coimbatore.jpg",
  "/images/gallery/coimbatore-theme-cafe-garage-seating-area.jpg",
  "/images/owner/the-wheels-turbo-cafe-dinamalar-newspaper-feature.png",

  // Col 4 (5 unique images)
  "/images/gallery/porsche-racing-memorabilia-cafe-coimbatore.jpg",
  "/images/ajith/akr-barcelona-circuit-track-test-spain.jpg",
  "/images/gallery/akhila-sundar-meeting-ajith-kumar-fans-coimbatore.png",
  "/images/gallery/night-lounge-cafe-interior-coimbatore.jpg",
  "/images/ajith/ajith-kumar-pitlane-racing-suit-portrait.jpg",
];
