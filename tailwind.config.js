/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Indigo
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        // Indigo Accent
        primaryAccent: {
          100: "#8c9eff",
          200: "#536dfe",
          400: "#3d5afe",
          700: "#304ffe",
        },
        // Blue
        secondary: {
          50: "#e3f2fd",
          100: "#bbdefb",
          200: "#90caf9",
          300: "#64b5f6",
          400: "#42a5f5",
          500: "#2196f3",
          600: "#1e88e5",
          700: "#1976d2",
          800: "#1565c0",
          900: "#0d47a1",
        },
        // Blue Accent
        secondaryAccent: {
          100: "#82b1ff",
          200: "#448aff",
          400: "#2979ff",
          700: "#2962ff",
        },
        // Cyan
        tertiary: {
          50: "#e0f7fa",
          100: "#b2ebf2",
          200: "#80deea",
          300: "#4dd0e1",
          400: "#26c6da",
          500: "#00bcd4",
          600: "#00acc1",
          700: "#0097a7",
          800: "#00838f",
          900: "#006064",
        },
        // Cyan Accent
        tertiaryAccent: {
          100: "#84ffff",
          200: "#18ffff",
          400: "#00e5ff",
          700: "#00b8d4",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};