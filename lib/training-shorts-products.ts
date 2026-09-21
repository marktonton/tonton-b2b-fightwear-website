export const TRAINING_SHORTS_PRODUCT_IDS = [
  'custom-logo-shorts',
  'lightweight-quick-dry-training-shorts',
] as const;

export type TrainingShortsProductId = (typeof TRAINING_SHORTS_PRODUCT_IDS)[number];

type LandingContent = {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  headline: string;
  intro: string;
  specs: [string, string][];
  features: string[];
  benefits: { title: string; copy: string }[];
  materialLead: string;
  materialRows: [string, string][];
  customization: { title: string; copy: string }[];
  faqs: { question: string; answer: string }[];
};

export const TRAINING_SHORTS_LANDING_CONTENT: Record<TrainingShortsProductId, LandingContent> = {
  'custom-logo-shorts': {
    seoTitle: 'Custom Competition Training Shorts Manufacturer | TONTON',
    seoDescription: 'Develop custom competition and gym shorts with an elastic waist, clean athletic cut, logo placement and OEM production support. MOQ starts from 10 pieces.',
    eyebrow: 'CUSTOM COMPETITION SHORTS',
    headline: 'Ultimate Custom Competition Shorts',
    intro: 'A clean athletic short for clubs, teams and private-label programs that need an easy-fitting elastic waist, practical movement and visible custom branding.',
    specs: [
      ['MOQ', 'From 10 pieces'],
      ['Waist', 'Elastic waistband'],
      ['Branding', 'Custom logo placement'],
    ],
    features: [
      'Clean athletic silhouette for training and competition programs',
      'Elastic waistband developed for a secure, uncomplicated fit',
      'Custom colors, logo positions and label direction',
      'Sample review before bulk production',
      'OEM and ODM support for brands, clubs, gyms and teams',
    ],
    benefits: [
      { title: 'Clear team identity', copy: 'Front-waist and leg branding give clubs and labels visible positions without crowding the product.' },
      { title: 'Practical fit direction', copy: 'The clean silhouette creates a flexible starting point for training, teamwear and competition-oriented programs.' },
      { title: 'Project-specific materials', copy: 'Fabric weight, stretch, hand feel and drying performance are confirmed against the intended use and approved sample.' },
      { title: 'Controlled artwork', copy: 'Logo scale, colors, labels and placement are organized in a digital mockup before sampling.' },
      { title: 'Low-MOQ development', copy: 'Custom projects can begin from 10 pieces, subject to the selected construction, color and size breakdown.' },
      { title: 'Repeat-order ready', copy: 'Approved specifications and artwork create a clearer reference for future team or collection replenishment.' },
    ],
    materialLead: 'The current sample confirms the silhouette, elastic waist, seam direction and logo-placement possibilities. Exact fabric composition and GSM are selected for the project and confirmed on the approved sample.',
    materialRows: [
      ['Silhouette', 'Clean athletic competition and training short'],
      ['Waistband', 'Elastic waist with customizable branding direction'],
      ['Fabric', 'Project-specific woven performance fabric; composition and GSM confirmed during sampling'],
      ['Construction', 'Panel and seam direction reviewed against movement and intended use'],
      ['Decoration', 'Custom logo placement, colors, labels and approved print method'],
      ['Buying baseline', 'MOQ from 10 pieces with mockup and sample review available'],
    ],
    customization: [
      { title: 'Colors and artwork', copy: 'Apply club colors, logos, sponsor marks and collection graphics to approved printable areas.' },
      { title: 'Waistband direction', copy: 'Review elastic construction, external branding and the preferred internal finish.' },
      { title: 'Length and fit', copy: 'Confirm overall length, leg opening and intended athletic silhouette during product development.' },
      { title: 'Labels and packing', copy: 'Add approved size marks, private labels and project-specific packing requirements.' },
    ],
    faqs: [
      { question: 'What material is used for these competition shorts?', answer: 'The sample establishes the product direction, but the exact fabric composition and GSM are confirmed for the intended activity, price position and approved sample. We do not present one unverified universal material specification.' },
      { question: 'Can the waistband and logo placement be customized?', answer: 'Yes. Waistband branding, leg logos, colors, labels and artwork positions can be reviewed in the digital mockup before sampling.' },
      { question: 'What is the MOQ?', answer: 'Custom projects can start from 10 pieces. The final order structure depends on the selected fabric, construction, colors, artwork and size breakdown.' },
      { question: 'Can I approve a sample before bulk production?', answer: 'Yes. The sample is used to confirm fit, material, waistband, workmanship and branding before bulk production.' },
      { question: 'What should I send for a quote?', answer: 'Send the quantity, target use, size range, logo files, preferred colors, reference images and any requirements for labels or packing.' },
    ],
  },
  'lightweight-quick-dry-training-shorts': {
    seoTitle: 'Lightweight Quick-Dry Custom Training Shorts | TONTON OEM',
    seoDescription: 'Custom lightweight quick-dry training shorts with drawcord waist, soft inner lining, curved hem, double stitching and reflective logo options. MOQ from 10 pieces.',
    eyebrow: 'LIGHTWEIGHT TRAINING SHORTS',
    headline: 'Lightweight Quick-Dry Training Shorts',
    intro: 'A light woven training short with a secure drawcord waist, soft inner lining and curved athletic hem for gym, conditioning, running and team programs.',
    specs: [
      ['MOQ', 'From 10 pieces'],
      ['Fabric', 'Lightweight quick-dry woven'],
      ['Finish', 'Curved hem + double stitching'],
    ],
    features: [
      'Lightweight smooth woven fabric with quick-dry performance',
      'Elastic waistband with an adjustable drawcord',
      'Soft inner lining for added coverage and comfort',
      'Curved athletic hem with reinforced double stitching',
      'Reflective heat-transfer logo option and custom colors',
    ],
    benefits: [
      { title: 'Moves without bulk', copy: 'The lightweight shell and curved hem reduce excess fabric through running, conditioning and gym movement.' },
      { title: 'Secure waist control', copy: 'Elastic construction and an adjustable drawcord let the wearer tune the fit before training.' },
      { title: 'Added coverage', copy: 'A soft built-in lining creates a more comfortable layer beneath the light outer fabric.' },
      { title: 'Quick-dry direction', copy: 'The smooth woven shell is selected to manage moisture and dry faster than a heavy everyday fabric.' },
      { title: 'Reinforced finishing', copy: 'Double-stitched curved hems support repeated movement and give the leg opening a clean athletic shape.' },
      { title: 'Visible branding', copy: 'Reflective heat-transfer logos can add brand recognition and low-light visibility where the artwork allows.' },
    ],
    materialLead: 'The available product images verify the lightweight woven shell, elastic drawcord waist, soft inner lining, curved hem, double stitching and reflective logo direction. Final composition and GSM are confirmed during sampling.',
    materialRows: [
      ['Silhouette', 'Lightweight athletic training short with curved hem'],
      ['Outer fabric', 'Smooth quick-dry woven performance direction'],
      ['Inner construction', 'Soft built-in lining for coverage and comfort'],
      ['Waistband', 'Elastic waistband with adjustable drawcord'],
      ['Stitching', 'Reinforced double stitching at the curved hem'],
      ['Decoration', 'Reflective heat-transfer logo plus custom colors and labels'],
    ],
    customization: [
      { title: 'Fabric and lining', copy: 'Confirm shell hand feel, quick-dry direction, lining, composition and GSM against the approved sample.' },
      { title: 'Fit and hem shape', copy: 'Review inseam, rise, leg opening and curved-hem direction for the intended activity.' },
      { title: 'Logo and colors', copy: 'Set reflective or standard logo treatment, placement, scale and garment color.' },
      { title: 'Labels and packing', copy: 'Add approved size marks, private labels and buyer-specific packing requirements.' },
    ],
    faqs: [
      { question: 'Are these shorts suitable for running and gym training?', answer: 'The lightweight woven shell, drawcord waist, curved hem and soft lining are intended for gym, conditioning, running and general team training. Final fit is confirmed on the approved sample.' },
      { question: 'Is the exact fabric composition listed?', answer: 'The product direction is verified as lightweight and quick-dry, but the exact fiber composition and GSM are confirmed during sampling instead of being assumed from a generic specification.' },
      { question: 'Can the logo be reflective?', answer: 'Yes. The sample shows a reflective heat-transfer logo direction. Artwork, placement, scale and the selected transfer are checked before production.' },
      { question: 'Can I change the colors, length and waistband?', answer: 'Yes. Color, logo placement, length, hem shape, waistband direction and labels can be reviewed as part of the project specification.' },
      { question: 'What is the MOQ?', answer: 'Custom projects can start from 10 pieces. Final order requirements depend on the style, color and size breakdown, artwork and construction.' },
      { question: 'Can I review a sample before bulk production?', answer: 'Yes. The sample can be used to confirm fit, fabric, lining, waistband, stitching and branding before bulk production.' },
    ],
  },
};

export function isTrainingShortsLandingProduct(id: string): id is TrainingShortsProductId {
  return TRAINING_SHORTS_PRODUCT_IDS.includes(id as TrainingShortsProductId);
}
