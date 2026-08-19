export interface MenuItem {
  id: string;
  raceNo: string;
  name: string;
  category: "STARTERS" | "BURGERS" | "MAIN COURSE" | "BEVERAGES" | "DESSERTS" | "SPECIALS";
  description: string;
  price: number;
  octaneRating: string; // e.g. "97 OCTANE", "100 OCTANE", "NITRO CHARGED"
  isPitstopPick?: boolean;
  imageSrc: string;
  imageLabel: string;
  dietary: "VEG" | "NON-VEG" | "EGG";
}

export const MENU_CATEGORIES = [
  "ALL",
  "STARTERS",
  "BURGERS",
  "MAIN COURSE",
  "BEVERAGES",
  "DESSERTS",
  "SPECIALS",
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // FEATURED / PITSTOP PICKS
  {
    id: "turbo-smash-burger",
    raceNo: "RACE NO. 01",
    name: "THE V8 TURBO SMASH BURGER",
    category: "BURGERS",
    description: "Double charcoal-seared prime patty, smoked gouda, caramelized onion glaze, turbo chili relish on toasted brioche.",
    price: 480,
    octaneRating: "100 OCTANE",
    isPitstopPick: true,
    imageSrc: "/images/menu/burger-01.jpg",
    imageLabel: "MENU — V8 TURBO SMASH BURGER",
    dietary: "NON-VEG",
  },
  {
    id: "nitro-cold-brew",
    raceNo: "RACE NO. 02",
    name: "NITRO CHARGED ESPRESSO CREMA",
    category: "BEVERAGES",
    description: "18-hour cold brew infused with nitrogen bubbles, topped with Madagascar vanilla cold foam and roasted cacao nibs.",
    price: 320,
    octaneRating: "HIGH OCTANE",
    isPitstopPick: true,
    imageSrc: "/images/menu/coffee-01.jpg",
    imageLabel: "MENU — NITRO CHARGED ESPRESSO",
    dietary: "VEG",
  },
  {
    id: "finish-line-lava",
    raceNo: "RACE NO. 03",
    name: "FINISH LINE SMOKED CHOCOLATE LAVA",
    category: "DESSERTS",
    description: "Valrhona molten dark chocolate cake served on a flaming spun sugar grid with homemade Madagascar bean gelato.",
    price: 390,
    octaneRating: "VELOCITY GOLD",
    isPitstopPick: true,
    imageSrc: "/images/menu/dessert-01.jpg",
    imageLabel: "MENU — FINISH LINE LAVA",
    dietary: "EGG",
  },

  // STARTERS
  {
    id: "drift-wings",
    raceNo: "RACE NO. 04",
    name: "APEX DRIFT CRISPY WINGS",
    category: "STARTERS",
    description: "Smoked crispy chicken wings glazed in signature Carolina reaper honey sauce with charred scallion ranch.",
    price: 360,
    octaneRating: "97 OCTANE",
    imageSrc: "/images/menu/starter-01.jpg",
    imageLabel: "MENU — APEX DRIFT WINGS",
    dietary: "NON-VEG",
  },
  {
    id: "carbon-truffle-fries",
    raceNo: "RACE NO. 05",
    name: "CARBON CRUST TRUFFLE FRIES",
    category: "STARTERS",
    description: "Hand-cut triple-fried potatoes dusted in activated charcoal salt, fresh truffle oil, and shaved aged parmesan.",
    price: 290,
    octaneRating: "93 OCTANE",
    imageSrc: "/images/menu/starter-02.jpg",
    imageLabel: "MENU — CARBON TRUFFLE FRIES",
    dietary: "VEG",
  },
  {
    id: "paddock-nachos",
    raceNo: "RACE NO. 06",
    name: "PADDOCK LOADED NACHOS OVERDRIVE",
    category: "STARTERS",
    description: "Crispy corn tortillas loaded with three-cheese queso, slow-cooked chipotle beans, jalapeños, and guacamole salsa.",
    price: 340,
    octaneRating: "91 OCTANE",
    imageSrc: "/images/menu/starter-03.jpg",
    imageLabel: "MENU — PADDOCK LOADED NACHOS",
    dietary: "VEG",
  },

  // BURGERS
  {
    id: "monaco-crispy-chicken",
    raceNo: "RACE NO. 07",
    name: "MONACO GP CRISPY CHICKEN",
    category: "BURGERS",
    description: "Buttermilk fried spiced chicken thigh, red cabbage slaw, ghost pepper mayo, and artisan pickles on a black sesame bun.",
    price: 440,
    octaneRating: "97 OCTANE",
    imageSrc: "/images/menu/burger-02.jpg",
    imageLabel: "MENU — MONACO CRISPY CHICKEN",
    dietary: "NON-VEG",
  },
  {
    id: "electric-supercharger-burger",
    raceNo: "RACE NO. 08",
    name: "EV HYPERDRIVE PLANT SMASH",
    category: "BURGERS",
    description: "Char-grilled portobello and black quinoa patty, avocado puree, microgreens, and vegan truffle cheddar.",
    price: 410,
    octaneRating: "ECO CHARGE",
    imageSrc: "/images/menu/burger-03.jpg",
    imageLabel: "MENU — EV HYPERDRIVE BURGER",
    dietary: "VEG",
  },

  // MAIN COURSE
  {
    id: "le-mans-steak",
    raceNo: "RACE NO. 09",
    name: "24H LE MANS CHARRED TENDERLOIN",
    category: "MAIN COURSE",
    description: "Herb-butter basted succulent tenderloin steak with charred asparagus, garlic mash, and red wine peppercorn jus.",
    price: 650,
    octaneRating: "100 OCTANE",
    imageSrc: "/images/menu/main-01.jpg",
    imageLabel: "MENU — 24H LE MANS TENDERLOIN",
    dietary: "NON-VEG",
  },
  {
    id: "silverstone-pasta",
    raceNo: "RACE NO. 10",
    name: "SILVERSTONE TARMAC FETTUCCINE",
    category: "MAIN COURSE",
    description: "Handmade squid-ink black fettuccine in smoked garlic butter, sun-dried cherry tomatoes, and shaved grana padano.",
    price: 490,
    octaneRating: "95 OCTANE",
    imageSrc: "/images/menu/main-02.jpg",
    imageLabel: "MENU — SILVERSTONE FETTUCCINE",
    dietary: "VEG",
  },

  // BEVERAGES
  {
    id: "twin-turbo-hazelnut",
    raceNo: "RACE NO. 11",
    name: "TWIN TURBO HAZELNUT FRAPPE",
    category: "BEVERAGES",
    description: "Double ristretto blended with roasted Piedmont hazelnut paste, dark chocolate drizzle, and whipped cream.",
    price: 310,
    octaneRating: "BOOSTED",
    imageSrc: "/images/menu/drink-01.jpg",
    imageLabel: "MENU — TWIN TURBO FRAPPE",
    dietary: "VEG",
  },
  {
    id: "dragstrip-red-cooler",
    raceNo: "RACE NO. 12",
    name: "DRAGSTRIP RED BULL NITRO FIZZ",
    category: "BEVERAGES",
    description: "Blood orange reduction, crushed mint, fresh lime, sparkling tonic, and activated citrus bubbles.",
    price: 280,
    octaneRating: "REDLINE",
    imageSrc: "/images/menu/drink-02.jpg",
    imageLabel: "MENU — DRAGSTRIP NITRO FIZZ",
    dietary: "VEG",
  },

  // DESSERTS
  {
    id: "podium-cheesecake",
    raceNo: "RACE NO. 13",
    name: "PODIUM BURNT BASQUE CHEESECAKE",
    category: "DESSERTS",
    description: "Caramelized crust Spanish cheesecake with passionfruit flame drizzle and edible 24K gold dust.",
    price: 380,
    octaneRating: "VELOCITY GOLD",
    imageSrc: "/images/menu/dessert-02.jpg",
    imageLabel: "MENU — PODIUM CHEESECAKE",
    dietary: "EGG",
  },

  // SPECIALS
  {
    id: "kari-speedway-platter",
    raceNo: "RACE NO. 14",
    name: "KARI MOTOR SPEEDWAY MEAT FEAST",
    category: "SPECIALS",
    description: "Grand sharing platter: Smoked ribs, crispy drift wings, pulled brisket sliders, seasoned wedges, and trio of turbo dips.",
    price: 990,
    octaneRating: "V12 EXTREME",
    imageSrc: "/images/menu/special-01.jpg",
    imageLabel: "MENU — SPEEDWAY PLATTER",
    dietary: "NON-VEG",
  },
];
