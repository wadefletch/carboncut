const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        secondary: colors.green,
        primary: colors.emerald,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
