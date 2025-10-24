/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF9F0',
        sand: '#FFEFD5',
        peach: '#FFE5D0',
        coral: '#FF9B7A',
        terracotta: '#E07856',
        warmGold: '#F4A460',
        amber: '#FFBF69',
        rust: '#D4754E',
      },
    },
  },
  plugins: [],
}
