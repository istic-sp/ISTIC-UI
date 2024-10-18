/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        success: '#12d16e',
        warning: '#fcb019',
        info: '#00adf2',
        error: '#fc3932',

        brand: {
          950: '#0B1B7A',
          900: '#0B1B7A',
          800: '#132893',
          700: '#1F3CB7',
          600: '#2D52DB',
          500: '#3E6CFF',
          400: '#6E94FF',
          300: '#8BACFF',
          200: '#B1C9FF',
          100: '#D8E5FF',
          50: '#F4F7FF',
        },
        neutral: {
          950: '#212529',
          900: '#212529',
          800: '#343a40',
          700: '#495057',
          600: '#868e96',
          500: '#adb5bd',
          400: '#ced4da',
          300: '#dee2e6',
          200: '#e9ecef',
          100: '#f1f3f5',
          50: '#f8f9fa',
        },
        button: {
          filled: {
            default: 'theme("colors.brand.500")',
            hover: 'theme("colors.brand.400")',
            active: 'theme("colors.brand.600")',
            disabled: 'theme("colors.neutral.100")',
            text: {
              default: 'theme("colors.white")',
              hover: 'theme("colors.white")',
              active: 'theme("colors.white")',
              disabled: 'theme("colors.neutral.700")',
            },
          },
          outline: {
            default: 'theme("colors.neutral.600")',
            hover: 'theme("colors.brand.400")',
            active: 'theme("colors.brand.600")',
            disabled: 'theme("colors.neutral.100")',
            text: {
              default: 'theme("colors.neutral.700")',
              hover: 'theme("colors.neutral.700")',
              active: 'theme("colors.brand.600")',
              disabled: 'theme("colors.neutral.500")',
            },
          },
          subtle: {
            default: 'theme("colors.transparent")',
            hover: 'theme("colors.transparent")',
            active: 'theme("colors.transparent")',
            text: {
              default: 'theme("colors.brand.500")',
              hover: 'theme("colors.brand.400")',
              active: 'theme("colors.brand.600")',
              disabled: 'theme("colors.neutral.700")',
            },
          },
          light: {
            default: 'theme("colors.brand.50")',
            hover: 'theme("colors.brand.200")',
            active: 'theme("colors.brand.600")',
            disabled: 'theme("colors.neutral.100")',
            text: {
              default: 'theme("colors.brand.500")',
              hover: 'theme("colors.brand.500")',
              active: 'theme("colors.white")',
              disabled: 'theme("colors.neutral.700")',
            },
          },
        },
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
        'progress-bar': {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
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
        progressBar: 'progress-bar linear',
      },
    },
  },
  plugins: [],
};
