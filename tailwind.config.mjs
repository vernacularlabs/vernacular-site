import { colors } from './src/styles/palettes.mjs';

/** @type {import('tailwindcss').Config} */
// Design tokens for vernacularlabs.ai.
// 2026-10-21 (site-research-restyle): reskinned from the warm cream/terracotta/serif look to the muted
// "serious research" look shared with the recruit booking pages. Colours live in src/styles/palettes.mjs
// (approved green accent); this file holds type, radii and shadows.
const heading = (size, lineHeight, letterSpacing = '-0.01em', fontWeight = '600') => [
  size,
  { lineHeight, letterSpacing, fontWeight },
];

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        heading: ['"Inter"', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Heading scale (Inter semibold). Smaller than the old Fraunces sizes: sans semibold reads larger.
        display: heading('clamp(2rem, 4.4vw, 3.5rem)', '1.12', '-0.015em'),  // home hero
        h1: heading('clamp(1.875rem, 3.6vw, 2.75rem)', '1.15', '-0.015em'), // page titles
        'h1-sm': heading('clamp(1.75rem, 3.2vw, 2.375rem)', '1.2', '-0.015em'), // short status pages
        h2: heading('clamp(1.5rem, 2.6vw, 2rem)', '1.25'),                  // section headings
        h3: heading('clamp(1.25rem, 2vw, 1.5rem)', '1.3'),                  // card / legal section headings
        lead: heading('clamp(1.25rem, 2.2vw, 1.625rem)', '1.4', '-0.01em', '500'), // pull quote
        callout: heading('20px', '1.4'),                                    // "Want to know more?" lines
        numeral: heading('36px', '1', '-0.02em'),                           // 01 / 02 / 03
        wordmark: heading('19px', '1.2'),
      },
      borderRadius: {
        card: '6px',
        control: '4px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(29, 31, 34, 0.06)',
        photo: '0 1px 2px rgba(29, 31, 34, 0.06), 0 12px 32px -20px rgba(29, 31, 34, 0.35)',
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
