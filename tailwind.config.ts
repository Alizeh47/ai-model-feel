import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF", // Cool white
        secondary: "#E8F1F8", // Soft blue
        accent: "#1A2B3C", // Deep navy
        text: "#1A1A1A", // Rich black
        "navy-blue": "#0F172A", // CTA color
        cream: "#F5F5F0", // Warmer background color
      },
      fontFamily: {
        serif: ["var(--font-playfair)"],
        sans: ["var(--font-inter)"],
      },
      fontSize: {
        "hero": ["64px", "72px"],
        "section": ["48px", "56px"],
        "subheader": ["32px", "40px"],
        "body": ["16px", "24px"],
        "small": ["14px", "20px"],
      },
      spacing: {
        "grid-gap": "24px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
