export const TRAINING_SHORTS_PRODUCT_IDS = [
  'custom-logo-shorts',
  'pro-mma-shorts-08',
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
  detailCards: { title: string; copy: string; alt: string }[];
  customization: { title: string; copy: string }[];
  faqs: { question: string; answer: string }[];
};

export const TRAINING_SHORTS_LANDING_CONTENT: Record<TrainingShortsProductId, LandingContent> = {
  'custom-logo-shorts': {
    seoTitle: 'Men’s Custom MMA Fight Shorts Manufacturer | TONTON',
    seoDescription: 'Develop short-cut custom MMA fight shorts for BJJ, Sanda, boxing and combat training with stretch-woven fabric direction, articulated crotch construction and reinforced stitching. MOQ from 10 pieces.',
    eyebrow: 'CUSTOM MMA FIGHT SHORTS',
    headline: 'Men’s Custom MMA Fight Shorts',
    intro: 'Short, mobility-focused outer fight shorts for MMA, BJJ, Sanda, boxing and functional combat training, with a broad elastic waist, articulated front-crotch construction and reinforced contrast stitching.',
    specs: [
      ['MOQ', 'From 10 pieces'],
      ['Short cut', 'Athlete mobility'],
      ['Outer short', 'Compression layer is separate'],
    ],
    features: [
      'Short athletic cut designed for kicks, sprawls and ground movement',
      'Broad elastic waistband with an optional internal drawcord direction',
      'Curved front-crotch construction for additional movement space',
      'Reinforced contrast topstitching at high-use seams and hems',
      'Custom waist patch, leg logo, colors and private-label finishing',
    ],
    benefits: [
      { title: 'High-mobility short cut', copy: 'A compact leg length reduces excess fabric for kicking, grappling, sprawls and high-intensity conditioning.' },
      { title: 'Articulated crotch area', copy: 'The visible curved front construction creates a more movement-oriented starting point than a flat casual-short block.' },
      { title: 'Stretch fabric direction', copy: 'A polyester-spandex stretch-woven option can be evaluated for recovery, hand feel and unrestricted movement.' },
      { title: 'Reinforced wear zones', copy: 'Multiple rows of visible topstitching support the waistband, front seam and hem areas exposed to repeated movement.' },
      { title: 'Two branding positions', copy: 'A sewn waist patch and lower-leg logo area give brands clear identity without covering the entire garment.' },
      { title: 'Flexible layering', copy: 'The garment is developed as an outer fight short, so athletes can pair it with their preferred separate compression tights.' },
    ],
    materialLead: 'The photographs verify the short outer-shell silhouette, broad elastic waist, curved front-crotch construction, contrast topstitching, finished hem and two branding positions. A four-way-stretch polyester-spandex woven fabric around 130–180gsm is a practical development range, not a confirmed specification; composition, GSM, stretch recovery and drying performance must be checked on the selected fabric and approved sample.',
    materialRows: [
      ['Product type', 'Short-cut outer MMA fight short for combat sports and functional training'],
      ['Main fabric direction', 'Smooth matte polyester-spandex stretch woven; exact composition requires confirmation'],
      ['Development weight', 'Approximately 130–180gsm for evaluation; final GSM confirmed by swatch and sample'],
      ['Waistband', 'Broad elastic waist; hidden drawcord can be developed if required'],
      ['Crotch & seams', 'Curved front construction with visible multi-row reinforcement stitching'],
      ['Layering note', 'Compression tights shown in the image are a separate garment, not a built-in liner'],
      ['Branding', 'Sewn waist patch plus leg print; final transfer, screen or silicone method depends on artwork and fabric'],
    ],
    detailCards: [
      { title: 'Smooth matte fabric surface', copy: 'The close-up shows a lightweight-looking, low-shine surface. Fiber content, four-way stretch and the 130–180gsm development range still require swatch and sample confirmation.', alt: 'Close-up of smooth matte black fabric used as a custom MMA fight shorts development reference' },
      { title: 'Broad elastic waist & sewn patch', copy: 'The waist detail verifies an elastic construction, visible TONTON patch stitching and the start of the curved front-crotch seam.', alt: 'Elastic waistband, sewn TONTON patch and reinforced crotch detail on black MMA fight shorts' },
      { title: 'Articulated front-crotch construction', copy: 'Curved panel lines and multiple rows of contrast stitching create a movement-focused structure for kicks, squats and ground work.', alt: 'Curved front-crotch panel and contrast topstitching on short-cut MMA fight shorts' },
      { title: 'Reinforced hem & leg branding', copy: 'The folded or bound hem and lower-leg logo position are clearly visible. The compression tights underneath are a separate layer.', alt: 'Reinforced hem, grey leg logo and separate compression tights beneath black MMA fight shorts' },
    ],
    customization: [
      { title: 'Fabric & stretch', copy: 'Compare stretch-woven swatches for weight, recovery, abrasion, hand feel and quick-dry direction before sampling.' },
      { title: 'Short cut & crotch fit', copy: 'Confirm rise, inseam, leg opening and crotch volume against kicking, grappling and gym movement.' },
      { title: 'Waist & reinforcement', copy: 'Review elastic width, optional hidden drawcord and the exact topstitching or reinforcement route.' },
      { title: 'Branding & labels', copy: 'Set the waist patch, leg logo method, colors, size marks, private labels and packing requirements.' },
    ],
    faqs: [
      { question: 'Are the black compression tights built into the MMA shorts?', answer: 'No. The tight layer visible below the hem is a separate compression garment. This product is presented as an outer fight short; a built-in liner would require a separate 2-in-1 construction brief.' },
      { question: 'What fabric and GSM do you recommend?', answer: 'A four-way-stretch polyester-spandex woven direction around 130–180gsm can be evaluated for this short-cut style. Those values are a development range, not a verified specification; final composition, weight, stretch recovery and drying performance are confirmed using the chosen fabric and approved sample.' },
      { question: 'Can the waistband include a hidden drawcord?', answer: 'Yes, a hidden drawcord can be developed if required. The current photos verify the broad elastic waistband but do not prove an internal drawcord, so that detail must be specified and sampled.' },
      { question: 'How can the logos be applied?', answer: 'The waist branding appears as a sewn patch. The leg logo can be developed with a suitable heat-transfer, screen-print or silicone-print method depending on the artwork, fabric and required hand feel; the final process is confirmed before bulk production.' },
      { question: 'Which activities are these shorts designed for?', answer: 'The short cut and articulated crotch direction suit MMA, BJJ, Sanda, boxing, wrestling, combat training and high-intensity gym work. Final fit and movement should be approved on the sample.' },
      { question: 'What is the MOQ and approval process?', answer: 'Custom projects can start from 10 pieces. We align the fabric, fit, waist, reinforcement, branding, colors and size breakdown, then use the sample to approve the construction before bulk production.' },
    ],
  },
  'pro-mma-shorts-08': {
    seoTitle: "Men's Custom Combat Training Shorts Manufacturer | TONTON",
    seoDescription: "Men's custom combat training shorts with a short athletic cut, broad elastic waistband, panelled crotch, reinforced hem and custom branding for MMA conditioning, boxing fitness, gym and functional training. MOQ from 10 pieces.",
    eyebrow: 'CUSTOM COMBAT TRAINING SHORTS',
    headline: "Men's Black Combat Training Shorts",
    intro: 'Short-cut athletic training shorts with a broad elastic waist, shaped crotch panels and reinforced hem finishing for MMA conditioning, boxing fitness, gym movement and functional team programs.',
    specs: [
      ['MOQ', 'From 10 pieces'],
      ['Fit', 'Short athletic cut'],
      ['Evidence', 'Front + rear views'],
    ],
    features: [
      'Short athletic silhouette with room through the thigh',
      'Broad elastic waistband with front branding position',
      'Panelled front and crotch construction for movement',
      'Reinforced lower hem with clean topstitching',
      'Front, side and rear logo-placement options',
    ],
    benefits: [
      { title: 'Short athletic cut', copy: 'The compact leg length reduces excess fabric during footwork, conditioning, squats and high-output gym movement.' },
      { title: 'Broad elastic waist', copy: 'A wide elastic construction creates a stable starting point for repeated movement and a clear front branding position.' },
      { title: 'Panelled crotch shaping', copy: 'The visible front and inner-leg seams create a more movement-oriented structure than a flat casual-short block.' },
      { title: 'Reinforced hem finish', copy: 'Clean lower-edge topstitching supports the short silhouette and should be checked for stretch and seam security on the sample.' },
      { title: 'Multiple logo zones', copy: 'Front waist, lower leg, side leg and rear leg areas provide options for team, sponsor and private-label branding.' },
      { title: 'Cross-training use', copy: 'The visible construction suits MMA conditioning, boxing fitness, gym work and functional training; formal competition use requires separate review.' },
    ],
    materialLead: 'The real front and rear photographs confirm a black short-cut silhouette, broad elastic waistband, panelled front and crotch seams, reinforced hem and multiple printed branding positions. Exact fiber content, fabric weight, stretch direction, quick-dry performance and decoration method are not verified by the photographs and must be confirmed using the selected fabric and approved sample.',
    materialRows: [
      ['Product type', "Men's short-cut combat and functional training shorts"],
      ['Verified color', 'Black sample with white custom branding'],
      ['Fabric direction', 'Smooth woven performance direction; exact composition and GSM require confirmation'],
      ['Waistband', 'Broad elastic waistband with front logo-patch position'],
      ['Crotch construction', 'Visible shaped front and inner-leg panels'],
      ['Hem', 'Reinforced lower edge with clean parallel topstitching'],
      ['Branding zones', 'Front waist, lower leg, side leg and rear leg'],
      ['Intended use', 'MMA conditioning, boxing fitness, gym and functional training'],
    ],
    detailCards: [
      { title: 'Front construction view', copy: 'The front image shows the broad waist, shaped center and crotch seams, short leg length and lower-leg branding positions.', alt: 'Front view of black custom combat training shorts with broad elastic waistband and printed leg logos' },
      { title: 'Rear and side construction view', copy: 'The rear view confirms waistband gathering, side branding and the clean reinforced hem line around the back leg.', alt: 'Rear view of black custom combat training shorts showing elastic waistband, side logo and reinforced hem' },
    ],
    customization: [
      { title: 'Fabric & performance', copy: 'Compare woven fabric options for composition, GSM, stretch, recovery, abrasion, opacity and drying direction before sampling.' },
      { title: 'Fit & movement', copy: 'Confirm rise, inseam, leg opening, crotch shaping and waist security through the intended gym and combat-conditioning movements.' },
      { title: 'Logo & artwork', copy: 'Set front, side and rear branding positions, logo method, scale, contrast and private-label direction.' },
      { title: 'Waist & finishing', copy: 'Review elastic width, optional drawcord direction, reinforcement, hem topstitching, size marks and packing requirements.' },
    ],
    faqs: [
      { question: 'What details are verified by the product photographs?', answer: 'The photographs confirm the black short athletic cut, broad elastic waistband, shaped front and crotch seams, reinforced hem and multiple logo positions from front and rear views.' },
      { question: 'What fabric is used for these training shorts?', answer: 'The images show a smooth woven performance direction, but exact composition, GSM, stretch and quick-dry performance are not confirmed. Those values are selected and approved through the fabric swatch and sample.' },
      { question: 'Can a drawcord or different waistband be developed?', answer: 'Yes. The photographs verify the elastic waistband; an internal drawcord, revised width or another adjustment direction should be written into the brief and confirmed on the sample.' },
      { question: 'Can the logos and colors be customized?', answer: 'Yes. Front-waist, leg, side and rear branding can be developed with approved colors, artwork and a decoration method compatible with the selected fabric.' },
      { question: 'Which activities suit this style?', answer: 'The short cut and visible panel construction suit MMA conditioning, boxing fitness, gym sessions, HIIT and functional training. Formal competition or grappling use requires equipment-rule and sample checks.' },
      { question: 'What is the MOQ?', answer: 'Custom projects can start from 10 pieces. Final requirements depend on fabric, fit, artwork, size breakdown, labels and packaging.' },
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
    detailCards: [
      { title: 'Complete product direction', copy: 'Review the complete silhouette and the main development baseline.', alt: 'Lightweight quick-dry custom training shorts overview' },
      { title: 'Performance features', copy: 'Compare the logo, lining, waistband and curved-hem performance direction.', alt: 'Lightweight training shorts performance features and construction details' },
      { title: 'Construction details', copy: 'Inspect the waist, fabric, lining and finishing details before sampling.', alt: 'Lightweight training shorts waistband, lining, fabric and hem details' },
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
