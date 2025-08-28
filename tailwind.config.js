/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './components/**/*.{js,ts,tsx}', './pages/**/*.{js,ts,tsx}'],

  darkMode: 'class',
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        f: '#000000',
        sf: '#28282b8',
        b: '#FFFFFF',
        df: '#ffffff',
        dsf: '#5C5C5C',
        db: '#000000',
      },
    },
  },
  plugins: [],
};
