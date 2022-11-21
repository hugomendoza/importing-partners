const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './partials/*.php',
    './home.php',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary-500)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary-500)',
        },
      },
      fontFamily: {
        sans: ['var(--font-family-primary)', ...defaultTheme.fontFamily.sans],
        headline: ['var(--font-family-secondary)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
        '5xl': 'var(--text-5xl)',
        '6xl': 'var(--text-6xl)',
      },
      lineHeight: {
        1.1: "1.1"
      },
      zIndex: {
        1: "1"
      },
      screens: {
        'max-xl': {'max': '1280px'},
        'max-lg': {'max': '1024px'},
        'max-md': {'max': '768px'},
        'max-sm': {'max': '576px'},
      },
    },
  },
  plugins: [],
};
