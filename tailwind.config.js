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
        "mainBlue": "#190F2E",
        "darkOrange": "#E85B26",
      },
    },
  },
  plugins: [],
}
