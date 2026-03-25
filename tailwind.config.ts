import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#F8F9FA",
          light: "#FFFFFF",
          deep: "#EEF0F2",
        },
        electric: {
          DEFAULT: "#0066CC",
          light: "#3385D6",
          dark: "#0052A3",
        },
        gold: {
          DEFAULT: "#FFD700",
          light: "#FFE44D",
          dark: "#CCB000",
        },
        emergency: "#CC0000",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #EEF0F2 0%, #F8F9FA 50%, #FFFFFF 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(0,102,204,0.05) 0%, rgba(255,255,255,0.98) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
