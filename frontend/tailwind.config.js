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
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'test-bar': 'testBar 3s ease-in-out infinite',
        'typing': 'typing 4s steps(20) infinite',
      },
      keyframes: {
        testBar: {
          '0%, 100%': { height: '40%' },
          '50%': { height: '80%' },
        },
        typing: {
          '0%': { opacity: '0.3' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.3' },
        }
      },
      boxShadow: {
        'glow': '0 0 15px 0 rgba(34, 211, 238, 0.1)',
        'glow-intense': '0 0 25px 0 rgba(34, 211, 238, 0.2), 0 0 10px 0 rgba(6, 182, 212, 0.1)',
        'glow-sm': '0 0 8px 0 rgba(34, 211, 238, 0.1)',
      },
    },
  },
}
