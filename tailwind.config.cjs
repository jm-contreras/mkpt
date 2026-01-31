module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        sage: {
          DEFAULT: '#7C9885',
          light: '#A8B9AD',
          dark: '#5A6F5F',
        },
        clay: {
          DEFAULT: '#D4876C',
        },
        // Neutral colors
        cream: '#FAF8F5',
        stone: '#F3EFE9',
        charcoal: '#2D2D2D',
        slate: {
          DEFAULT: '#6B6B6B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
    }
  },
  plugins: []
};
