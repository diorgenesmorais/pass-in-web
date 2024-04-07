/** @type {import('tailwindcss').Config} */
/*global require*/
/*eslint no-undef: "error"*/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}