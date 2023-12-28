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
      tiger: {
        lighter: '#f0dfd5',
        light: '#d9c7bd',
      },
      violet: {
        light: '#faeaff',
        DEFAULT: '#451952',
        dark: '#1A164D',
      },
    },
    extend: {},
  },
  plugins: [],
};
