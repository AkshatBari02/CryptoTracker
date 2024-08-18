/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '5px 5px 10px rgba(58, 128, 233, 0.5)',
      }
    },
  },
  plugins: [],
}

