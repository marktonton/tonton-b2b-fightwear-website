export type CustomizationFaq = {
  question: string;
  answer: string;
};

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
};

export const customizationPageContent: Record<string, CustomizationPageContent> = {
  'sublimated-rash-guards': {
    seoDescription: 'Custom sublimated rash guards for BJJ, MMA, grappling, gyms and brands. Explore sleeve, fit, artwork and team-order options with TONTON OEM support.',
    kicker: 'CUSTOM RASH GUARD MANUFACTURING',
    heroLead: 'Develop short-sleeve or long-sleeve performance rash guards with your colors, artwork, sponsor marks, and team identity—supported from mockup through production.',
    heroImage: 'assets/products/rashguard-blue-main.png',
    heroAlt: 'Blue custom sublimated rash guard made for team and brand programs',
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
    optionsImage: 'assets/products/rashguard-long-samurai-v2.png',
    optionsAlt: 'Long-sleeve custom graphic rash guard showing all-over sublimation artwork',
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

