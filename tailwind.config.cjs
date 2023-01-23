/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        "blur": "url(./src/img/mobile.png)",
        "blur-md": "url(./src/img/desktop.png)"
      }
    },
  },
  plugins: [],
}
