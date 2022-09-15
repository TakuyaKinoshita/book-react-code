/** @type {import('tailwindcss').Config} */
module.exports = {
  // purgeではなく、contentに記述するように仕様変更が行われている。
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}