export type CustomizationFaq = {
  question: string;
  answer: string;
};

const RASH_GUARD_NEW_SERIES_ROOT = '/assets/products/rash-guard-products/white-black-series';
const RASH_GUARD_REFERENCE_GALLERY_ROOT = '/assets/products/rash-guard-products/reference-gallery-v2';
const FIGHT_SHORTS_CATEGORY_ROOT = '/assets/products/grappling-shorts-category';

export type CustomizationPageContent = {
  seoDescription: string;
  kicker: string;
  heroLead: string;
  heroImage: string;
  heroAlt: string;
  overviewTitle: string;
  overviewLead: string;
  overviewText: string;
  projectTypes: Array<{ title: string; text: string }>;
  optionsTitle: string;
  optionsLead: string;
  optionsImage: string;
  optionsAlt: string;
  options: Array<{ title: string; text: string }>;
  processLead: string;
  processProduct: string;
  faqTitle: string;
  faqs: CustomizationFaq[];
  skuGroups?: Array<{
    name: string;
    color: string;
    summary: string;
    images: Array<{ src: string; alt: string }>;
  }>;
  productDetails?: Array<{ title: string; text: string; image: string; alt: string }>;
  fabricGuide?: {
    title: string;
    intro: string;
    items: Array<{ title: string; text: string }>;
  };
  craftSteps?: Array<{ title: string; text: string }>;
};

export const customizationPageContent: Record<string, CustomizationPageContent> = {
  'sublimated-rash-guards': {
    seoDescription: 'Custom sublimated graphic Rash Guard manufacturer for BJJ, MMA and grappling brands. Inspect real fabric, mesh, flatlock seams, silicone grip and OEM options.',
    kicker: 'CUSTOM SUBLIMATED RASH GUARD MANUFACTURER',
    heroLead: 'Develop custom sublimated graphic Rash Guards with your colors, all-over artwork, sponsor marks, and team identity—with fabric, mesh panels, seams, and finishing details reviewed before production.',
    heroImage: `${RASH_GUARD_NEW_SERIES_ROOT}/white-rash-guard-three-quarter.webp`,
    heroAlt: 'White short-sleeve custom Rash Guard shown from a three-quarter front angle',
    overviewTitle: 'Build a rash guard around the way your customers train.',
    overviewLead: 'A strong custom rash guard program starts with use, fit, and artwork—not a generic blank garment.',
    overviewText: 'TONTON supports brands, BJJ academies, MMA gyms, grappling teams, and distributors with product development for custom sublimated rash guards. We help define sleeve length, panel direction, size requirements, fabric performance, artwork placement, and packaging before the order moves forward.',
    projectTypes: [
      { title: 'BJJ & grappling academies', text: 'Create a consistent team identity across adult, youth, rank, or competition programs.' },
      { title: 'MMA gyms & fight teams', text: 'Develop training apparel around movement, repeat wear, and clear sponsor placement.' },
      { title: 'Private-label brands', text: 'Translate a brand direction into a repeatable rash guard range with coordinated colors and graphics.' },
    ],
    optionsTitle: 'What can be customized on a sublimated rash guard?',
    optionsLead: 'Each decision is reviewed together so the visual design and garment construction support the same end use.',
    optionsImage: `${RASH_GUARD_NEW_SERIES_ROOT}/black-rash-guard-three-quarter.webp`,
    optionsAlt: 'Black short-sleeve custom Rash Guard showing athletic fit, raglan panels and chest branding',
    options: [
      { title: 'Sleeve and fit direction', text: 'Choose short or long sleeves and define the intended fit and size range for your market.' },
      { title: 'All-over artwork', text: 'Apply team colors, patterns, logos, names, and sponsor graphics across the printable panels.' },
      { title: 'Fabric performance', text: 'Review stretch, hand feel, weight, and intended training conditions before sampling.' },
      { title: 'Construction details', text: 'Confirm panel layout, breathable mesh, flatlock seam direction, neckline, silicone hem grip, printed labels, and other brand-specific requirements.' },
    ],
    processLead: 'A practical OEM route for custom BJJ and MMA rash guards, with key decisions confirmed before bulk work begins.',
    processProduct: 'rash guard style, sleeve length, fit direction, quantity, and target user',
    faqTitle: 'Custom rash guard questions buyers ask before ordering',
    faqs: [
      { question: 'What information should I send for a custom rash guard quote?', answer: 'Send the required quantity, short- or long-sleeve preference, target users, size range, artwork or logo files, and any reference products. These details help us define the development brief and confirm the next step.' },
      { question: 'Can TONTON make rash guards for BJJ academies and MMA teams?', answer: 'Yes. We support custom rash guard programs for BJJ academies, MMA gyms, grappling teams, brands, and distributors. Team colors, sponsor marks, names, and coordinated designs can be reviewed during artwork development.' },
      { question: 'What is the MOQ for custom sublimated rash guards?', answer: 'Custom projects can start from 10 pieces. The final order structure is confirmed against the style, size breakdown, artwork, and other project requirements.' },
      { question: 'Can I customize both long-sleeve and short-sleeve rash guards?', answer: 'Yes. Sleeve length is one of the first product decisions. We can review short- and long-sleeve directions, along with fit, panel layout, sizing, and artwork placement.' },
      { question: 'Will sublimated graphics peel or create a heavy print layer?', answer: 'Sublimation transfers the artwork into compatible performance fabric rather than adding a thick surface print. It is suited to detailed, all-over graphics and avoids a heavy printed layer on the garment.' },
      { question: 'Can I review a mockup and sample before bulk production?', answer: 'Yes. A digital mockup is used to review the visual direction, and sample development can be used to confirm fit, construction, color, and branding before bulk production.' },
      { question: 'Which artwork files are best for production?', answer: 'Vector logo and artwork files are preferred because they support clean scaling and placement. Brand colors, fonts, sponsor marks, and reference images are also helpful when preparing the mockup.' },
      { question: 'What fabric is used for a custom Rash Guard?', answer: 'A Rash Guard is typically developed with a smooth polyester-spandex performance fabric selected for stretch, recovery, print compatibility, and next-to-skin comfort. The exact fiber ratio and fabric weight are confirmed for the selected project rather than assumed from a generic specification.' },
      { question: 'How is a sublimated Rash Guard manufactured?', answer: 'After the artwork and color direction are approved, the design is transferred into compatible fabric, the printed panels are cut, stretch seams and the neckline are assembled, and the finished Rash Guard is inspected for workmanship, measurements, color, and branding.' },
      { question: 'Can a custom Rash Guard include mesh panels, flatlock seams, and a silicone hem grip?', answer: 'Yes. These construction directions can be reviewed during development. Mesh placement, seam type, hem finish, and anti-slip silicone grip should be confirmed against the intended fit, fabric, and approved sample before bulk production.' },
    ],
    skuGroups: [
      {
        name: 'Sublimated Long-Sleeve Rash Guard',
        color: '#f4f4f1',
        summary: 'A white-and-taupe long-sleeve sample shown with garment, printed-fabric, label, and seam references.',
        images: [
          { src: `${RASH_GUARD_REFERENCE_GALLERY_ROOT}/taupe-graphic-rash-guard-front.webp`, alt: 'White and taupe long-sleeve custom sublimated Rash Guard front view' },
          { src: `${RASH_GUARD_REFERENCE_GALLERY_ROOT}/taupe-graphic-rash-guard-three-quarter.webp`, alt: 'White and taupe long-sleeve Rash Guard three-quarter view showing raglan sleeve construction' },
          { src: `${RASH_GUARD_REFERENCE_GALLERY_ROOT}/taupe-rash-guard-printed-label-detail.webp`, alt: 'Printed internal label and finished stitching inside a custom Rash Guard' },
          { src: `${RASH_GUARD_REFERENCE_GALLERY_ROOT}/taupe-sublimated-fabric-detail.webp`, alt: 'Close-up of taupe sublimated performance fabric with a repeating custom pattern' },
        ],
      },
      {
        name: 'Black Performance Rash Guard',
        color: '#111214',
        summary: 'A tonal black short-sleeve compression sample with front, rear, fit, seam, and branding references.',
        images: [
          { src: `${RASH_GUARD_REFERENCE_GALLERY_ROOT}/black-compression-rash-guard-three-quarter.webp`, alt: 'Black short-sleeve compression Rash Guard three-quarter front view' },
          { src: `${RASH_GUARD_REFERENCE_GALLERY_ROOT}/black-compression-rash-guard-chest-detail.webp`, alt: 'Close-up of black Rash Guard chest, raglan seam, and tonal branding' },
          { src: `${RASH_GUARD_REFERENCE_GALLERY_ROOT}/black-compression-rash-guard-rear.webp`, alt: 'Black short-sleeve custom Rash Guard rear fit and back panel view' },
          { src: `${RASH_GUARD_REFERENCE_GALLERY_ROOT}/black-compression-rash-guard-front.webp`, alt: 'Black short-sleeve compression Rash Guard full front fit' },
        ],
      },
    ],
    productDetails: [
      { title: 'Performance fabric and panel fit', text: 'The complete sample shows a smooth stretch body, raglan sleeve direction, close neckline, and clean areas for custom sublimated graphics or logos.', image: '/assets/products/rash-guard-products/performance-details/custom-rash-guard-front-construction.webp', alt: 'Front view of a custom short-sleeve Rash Guard showing performance fabric, raglan panels and athletic fit' },
      { title: 'Breathable side mesh panel', text: 'A perforated side insert can add ventilation through the underarm and torso area while preserving a close performance silhouette.', image: '/assets/products/rash-guard-products/performance-details/breathable-side-mesh-panel.webp', alt: 'Close view of a breathable mesh side panel on a custom Rash Guard sample' },
      { title: 'Flatlock raglan seam', text: 'Low-profile stretch stitching follows the sleeve and body panel lines to create a clean construction direction for high-movement training use.', image: '/assets/products/rash-guard-products/performance-details/raglan-flatlock-seam.webp', alt: 'Close-up of flatlock stitching joining the raglan sleeve, body and mesh panel of a Rash Guard' },
      { title: 'Mesh-to-fabric transition', text: 'The sample makes the alignment between solid stretch fabric, ventilating mesh, vertical joining seam, and lower hem easy to inspect.', image: '/assets/products/rash-guard-products/performance-details/mesh-panel-hem-seam.webp', alt: 'Rash Guard mesh panel joined to stretch body fabric with aligned seams and lower hem' },
      { title: 'Silicone anti-slip hem option', text: 'A silicone grip at the inside hem can help limit ride-up. Grip width, placement, and final construction are confirmed during sampling.', image: '/assets/products/rash-guard-products/performance-details/silicone-anti-slip-hem.webp', alt: 'Inside Rash Guard hem with silicone anti-slip grip, mesh panel and finished stitching' },
      { title: 'Tagless printed neck label', text: 'The physical sample shows an 85% polyester and 15% spandex fabric label printed inside the neck. Composition and care copy are finalized for each approved project.', image: '/assets/products/rash-guard-products/performance-details/printed-neck-label.webp', alt: 'Printed neck label on a Rash Guard sample showing 85 percent polyester and 15 percent spandex' },
    ],
    fabricGuide: {
      title: 'Rash Guard fabric should balance stretch, recovery, and print clarity.',
      intro: 'We commonly evaluate polyester-spandex performance directions for sublimated Rash Guards. Final composition, weight, hand feel, and stretch are confirmed against the approved sample and project requirements.',
      items: [
        { title: 'Multi-directional stretch', text: 'Supports close-fit movement for BJJ, MMA, grappling, and training applications.' },
        { title: 'Shape recovery', text: 'Helps the garment return toward its intended fit after repeated movement and wear.' },
        { title: 'Smooth print surface', text: 'Supports clear gradients, detailed graphics, sponsor marks, and team colors.' },
        { title: 'Project-specific GSM', text: 'Fabric weight is selected and confirmed during development instead of being presented as one universal specification.' },
      ],
    },
    craftSteps: [
      { title: 'Artwork and color preparation', text: 'Logos, pattern scale, sponsor marks, and panel placements are organized in the digital mockup.' },
      { title: 'Sublimation transfer', text: 'Approved artwork is transferred into compatible performance fabric for an integrated, lightweight graphic result.' },
      { title: 'Panel cutting', text: 'Printed pieces are cut to the approved pattern with artwork position and panel direction in view.' },
      { title: 'Stretch-garment sewing', text: 'The neckline, sleeves, body panels, and hems are assembled using construction suited to the selected stretch fabric.' },
      { title: 'Finished-garment inspection', text: 'Measurements, seams, visual placement, color, labeling, and workmanship are reviewed before packing.' },
    ],
  },
  'sublimated-training-shorts': {
    seoDescription: 'Custom men’s functional training shorts for gym, HIIT, combat conditioning and outdoor fitness. Explore woven fabric, zip pockets, ventilation and OEM options.',
    kicker: 'FUNCTIONAL TRAINING SHORTS MANUFACTURER',
    heroLead: 'Develop versatile men’s training shorts with lightweight woven performance fabric, an adjustable waistband, a secure zip pocket, perforated ventilation, and reinforced construction.',
    heroImage: 'assets/products/grappling-shorts-products/home-training-shorts-model-v2.webp',
    heroAlt: 'Athletic male model wearing olive green functional training shorts in a studio',
    overviewTitle: 'One training short for gym, combat conditioning, outdoor movement, and utility wear.',
    overviewLead: 'This is a multi-purpose functional short—not a single-purpose MMA competition short.',
    overviewText: 'TONTON helps brands, gyms, teams, and distributors develop this silhouette around the intended market. We review woven fabric direction, stretch and recovery, waistband adjustment, zip-pocket construction, ventilation, crotch mobility, reinforced stitching, branding, and size range before the sample is approved.',
    projectTypes: [
      { title: 'Fitness & combat brands', text: 'Build a versatile private-label short for gym work, HIIT, boxing drills, and combat conditioning.' },
      { title: 'Outdoor & utility labels', text: 'Develop a lightweight tactical direction with ventilation, secure storage, and an adjustable fit.' },
      { title: 'Gyms, teams & retailers', text: 'Coordinate market-specific colors, size ranges, logos, and construction details for repeat programs.' },
    ],
    optionsTitle: 'Customize the functional system—not only the color and logo.',
    optionsLead: 'Fabric, waistband security, pocket placement, ventilation, seam reinforcement, and branding should be developed as one connected specification.',
    optionsImage: 'assets/products/training-shorts-category/training-shorts-flatlay.webp',
    optionsAlt: 'Olive green functional training shorts with perforated ventilation, contrast panels and adjustable waistband',
    options: [
      { title: 'Woven fabric direction', text: 'Compare lightweight polyester-elastane, nylon-elastane, or blended stretch-woven directions against the intended hand feel and movement.' },
      { title: 'Adjustable waistband', text: 'Review elastic support, hook-and-loop adjustment, internal drawcord, comfort, and branded waist details.' },
      { title: 'Pocket and ventilation', text: 'Confirm the zip-pocket opening, storage requirement, perforation layout, edge finish, and placement.' },
      { title: 'Fit, reinforcement and branding', text: 'Define the athletic silhouette, crotch mobility, hem finish, stress-point reinforcement, and approved logo method.' },
    ],
    processLead: 'A clear development sequence for functional training shorts, tactical activewear, and private-label hybrid combat programs.',
    processProduct: 'training use, preferred fit, fabric direction, waistband, pockets, ventilation, quantity, and target market',
    faqTitle: 'Custom training shorts questions buyers ask before ordering',
    faqs: [
      { question: 'What should I send to start a functional training shorts project?', answer: 'Share the intended use, quantity, target fit, preferred length, size range, logo files, reference products, and required features such as a zip pocket, perforated ventilation, adjustable waist, or specific stretch direction.' },
      { question: 'Can you make custom gym shorts for a private-label brand?', answer: 'Yes. We support OEM and ODM development for fitness brands, gyms, teams, retailers, and distributors. The project can include custom fit direction, materials, colors, labels, and logo placement.' },
      { question: 'What is the MOQ for custom training shorts?', answer: 'Custom projects can start from 10 pieces. The final order structure depends on the selected style, color and size breakdown, artwork, and construction requirements.' },
      { question: 'Can I customize the waistband, zip pockets, ventilation, and reinforcement?', answer: 'Yes. These are connected development decisions. Their placement and construction are confirmed during product review so they can be recorded in the mockup, specification, and sample.' },
      { question: 'Which logo method is best for this woven short?', answer: 'The suitable method depends on the approved fabric, artwork, stretch, and placement. Heat transfer, screen print, film print, or selected embroidery directions can be reviewed before sampling; final wash and stretch performance should be checked on the approved sample.' },
      { question: 'Can I review a sample before bulk production?', answer: 'Yes. Sample development allows your team to check fit, movement, material, waistband, workmanship, and branding before the approved specification moves into bulk production.' },
      { question: 'Can the shorts be coordinated with other team apparel?', answer: 'Yes. Colors, logos, and design language can be developed to coordinate with rash guards, tops, or other teamwear. Each garment is still reviewed according to its own construction and material needs.' },
    ],
  },
  'sublimated-bjj-mma-shorts': {
    seoDescription: 'Custom BJJ, MMA and grappling shorts for academies, fight teams and brands. Explore fit, side-split, waistband, artwork and OEM team-kit options.',
    kicker: 'CUSTOM BJJ & MMA SHORTS MANUFACTURING',
    heroLead: 'Develop custom 2-in-1 high-split fight shorts for MMA, grappling, wrestling, boxing, and high-intensity training—with mobility, inner support, waistband security, and brand artwork reviewed together.',
    heroImage: `${FIGHT_SHORTS_CATEGORY_ROOT}/hero-high-split-white-liner.webp`,
    heroAlt: 'Black 2-in-1 high-split fight shorts with a supportive white compression liner in motion',
    overviewTitle: 'Freedom outside. Support inside.',
    overviewLead: 'A breathable quick-dry shell, supportive compression liner, and ultra-high gladiator split work together for demanding combat movement.',
    overviewText: 'TONTON develops custom 2-in-1 high-split shorts for MMA, UFC-style training, wrestling, boxing, grappling, and functional gym sessions. Buyers can review outer-fabric stretch, inner-liner support, side-split height, waistband security, stitching, labels, artwork, and size grading before sampling.',
    projectTypes: [
      { title: 'BJJ academies', text: 'Create consistent academy shorts and coordinated rash guards for members, teams, and events.' },
      { title: 'MMA & grappling teams', text: 'Plan fightwear around mobility, secure fit, sponsor visibility, and repeat training use.' },
      { title: 'Fightwear brands', text: 'Develop distinctive private-label shorts, capsule collections, or matching performance sets.' },
    ],
    optionsTitle: 'Customize the high-split structure around your fightwear brand.',
    optionsLead: 'The outer shell, inner compression layer, split height, waistband, labels, colors, and artwork are reviewed as one connected product specification.',
    optionsImage: `${FIGHT_SHORTS_CATEGORY_ROOT}/customization-performance-scene.webp`,
    optionsAlt: 'Athlete wearing black and white 2-in-1 high-split MMA fight shorts during training',
    options: [
      { title: 'Ultra-high-split silhouette', text: 'Confirm the gladiator-style opening, outer-short length, and freedom required for kicks, shots, sprawls, and ground movement.' },
      { title: 'Secure waistband system', text: 'Review the elastic waistband, adjustable drawstring, silicone anti-slip grip strip, and branded waist label.' },
      { title: 'Outer shell and inner liner', text: 'Match a breathable quick-dry four-way-stretch shell with the required compression-liner support, weight, coverage, and artwork.' },
      { title: 'Branding and finishing', text: 'Place team and sponsor graphics, confirm reinforced stitching, and add an approved tagless printed label.' },
    ],
    processLead: 'A supported route from fight-short concept to an approved BJJ, MMA, or grappling teamwear program.',
    processProduct: 'BJJ, MMA, or grappling use, fit, length, waistband, quantity, and artwork direction',
    faqTitle: 'Custom BJJ and MMA shorts questions buyers ask before ordering',
    faqs: [
      { question: 'What is the difference between a BJJ shorts project and an MMA shorts project?', answer: 'The development priorities can differ by preferred fit, length, side movement, waistband, and competition or training use. We start by confirming the intended activity instead of treating every fight short as the same product.' },
      { question: 'Can TONTON make matching rash guard and shorts sets?', answer: 'Yes. Academy colors, logos, sponsor marks, and graphic direction can be coordinated across rash guards and shorts while the construction of each garment is developed separately.' },
      { question: 'What is the MOQ for custom BJJ and MMA shorts?', answer: 'Custom projects can start from 10 pieces. The final order structure is confirmed after reviewing the style, size and color breakdown, artwork, and construction requirements.' },
      { question: 'Can I customize the side split, waistband, length, and inner layer?', answer: 'Yes. These can be reviewed as part of the product brief. The exact construction is confirmed against the selected style, intended movement, material, and sample requirements.' },
      { question: 'Can you place academy logos and sponsor graphics on the shorts?', answer: 'Yes. Provide vector logos, sponsor marks, brand colors, and placement references. We organize them in the digital mockup so scale, position, and overall balance can be reviewed.' },
      { question: 'Can I approve a physical sample before bulk production?', answer: 'Yes. A sample can be used to review fit, mobility, waistband, material, workmanship, color, and branding before the project is approved for bulk work.' },
      { question: 'What should I include in my first inquiry?', answer: 'Include the product use, target quantity, size range, preferred fit and length, waistband direction, artwork files, reference images, and whether you want matching rash guards or other teamwear.' },
    ],
  },
};
