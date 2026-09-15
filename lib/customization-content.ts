export type CustomizationFaq = {
  question: string;
  answer: string;
};

const RASH_GUARD_NEW_SERIES_ROOT = '/assets/products/rash-guard-products/white-black-series';

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
    seoDescription: 'Custom Rash Guard manufacturer for BJJ, MMA and grappling brands. Review real white and black samples, branding areas, construction and OEM options.',
    kicker: 'CUSTOM RASH GUARD MANUFACTURING',
    heroLead: 'Develop short-sleeve or long-sleeve performance rash guards with your colors, artwork, sponsor marks, and team identity—supported from mockup through production.',
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
      { title: 'Construction details', text: 'Confirm panel layout, neckline direction, seams, labels, and other brand-specific requirements.' },
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
    ],
    skuGroups: [
      {
        name: 'White Performance Rash Guard',
        color: '#f4f4f1',
        summary: 'A clean white short-sleeve sample shown from front, rear, and close detail angles.',
        images: [
          { src: `${RASH_GUARD_NEW_SERIES_ROOT}/white-rash-guard-three-quarter.webp`, alt: 'White short-sleeve custom Rash Guard three-quarter front view' },
          { src: `${RASH_GUARD_NEW_SERIES_ROOT}/white-rash-guard-front-fit.webp`, alt: 'White short-sleeve custom Rash Guard front fit view' },
          { src: `${RASH_GUARD_NEW_SERIES_ROOT}/white-rash-guard-rear.webp`, alt: 'White short-sleeve custom Rash Guard rear view' },
          { src: `${RASH_GUARD_NEW_SERIES_ROOT}/white-rash-guard-chest-logo-detail.webp`, alt: 'White custom Rash Guard chest logo and raglan seam detail' },
        ],
      },
      {
        name: 'Black Performance Rash Guard',
        color: '#111214',
        summary: 'A tonal black short-sleeve sample with front, rear, fit, and branding references.',
        images: [
          { src: `${RASH_GUARD_NEW_SERIES_ROOT}/black-rash-guard-front.webp`, alt: 'Black short-sleeve custom Rash Guard front view' },
          { src: `${RASH_GUARD_NEW_SERIES_ROOT}/black-rash-guard-three-quarter.webp`, alt: 'Black short-sleeve custom Rash Guard three-quarter front view' },
          { src: `${RASH_GUARD_NEW_SERIES_ROOT}/black-rash-guard-rear.webp`, alt: 'Black short-sleeve custom Rash Guard rear view' },
          { src: `${RASH_GUARD_NEW_SERIES_ROOT}/black-rash-guard-size-fit.webp`, alt: 'Black short-sleeve custom Rash Guard fit reference on athlete' },
          { src: `${RASH_GUARD_NEW_SERIES_ROOT}/black-rash-guard-back-logo-detail.webp`, alt: 'Black custom Rash Guard tonal back logo detail' },
        ],
      },
    ],
    productDetails: [
      { title: 'Close athletic fit', text: 'The white sample shows how the body panels, short sleeves, and neckline sit together on an athlete.', image: `${RASH_GUARD_NEW_SERIES_ROOT}/white-rash-guard-front-fit.webp`, alt: 'White short-sleeve Rash Guard close athletic fit on model' },
      { title: 'Raglan seam direction', text: 'The chest close-up makes the neckline, raglan seam path, sleeve finish, and front branding area easy to inspect.', image: `${RASH_GUARD_NEW_SERIES_ROOT}/white-rash-guard-chest-logo-detail.webp`, alt: 'Close-up of white Rash Guard neckline, raglan seam and chest logo' },
      { title: 'Rear neck branding', text: 'A compact upper-back mark can keep the rear panel clean while maintaining a recognizable brand detail.', image: `${RASH_GUARD_NEW_SERIES_ROOT}/white-rash-guard-rear.webp`, alt: 'White Rash Guard rear view with upper-back logo placement' },
      { title: 'Tonal back artwork', text: 'The black sample demonstrates a low-contrast print direction across the broad rear branding area.', image: `${RASH_GUARD_NEW_SERIES_ROOT}/black-rash-guard-back-logo-detail.webp`, alt: 'Close-up of tonal logo printed across a black Rash Guard back panel' },
      { title: 'Stretch seam construction', text: 'Parallel stitch rows secure the stretch fabric panels and make seam alignment easy to inspect on the physical sample.', image: '/assets/products/rash-guard-products/construction-details/stretch-fabric-seam.webp', alt: 'Close-up of stretch Rash Guard fabric and parallel seam construction' },
      { title: 'Breathable mesh transition', text: 'A perforated inset introduces a breathable panel direction with a clearly finished transition to the surrounding fabric.', image: '/assets/products/rash-guard-products/construction-details/breathable-mesh-panel.webp', alt: 'Close-up of breathable mesh panel joined to Rash Guard fabric' },
      { title: 'Reinforced seam junction', text: 'The close-up shows how multiple stitch lines meet at a high-movement panel junction for sample-level workmanship review.', image: '/assets/products/rash-guard-products/construction-details/reinforced-seam-junction.webp', alt: 'Close-up of reinforced Rash Guard seam intersection' },
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
    seoDescription: 'Custom training shorts for gyms, fitness brands, teams and private labels. Compare fit, waistband, fabric, logo and OEM production options with TONTON.',
    kicker: 'CUSTOM TRAINING SHORTS MANUFACTURING',
    heroLead: 'Create lightweight custom gym and workout shorts with the fit, waistband, length, logo placement, and performance details your market needs.',
    heroImage: 'assets/products/lightweight-training-shorts-main.webp',
    heroAlt: 'Black lightweight custom training shorts with drawcord waist and reflective logo',
    overviewTitle: 'Training shorts should be designed for the movement they need to handle.',
    overviewLead: 'Gym, conditioning, team training, and everyday activewear programs do not all need the same construction.',
    overviewText: 'TONTON helps brands, gyms, teams, and distributors develop custom training shorts around intended use. We review fabric direction, waist construction, inseam and hem shape, pocket requirements, lining, branding, and size range so the sample answers practical product questions before production.',
    projectTypes: [
      { title: 'Fitness & activewear brands', text: 'Build a private-label short with a clear fit, material direction, and recognizable brand details.' },
      { title: 'Gyms & training clubs', text: 'Coordinate team shorts with club colors, staff apparel, events, or member merchandise.' },
      { title: 'Distributors & retailers', text: 'Develop market-specific lengths, size ranges, and decoration options for repeat programs.' },
    ],
    optionsTitle: 'What can be customized on training and gym shorts?',
    optionsLead: 'The right combination depends on training use, price position, climate, and the look your buyers expect.',
    optionsImage: 'assets/products/lightweight-training-shorts-details.webp',
    optionsAlt: 'Custom training shorts details including waistband, stitching, lining and logo placement',
    options: [
      { title: 'Length and silhouette', text: 'Define the intended fit, inseam, hem curve, side opening, and overall training profile.' },
      { title: 'Waistband and drawcord', text: 'Review elastic construction, drawcord direction, comfort, and branded waist details.' },
      { title: 'Fabric and lining', text: 'Compare lightweight, stretch, quick-dry, or lined directions based on the intended activity.' },
      { title: 'Logo and decoration', text: 'Plan logo size and placement, then match sublimation, heat transfer, or embroidery to the material and design.' },
    ],
    processLead: 'A clear development sequence for custom training shorts, gym shorts, and private-label activewear programs.',
    processProduct: 'training use, preferred fit, length, waistband, quantity, and target market',
    faqTitle: 'Custom training shorts questions buyers ask before ordering',
    faqs: [
      { question: 'What should I send to start a custom training shorts project?', answer: 'Share the intended activity, quantity, target fit, preferred length, size range, logo files, reference products, and any must-have features such as pockets, lining, or a specific waistband.' },
      { question: 'Can you make custom gym shorts for a private-label brand?', answer: 'Yes. We support OEM and ODM development for fitness brands, gyms, teams, retailers, and distributors. The project can include custom fit direction, materials, colors, labels, and logo placement.' },
      { question: 'What is the MOQ for custom training shorts?', answer: 'Custom projects can start from 10 pieces. The final order structure depends on the selected style, color and size breakdown, artwork, and construction requirements.' },
      { question: 'Can I customize the waistband, length, pockets, and lining?', answer: 'Yes. These are common development decisions. Availability and construction are confirmed during the product review so they can be reflected in the mockup, specification, and sample.' },
      { question: 'Which decoration method is best for my shorts?', answer: 'The best method depends on the fabric and artwork. Sublimation suits compatible fabric and all-over graphics, while heat transfer or embroidery may suit selected logos and placements. We review the combination before sampling.' },
      { question: 'Can I review a sample before bulk production?', answer: 'Yes. Sample development allows your team to check fit, movement, material, waistband, workmanship, and branding before the approved specification moves into bulk production.' },
      { question: 'Can the shorts be coordinated with other team apparel?', answer: 'Yes. Colors, logos, and design language can be developed to coordinate with rash guards, tops, or other teamwear. Each garment is still reviewed according to its own construction and material needs.' },
    ],
  },
  'sublimated-bjj-mma-shorts': {
    seoDescription: 'Custom BJJ, MMA and grappling shorts for academies, fight teams and brands. Explore fit, side-split, waistband, artwork and OEM team-kit options.',
    kicker: 'CUSTOM BJJ & MMA SHORTS MANUFACTURING',
    heroLead: 'Develop custom fight shorts and coordinated team kits for BJJ, MMA, and grappling—with movement, fit, artwork, and academy identity considered together.',
    heroImage: 'assets/products/kit-bw-v2.png',
    heroAlt: 'Custom BJJ and MMA team kit with branded fight shorts',
    overviewTitle: 'Fight shorts need freedom of movement and a clear team identity.',
    overviewLead: 'The product direction should reflect how the shorts will be used—from daily grappling sessions to academy uniforms and branded collections.',
    overviewText: 'TONTON supports custom BJJ shorts, MMA fight shorts, grappling shorts, and coordinated rash guard sets. We help buyers define length, fit, waistband, side movement, material direction, lining options, artwork, and team branding before the design is sampled.',
    projectTypes: [
      { title: 'BJJ academies', text: 'Create consistent academy shorts and coordinated rash guards for members, teams, and events.' },
      { title: 'MMA & grappling teams', text: 'Plan fightwear around mobility, secure fit, sponsor visibility, and repeat training use.' },
      { title: 'Fightwear brands', text: 'Develop distinctive private-label shorts, capsule collections, or matching performance sets.' },
    ],
    optionsTitle: 'What can be customized on BJJ and MMA shorts?',
    optionsLead: 'Fit, movement, construction, and artwork are reviewed as one system rather than isolated decoration choices.',
    optionsImage: 'assets/products/product-13.png',
    optionsAlt: 'Custom black fight shorts and rash guard for a BJJ academy team kit',
    options: [
      { title: 'Fight-short silhouette', text: 'Define the length, leg shape, side opening, and range of movement required for BJJ, MMA, or grappling.' },
      { title: 'Waist construction', text: 'Review elastic, closure, drawcord, and comfort direction according to the selected style.' },
      { title: 'Outer fabric and lining', text: 'Match flexibility, weight, hand feel, and optional layer construction to the intended use.' },
      { title: 'Team and sponsor artwork', text: 'Place academy marks, athlete names, sponsor graphics, colors, and coordinated kit artwork.' },
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
