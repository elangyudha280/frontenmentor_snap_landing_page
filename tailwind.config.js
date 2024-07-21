/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom':{
          'almost-white': 'hsl(0, 0%, 98%)',
          'medium-gray': 'hsl(0, 0%, 41%)',
          'almost-black':' hsl(0, 0%, 8%)'
        }
      },
      transitionTimingFunction: {
        'show-sidebar': 'cubic-bezier(.55,-0.52,.31,1.67)',
      }
    },
  },
  plugins: [],
};
