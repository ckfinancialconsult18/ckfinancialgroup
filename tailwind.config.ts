import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2545",
          50: "#E8EDF4",
          100: "#C5D0E1",
          200: "#8FA4C4",
          300: "#5978A7",
          400: "#2D538B",
          500: "#0B2545",
          600: "#091D38",
          700: "#06152A",
          800: "#040E1C",
          900: "#02070E",
        },
        gold: {
          DEFAULT: "#C6A664",
          50: "#FAF5EC",
          100: "#F2E7CC",
          200: "#E6CE99",
          300: "#D9B566",
          400: "#C6A664",
          500: "#B38E40",
          600: "#8C6E32",
          700: "#654F24",
          800: "#3E3016",
          900: "#171108",
        },
        background: "#FFFFFF",
        surface: "#F7F8FA",
        "text-primary": "#0B2545",
        "text-secondary": "#444444",
        "text-muted": "#6B7280",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(11, 37, 69, 0.07), 0 10px 20px -2px rgba(11, 37, 69, 0.04)",
        card: "0 4px 24px -4px rgba(11, 37, 69, 0.10), 0 2px 8px -2px rgba(11, 37, 69, 0.06)",
        gold: "0 4px 24px -4px rgba(198, 166, 100, 0.30)",
        hero: "0 20px 60px -10px rgba(11, 37, 69, 0.15)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-right": "slideRight 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
