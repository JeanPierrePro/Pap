/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores baseadas no seu esboço
        brand: {
          blue: '#5D5FEF',
          bg: '#F8F9FD',
        }
      }
    },
  },
  plugins: [],
}