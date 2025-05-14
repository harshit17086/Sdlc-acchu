/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('tailwind-scrollbar'),
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        brand: {
          darkgreen: '#004348',
          mediumgreen: '#2ca089',
          lightgreen: '#badc81',
          darkgray: '#606160',
          mediumgray: '#b0aeae',
          lightgray: '#d9d9d9'
        }
      },
    },
  },
}
