/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
         'auto-fit-200': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      colors: {
        premium: {
          black: '#0a0a0a',
          dark: '#121212',
          gray: '#1e1e1e',
          accent: '#6366f1', // Indigo 500
          purple: '#8b5cf6', // Violet 500
        }
      }
    },
  },
  plugins: [],
}

