export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://the-wheels-turbo-cafe.vercel.app");

export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/og-image.jpg`,
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: "The Wheels Turbo Cafe - Best Racing Theme Cafe in Coimbatore",
};
