/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#FF4D00",
        "custom-green": "#00AD3B",
        "custom-gray": "#EBE9E9",
        "custom-darkgray": "#929292",
        "custom-lightgray": "#F5F5F5",
        "custom-blue": "#0066FF",
      },
      backgroundImage: {
        "custom-bg-seach": "url('/src/assets/search.svg')",
        "custom-bg-heroImage": "url('/src/assets/heroImage.jpg')",
        "custom-bg-vacant": "url('/src/assets/available-bus-seat.svg')",
        "custom-bg-reserved": "url('/src/assets/booked-bus-seat.svg')",
        "custom-bg-selected": "url('/src/assets/selected-bus-seat.svg')",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1750px",
      },
    },
  },
  plugins: [],
};
