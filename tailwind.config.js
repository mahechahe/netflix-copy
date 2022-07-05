/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-home': "url('./src/assets/fondo-home.jpg')"
      }
    },
  },
  plugins: [],
}
