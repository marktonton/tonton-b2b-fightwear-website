export type ResourceSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ResourcePage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  answer: string;
  updated: string;
  table: Array<[string, string]>;
  sections: ResourceSection[];
  relatedProduct: { label: string; href: string };
};

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    slug: 'rash-guard-fabric-construction',
    title: 'Rash Guard Fabric & Construction Guide',
    description: 'A buyer guide to rash guard fabric weight, composition, opacity, stretch, sublimation and silicone anti-slip hems.',
    eyebrow: 'RASH GUARD BUYER GUIDE',
    answer: 'A dependable custom Rash Guard specification connects fabric weight, composition, opacity, stretch recovery, seam construction and hem control. Selected TONTON styles use 220gsm ultra-fine Lycra; the Blue Team and White Pro Club examples use 85% polyester and 15% spandex with a silicone anti-slip elastic band.',
    updated: '2026-09-14',
    table: [
      ['Example fabric weight', '220gsm ultra-fine Lycra'],
      ['Verified composition', '85% polyester / 15% spandex on selected styles'],
      ['Coverage direction', 'Opaque under stretch; reconfirmed on the approved sample'],
      ['Decoration', 'Sublimation-ready panel artwork'],
      ['Hem option', 'Silicone anti-slip elastic band'],
      ['Typical use', 'BJJ, MMA, grappling and team training'],
    ],
    sections: [
      { heading: 'Why fabric weight and opacity should be reviewed together', paragraphs: ['Fabric weight alone does not confirm how a garment performs when stretched. Buyers should review weight, hand feel, recovery and opacity on the same approved sample, under the intended fit direction.'] },
      { heading: 'What the polyester-spandex blend contributes', paragraphs: ['On the verified 85/15 styles, polyester provides a smooth surface suited to sublimated graphics, while spandex provides the stretch required for a close performance fit.'] },
      { heading: 'Construction details worth specifying', bullets: ['Sleeve length and raglan panel direction', 'Seam placement and stretch compatibility', 'Lower-hem grip requirement', 'Logo, sponsor mark and panel-artwork positions', 'Size range, fit direction, private labels and packaging'] },
    ],
    relatedProduct: { label: 'View the Blue Team 220gsm Rash Guard', href: '/products/blue-team-rash-guard' },
  },
  {
    slug: 'high-split-grappling-shorts-specifications',
    title: 'High-Split Grappling Shorts Specification Guide',
    description: 'How to specify 2-in-1 grappling shorts with an ultra-high split, four-way stretch shell and supportive compression liner.',
    eyebrow: 'GRAPPLING SHORTS BUYER GUIDE',
    answer: 'A high-split 2-in-1 grappling short should balance unrestricted leg clearance with secure inner-layer coverage. TONTON’s current sample combines a breathable quick-dry four-way stretch shell, ultra-high gladiator split and a soft 250gsm milk-silk compression liner.',
    updated: '2026-09-14',
    table: [
      ['Silhouette', 'Athletic 2-in-1 construction'],
      ['Outer layer', 'Breathable, quick-dry four-way stretch'],
      ['Inner layer', '250gsm milk-silk compression liner'],
      ['Side cut', 'Ultra-high split, gladiator style'],
      ['Waist control', 'Drawstring plus anti-slip silicone grip strip'],
      ['Finishing', 'Reinforced stitching and tagless printed label'],
    ],
    sections: [
      { heading: 'Mobility without losing coverage', paragraphs: ['The outer split releases the thigh for high kicks, shots, sprawls and wide grappling positions. The fitted liner stays closer to the body to provide support and coverage through those movements.'] },
      { heading: 'What buyers can customize', bullets: ['Inner-liner patterns and artwork', 'Outer-shell logos and sponsor marks', 'Waistband branding and drawstring direction', 'Split height, fit and size range on the approved sample', 'Tagless label and packaging requirements'] },
      { heading: 'Recommended sample checks', paragraphs: ['Review waistband stability, split height, liner coverage, stretch recovery, reinforced seams and graphic placement during sport-specific movement before bulk production is approved.'] },
    ],
    relatedProduct: { label: 'View the High-Split 2-in-1 Shorts', href: '/products/high-split-grappling-shorts' },
  },
  {
    slug: 'custom-fightwear-sampling-moq',
    title: 'Custom Fightwear Sampling & MOQ Guide',
    description: 'A practical guide to preparing artwork, specifications, samples and quantity information for a custom fightwear project.',
    eyebrow: 'OEM / ODM PROJECT GUIDE',
    answer: 'Start with the product type, quantity, intended use, size range, artwork status and destination market. Selected custom projects can start from a 10 PCS MOQ, while sample and production timing is confirmed after the brief, material and construction requirements are reviewed.',
    updated: '2026-09-14',
    table: [
      ['Starting information', 'Product, quantity, use, sizes, artwork and destination'],
      ['Selected project MOQ', 'From 10 PCS, subject to product and specification confirmation'],
      ['Mockup', 'Artwork, color and logo placement review'],
      ['Sample review', 'Fit, material, construction, branding and workmanship'],
      ['Bulk approval', 'Begins against the approved sample and specification'],
      ['Schedule', 'Confirmed for the specific project after review'],
    ],
    sections: [
      { heading: 'What to prepare before requesting a quote', bullets: ['Product type and estimated quantity', 'Target users and intended sport', 'Required sizes and fit direction', 'Vector logo or available artwork', 'Reference product and construction priorities', 'Destination country and preferred contact method'] },
      { heading: 'Why MOQ and timing are project-specific', paragraphs: ['Materials, printing method, construction, size assortment, artwork readiness and packaging can change the production route. A supplier should confirm the schedule and applicable MOQ against the actual brief instead of treating one number as universal.'] },
      { heading: 'What the approved sample controls', paragraphs: ['The approved sample is the practical reference for fit, color direction, material, artwork placement, seam construction, labels and other confirmed details before bulk work begins.'] },
    ],
    relatedProduct: { label: 'Build a structured project brief', href: '/project-builder' },
  },
];

export function getResource(slug: string) {
  return RESOURCE_PAGES.find((resource) => resource.slug === slug);
}
