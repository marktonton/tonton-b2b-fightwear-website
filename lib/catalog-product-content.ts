export const CATALOG_PRODUCT_IDS = [
  'olive-basic-rash-guard',
  'fuji-art-rash-guard',
  'black-gold-rash-guard',
  'black-white-mma-kit',
] as const;

export type CatalogProductId = (typeof CATALOG_PRODUCT_IDS)[number];

type CatalogProductContent = {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  headline: string;
  intro: string;
  buyerQuestion: string;
  buyerAnswer: string;
  audience: string;
  categoryLabel: string;
  categoryHref: string;
  builderProduct: string;
  material: string;
  color: string;
  specs: [string, string][];
  verifiedFeatures: string[];
  specificationRows: [string, string][];
  decisionCards: { title: string; copy: string }[];
  customization: { title: string; copy: string }[];
  faqs: { question: string; answer: string }[];
  relatedGuides: string[];
};

export const CATALOG_PRODUCT_CONTENT: Record<CatalogProductId, CatalogProductContent> = {
  'olive-basic-rash-guard': {
    seoTitle: 'Custom Olive Short-Sleeve Rash Guard for BJJ Teams | TONTON',
    seoDescription: 'Develop a clean olive short-sleeve custom Rash Guard for BJJ academies, MMA gyms and grappling teams. Review fit, seams, fabric, logos, MOQ and sample approval with TONTON.',
    eyebrow: 'ACADEMY UNIFORM RASH GUARD',
    headline: 'Custom Olive Short-Sleeve Team Rash Guard',
    intro: 'A restrained solid-color Rash Guard direction for academies and gyms that want a repeatable team uniform, clear chest branding and fewer artwork variables than a full-graphic design.',
    buyerQuestion: 'Who is this olive team Rash Guard best suited for?',
    buyerAnswer: 'This style is best suited to BJJ academies, MMA gyms and grappling teams that need a clean short-sleeve uniform with a close athletic fit, simple logo positions and an easy-to-repeat solid-color direction. Fabric composition, GSM, opacity and seam type are confirmed by swatch and sample rather than inferred from the photograph.',
    audience: 'BJJ academies, MMA gyms, grappling clubs and coordinated coaching teams',
    categoryLabel: 'Custom Rash Guards',
    categoryHref: '/customization/sublimated-rash-guards',
    builderProduct: 'Rash Guard',
    material: 'Stretch performance knit; composition and GSM confirmed during development',
    color: 'Olive green with contrast seam direction',
    specs: [['Fit', 'Close athletic'], ['Sleeve', 'Short sleeve'], ['MOQ', 'From 10 pieces']],
    verifiedFeatures: [
      'Short-sleeve close-fit silhouette visible in the product reference',
      'Olive solid-color body with contrasting seam lines',
      'Raglan-style shoulder and underarm panel direction',
      'Chest and shoulder logo positions for team identity',
    ],
    specificationRows: [
      ['Recommended buyer', 'Academies and gyms building a repeatable team uniform'],
      ['Visible silhouette', 'Short-sleeve, close athletic fit with raglan-style panel lines'],
      ['Color direction', 'Olive body with contrast seam treatment'],
      ['Fabric direction', 'Stretch performance knit; composition, GSM and opacity require confirmation'],
      ['Construction checks', 'Seam type, recovery, underarm comfort and hem stability'],
      ['Decoration', 'Custom chest, shoulder and back branding; final method depends on approved artwork'],
      ['MOQ', 'Custom projects can start from 10 pieces'],
    ],
    decisionCards: [
      { title: 'Simple team identity', copy: 'A controlled solid-color base keeps the academy logo visible and makes repeat orders easier to coordinate.' },
      { title: 'Short-sleeve mobility', copy: 'The compact sleeve direction suits warm training rooms and athletes who prefer less arm coverage.' },
      { title: 'Close athletic fit', copy: 'The reference shows a fitted torso and sleeve. Final chest, waist and sleeve measurements are approved on the sample.' },
      { title: 'Panel-led construction', copy: 'Shoulder, underarm and side panel lines create the starting point for movement and color placement.' },
      { title: 'Fabric values stay verifiable', copy: 'Composition, GSM, stretch recovery and opacity are treated as approval points until a fabric is selected.' },
      { title: 'Built for repeat ordering', copy: 'Documented colors, logo positions, labels and size grading create a clearer reorder baseline for team programs.' },
    ],
    customization: [
      { title: 'Team colors', copy: 'Match the olive direction or specify another approved Pantone-based team color.' },
      { title: 'Logo map', copy: 'Place academy, sponsor, athlete-name and rank identifiers on agreed garment panels.' },
      { title: 'Fit and fabric', copy: 'Confirm sleeve length, body measurements, composition, GSM, opacity and stretch recovery.' },
      { title: 'Labels and packing', copy: 'Add private labels, size marks and buyer-specific individual packing requirements.' },
    ],
    faqs: [
      { question: 'Is the fabric composition and GSM confirmed?', answer: 'No. The current product photograph verifies the silhouette, color and visible panel direction. Composition, GSM, stretch recovery and opacity are selected and approved through the fabric swatch and sample.' },
      { question: 'Can the olive color and logos be changed?', answer: 'Yes. Body color, seam color, chest logo, shoulder marks, back artwork and labels can be developed to the approved brand brief.' },
      { question: 'Is this better for teams or full-graphic collections?', answer: 'Its strongest use is a clean academy or gym uniform with controlled branding. Buyers wanting complex all-over artwork should compare the Fuji Art Rash Guard direction.' },
      { question: 'What should be checked on the sample?', answer: 'Check chest and sleeve fit, underarm comfort, seam stretch, opacity, hem movement, color accuracy and logo placement before bulk production.' },
      { question: 'What is the MOQ?', answer: 'Custom projects can start from 10 pieces. The final order plan depends on sizes, colors, artwork, labels and packing.' },
    ],
    relatedGuides: ['rash-guard-fabric-construction', 'flatlock-vs-overlock-rash-guard-seams', 'custom-fightwear-sampling-moq'],
  },
  'fuji-art-rash-guard': {
    seoTitle: 'Custom Full-Sleeve Graphic Rash Guard Manufacturer | TONTON',
    seoDescription: 'Create a long-sleeve custom Rash Guard with complex sleeve artwork, contrast panels and private-label branding for BJJ, No-Gi and MMA collections. MOQ from 10 pieces.',
    eyebrow: 'ART-LED LONG-SLEEVE RASH GUARD',
    headline: 'Fuji Art Full-Sleeve Graphic Rash Guard',
    intro: 'A long-sleeve product direction for fightwear brands and academies that need large-format sleeve graphics, controlled body contrast and multiple visible branding zones.',
    buyerQuestion: 'When should a buyer choose this graphic Rash Guard direction?',
    buyerAnswer: 'Choose this direction when sleeve artwork is a core part of the collection and the buyer needs a long-sleeve, close-fit base for BJJ No-Gi, grappling or MMA training. The product reference verifies the artwork zones and visible construction; fabric composition, GSM, print color and seam specification remain sample-approval decisions.',
    audience: 'Fightwear brands, BJJ academies and teams developing graphic-led No-Gi collections',
    categoryLabel: 'Custom Rash Guards',
    categoryHref: '/customization/sublimated-rash-guards',
    builderProduct: 'Rash Guard',
    material: 'Stretch performance knit suitable for sublimation; exact specification confirmed during sampling',
    color: 'Black, grey and cream graphic direction',
    specs: [['Coverage', 'Long sleeve'], ['Artwork', 'Full sleeve'], ['MOQ', 'From 10 pieces']],
    verifiedFeatures: [
      'Long-sleeve close-fit silhouette shown in the reference',
      'Large continuous artwork zones across both sleeves',
      'Dark center body with contrasting side-panel direction',
      'Chest, sleeve and upper-body logo positions',
    ],
    specificationRows: [
      ['Recommended buyer', 'Brands and teams using artwork as a primary product differentiator'],
      ['Visible silhouette', 'Long-sleeve close fit with contrast torso and side panels'],
      ['Artwork direction', 'Large-format sleeve graphics with controlled chest branding'],
      ['Fabric direction', 'Sublimation-compatible stretch knit; exact composition and GSM require confirmation'],
      ['Construction checks', 'Sleeve mobility, seam comfort, panel alignment and opacity under stretch'],
      ['Color control', 'Approved artwork file, strike-off or sample used to review printed color'],
      ['MOQ', 'Custom projects can start from 10 pieces'],
    ],
    decisionCards: [
      { title: 'High-impact sleeve art', copy: 'The long sleeves provide a larger continuous canvas than a short-sleeve team uniform.' },
      { title: 'Controlled center body', copy: 'A dark torso keeps the main body visually restrained while the sleeves carry the graphic story.' },
      { title: 'Private-label ready', copy: 'Chest, sleeve, neck and back zones can be organized into a documented logo-placement map.' },
      { title: 'Print alignment matters', copy: 'Panel boundaries and seam crossings should be checked on the mockup and physical sample.' },
      { title: 'Performance still comes first', copy: 'Artwork approval is paired with checks for mobility, stretch recovery, opacity and seam comfort.' },
      { title: 'Collection-friendly direction', copy: 'The artwork system can be adapted across coordinated shorts or alternate colorways after approval.' },
    ],
    customization: [
      { title: 'Sleeve artwork', copy: 'Develop full-sleeve graphics with panel-aware placement and sufficient seam allowances.' },
      { title: 'Body contrast', copy: 'Control the torso, side-panel and underarm colors to preserve clarity and brand hierarchy.' },
      { title: 'Performance specification', copy: 'Approve composition, GSM, stretch, opacity, seam route and sleeve measurements.' },
      { title: 'Private-label system', copy: 'Add neck print, woven or printed labels, size marks and packaging to the buyer brief.' },
    ],
    faqs: [
      { question: 'Is the sleeve artwork sublimated?', answer: 'The page presents a sublimation-compatible graphic direction. The final decoration route, print file, colors and panel alignment are confirmed before bulk production.' },
      { question: 'Is the exact fabric specification confirmed?', answer: 'No. The image supports the visible silhouette and graphic layout, but composition, GSM, opacity and stretch performance require a selected fabric and approved sample.' },
      { question: 'Can the artwork continue onto coordinated shorts?', answer: 'Yes. Approved motifs, colors and logos can be adapted to a shorts brief, but placement and scale are reviewed for the different pattern pieces.' },
      { question: 'What should buyers inspect before production?', answer: 'Review sleeve mobility, print color, seam alignment, logo clarity, opacity, stretch recovery, measurements and wash-test results on the sample.' },
      { question: 'What is the MOQ?', answer: 'Custom projects can start from 10 pieces, subject to the confirmed fabric, artwork, size range and labels.' },
    ],
    relatedGuides: ['prepare-artwork-for-sublimation', 'rash-guard-sublimation-logo-placement', 'fightwear-quality-inspection-checklist'],
  },
  'black-gold-rash-guard': {
    seoTitle: 'Custom Long-Sleeve Team Rash Guard OEM | TONTON',
    seoDescription: 'Develop a clean long-sleeve custom team Rash Guard with color-block panels, clear chest branding and OEM labels for BJJ, grappling and MMA programs. MOQ from 10 pieces.',
    eyebrow: 'CLEAN TEAM LONG-SLEEVE RASH GUARD',
    headline: 'Signature Long-Sleeve Team Rash Guard',
    intro: 'A cleaner long-sleeve alternative to an all-over graphic style, built around a strong team color, contrast side panels and direct chest branding for academies and private-label programs.',
    buyerQuestion: 'How is this long-sleeve team Rash Guard different from the Fuji Art style?',
    buyerAnswer: 'This direction prioritizes a clean team color, direct chest branding and restrained contrast panels, while the Fuji Art style uses the sleeves as a large graphic canvas. It is a practical option for academies and private-label buyers who want visible identity without a complex all-over print.',
    audience: 'BJJ academies, MMA gyms, distributors and private-label teamwear programs',
    categoryLabel: 'Custom Rash Guards',
    categoryHref: '/customization/sublimated-rash-guards',
    builderProduct: 'Rash Guard',
    material: 'Stretch performance knit; final composition and GSM confirmed during sampling',
    color: 'Custom team-color direction; current reference shows red and black',
    specs: [['Coverage', 'Long sleeve'], ['Design', 'Color block'], ['MOQ', 'From 10 pieces']],
    verifiedFeatures: [
      'Long-sleeve close-fit team silhouette',
      'Solid red body with black neckline and side-panel contrast in the current reference',
      'Raglan-style shoulder and sleeve construction direction',
      'Large centered chest branding position',
    ],
    specificationRows: [
      ['Recommended buyer', 'Academies and private-label programs needing a clean long-sleeve uniform'],
      ['Visible silhouette', 'Long-sleeve, close athletic fit'],
      ['Current sample color', 'Red body with black neckline and side-panel contrast'],
      ['Fabric direction', 'Stretch performance knit; exact composition, GSM and opacity require confirmation'],
      ['Branding direction', 'Large centered chest logo with optional sleeve and rear positions'],
      ['Approval priorities', 'Fit, seam comfort, color accuracy, opacity and logo scale'],
      ['MOQ', 'Custom projects can start from 10 pieces'],
    ],
    decisionCards: [
      { title: 'Clean brand hierarchy', copy: 'A strong base color and one dominant chest mark make the identity readable at training distance.' },
      { title: 'Long-sleeve coverage', copy: 'The silhouette provides full-arm coverage for buyers who prefer a long-sleeve team uniform.' },
      { title: 'Color-block flexibility', copy: 'Body, sleeve, neckline and side panels can be coordinated without relying on dense artwork.' },
      { title: 'Team-order clarity', copy: 'A restrained layout helps document consistent logo scale, placements and color references for reorders.' },
      { title: 'Private-label options', copy: 'Buyer labels, neck print, size marks and packaging can be included in the confirmed brief.' },
      { title: 'Evidence-based specification', copy: 'Unverified fabric and performance values remain clearly identified as sample decisions.' },
    ],
    customization: [
      { title: 'Color blocking', copy: 'Set the body, sleeve, neckline, side-panel and seam colors to the approved brand palette.' },
      { title: 'Logo hierarchy', copy: 'Define the main chest mark plus optional sleeve, back-neck, sponsor and athlete identifiers.' },
      { title: 'Fit and construction', copy: 'Confirm sleeve length, torso fit, seam route, hem direction and size grading.' },
      { title: 'Fabric and labeling', copy: 'Approve composition, GSM, opacity, stretch recovery, labels and packing through the sample.' },
    ],
    faqs: [
      { question: 'Can this team Rash Guard be developed in black and gold?', answer: 'Yes. The current product reference is red and black, while body, sleeve, neckline, side-panel and logo colors can be changed to an approved black-and-gold or other team palette.' },
      { question: 'How does this differ from a full-graphic Rash Guard?', answer: 'This direction uses a clean team color and direct logo hierarchy. A full-graphic direction uses more complex artwork across sleeves and body panels.' },
      { question: 'What fabric is used?', answer: 'A stretch performance knit is the development direction. Exact composition, GSM, opacity and stretch recovery are confirmed by the selected fabric and sample.' },
      { question: 'Can we add private labels and sponsor marks?', answer: 'Yes. Chest, sleeve, back and neck positions plus private labels, size marks and packaging can be included in the brief.' },
      { question: 'What is the MOQ?', answer: 'Custom projects can start from 10 pieces, subject to the confirmed specification, artwork and size breakdown.' },
    ],
    relatedGuides: ['rash-guard-fabric-construction', 'flatlock-vs-overlock-rash-guard-seams', 'custom-fightwear-sampling-moq'],
  },
  'black-white-mma-kit': {
    seoTitle: 'Custom MMA Academy Team Kit | Rash Guard and Fight Shorts OEM',
    seoDescription: 'Plan a coordinated custom MMA academy kit with matching Rash Guard and fight-shorts artwork, waist construction, team logos, sizes, MOQ and sample approval from TONTON.',
    eyebrow: 'COORDINATED MMA TEAMWEAR',
    headline: 'Classic Custom MMA Academy Team Kit',
    intro: 'A coordinated ordering direction for academies and fight teams that want the Rash Guard, fight shorts, logos, colors and athlete size breakdown managed as one project rather than separate garments.',
    buyerQuestion: 'What is included in a custom MMA team-kit project?',
    buyerAnswer: 'A team-kit project coordinates the Rash Guard and fight shorts around one approved identity, size plan and production brief. The current main reference focuses on the outer shorts and separate compression layer; the matching Rash Guard specification, fabric, artwork and exact set contents must be written into the buyer brief and approved before production.',
    audience: 'MMA academies, BJJ No-Gi teams, fight clubs and brands ordering coordinated athlete sets',
    categoryLabel: 'Custom BJJ & MMA Shorts',
    categoryHref: '/customization/sublimated-bjj-mma-shorts',
    builderProduct: 'Coordinated Team Kit',
    material: 'Product-specific performance fabrics selected separately for the Rash Guard and fight shorts',
    color: 'Custom coordinated team colors',
    specs: [['Project', '2-piece direction'], ['Sizing', 'Team breakdown'], ['MOQ', 'From 10 sets']],
    verifiedFeatures: [
      'Outer fight-short reference with a broad waistband and front closure direction',
      'Separate compression layer visible beneath the shorts',
      'Front-leg logo zone and clean team-color base',
      'Coordinated Rash Guard and shorts artwork developed through one brief',
    ],
    specificationRows: [
      ['Recommended buyer', 'Academies and teams ordering coordinated athlete sets'],
      ['Project scope', 'Matching Rash Guard and outer fight shorts; exact included pieces confirmed in the brief'],
      ['Visible shorts direction', 'Broad waist, front closure area, short athletic leg and front logo zone'],
      ['Layering note', 'Compression tights in the image are a separate garment unless a liner is specified'],
      ['Material control', 'Rash Guard and shorts fabrics approved separately for their intended functions'],
      ['Team-order control', 'Size breakdown, athlete identifiers, logos, labels and packing documented together'],
      ['MOQ', 'Custom projects can start from 10 coordinated sets'],
    ],
    decisionCards: [
      { title: 'One visual system', copy: 'Colors, logos and artwork are mapped across the top and shorts instead of being developed in isolation.' },
      { title: 'Product-specific materials', copy: 'The Rash Guard and woven shorts use different performance requirements and are approved separately.' },
      { title: 'Clear layering choice', copy: 'Buyers specify outer shorts only, a separate compression tight, or a true built-in 2-in-1 liner.' },
      { title: 'Team size planning', copy: 'The order sheet can capture garment sizes, athlete names, rank colors and piece-by-piece quantities.' },
      { title: 'Single sample checkpoint', copy: 'Fit, artwork continuity, color coordination and branding are reviewed before the team order moves to bulk.' },
      { title: 'Reorder-ready documentation', copy: 'Approved artwork, sizes, labels and packing instructions form a clearer reference for later team replenishment.' },
    ],
    customization: [
      { title: 'Set contents', copy: 'Define the Rash Guard sleeve length, outer shorts, optional compression layer and any additional team pieces.' },
      { title: 'Coordinated artwork', copy: 'Map team colors, logos, sponsor marks, athlete names and rank indicators across both garments.' },
      { title: 'Separate specifications', copy: 'Approve fabric, fit, seams, waistband and decoration values for each garment in the set.' },
      { title: 'Team fulfillment', copy: 'Confirm the mixed-size breakdown, labels, individual packing and reorder reference.' },
    ],
    faqs: [
      { question: 'Does the current image prove that a Rash Guard is included?', answer: 'No. The current main image focuses on the shorts and a separate compression layer. A matching Rash Guard is part of the coordinated project direction only when it is included in the confirmed brief and sample approval.' },
      { question: 'Are the compression tights built into the shorts?', answer: 'Not by default. The visible tights are treated as a separate garment. A built-in liner requires an explicit 2-in-1 construction specification.' },
      { question: 'Can each athlete have a different size or name?', answer: 'Yes. Mixed sizes, athlete names and other approved identifiers can be organized in the team order sheet before production.' },
      { question: 'Can the same artwork be used on the top and shorts?', answer: 'Yes, but the artwork must be adapted to the different pattern pieces, seam positions and print areas of each garment.' },
      { question: 'What is the MOQ?', answer: 'Custom coordinated projects can start from 10 sets. Final requirements depend on the included pieces, artwork, sizes, labels and packing.' },
    ],
    relatedGuides: ['custom-fightwear-sampling-moq', 'prepare-artwork-for-sublimation', 'fightwear-quality-inspection-checklist'],
  },
};

export function isCatalogProduct(id: string): id is CatalogProductId {
  return CATALOG_PRODUCT_IDS.includes(id as CatalogProductId);
}
