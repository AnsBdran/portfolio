/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: '#dafa15',
        dark: '#282C33',
      },
    },
  },
  plugins: [],
};
