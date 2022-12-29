/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-rifle-green": "#3F4531",
        "theme-persian-green": "#2A9D8F",
        "theme-maize-crayola": "#E9C46A",
        "theme-sandy-brown": "#F4A261",
        "theme-burnt-sienna": "#E76F51",
      },
    },
  },
  plugins: [],
};
