/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        success: '#12d16e',
        warning: '#fcb019',
        info: '#00adf2',
        error: '#fc3932',

        brand900: '#0B1B7A',
        brand800: '#132893',
        brand700: '#1F3CB7',
        brand600: '#2D52DB',
        brand500: '#3E6CFF',
        brand400: '#6E94FF',
        brand300: '#8BACFF',
        brand200: '#B1C9FF',
        brand100: '#D8E5FF',
        brand0: '#F4F7FF',

        neutral900: '#212529',
        neutral800: '#343a40',
        neutral700: '#495057',
        neutral600: '#868e96',
        neutral500: '#adb5bd',
        neutral400: '#ced4da',
        neutral300: '#dee2e6',
        neutral200: '#e9ecef',
        neutral100: '#f1f3f5',
        neutral0: '#f8f9fa',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',

        'button-xs': '0.75rem',
        'button-sm': '0.875rem',
        'button-md': '1rem',
        'button-lg': '1.125rem',
        'button-xl': '1.25rem',

        'title-h1': '3rem',
        'title-h2': '2.5rem',
        'title-h3': '2rem',
        'title-h4': '1.5rem',
        'title-h5': '1.25rem',
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
      lineHeight: {
        text: '150%',
        title: '150%',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 0.4,
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(-100%, 0, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(100%, 0, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translate3d(-50%, 100%, 0)' },
          '100%': { opacity: 1, transform: 'translate3d(-50%, -50%, 0)' },
        },
        'fade-out-up': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0, transform: 'translate3d(0, -100%, 0)' },
        },
        'fade-in-down': {
          '0%': { opacity: 0, transform: 'translate3d(0, -100%, 0)' },
          '100%': { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        },
        'chip-fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'chip-scale-right': {
          '0%': {
            transform: 'scaleX(0.6)',
            transformOrigin: '0% 0%',
            opacity: 1,
          },
          '100%': {
            transform: 'scaleX(1)',
            transformOrigin: '0% 0%',
            opacity: 1,
          },
        },
      },
      animation: {
        fadeIn: 'fade-in .2s ease-in-out',
        fadeInLeft: 'fade-in-left .2s ease-in-out',
        fadeInRight: 'fade-in-right .2s ease-in-out',
        fadeInUp: 'fade-in-up 0.3s ease-in-out',
        fadeInDown: 'fade-in-down 0.2s ease-in-out',
        fadeOutUp: 'fade-out-up 0.2s ease-in-out',
        chipFadeIn: 'chip-fade-in 0.3s ease-in-out',
        chipScaleRight:
          'chip-scale-right 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      },
    },
  },
  plugins: [],
};
