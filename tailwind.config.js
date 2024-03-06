/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

