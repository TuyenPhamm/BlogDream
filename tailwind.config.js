/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '1400': '1400px',
        '1296': '1296px',
        '1200': '1200px',
        '992': '992px',
        '768': '768px',
      }
    },
  },
  plugins: [],
}