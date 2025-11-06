/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pinkAccent: "#FF7EDF",
        indigoMain: "#5862E9",
        lime: "#CDDF3D",
        coral: "#ED6951",
        dark: "#0A0F0D",
        cream: "#FDF9F5",
      },
      fontFamily: {
        italianno: ["Italianno", "cursive"],
        hanken: ["Hanken Grotesk", "sans-serif"],
        tahoma: ["Tahoma", "sans-serif"],
      },
    },
  },
  plugins: [],
}
