/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "main-blue": "#6D95FC",
      "text-white": "#fff",
    },
  },
  plugins: [require("daisyui")],
};
