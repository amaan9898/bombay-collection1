import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: "#fdf2f2",
          100: "#fde8e8",
          200: "#fbd5d5",
          300: "#f8b4b4",
          400: "#f47a7a",
          500: "#8B1A2E",
          600: "#7a1628",
          700: "#6b1222",
          800: "#5c0f1d",
          900: "#4a0b16",
          950: "#3a0810",
        },
        beige: {
          50: "#fdfaf5",
          100: "#f8f0e0",
          200: "#f2e0c0",
          300: "#e8c98a",
          400: "#d4a855",
          500: "#C4954A",
          600: "#a67d3d",
          700: "#8a6530",
          800: "#6e4e24",
          900: "#503819",
        },
        charcoal: {
          50: "#f5f5f5",
          100: "#e8e8e8",
          200: "#d0d0d0",
          300: "#b0b0b0",
          400: "#888888",
          500: "#2C2C2C",
          600: "#262626",
          700: "#1f1f1f",
          800: "#181818",
          900: "#111111",
        }
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        slideUp: { from: { opacity: "0", transform: "translateY(24px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
      }
    },
  },
  plugins: [],
};
export default config;
