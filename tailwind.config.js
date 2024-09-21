/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  // For newer versions of Tailwind CSS
  theme: {
    extend: {},
  },
  plugins: [],
};
