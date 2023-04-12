/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {'mytheme': {
        primary: "#F69797",
        "primary-focus":"#D38484",
        secondary: "#F9F9F9",
        "secondary-focus":"#F4DEDE",
        accent: "#FCECEC",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      }},
      'light',
    ]
}
};