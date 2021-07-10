const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        50: 'rgba(212,233,226,.33)',
        100: '#d4e9e2',
        200: '#008248',

        300: '#1e3932',
      },
      secondary: {
        100: '#f7f7f7',
        200: '#f3f1e7',
      },
      gold: '#cba258',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
    },
    fontFamily: {
      sans: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    },
    extend: {
      backgroundImage: {
        'ig-hero': "url('./images/hero-mobile.webp')",
        'ig-hero-desk': "url('./images/xl-hero-desktop.webp')",
      },
      padding: {
        1.7: '0.4375rem',
      },
      spacing: {
        28: '7rem',
        39.5: '9.875rem',
      },
      maxWidth: {
        '1/4': '25%',
        '3/4': '75%',
        '1/2': '50%',
      },
      translate: {
        '1/5': '20%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
