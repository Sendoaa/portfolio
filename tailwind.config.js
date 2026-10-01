/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#020617', // slate-950
          card: 'rgba(15, 23, 42, 0.6)', // slate-900 with opacity
          border: 'rgba(51, 65, 85, 0.4)', // slate-700 with opacity
        },
        primary: {
          DEFAULT: '#3b82f6', // blue-500
          glow: 'rgba(59, 130, 246, 0.5)',
        },
        secondary: {
          DEFAULT: '#8b5cf6', // violet-500
          glow: 'rgba(139, 92, 246, 0.5)',
        },
        accent: {
          DEFAULT: '#10b981', // emerald-500
          glow: 'rgba(16, 185, 129, 0.5)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
