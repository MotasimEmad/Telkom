/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'ubuntu': '"Ubuntu"'
    },
    extend: {
      colors: {
        'primary': '#f6931d',
      },
    },
  },
  plugins: [],
}