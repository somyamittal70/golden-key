/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8edf5',
          100: '#c5d1e8',
          200: '#9eb2d8',
          300: '#7793c8',
          400: '#5a7abd',
          500: '#3d61b2',
          600: '#2d4e96',
          700: '#1B3A6B',
          800: '#142d54',
          900: '#0d1f3c',
        },
        gold: {
          50: '#fdf8ed',
          100: '#f9edd0',
          200: '#f3dba0',
          300: '#ecc870',
          400: '#e5b540',
          500: '#C9A84C',
          600: '#a8882a',
          700: '#87681e',
          800: '#664812',
          900: '#452808',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
};
