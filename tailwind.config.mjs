/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Warm earth palette
        cream: '#FAF7F2',
        paper: '#F5F1EA',
        ink: '#1B1816',
        coal: '#2A2622',
        ash: '#6B655E',
        fog: '#B8B1A6',
        terracotta: '#B54F2E',
        clay: '#C86A4A',
        ember: '#8E3B22',
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        content: '1120px',
        prose: '68ch',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
