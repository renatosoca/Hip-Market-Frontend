/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Eczar': ['Eczar', 'sans-serif'],
        'Jakarta': ['Jakarta', 'sans-serif'],
      },
      keyframes: {
        'fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
      },
    },
    screens: {
      '1xs': '300px',
      '2xs': '400px',
      '1cs': '500px',
      '2cs': '600px',
      '1sm': '650px',
      '2sm': '700px',
      '1md': '750px',
      '2md': '800px',
      '1lg': '900px',
      '2lg': '1024px',
      '1xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
