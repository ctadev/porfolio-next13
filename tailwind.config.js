const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arizonia: ["var(--font-arizonia)", ...fontFamily.sans],
        nothing: ["var(--font-nothing)", ...fontFamily.sans],
        noto: ["var(--font-noto)", ...fontFamily.sans],
        quicksand: ["var(--font-quicksand)", ...fontFamily.sans],
        rocksalt: ["var(--font-rocksalt)", ...fontFamily.sans],
        satisfy: ["var(--font-satisfy)", ...fontFamily.sans],
        tangerine: ["var(--font-tangerine)", ...fontFamily.sans],
        kaushan: ["var(--font-kaushan)", ...fontFamily.sans],
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      keyframes: {
        animateprofile: {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
      },
      animation: {
        animatepic: "animateprofile 4s linear infinite",
      },
      colors: {
        "white-900": "#FFFFFF",
        "white-800": "#F3F8FF",
        "white-500": "#6F84A7",
        "black-200": "#151E2C",
        "black-300": "#192333",
        "black-400": "#778295",
        "blue-light": "#0252CD",
        "blue-dark": "#428DFF",
        "blue-secondary": "#FFBE62",
      },
      dropShadow: {
        "dark-shadow": "0px 0px 10px #1f2e48",
      },
      backgroundImage: {
        collabbg: "url('/footerbg.png')",
      },
    },
  },
  plugins: [],
};
