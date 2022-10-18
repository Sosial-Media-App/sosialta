/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      fontFamily: {
        'main': ['Montserrat'],
      },
      extend: {
         colors: {
          'main': '#EFEFEF',
          'gray' : '#999999',
          'primary' : '#F66709',
          'secondary' : '#193057',
          'delete' : '#FF3333',
          'line' : '#E8EEFC',
        },
      },
  },
  plugins: [require("daisyui")],
};
