/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#FF4D00",
        "custom-green": "#00AD3B",
        "custom-gray": "#EBE9E9",
      },
      backgroundImage: {
        "custom-bg-seach": "url('/src/assets/search.svg')",
      },
    },
  },
  plugins: [],
};
