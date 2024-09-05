/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        input: "#D4D4D4",
        primary: {
          DEFAULT: "#0D9488",
          foreground: "#FFFFFF",
          hover: "#0F766E",
        },
        secondary: {
          DEFAULT: "#F5F5F5",
          foreground: "#525252",
          hover: "#F5F5F5CC",
        },
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
          hover: "#B91C1C",
        },
        accent: {
          DEFAULT: "#F0FDFA",
          foreground: "#0F766E",
        },
      },
      opacity: {
        default: "0.5",
      },
      borderRadius: {
        lg: "8px",
        md: "6px",
        sm: "4px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
