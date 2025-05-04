/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%':   { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 1s ease-out forwards',
      },
      colors: {
        accent: '#e4573d',         // Use --g5-color-accent
        muted: '#ababab',          // Use --g5-color-muted
        heading: '#333',           // Use --g5-color-heading
        textMain: '#696969',       // Use --g5-color-text-main
        mainbg: '#ffffff',
        secondbg: '#f4f3ec',
        button: '#0b728f',
        primary:     '#39463C',
        secondary:   '#A3A891',
        accent:      '#ebe9e8',
        accentlight:      '#e9dcca', 
        background:  '#E5DED8',
        'text-dark': '#2D2D2D',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
        primary: ['Libre Baskerville', 'serif'],
      },
    },
  },
  
  plugins: [],
}

