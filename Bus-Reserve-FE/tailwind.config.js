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
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
    },
  },
  plugins: [],
};
