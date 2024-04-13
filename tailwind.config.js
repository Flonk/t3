/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pizza-50": "#fef6e8",
        "pizza-100": "#fff0c9",
        "pizza-200": "#ffe2a6",
        "pizza-300": "#fccd7f",
        "pizza-400": "#e8b358",
        "pizza-500": "#cf9830",
        "pizza-600": "#b27c00",
        "pizza-700": "#956300",
        "pizza-800": "#784d00",
        "pizza-900": "#5e3c00",
        "pizza-950": "#362200",
      },
      maxWidth: {
        "screen-huge": "1920px",
      }
    },
  },
  plugins: [],
}