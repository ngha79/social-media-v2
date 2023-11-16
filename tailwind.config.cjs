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
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      height: {
        layout: 'calc(100vh-58px)',
      },
    },
  },

  plugins: [],
  darkMode: 'class',
}
