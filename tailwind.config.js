/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        fussion: {
          50: '#fffdef',
          100: '#fff9de',
          500: '#FFC700',
          600: '#ffba00',
          700: '#e6a200',
        },
      },
      boxShadow: {
        glow: '0 0 28px rgba(255, 199, 0, 0.4)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) both',
        zoomSlow: 'zoom 10s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}