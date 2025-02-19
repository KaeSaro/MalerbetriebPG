/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
    
      xs: '420px',
      custom: '1200px',
      sm: '640px',
      md: '850px',
      lg: '1064px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border: 'var(--border)',
      },
      fontFamily: {
        fira: ['var(--font-fira)', 'Fira', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
      

        arial: ['Arial', 'sans-serif'],
        'arial-extended': ['Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
