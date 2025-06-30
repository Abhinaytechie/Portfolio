/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFA54D', // --color-primary
        primaryGradientFrom: '#FFA500', // for gradients
        primaryGradientTo: '#FF7C00',
        bg: { DEFAULT: '#0E0E0E' },
        text: { DEFAULT: '#FFFFFF' },
        muted: { DEFAULT: '#A0A0A0' },
        border: { DEFAULT: 'rgba(255,124,0,0.15)' },
        accent: {
          DEFAULT: '#5A8DEE', // Orange accent
        },
        black: '#000',
        orange: {
          DEFAULT: '#ff8800',
          dark: '#cc7000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
  safelist: [
    'bg-bg', 'text-text', 'text-muted', 'border', 'bg-primary', 'text-primary', 'border-primary'
  ],
};
