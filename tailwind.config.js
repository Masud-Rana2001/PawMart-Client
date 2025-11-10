/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ এটা না থাকলে dark mode কাজ করবে না
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
