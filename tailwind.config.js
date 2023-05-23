const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
  },
  plugins: [],
};
