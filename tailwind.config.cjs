/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        "blur": "url(./img/mobile.png)",
        "blur-md": "url(./img/desktop.png)"
      }
    },
  },
  plugins: [],
}
