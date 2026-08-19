export interface GoogleReview {
  id: string;
  author: string;
  role: string; // e.g. "Local Guide • 21 reviews • 5 photos", "6 reviews • 1 photo"
  avatarColor: string;
  avatarText: string;
  rating: number; // 5
  timeAgo: string;
  content: string;
  ratingsBreakdown?: {
    food?: number;
    service?: number;
    atmosphere?: number;
  };
  highlightDish?: string;
  likesCount?: number;
  isLocalGuide?: boolean;
  ownerResponse?: {
    text: string;
    timeAgo: string;
  };
}

export interface GoogleReviewsSummary {
  overallRating: number;
  totalReviews: number;
  address: string;
  ratingBreakdown: {
    stars: number;
    percentage: number;
  }[];
  googleMapsUrl: string;
}

export const GOOGLE_REVIEWS_SUMMARY: GoogleReviewsSummary = {
  overallRating: 4.7,
  totalReviews: 44,
  address: "1053, Arokiasamy Rd W, R.S. Puram, Coimbatore, Tamil Nadu 641002, India",
  ratingBreakdown: [
    { stars: 5, percentage: 86 },
    { stars: 4, percentage: 11 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ],
  googleMapsUrl:
    "https://www.google.com/search?q=the+wheels+turbo+cafe+RS+Puram+Coimbatore",
};

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "rev-srikumar",
    author: "Srikumar R",
    role: "Local Guide • 21 reviews • 5 photos",
    avatarColor: "from-blue-600 to-indigo-600",
    avatarText: "SR",
    rating: 5,
    timeAgo: "4 months ago",
    content:
      "Found this place accidentally, a great find in the city. Hospitality was very good. Menu had wide range of options and healthy alternatives. Very well priced. Can hangout as a group or solo. Food was yum. A must visit.",
    ratingsBreakdown: {
      food: 5,
      service: 5,
      atmosphere: 5,
    },
    highlightDish: "Wide Menu & Healthy Alternatives",
    likesCount: 2,
    isLocalGuide: true,
    ownerResponse: {
      text: "Thanks a lot 🌸",
      timeAgo: "3 months ago",
    },
  },
  {
    id: "rev-ak",
    author: "A K",
    role: "6 reviews • 1 photo",
    avatarColor: "from-red-600 to-amber-500",
    avatarText: "AK",
    rating: 5,
    timeAgo: "a month ago",
    content:
      "Taste & service are excellent. Especially AJITH KUMAR RACING graphics awesome ❤️",
    highlightDish: "Ajith Kumar Racing Graphics & Food",
    likesCount: 1,
    isLocalGuide: false,
    ownerResponse: {
      text: "Thanks a lot, hope u had good time🎉",
      timeAgo: "a month ago",
    },
  },
  {
    id: "rev-dileep",
    author: "DILEEP Vichusru",
    role: "4 reviews • 1 photo",
    avatarColor: "from-emerald-600 to-teal-500",
    avatarText: "DV",
    rating: 5,
    timeAgo: "2 months ago",
    content:
      "Great food and great experience. The pizza was flavorful with a perfectly baked crust, and the fries were crispy and addictive. Fresh ingredients, good portions, and excellent taste. Will be coming back for more!",
    ratingsBreakdown: {
      food: 5,
      service: 5,
      atmosphere: 5,
    },
    highlightDish: "Flavorful Pizza & Crispy Fries",
    isLocalGuide: false,
    ownerResponse: {
      text: "Thanks a lot, happy that u loved it, we'll be expecting your next visit🫡🎉",
      timeAgo: "a month ago",
    },
  },
  {
    id: "rev-sneha",
    author: "Sneha achu",
    role: "2 reviews • 3 photos",
    avatarColor: "from-purple-600 to-pink-500",
    avatarText: "SA",
    rating: 5,
    timeAgo: "4 months ago",
    content:
      "We tried the chicken platter, chicken stripes, and mojito — all tasted delicious. The atmosphere was calm and pleasant, and the cafe was Ajith fan themed, which made it unique and fun for the fans.",
    highlightDish: "Chicken Platter, Chicken Strips & Mojito",
    likesCount: 1,
    isLocalGuide: false,
  },
  {
    id: "rev-dhanya",
    author: "Dhanya G",
    role: "Verified Google Reviewer",
    avatarColor: "from-pink-600 to-rose-500",
    avatarText: "DG",
    rating: 5,
    timeAgo: "3 months ago",
    content:
      "Excellent atmosphere, good service, tasty food. Worth to visiting especially for Thala fans don't miss this spot guys ❤️",
    highlightDish: "Thala Ajith Theme & Atmosphere",
    likesCount: 1,
    isLocalGuide: false,
    ownerResponse: {
      text: "Thanks for the cute review ma'am 🌸",
      timeAgo: "3 months ago",
    },
  },
  {
    id: "rev-surya",
    author: "Surya Shivakumar",
    role: "1 review • 1 photo",
    avatarColor: "from-amber-600 to-orange-500",
    avatarText: "SS",
    rating: 5,
    timeAgo: "3 months ago",
    content:
      "The atmosphere is amazing, and every AK fan will definitely love it ❤️. The food is a bit expensive, but the taste makes it worth trying.",
    highlightDish: "AK Atmosphere & Taste",
    isLocalGuide: false,
    ownerResponse: {
      text: "Thanks a lot for ua review 🌸",
      timeAgo: "3 months ago",
    },
  },
  {
    id: "rev-prakash",
    author: "prakash thangamani",
    role: "Local Guide • 21 reviews • 2 photos",
    avatarColor: "from-cyan-600 to-blue-600",
    avatarText: "PT",
    rating: 5,
    timeAgo: "4 months ago",
    content:
      "Great vibe , automobile lovers head out here ! Expecting more from you guys ! Will come often",
    highlightDish: "Automobile & Motorsport Vibes",
    likesCount: 1,
    isLocalGuide: true,
  },
  {
    id: "rev-vignesh",
    author: "Vignesh",
    role: "2 reviews",
    avatarColor: "from-emerald-700 to-green-500",
    avatarText: "V",
    rating: 5,
    timeAgo: "3 weeks ago",
    content:
      "Really loved the peaceful atmosphere and cozy ambience of this café. ☕✨ The place is clean, relaxing, and perfect for spending quality time⏳",
    highlightDish: "Cozy & Relaxing Ambiance",
    isLocalGuide: false,
    ownerResponse: {
      text: "Thanks a lot! Please visit again🫡",
      timeAgo: "3 weeks ago",
    },
  },
  {
    id: "rev-sanjay",
    author: "Sanjay Sanju",
    role: "Local Guide • 8 reviews",
    avatarColor: "from-indigo-600 to-violet-500",
    avatarText: "SS",
    rating: 5,
    timeAgo: "4 months ago",
    content:
      "Massive ambitions and excellent taste must try it✨😊",
    highlightDish: "Excellent Taste",
    likesCount: 1,
    isLocalGuide: true,
  },
  {
    id: "rev-guhanesh",
    author: "Guhanesh senthilkumar",
    role: "1 review",
    avatarColor: "from-rose-600 to-orange-500",
    avatarText: "GS",
    rating: 5,
    timeAgo: "4 months ago",
    content:
      "The food was good and their ambiance was awesome👍🏻",
    highlightDish: "Food & Awesome Ambiance",
    isLocalGuide: false,
  },
];
