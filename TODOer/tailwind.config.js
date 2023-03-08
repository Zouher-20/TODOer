/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#00bd7e",
      dark: "#181818",
      white: "#ffffff",
      dark2: "#202020",
      red: {
        100: "#eda7a7",
        800: "#771d1d",
        500: "#f05252",
      },
    },
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
