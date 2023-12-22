/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      maroon: {
        lighter: '#FFCCCC',
        light: '#FF9999',
        DEFAULT: '#800000',
        dark: '#4D0F0F',
      },
      gold: {
        DEFAULT: '#fce48d',
      },
      violet: {
        lighter: '#B5B0FF',
        light: '#7870E6',
        DEFAULT: '#130B80',
        dark: '#1A164D',
      },
    },
    extend: {},
  },
  plugins: [],
};
