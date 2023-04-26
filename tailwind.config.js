/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        cyanLight: 'hsl(180, 66%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        red: 'hsl(0, 87%, 67%)',
        strongCyan: 'hsl(171, 66%, 44%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%) ',
      },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif'],
        alata: ['var(--font-alata)'],
      },
    },
  },
  plugins: [],
};
