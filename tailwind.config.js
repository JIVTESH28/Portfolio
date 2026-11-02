/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#FF5722',
          hover: '#FF7043',
          amber: '#F59E0B',
          sky: '#38BDF8',
          cyan: '#06B6D4',
          violet: '#8B5CF6',
        },
        dark: {
          950: '#000000',
          900: '#050608',
          850: '#07090e',
          800: '#0a0d14',
          700: '#111622',
        }
      },
      fontFamily: {
        sans: ['Geist', 'Instrument Sans', 'Inter', 'sans-serif'],
        display: ['Instrument Sans', 'sans-serif'],
        headline: ['Satoshi', 'sans-serif'],
        body: ['General Sans', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
        script: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
}