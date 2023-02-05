/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Ui/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6765F0",
        secondary: "#264373",
        tertiary: "#7C7874",
        info: "#929191",
        link: "#B7B6F7"
      },
      fontFamily: {
        sport: ["Sporting Grotesque Bold", "sans-serif"]
      }
    },
  },
  plugins: [],
}