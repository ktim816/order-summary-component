const {fontFamily} = require('tailwindcss/defaultTheme');
const colorStyles = require('./color-styles');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: colorStyles,
    extend: {
      fontFamily: {
        sans: ['Red Hat Display', ...fontFamily.sans],
      },
      fontSize: {
        xs: ['0.8125rem', '1.0625rem'],
        sm: ['0.875rem', '1.125rem'],
        md: ['0.9375rem', '1.25rem'],
        base: ['1rem', '1.625rem'],
        xl: ['1.375rem', '1.8125rem'],
        '3xl': ['1.75rem', '2.3125rem'],
      },
      backgroundImage: {
        hero: 'url("src/assets/images/illustration-hero.svg")',
        pattern: 'url("src/assets/images/pattern-background-desktop.svg")',
        'pattern-mobile':
          'url("src/assets/images/pattern-background-mobile.svg")',
      },
      maxWidth: {
        auto: 'auto',
      },
      minWidth: {
        auto: 'auto',
      },
    },
  },
  plugins: [],
};
