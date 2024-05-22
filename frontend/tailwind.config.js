/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-red": "#FF3939",
        "primary-gray": "#979797"
      },
      screens: {
        "mobile": "340px",
        "tablet": "760px",
        "laptop": "1074px",
        "desktop": "1300px",
        "large-screens": "1600px"
      }
    },
  },
  plugins: [],
};
