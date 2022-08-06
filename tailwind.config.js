/** @type {import('tailwindcss').Config} */
const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    deliciousHamburgers: {
      size: "40px", // must be in px.
      color: "#000",
      colorLight: "#fff8f4",
      padding: "0px", // must be in px.
      animationSpeed: 1,
    },
    colors: {
      black: "#222429",
      blue: "#3481EF",
      orange: "#FF4E00",
      yellow: "#F7DF1E",
      gray: "#979797",
      white: "#F5F6F6",
    },
    screens: {
      xxs: "476px",
      ...screens,
    },
    extend: {
    },
  },
  plugins: [require("tailwindcss-delicious-hamburgers")],
};
