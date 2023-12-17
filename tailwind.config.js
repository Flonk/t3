/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "greensmoke-50": "#f8f8e9",
        "greensmoke-100": "#f6f7d8",
        "greensmoke-200": "#eaecbf",
        "greensmoke-300": "#d8daa3",
        "greensmoke-400": "#c0c384",
        "greensmoke-500": "#a5a964",
        "greensmoke-600": "#898e46",
        "greensmoke-700": "#6f742a",
        "greensmoke-800": "#575c0f",
        "greensmoke-900": "#434900",
        "greensmoke-950": "#262a01",
      },
      maxWidth: {
        "screen-huge": "1920px",
      }
    },
  },
  plugins: [],
}