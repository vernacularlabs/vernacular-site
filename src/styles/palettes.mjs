// Site colour palettes. The muted "serious research" look shared with the recruit booking pages
// (recruit src/recruit/static/tokens.css). Blue, red and purple are avoided (they read as party
// colours); red is used only for form errors.
//
// Colour NAMES are historical (cream, terracotta, ...) and kept so no page markup had to be
// renamed; the comments give each role. Pick the accent variant at build time with
// SITE_PALETTE=green|graphite (default green). Preview only: drop the unused variant once chosen.

export const neutrals = {
  cream: '#F4F4F3',         // page background: neutral light gray
  paper: '#FFFFFF',         // raised surfaces: cards, header, footer, forms
  ink: '#1D1F22',           // headings, strong text, dark CTA panel
  coal: '#2C2F33',          // body copy
  ash: '#5C6066',           // secondary text, eyebrows
  fog: '#B4B6B9',           // decorative underlines
  line: '#DCDCDA',          // hairlines: card edges, header/footer rules
  'line-strong': '#8A8D91', // form-control borders (>= 3:1 on white and page bg)
  error: '#9B2226',         // form errors only
};

export const accents = {
  // B (recommended): deep institutional green.
  green: {
    terracotta: '#2E5E4B',  // the accent: links, primary button, focus ring, header rule
    clay: '#4F7A68',        // lighter accent
    ember: '#234A3B',       // accent hover / pressed
    mist: '#A8D5BF',        // accent text on the dark (ink) panel
  },
  // A: graphite, near-black accent.
  graphite: {
    terracotta: '#2A2D31',
    clay: '#5C6066',
    ember: '#000000',
    mist: '#D9DBDD',
  },
};

export const DEFAULT_PALETTE = 'green';

export function palette(name = process.env.SITE_PALETTE || DEFAULT_PALETTE) {
  const accent = accents[name];
  if (!accent) throw new Error(`Unknown SITE_PALETTE "${name}" (expected ${Object.keys(accents).join(' or ')})`);
  return { ...neutrals, ...accent };
}
