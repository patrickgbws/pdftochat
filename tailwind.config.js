/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
    boxShadow: {
      'custom': '0 6px 10px rgba(19, 17, 33, 0.02)',
    }
  },
  plugins: [require('@tailwindcss/typography')],
};
