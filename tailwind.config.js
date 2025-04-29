/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        border: "var(--border)",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
  ],
};



// ``````javascript
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Adjust paths as needed
  theme: {
    extend: {},
  },
  plugins: [],
};
// ``````javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};