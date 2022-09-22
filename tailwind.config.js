/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./js/**/*.js",
    "./**/*.html",
    "./src/**/*.html",
  ],
  theme: {
    screens: {
      'md': '890px',
      'lg': '1100px',
      'xl': '1366px',
    },
    extend: {
      colors: {
        "mainBlack": "#190F2E",
        "mainPurple-900": "#573399",
        "mainPurple-600": "#D0C2EB",
        "mainPurple-300": "#E8E0F5",
      },
    },
  },
  plugins: [],
}
