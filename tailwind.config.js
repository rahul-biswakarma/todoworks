/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#ffffff",
        "bg-2": "#f2f2f2",
        "text-1": "#282c3a",
        "text-2": "#bebcc1",
        "light-cyan": "#c8f1f1",
        "icons-color-1": "#727276",
        "icons-color-2": "#0e0e19",
        "border-color": "#f0f0f0",

        "dark-bg-1": "#141414",
        "dark-bg-2": "#181818",
        "dark-card-bg": "#1e1e1e",
        "dark-text-1": "#ffffff",
        "dark-text-2": "#757575",
        "dark-light-cyan": "#c8f1f1",
        "dark-icon-color-1": "#727276",
        "dark-icon-color-2": "#0e0e19",
        "dark-border-color": "#212121",
      },
      backgroundImage: {
        "cactus-pattern": "url('/src/assets/bg-cactus.svg')",
        ballon: "url('/src/assets/ballon.svg')",
        "dark-cactus-pattern": "url('/src/assets/dark-bg-cactus.svg')",
        "dark-ballon": "url('/src/assets/dark-ballon.svg')",
      },
    },
    spacing: {
      "d-pad": "1.5rem",
      "main-pad": "1rem",
      "nav-pad": "1rem 2rem",
    },
  },
  plugins: [],
};
