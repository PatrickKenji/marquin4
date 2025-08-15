/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4A5D4A', // Verde oliva escuro principal
          50: '#F8F7F4',      // Bege muito claro
          100: '#F1EFE9',     // Bege claro
          200: '#E8E4D9',     // Bege médio claro
          300: '#D4CCB8',     // Bege médio
          400: '#B8A98A',     // Marrom claro/tan
          500: '#9B8B6B',     // Marrom médio
          600: '#7A6B4F',     // Marrom escuro
          700: '#5D4F3A',     // Marrom muito escuro
          800: '#4A5D4A',     // Verde oliva escuro
          900: '#3A4A3A',     // Verde oliva muito escuro
        },
        accent: {
          DEFAULT: '#7FB3B3', // Verde azulado/teal claro para ícones
          50: '#F0F7F7',      // Teal muito claro
          100: '#E1EFEF',     // Teal claro
          200: '#C3DFDF',     // Teal médio claro
          300: '#A5CFCF',     // Teal médio
          400: '#7FB3B3',     // Teal principal
          500: '#5A9797',     // Teal escuro
          600: '#3D7A7A',     // Teal muito escuro
        },
        earth: {
          DEFAULT: '#8B7355', // Marrom terroso
          50: '#F8F6F3',      // Marrom muito claro
          100: '#F1EDE7',     // Marrom claro
          200: '#E3D9CF',     // Marrom médio claro
          300: '#C7B39F',     // Marrom médio
          400: '#A38F7B',     // Marrom médio escuro
          500: '#8B7355',     // Marrom terroso principal
          600: '#6B5A42',     // Marrom escuro
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
