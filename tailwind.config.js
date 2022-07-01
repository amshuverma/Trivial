module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        clash: ["Clash Grotesk"],
        inter: ["Inter"],
      },
      colors: {
        "trivial-yellow": {
          1: "#F6F6F1",
          2: "#E7E0D1",
          3: "#EDDCB3",
          4: "#F8C47C",
          5: "#D19B22",
        },
        "trivial-gray": {
          1: "#ADADA5",
          2: "#8C8C88",
          3: "#666662",
          4: "#262621",
        },
      },
    },
  },
  plugins: [],
};
