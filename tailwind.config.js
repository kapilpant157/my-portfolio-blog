/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            back:'#080b10',
            light: '#3b82f6',
            dark: '#60a5fa',
            500: '#6366f1',
            600: '#4f46e5',
          },
          secondary: {
            light: '#10b981',
            dark: '#34d399',
          },
        },
      },
    },
    plugins: [
      // require('@tailwindcss/typography'),
    ],
  }
  module.exports = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            500: '#6366f1', // Example primary color
            600: '#4f46e5',
          },
        },
      },
    },
  }