export interface ScheduleDay {
  day: string;
  shortDay: string;
  hours: string;
  isOpen: boolean;
}

export interface CafeInfo {
  name: string;
  tagline: string;
  location: string;
  city: string;
  state: string;
  country: string;
  coordinates: {
    lat: string;
    lng: string;
  };
  address: string;
  phone: string;
  email: string;
  instagram: string;
  timing: {
    days: string;
    hours: string;
    pitstopNote: string;
    schedule: ScheduleDay[];
  };
}

export const CAFE_DATA: CafeInfo = {
  name: "THE WHEELS TURBO CAFE",
  tagline: "Where Automotive Passion Meets Unforgettable Flavour",
  location: "West Arokiasamy Road, R.S. Puram (Opp. Yamaha Showroom)",
  city: "Coimbatore",
  state: "Tamil Nadu",
  country: "India",
  coordinates: {
    lat: "11°00'20.4\" N",
    lng: "76°56'45.2\" E",
  },
  address: "West Arokiasamy Road, R.S. Puram, Coimbatore (Opposite to Yamaha Showroom), Tamil Nadu 641002, India",
  phone: "+91 81470 12883",
  email: "pitstop@thewheelsturbocafe.com",
  instagram: "@the_wheels_turbo_cafe",
  timing: {
    days: "Monday — Saturday (Sunday Closed)",
    hours: "Mon–Fri: 11:00 AM – 11:00 PM | Sat: 11:00 AM – 11:30 PM",
    pitstopNote: "Special Evening Track Hangouts & AK Fan Gatherings",
    schedule: [
      { day: "Monday", shortDay: "Mon", hours: "11:00 AM – 11:00 PM", isOpen: true },
      { day: "Tuesday", shortDay: "Tue", hours: "11:00 AM – 11:00 PM", isOpen: true },
      { day: "Wednesday", shortDay: "Wed", hours: "11:00 AM – 11:00 PM", isOpen: true },
      { day: "Thursday", shortDay: "Thu", hours: "11:00 AM – 11:00 PM", isOpen: true },
      { day: "Friday", shortDay: "Fri", hours: "11:00 AM – 11:00 PM", isOpen: true },
      { day: "Saturday", shortDay: "Sat", hours: "11:00 AM – 11:30 PM", isOpen: true },
      { day: "Sunday", shortDay: "Sun", hours: "Closed (Track Maintenance)", isOpen: false },
    ],
  },
};

