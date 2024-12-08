const themeColors = require('./src/ColorConfig');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: themeColors,
    },
  },
  plugins: [],
}

