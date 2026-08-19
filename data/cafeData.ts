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
  location: "Avinashi Road / Race Course Corridor",
  city: "Coimbatore",
  state: "Tamil Nadu",
  country: "India",
  coordinates: {
    lat: "11.0168° N",
    lng: "76.9558° E",
  },
  address: "Sector 07, Paddock Way, Near Kari Motor Speedway Junction, Coimbatore, Tamil Nadu 641018",
  phone: "+91 98422 88726",
  email: "pitstop@thewheelsturbocafe.com",
  instagram: "@the_wheels_turbo_cafe",
  timing: {
    days: "Tuesday — Sunday (Closed on Monday Track Maintenance)",
    hours: "11:00 AM — 11:30 PM",
    pitstopNote: "Late Night Pitstop Service till 01:00 AM on Weekends",
  },
};
