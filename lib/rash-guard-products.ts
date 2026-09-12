export const RASH_GUARD_PRODUCT_IDS = [
  'blue-team-rash-guard',
  'white-logo-rash-guard',
] as const;

export type RashGuardProductId = (typeof RASH_GUARD_PRODUCT_IDS)[number];

type RashGuardLandingContent = {
  eyebrow: string;
  headline: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  audience: string;
  designDirection: string;
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
  },
  'white-logo-rash-guard': {
    eyebrow: 'Private Label Rash Guard',
    headline: 'White Pro Club Logo Rash Guard',
    intro: 'A clean short-sleeve Rash Guard platform for clubs and private-label brands that want clear logo placement and a versatile white base.',
    seoTitle: 'Custom White Logo Rash Guard | Private Label Rash Guard OEM',
    seoDescription: 'Custom white logo Rash Guard made with opaque 220gsm ultra-fine Lycra, 85% polyester and 15% spandex, with silicone anti-slip elastic band and OEM support.',
    audience: 'Private-label brands, club programs, distributors and coordinated team orders',
    designDirection: 'Club logos, brand marks, monochrome artwork, custom labels and coordinated packaging',
  },
};

export function isRashGuardLandingProduct(id: string): id is RashGuardProductId {
  return RASH_GUARD_PRODUCT_IDS.includes(id as RashGuardProductId);
}
