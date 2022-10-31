/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'romo':['"Roboto Mono"', 'monospace'],
        'custom':['arabic','sans-serif'],
      } 
    },
  },
  plugins: [],
}
