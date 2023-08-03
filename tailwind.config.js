/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
         wiggle: 'wiggle 4s ease-in-out infinite',
        'spin-slow': 'spin 6s linear infinite',
      },
      colors: {
        // ...
        'toxicgreen': {
          100: '#A2EC82',
          200: '#90E86B',
          300: '#80E554',
          400: '#60DD2A',
          500: '#60DD2A',
        },
        'pink': {
          500: '#de29bb',
          600: '#a21988'
        },
        'purple': {
          500: '#a629de',
          600: '#a629de',
        },        // ...
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      ); 
    }),
  ], 
}
