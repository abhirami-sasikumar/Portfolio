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
        void: {
          black: '#000000',
          950: '#030303',
          900: '#080808',
          850: '#101010',
          800: '#181818',
          750: '#1f1f1f',
          700: '#262626',
          600: '#383838',
          500: '#525252',
        },
        silver: {
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        tech: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'starlight': '0 0 20px rgba(255, 255, 255, 0.4)',
        'starlight-lg': '0 0 50px rgba(255, 255, 255, 0.65)',
        'little-star': '0 0 16px 4px rgba(255, 255, 255, 0.95), 0 0 40px 10px rgba(255, 255, 255, 0.35)',
        'card-halo': '0 0 35px -10px rgba(255, 255, 255, 0.08)',
      }
    },
  },
  plugins: [],
}
