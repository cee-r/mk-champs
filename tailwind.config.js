/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{html,js}",
    "./content/**/*.{md,html}",
    "./themes/**/*.{html,js}"
  ],
  theme: {
    extend: {
      rotate: {}, // This removes all rotate utilities
      skew: {},   // This removes all skew utilities
    },
  },
  plugins: [],
}
