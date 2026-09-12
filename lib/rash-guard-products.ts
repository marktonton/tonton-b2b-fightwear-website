export const RASH_GUARD_PRODUCT_IDS = [
  'blue-team-rash-guard',
  'white-logo-rash-guard',
  'samurai-graphic-rash-guard',
] as const;

export type RashGuardProductId = (typeof RASH_GUARD_PRODUCT_IDS)[number];

type ProductSpec = { value: string; label: string };

type RashGuardLandingContent = {
  eyebrow: string;
  headline: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  audience: string;
  designDirection: string;
  material: string;
  color: string;
  specs: [ProductSpec, ProductSpec, ProductSpec];
  features: string[];
};

export const RASH_GUARD_LANDING_CONTENT: Record<RashGuardProductId, RashGuardLandingContent> = {
  'blue-team-rash-guard': {
    eyebrow: 'Custom Team Rash Guard',
    headline: 'Blue Elite Team Rash Guard',
    intro: 'A premium short-sleeve Rash Guard developed for BJJ academies, MMA gyms and fight teams that need a consistent blue team identity.',
    seoTitle: 'Custom Blue Team Rash Guard | 220gsm Lycra BJJ Rash Guard',
    seoDescription: 'Custom blue team Rash Guard made with 220gsm ultra-fine Lycra, 85% polyester and 15% spandex, plus a silicone anti-slip elastic band for BJJ and MMA teams.',
    audience: 'BJJ academies, MMA gyms, grappling teams and competition programs',
    designDirection: 'Team colors, academy logos, sponsor marks, athlete names and coordinated size runs',
    material: '220gsm ultra-fine Lycra; 85% polyester, 15% spandex',
    color: 'Blue',
    specs: [
      { value: '220gsm', label: 'Ultra-Fine Lycra' },
      { value: '85 / 15', label: 'Polyester / Spandex' },
      { value: 'Opaque', label: 'High-Stretch Coverage' },
    ],
    features: ['Soft hand feel with excellent elasticity', 'Silicone anti-slip elastic band at the lower hem', 'Full-sublimation artwork and custom logo support', 'OEM / ODM development for brands, gyms and teams'],
  },
  'white-logo-rash-guard': {
    eyebrow: 'Private Label Rash Guard',
    headline: 'White Pro Club Logo Rash Guard',
    intro: 'A clean short-sleeve Rash Guard platform for clubs and private-label brands that want clear logo placement and a versatile white base.',
    seoTitle: 'Custom White Logo Rash Guard | Private Label Rash Guard OEM',
    seoDescription: 'Custom white logo Rash Guard made with opaque 220gsm ultra-fine Lycra, 85% polyester and 15% spandex, with silicone anti-slip elastic band and OEM support.',
    audience: 'Private-label brands, club programs, distributors and coordinated team orders',
    designDirection: 'Club logos, brand marks, monochrome artwork, custom labels and coordinated packaging',
    material: '220gsm ultra-fine Lycra; 85% polyester, 15% spandex',
    color: 'White',
    specs: [
      { value: '220gsm', label: 'Ultra-Fine Lycra' },
      { value: '85 / 15', label: 'Polyester / Spandex' },
      { value: 'Opaque', label: 'High-Stretch Coverage' },
    ],
    features: ['Soft hand feel with excellent elasticity', 'Silicone anti-slip elastic band at the lower hem', 'Full-sublimation artwork and custom logo support', 'OEM / ODM development for brands, gyms and teams'],
  },
  'samurai-graphic-rash-guard': {
    eyebrow: 'Custom Long-Sleeve Rash Guard',
    headline: 'Samurai 220gsm Graphic Rash Guard',
    intro: 'A black-and-gold long-sleeve Rash Guard developed with a soft, high-stretch 220gsm ultra-fine Lycra for opaque coverage in BJJ, MMA and grappling training.',
    seoTitle: 'Custom Samurai Rash Guard | 220gsm Lycra BJJ Rash Guard',
    seoDescription: 'Custom black-and-gold Samurai Rash Guard made with soft 220gsm ultra-fine Lycra for excellent elasticity and fully opaque coverage. OEM artwork and team customization available.',
    audience: 'BJJ academies, MMA teams, grappling clubs, fightwear brands and private-label collections',
    designDirection: 'Black-and-gold all-over sleeve artwork, chest branding, back-neck logo and coordinated team graphics',
    material: '220gsm ultra-fine Lycra',
    color: 'Black and gold',
    specs: [
      { value: '220gsm', label: 'Ultra-Fine Lycra' },
      { value: 'Soft Touch', label: 'Premium Hand Feel' },
      { value: 'Opaque', label: 'Full-Stretch Coverage' },
    ],
    features: ['Excellent elasticity for close-fit movement', 'Fully opaque coverage under stretch', 'Long-sleeve raglan panel construction', 'Custom sublimated graphics and logo placement'],
  },
};

export function isRashGuardLandingProduct(id: string): id is RashGuardProductId {
  return RASH_GUARD_PRODUCT_IDS.includes(id as RashGuardProductId);
}
