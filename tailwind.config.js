/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js,ts,jsx,tsx,vue,svelte}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        ln: {
          lime: '#d2ff00',
          'lime-off': '#b2c73a',
          orange: '#ff6b00',
          black: '#111112',
          'dark-green': '#282c20',
          'dark-green-tint-1': '#3b3c38',
          'dark-green-tint-2': '#535450',
          white: '#f4f4ed',
          cream: '#efefe5',
          'grey-1': '#ebeee0',
          'grey-2': '#c8cbbd',
          'grey-track': '#b9bbad',
          'green-light': '#ebeee0',
          'offwhite-1': '#dde1d2',
          'offwhite-2': '#b4b8a5',
        }
      },
      fontFamily: {
        display: ['Brier', 'Arial', 'sans-serif'],
        sans: ['"Mona Sans Variable"', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
      },
      fontSize: {
        impact: ['7.9375rem', { lineHeight: '0.83', letterSpacing: '-0.1875rem' }],
        h1: ['4rem', { lineHeight: '0.9', letterSpacing: '-0.05rem' }],
        h2: ['4.5rem', { lineHeight: '0.95', letterSpacing: '-0.04rem' }],
        h3: ['2rem', { lineHeight: '1.1' }],
        h4: ['1.5rem', { lineHeight: '1.2' }],
        h5: ['1.2rem', { lineHeight: '1.3' }],
        h6: ['1rem', { lineHeight: '1.4' }],
        med: ['2.76rem', { lineHeight: '1.1' }],
        reg: ['1.6rem', { lineHeight: '1.3' }],
        eyebrow: ['0.578125rem', { letterSpacing: '0.15em' }],
        'btn-primary': ['1rem', { lineHeight: '1' }],
        'btn-nav': ['1.7rem', { lineHeight: '1' }],
        'btn-footer': ['1.6rem', { lineHeight: '1' }],
        'btn-tertiary': ['0.875rem', { lineHeight: '1' }],
      },
      borderRadius: {
        btn: '0.54rem',
        'btn-tertiary': '0.411875rem',
        'ln-sm': '1rem',
        'ln-md': '3rem',
        'ln-lg': '6.25rem',
      },
      spacing: {
        gap: '1.25rem',
        'padding-container': '1rem',
        'padding-mini': '1rem',
        'padding-sm': '2rem',
        'padding-md': '3rem',
        'padding-lg': '4rem',
        'padding-xl': '5rem',
        'nav-spacer': '6.375rem',
        'grid-col': '25.4375rem',
      },
      transitionTimingFunction: {
        'ln-default': 'cubic-bezier(0.65, 0.05, 0, 1)',
      },
      transitionDuration: {
        'ln-default': '750ms',
        'ln-fast': '300ms',
      }
    },
  },
  plugins: [],
};
