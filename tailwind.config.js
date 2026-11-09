/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        canvas: v('canvas'),   // page background
        panel: v('panel'),     // raised panels and cards
        deep: v('deep'),       // alternate section background
        ink: v('ink'),         // primary text
        line: v('line'),       // hairline borders
        surface: '#ffffff',    // glass tint (always used with opacity)
        accent: v('accent'),   // amber
        gold: v('gold'),       // gold highlight
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-18px)' } },
      },
      animation: {
        marquee: 'marquee 34s linear infinite',
        float: 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 28s linear infinite',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
