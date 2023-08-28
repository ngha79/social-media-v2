/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'dark-nav': '#242526',
        'dark-theme': '#18191a',
        'dark-search': '#3a3b3c',
        'dark-icon': '#4e4f50',
        'dark-icon-hover': '#3e4f50',
        'dark-hover': '#f2f2f2',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
