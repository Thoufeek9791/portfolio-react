/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design System Colors
        bg: {
          primary: '#050508',
          secondary: '#0d0d14',
          card: '#0f0f1a',
          glass: 'rgba(15, 15, 26, 0.6)',
        },
        accent: {
          violet: '#7c3aed',
          purple: '#9333ea',
          indigo: '#4f46e5',
          cyan: '#06b6d4',
          pink: '#ec4899',
          glow: 'rgba(124, 58, 237, 0.4)',
        },
        text: {
          primary: '#f1f0ff',
          secondary: '#a8a4c8',
          muted: '#6b6785',
        },
        border: {
          subtle: 'rgba(124, 58, 237, 0.15)',
          glow: 'rgba(124, 58, 237, 0.4)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124, 58, 237, 0.25), transparent)',
        'card-gradient': 'linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(6, 182, 212, 0.05))',
        'glow-violet': 'radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'text-shimmer': 'textShimmer 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'aurora': 'aurora 15s ease infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        textShimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        aurora: {
          '0%': { backgroundPosition: '0% 50%', transform: 'rotate(0deg) scale(1)' },
          '33%': { backgroundPosition: '100% 50%', transform: 'rotate(120deg) scale(1.1)' },
          '66%': { backgroundPosition: '50% 100%', transform: 'rotate(240deg) scale(0.9)' },
          '100%': { backgroundPosition: '0% 50%', transform: 'rotate(360deg) scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(124, 58, 237, 0.2)',
        'glow-md': '0 0 40px rgba(124, 58, 237, 0.3)',
        'glow-lg': '0 0 60px rgba(124, 58, 237, 0.4)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.3)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4), 0 1px 0 rgba(255,255,255,0.05) inset',
      },
    },
  },
  plugins: [],
}
