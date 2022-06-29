/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/components/**/*.{html,js,jsx}",
    "./public/index.html"
  ],
  theme: {
    fontFamily: {
      'sans' : ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
