/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        bodyFont: 'Poppins',
        titleFont: 'Nunito sans',
      },
    },
  },
  plugins: [],
}

