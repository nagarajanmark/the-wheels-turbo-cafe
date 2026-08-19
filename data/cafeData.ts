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
  };
}

export const CAFE_DATA: CafeInfo = {
  name: "THE WHEELS TURBO CAFE",
  tagline: "Where Automotive Passion Meets Unforgettable Flavour",
  location: "Arokiasamy Road West, R.S. Puram",
  city: "Coimbatore",
  state: "Tamil Nadu",
  country: "India",
  coordinates: {
    lat: "11°00'20.4\" N",
    lng: "76°56'45.2\" E",
  },
  address: "1053, Arokiasamy Rd W, R.S. Puram, Coimbatore, Tamil Nadu 641002, India",
  phone: "+91 98422 88726",
  email: "pitstop@thewheelsturbocafe.com",
  instagram: "@the_wheels_turbo_cafe",
  timing: {
    days: "Monday — Saturday (Sunday Closed)",
    hours: "11:00 AM — 11:30 PM",
    pitstopNote: "Special Evening Track Hangouts & AK Fan Gatherings",
  },
};
