/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {'light': {
        "primary": "#F69797",
        "primary-focus": "#EFEFEF",
        "primary-content": "#FCECEC",
        "secondary": "#FFFFFF",
        "secondary-focus": "#FFFFFF",
        "secondary-content": "#FFFFFF",
        "accent": "#FFFFFF",
        "accent-focus": "#FFFFFF",
        "accent-content": "#FFFFFF",
        "neutral": "#FFFFFF",
        "neutral-focus": "#FFFFFF",
        "neutral-content": "#FFFFFF",
        "base-100": "#FFFFFF",
        "base-200": "#FFFFFF",
        "base-300": "#FFFFFF",
        "base-content": "#FFFFFF",
        "info": "#FFFFFF",
        "success": "#FFFFFF",
        "warning": "#FFFFFF",
        "error": "#FFFFFF"
      }},
      'light',
    ]
}
};