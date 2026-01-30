/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#0a266e", // Galation Navy Blue - main brand color
        secondary: "#145e32", // AFC Forest Green - partner color
        accent: "#8bc34a", // Lighter green from AFC leaf for highlights
        "background-light": "#f8fafc", // Light mode background
        "background-dark": "#0f172a", // Dark mode background
        "surface-light": "#ffffff", // Light mode surface (cards, etc.)
        "surface-dark": "#1e293b", // Dark mode surface
        "text-light": "#334155", // Light mode text
        "text-dark": "#e2e8f0" // Dark mode text
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
