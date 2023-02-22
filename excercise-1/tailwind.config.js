/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      // Note: @media (min-width: 1279px) || Large Laptops and above+
      xl: { min: '1200px' },

      // Note: @media (max-width: 1199px) || Laptops
      lg: { max: '1199px' },

      // Note: @media (max-width: 991px) || Tablets
      md: { max: '991px' },

      // Note: @media (max-width: 767px) || Mobiles
      sm: { max: '767px' },

      // Note: @media (max-width: 425px) || Small Mobiles and below-
      xs: { max: '425px' },
    },
    extend: {},
  },
  daisyui: {
    styled: true,
    themes: ['light'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
  plugins: [
    require('tailwindcss'),
    require('daisyui'),
    require('@tailwindcss/typography'),
    require('autoprefixer'),
  ],
};
