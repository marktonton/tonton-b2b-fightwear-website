export const MESH_ASSET_BASE = 'https://assets.tontongear.com/assets/fabrics/stretch-mesh/';
export const MESH_DESCRIPTION = 'Explore stretch mesh inserts for custom rash guards and fightwear: real garment photos, sample video, ventilation-panel placement, seam details and material selection checks.';
export const MESH_SPECIFICATIONS = [
  ['Material direction', 'Stretch mesh for garment inserts and ventilation panels. Warp-knit construction is a development option; confirm the actual knit with the chosen supplier swatch.'],
  ['Composition brief', 'Polyester or nylon with elastane. The supplied 85–90% base-fiber / 10–15% elastane ranges are discussion targets, not a confirmed blend for the photographed sample. The final blend must total 100%.'],
  ['Weight brief', '120–150 GSM is a proposed selection range. Verify the selected swatch weight before adding it to an order specification.'],
  ['Surface and openings', 'The supplied close-ups show small repeated openings, adjoining dense fabric and stitched panel boundaries. Opening shape, density and finish are confirmed on the actual swatch.'],
  ['Stretch compatibility', 'Compare extension and recovery in both directions with the adjoining garment fabric. No numerical stretch or recovery rating has been supplied.'],
  ['Placement', 'Underarm and side-panel routes for rash guards; gussets or liner ventilation strips can be developed separately for selected shorts patterns.'],
  ['Wear and durability checks', 'Evaluate skin-contact feel, opacity under stretch, seam comfort, snagging, abrasion, tear behavior and wash stability for the intended sport.'],
  ['Evidence status', 'Five supplied garment photos and one sample-inspection clip show visible construction. The separate brand film is an illustrative presentation, not a laboratory test.'],
] as const;
export const MESH_DETAILS = [
  { file: 'mesh-seam-detail.jpg', title: 'Mesh openings and the connecting seam', text: 'Review the transition from open-knit insert to dense garment fabric, including the stitch line and panel edge.', alt: 'Actual supplied close-up of a light mesh panel joining dense fabric with a dark stitched seam', width: 2048, height: 1152 },
  { file: 'mesh-stretch-reference.jpg', title: 'A held-open garment panel', text: 'The supplied photo helps discuss panel layout and coverage. It does not measure stretch percentage, air permeability or recovery.', alt: 'Actual supplied garment panel held open to display the mesh insert and neighboring fabric', width: 2048, height: 1152 },
] as const;
export const MESH_GARMENT_PHOTOS = [
  { file: 'mesh-side-panel.jpg', title: 'Outer view: side-panel placement', text: 'The darker insert runs between stitched boundaries on the garment. Review the panel width and intended coverage with your pattern.', alt: 'Actual supplied outer view of a dark garment with a vertical mesh insert between panel seams', width: 1152, height: 2048 },
  { file: 'mesh-inner-panel.jpg', title: 'Inner view: panel and hem finishing', text: 'Inspect the mesh, surrounding fabric and seam junctions together. The elastic hem band is a separate finishing component.', alt: 'Actual supplied inner garment view showing a light mesh panel, dark seam junctions and a separate elastic hem band', width: 1152, height: 2048 },
] as const;
export const MESH_APPLICATIONS = [
  { title: 'Rash guards: underarm to side panel', text: 'Develop a ventilation-panel route where the sleeve, underarm and torso pattern allow it. Match insert stretch, coverage and seam comfort to the main knit.' },
  { title: 'Fight shorts: an optional stretch gusset', text: 'An insert can be developed around the crotch or an articulated panel. Confirm seam strength, coverage and resistance to snagging before approving use for grappling or contact training.' },
  { title: '2-in-1 liners: selected ventilation strips', text: 'Explore localized mesh alongside a close-fitting liner. Review transparency, edge finish, support and compatibility with the outer-short construction.' },
] as const;
export const MESH_MATERIAL_ROLES = [
  { title: '4-Way Stretch Woven', role: 'OUTER SHELL', text: 'Develop the silhouette, split direction and movement allowance of the outer shorts. Confirm abrasion and tear requirements on the selected fabric.', href: '/fabrics/four-way-stretch-woven' },
  { title: 'Compression Liner Knit', role: 'FITTED INNER LAYER', text: 'Select a close-fitting contact layer for coverage and movement, with liner length, seams and size grading approved on the sample.', href: '/fabrics/compression-liner-knit' },
  { title: 'Stretch Mesh', role: 'LOCALIZED INSERT', text: 'Develop the open-knit panels and their position. Specify air permeability, opacity and durability targets where measured performance is required.', href: '/project-builder?product=Rash+Guard&reference=Stretch+Mesh&source=mesh-material-combination' },
] as const;
export const MESH_FAQS = [
  ['What is stretch mesh used for in custom fightwear?', 'It is an open-knit insert direction used to develop selected ventilation panels in rash guards, fitted training garments and some shorts patterns. Position and performance depend on the chosen mesh and garment design.'],
  ['Do these photos confirm the composition or 120–150 GSM weight?', 'No. They show visible mesh openings, panel seams and garment finishing. Composition, GSM and knit construction must be confirmed using supplier records and the selected physical swatch.'],
  ['Is the fabric guaranteed to be snag-proof or tear-resistant for BJJ?', 'No such guarantee is made. Open-knit structures need sport-specific evaluation, including snagging, abrasion, seam strength and coverage under movement. Approve the material and finished garment for the intended use.'],
  ['Can mesh reduce garment weight by 30–40%?', 'That reduction is not established for these materials. Any comparison needs the measured GSM, insert area, main-fabric specification and finished garment weight.'],
  ['How does stretch mesh differ from a compression liner?', 'Mesh is selected for an open structure and localized panel function. A liner knit is selected for close-to-body coverage and fit. They can be combined in a pattern, with each material specified separately.'],
  ['Can I customize the panel layout and branding?', 'Yes, panel width, placement, seams, colors and compatible branding can be reviewed during OEM / ODM development. Confirm print suitability, fit and appearance on the chosen mesh sample.'],
] as const;
