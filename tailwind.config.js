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
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out both',
      },
    },
  },
  plugins: [],
}

