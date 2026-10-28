export const HIGH_SPLIT_GRAPPLING_SHORTS_ID = 'high-split-grappling-shorts' as const;

export const HIGH_SPLIT_GRAPPLING_SHORTS_CONTENT = {
  eyebrow: 'Custom Grappling Shorts Manufacturer',
  headline: 'High-Split 2-in-1 Custom Grappling Shorts',
  intro: 'Gladiator-inspired 2-in-1 fight shorts with an ultra-high split, four-way-stretch shell and supportive inner liner for unrestricted combat movement.',
  seoTitle: 'Custom Grappling Shorts Manufacturer | High-Split 2-in-1 Shorts',
  seoDescription: 'Custom high-split grappling shorts with a four-way stretch shell, 250gsm milk-silk liner, anti-slip waistband and reinforced stitching for combat sports brands.',
  material: 'Four-way stretch outer shell; 250gsm milk-silk inner liner',
  color: 'Black outer shell with customizable inner layer',
} as const;

export const HIGH_SPLIT_GRAPPLING_SHORTS_FAQS = [
  { question: 'What makes high-split grappling shorts different?', answer: 'The deep side opening gives the leg more clearance for high kicks, guard movement, scrambling and wide grappling positions without the outer shell pulling across the thigh.' },
  { question: 'What fabric is used for these 2-in-1 grappling shorts?', answer: 'The outer shell uses a reinforced lightweight four-way stretch fabric. The fitted inner layer uses 250gsm milk-silk fabric for substantial coverage and flexible support.' },
  { question: 'Can the inner layer use a custom printed pattern?', answer: 'Yes. The inner compression layer can carry custom colors, patterns, team graphics and brand artwork, subject to artwork and sample approval.' },
  { question: 'Are these shorts suitable for BJJ and MMA training?', answer: 'Yes. The high split, stretch shell and supportive inner layer are developed for kicking, grappling, MMA drills and other high-mobility fight training.' },
  { question: 'How does the waistband stay secure during training?', answer: 'The adjustable waistband combines a drawstring with an anti-slip silicone grip strip to help keep the shorts stable during striking, wrestling and grappling movement.' },
  { question: 'Are drying and breathability ratings available for this fabric?', answer: 'No measured drying-rate or air-permeability results are published for this reference. Request the selected fabric composition, GSM and relevant tests before specifying numerical performance requirements.' },
  { question: 'Does this style use a sewn-in clothing label?', answer: 'The shorts can use a tagless printed label to reduce irritation. Brand, size and care information can be reviewed during product development.' },
  { question: 'Which parts of the grappling shorts can be customized?', answer: 'Buyers can review outer-shell colors, logos, waistband branding, inner-layer artwork, labels and packaging during product development.' },
  { question: 'Can I approve a sample before bulk production?', answer: 'Yes. A sample can be reviewed for fit, split height, movement, materials, construction and artwork placement before bulk production begins.' },
  { question: 'What should I send for a custom grappling shorts quotation?', answer: 'Send your target quantity, size range, logo or artwork files, preferred colors, intended use and any labeling or packaging requirements.' },
] as const;

export function isHighSplitGrapplingShorts(id: string) {
  return id === HIGH_SPLIT_GRAPPLING_SHORTS_ID;
}

export const HIGH_SPLIT_SHORTS_VIDEO = {
  id: 'high-split-shorts-video',
  title: 'Custom 2-in-1 High-Split Grappling Shorts | Product Overview',
  description: 'A 15-second promotional visualization showing the inner liner, high-split silhouette, training movement and private-label development direction for custom 2-in-1 MMA and BJJ grappling shorts. Final construction and branding are confirmed on the approved sample.',
  src: '/assets/products/grappling-shorts-products/high-split-2-in-1/video/high-split-2-in-1-grappling-shorts-v1.mp4',
  poster: '/assets/products/grappling-shorts-products/high-split-2-in-1/video/high-split-2-in-1-grappling-shorts-v1.webp',
  uploadDate: '2026-10-15T10:47:21+08:00',
  duration: 'PT15.084S',
} as const;
