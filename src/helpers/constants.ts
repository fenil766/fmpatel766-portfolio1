// App Constants
export const APP_NAME = "Your App Name";
export const APP_TAGLINE = "Your Amazing Tagline";

// Social Links
export const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  dribbble: "https://dribbble.com/yourusername",
  behance: "https://behance.net/yourusername",
};

// Navigation Links
export const NAV_LINKS = [
  { name: "Home", path: "#home" },
  { name: "Features", path: "#features" },
  { name: "How It Works", path: "#work" },
  { name: "Testimonials", path: "#testimonials" },
  { name: "Pricing", path: "#pricing" },
];

// Feature Cards Data
export const FEATURES = [
  {
    id: 1,
    title: "Feature One",
    description: "Amazing feature description goes here",
    icon: "zap", // Lucide icon name
  },
  {
    id: 2,
    title: "Feature Two",
    description: "Another awesome feature description",
    icon: "shield",
  },
  {
    id: 3,
    title: "Feature Three",
    description: "Yet another great feature",
    icon: "rocket",
  },
];

// API Configuration (Future)
export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  timeout: 10000,
};