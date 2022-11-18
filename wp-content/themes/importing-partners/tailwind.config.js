const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './templates/**/*.{twig,html,tpl}',
    './partials/*.php',
    './home.php',
    './detras-de-cada-cucu.php',
    './6-razones.php',
    './front-src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'btn-red': '5px 5px 0px 0px rgba(163,29,58,1)',
      },
      colors: {
        black: 'var(--color-black)',
        primary: {
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          DEFAULT: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary-500)',
        },
        terciary: {
          DEFAULT: 'var(--color-terciary-500)',
          700: 'var(--color-terciary-700)',
        },
      },
      fontFamily: {
        little: ['var(--font-family-primary)', ...defaultTheme.fontFamily.sans],
        muli: ['var(--font-family-secondary)',...defaultTheme.fontFamily.sans,],
        patrick: ['var(--font-family-terciary)',...defaultTheme.fontFamily.sans,],
        openSans: ['var(--font-family-openSans)',...defaultTheme.fontFamily.sans,],
        Covered: ['var(--font-family-CoveredByYourGrace)',...defaultTheme.fontFamily.sans,],
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
      aspectRatio: {
        '1/1.35': '1 / 1.35',
        'photo': '4 / 3',
        '16/7': '16 / 7',
      },
      screens: {
        'max-xl': {'max': '1280px'},
        'max-lg': {'max': '1024px'},
        'max-md': {'max': '768px'},
        'max-sm': {'max': '570px'},
      },
    },
  },
  plugins: [],
};
