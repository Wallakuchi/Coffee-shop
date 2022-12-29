/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // 'home': "url('./public/images/home-img.jpeg')",
      },
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(20rem, 1fr))',
      }
    },
  },
  plugins: [],
};
