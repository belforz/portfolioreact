module.exports = {
  plugins: {
    '@tailwindcss/postcss': {
      content: ["./app/index.html", "./app/src/**/*.{js,ts,jsx,tsx}"],
      darkMode: 'class'
    },
    autoprefixer: {},
  },
};
