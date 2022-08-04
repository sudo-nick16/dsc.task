/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#222429",
      blue: "#3481EF",
      orange: "#FF4E00",
      yellow: "#F7DF1E",
      gray: "#979797",
      white: "#F5F6F6",
    },
    extend: {
    },
  },
  plugins: [],
};
