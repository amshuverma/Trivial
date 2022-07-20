module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "trivial-default": "0.46875rem",
      },
      fontSize: {
        "trivial-sm": "0.703125rem",
        "trivial-md": "0.75rem",
        "trivial-lg": "0.84375rem",
        "trivial-xl": "2.34375rem",
        "trivial-emoji-sm": "0.984375rem",
        "trivial-emoji-md": "1.3125rem",
        "trivial-emoji-lg": "3.281rem",
      },
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
          5: "#F5C456",
          6: "#D19B22",
        },
        "trivial-gray": {
          1: "#EEECEC",
          2: "#ADADA5",
          3: "#8C8C88",
          4: "#666662",
          5: "#262621",
        },
        "trivial-white": {
          1: "#FEFEFE",
          2: "#FCFCFA",
        },
      },
      boxShadow: {
        "trivial-inner-1": "inset 0 1px 3px rgb(255 255 255 / 0.3)",
        "trivial-inner-2": "inset 0 1px 4px rgb(255 255 255 / 0.1)",
      },
      dropShadow: {
        "trivial-button": "0 0.5px 0.5px rgb(0 0 0 / 0.35)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
