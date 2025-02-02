/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
        roboto: ['Roboto Condensed', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
