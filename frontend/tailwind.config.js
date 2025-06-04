/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          100: '#ffe8e5',
          200: '#ffc5bd',
          300: '#ff9e92',
          400: '#ff7f69',
          500: '#ff6f61', // Main coral
          600: '#e55a4d',
          700: '#cc453a',
          800: '#b23128',
          900: '#991e17',
        },
        sherpa: {
          orange: '#f97316',
          red: '#dc2626',
          dark: '#1e293b',
          gray: '#334155',
          light: '#64748b',
        },
        mountain: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        expedition: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'summit': 'summit 4s ease-in-out infinite',
        'trail': 'trail 0.8s ease-out forwards',
        'expedition': 'expedition 6s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'mountain-gradient': 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
        'sherpa-gradient': 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
        'expedition-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      }
    },
  },
  plugins: [],
};