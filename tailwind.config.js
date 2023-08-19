/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '5xl': '2516px',
      '4xl': '2000px',
      '3xl': '1720px',
      '2xl': '1536px',
      xl: '1280px',
      lg: '1024px',
      md: '768px',
      sm: '640px',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '5rem',
        lg: '7rem',
        xl: '10rem',
        '2xl': '12rem',
        '3xl': '18rem',
        '4xl': '25rem',
        '5xl': '35rem',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#38C0C6',
        dark: '#000325',
        grey: '#7F7F7F',
      },
      backgroundColor: {
        primary: '#38C0C6',
        'footer-input': 'rgba(255, 255, 255, 0.34)',
      },
      divideColor: {
        primary: '#38C0C6',
      },
    },
  },
  plugins: [],
};
