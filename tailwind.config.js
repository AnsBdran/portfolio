/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: '#3C91E6',
        dark: '#282C33',
        light_text: '#FAFFFD',
        dimmed_text: '#828E82',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
