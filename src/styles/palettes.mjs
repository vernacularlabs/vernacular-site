// Site colours: the muted "serious research" look shared with the recruit booking pages
// (recruit src/recruit/static/tokens.css), approved by Yair 2026-10-21. Blue, red and purple are
// avoided (they read as party colours); the one accent is a deep green; red is for form errors only.
//
// Colour NAMES are historical (cream, terracotta, ...) and kept so no page markup had to be
// renamed; the comments give each role.

export const colors = {
  cream: '#F4F4F3',         // page background: neutral light gray
  paper: '#FFFFFF',         // raised surfaces: cards, header, footer, forms
  ink: '#1D1F22',           // headings, strong text, dark CTA panel
  coal: '#2C2F33',          // body copy
  ash: '#5C6066',           // secondary text, eyebrows
  fog: '#B4B6B9',           // decorative underlines
  line: '#DCDCDA',          // hairlines: card edges, header/footer rules
  'line-strong': '#8A8D91', // form-control borders (>= 3:1 on white and page bg)
  error: '#9B2226',         // form errors only
  terracotta: '#2E5E4B',    // the accent (deep green): links, primary button, focus ring, header rule
  clay: '#4F7A68',          // lighter accent
  ember: '#234A3B',         // accent hover / pressed
  mist: '#A8D5BF',          // accent text on the dark (ink) panel
};
