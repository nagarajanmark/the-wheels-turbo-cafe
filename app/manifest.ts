import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Wheels Turbo Cafe",
    short_name: "Turbo Cafe",
    description:
      "Motorsport and automobile-themed cafe in RS Puram, Coimbatore. Artisanal burgers, specialty coffee, and racing culture.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#e10600",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
