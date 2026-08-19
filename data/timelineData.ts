export interface TimelineMilestone {
  year: string;
  stage: string;
  title: string;
  subtitle: string;
  description: string;
  stats: { label: string; value: string }[];
  imageSrc: string;
  imageLabel: string;
  altText: string;
}

export const RACING_TIMELINE: TimelineMilestone[] = [
  {
    year: "2003",
    stage: "SECTOR 01 — NATIONAL FORMULA",
    title: "Formula Asia BMW & National Karting",
    subtitle: "The Genesis on Asphalt",
    description: "Venturing into national and Asian single-seater motorsport, establishing a formidable race craft through sheer discipline, rigorous physical training, and relentless track focus.",
    stats: [
      { label: "Category", value: "Formula BMW" },
      { label: "Circuits", value: "Sepang & National" },
      { label: "Discipline", value: "Single-Seater" },
    ],
    imageSrc: "/images/ajith/coimbatore-best-cafe-ajith-kumar-pitlane-portrait.jpg",
    imageLabel: "PITLANE FOCUS // FORMULA ASIA",
    altText: "Ajith Kumar in pitlane with racing helmet during single-seater championship",
  },
  {
    year: "2004",
    stage: "SECTOR 02 — INTERNATIONAL ARENA",
    title: "British Formula 3 Scholarship Class",
    subtitle: "Competing on Historic UK Circuits",
    description: "Competing across legendary British circuits like Donington Park, Silverstone, and Brands Hatch against elite international racing talent, securing podium finishes.",
    stats: [
      { label: "Championship", value: "British F3" },
      { label: "Podiums", value: "2 Podium Finishes" },
      { label: "Tracks", value: "Silverstone, Donington" },
    ],
    imageSrc: "/images/ajith/coimbatore-best-cafe-ajith-kumar-podium-indian-flag.jpg",
    imageLabel: "BRITISH F3 PODIUM CELEBRATION",
    altText: "Ajith Kumar on the British F3 racing podium holding the Indian Tricolour flag",
  },
  {
    year: "2010",
    stage: "SECTOR 03 — PINNACLE CHALLENGE",
    title: "FIA Formula Two Championship",
    subtitle: "Representing India on the Global F2 Grid",
    description: "Stepping onto the FIA Formula 2 world stage, driving 425+ BHP Williams F1-designed open-wheel machinery across Europe alongside the world's most promising racers.",
    stats: [
      { label: "Car Spec", value: "Williams JPH1B F2" },
      { label: "Power", value: "425 BHP @ 8500 RPM" },
      { label: "Circuits", value: "Monza, Spa, Valencia" },
    ],
    imageSrc: "/images/ajith/coimbatore-best-cafe-ajith-kumar-creventic-24h.jpg",
    imageLabel: "FIA FORMULA 2 WORLD CHAMPIONSHIP",
    altText: "Ajith Kumar in FIA Formula 2 championship paddock with team",
  },
  {
    year: "2024+",
    stage: "SECTOR 04 — CONTINUOUS PURSUIT",
    title: "Ajith Kumar Racing Team & International GT",
    subtitle: "Paddock Ownership & 24H Endurance",
    description: "Founding Ajith Kumar Racing team to compete in international endurance and 24-hour GT championships, inspiring thousands of motorsport fans across India and around the globe.",
    stats: [
      { label: "Format", value: "24H GT Endurance" },
      { label: "Car", value: "Porsche 911 GT3 Cup" },
      { label: "Motto", value: "Never Give Up" },
    ],
    imageSrc: "/images/ajith/coimbatore-best-cafe-ajith-kumar-porsche-racecar.jpg",
    imageLabel: "AKR 24H GT PORSCHE 911",
    altText: "Ajith Kumar with #901 Porsche 911 GT3 Cup racecar in the international endurance paddock",
  },
];
