/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        myInner: "inset 0 -2px 4px 0 rgb(0, 0 ,0 , 0.05)",
      },
    },
  },
  plugins: [],
};
