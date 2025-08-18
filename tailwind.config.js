/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{html,js}",
    "./content/**/*.{md,html}",
    "./themes/**/*.{html,js}",
    "./assets/**/*.{css,scss,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        mariokart: ['MarioKart', 'sans-serif'],
      },
      rotate: {}, // This removes all rotate utilities
      skew: {},   // This removes all skew utilities
    },
  },
  plugins: [],
}
