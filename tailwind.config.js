/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': {
          'soft': '#f2f2f2',
          'lightgray': "#f7f7f7",
          'nav': "#1a1a1a",
        },
        'typography': {
          'soft': '#f2f2f2',
          'dark': '#000000',
        }
      },
      fontFamily:{
        'primary': ['Poppins']
      },
      boxShadow: {
        'primary': '0px 0px 0px 1px rgba(0,0,0,0.06), 0px 1px 1px -0.5px rgba(0,0,0,0.06), 0px 3px 3px -1.5px rgba(0,0,0,0.06), 0px 1px 1px -3px rgba(0,0,0,0.06), 0px 6px 6px -6px rgba(0,0,0,0.06), 0px 12px 12px -12px rgba(0,0,0,0.06)'
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      animation: {
        'bounce-slow': 'bounce-slow 1s linear infinite',
        'grow-up': 'grow-up .8s ease-in-out',

      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { 
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
           },
           '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        'grow-up': {
          '0%': { 
            transform: 'scale(1)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
           },
           '50%': {
            transform: 'scale(1.05)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
          '100%': {
            transform: 'scale(1)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
        }
      }
    },
  },
  plugins: [],
}

