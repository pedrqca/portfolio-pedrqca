/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0F19',       // Slate escuro profundo
          card: '#161B26',     // Slate intermediário para cards
          border: '#242C3D',   // Bordas sutis
        },
        brand: {
          purple: '#8B5CF6',   // Roxo principal
          hover: '#7C3AED',    // Roxo hover
          light: '#DDD6FE',   // Roxo claro para destaques de texto
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}