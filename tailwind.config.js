/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          // Calming blue
          50: '#eef6ff',
          100: '#d8eafd',
          200: '#b9ddfc',
          300: '#8ac8fa',
          400: '#54aaf6',
          500: '#2f88f0',
          600: '#1e6ce6',
          700: '#1957d1',
          800: '#1c47aa',
        },
        accent: {
          // Healing green
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        secondary: {
          // Soft purple for wellness
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
        }
      }
    },
  },
  plugins: [],
}

