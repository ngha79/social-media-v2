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
        'light-search': '#f0f2f5',
        'item-hover': '#303031',
        'dark-item-hover': '#E4E6E9',
        'dark-icon-story-hover': '#525355',
        'dark-icon-story': '#3e4042',
        'light-gray': '#65676B',
      },
    },
  },

  plugins: [],
  darkMode: 'class',
}
