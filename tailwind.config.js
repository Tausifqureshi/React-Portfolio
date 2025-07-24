/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};





// WhatsApp linke hrf
       // href="https://wa.me/918429097693?text=Hi%20Tausif%2C%20I%20saw%20your%20portfolio!"
          // target="_blank"
          // rel="noopener noreferrer"
          // className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-gray-700 dark:text-gray-300 hover:text-green-600"




