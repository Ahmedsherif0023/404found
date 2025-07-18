/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/routes/**/*.{js,ts,jsx,tsx}",
    "./app/root.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "text-xl",
    "text-2xl",
    "text-3xl",
    "text-4xl",
    "text-5xl",
    "text-6xl",
    "font-bold",
    "text-[#1100ff]",
    "text-[#9EFF00]",
  ],
  theme: {
    extend: {},
  }, 
  plugins: [],
};
