export type ProcurementDirection = {
  label: string;
  fit: string;
  limit: string;
  material: string;
  sizing: string;
  customization: string;
  evidence: string;
};

const rashGuard: ProcurementDirection = {
  label: 'Custom Rash Guard',
  fit: 'Academies and private-label brands planning coordinated sublimated training tops, with sample approval before bulk production.',
  limit: 'Choose a different construction when you need a loose outer jersey. Check event uniform rules separately; this page does not certify competition approval.',
  material: 'Blue Team and White Logo references: 220gsm, 85% polyester / 15% spandex. The Samurai reference lists 220gsm; confirm its fiber ratio separately. These specifications do not automatically apply to every custom option.',
  sizing: 'Specify sleeve length, adult or youth fit, chest, body length and sleeve measurements. Agree a measurement method and numerical tolerances on the approved size sheet; a market label alone does not define fit.',
  customization: 'Review panel artwork, logos, neck labels and optional silicone hem grip. Confirm the selected hem construction and artwork version on the sample.',
  evidence: 'Published product specifications, actual garment and seam photographs, silicone-hem detail footage and separately identified customer production references.',
};
const highSplit: ProcurementDirection = {
  label: 'High-Split 2-in-1 Shorts',
  fit: 'Brands and grappling teams that want a high side opening together with a fitted inner layer and customizable liner artwork.',
  limit: 'Not a single-layer short. Buyers who want no liner, storage pockets or a lower side opening should request a different construction. Check event equipment rules separately.',
  material: 'Outer: thickened lightweight four-way-stretch fabric; exact fiber ratio and GSM require a selected fabric record. Inner: 250gsm milk-silk fabric. Milk silk is the supplied trade name, not a verified fiber composition or a claim of milk-derived fibers.',
  sizing: 'Confirm waist, outseam, liner length, leg opening and split height independently. Use the published size image as a reference, then approve a written measurement chart and tolerance for this style.',
  customization: 'Outer-shell artwork, liner graphics, drawcord, silicone waist grip, printed labels and packaging are reviewed together. Changes to fit, split or liner length require a sample check.',
  evidence: 'Actual waistband, liner, split and label photographs; a separately identified completed two-layer shorts reference. Promotional video is not a performance test.',
};
const training: ProcurementDirection = {
  label: 'Training / Outer Fight Shorts',
  fit: 'Gym, team and private-label buyers selecting an outer short around movement, waistband, pocket and ventilation requirements.',
  limit: 'Pocket, liner and closure details vary by style. A functional training short with zips is not automatically appropriate for grappling; confirm contact-sport and event rules.',
  material: 'Confirm the specific SKU. The Camo Pro MMA Shorts 07 reference lists 88% polyester / 12% spandex. Other outer-short fabric directions and target GSM ranges are not confirmed specifications for every style.',
  sizing: 'Specify waist, hip, rise, outseam and leg opening, then approve the fit and measurement tolerances on the selected pattern.',
  customization: 'Review waist closure, pocket presence and zips, side openings, logo process, labels and packing by style. Do not transfer a feature from one reference to another.',
  evidence: 'Product-specific photographs and construction descriptions; published material figures apply only to the named product reference.',
};

const teamKit: ProcurementDirection = {
  label: 'Coordinated Rash Guard and Shorts Kit',
  fit: 'Academies and teams ordering a coordinated top and shorts with shared artwork and separate size allocations.',
  limit: 'A kit is two garments, not one universal material or size specification. Buyers who need only a top or only a short should identify that garment separately.',
  material: 'Record the top fabric, shorts shell and any liner independently. Do not copy the material blend or GSM from an unrelated Rash Guard or two-layer shorts reference.',
  sizing: 'Keep separate top and shorts measurement sheets and size quantities. A wearer may need different sizes in the two garments; adult and youth fit must be checked separately.',
  customization: 'Approve logo scale, colors and artwork placement across the worn kit, then record labels and packing by garment.',
  evidence: 'Published kit photographs and separately attributed academy buyer feedback. Each approved project needs its own written garment specifications.',
};
export const PROCUREMENT_DIRECTIONS = { rashGuard, highSplit, training, teamKit } as const;
export type ProcurementFamily = keyof typeof PROCUREMENT_DIRECTIONS;
export function procurementFamilyForProduct(id: string): ProcurementFamily {
  if (id === 'black-white-mma-kit') return 'teamKit';
  if (id === 'high-split-grappling-shorts') return 'highSplit';
  return id.includes('rash-guard') ? 'rashGuard' : 'training';
}

export const ORDER_CONFIRMATION_ROWS = [
  ['Starting quantity', 'Selected custom projects start from 10 pieces. Confirm the minimum per style, design and colorway; 10 pieces is not a promise that different products or unrelated designs share one minimum.'],
  ['Mixed sizes', 'Send a separate quantity-by-size list for each garment. Adult / youth patterns, tops / shorts and colorways need an explicit allocation; do not assume any mix is automatically accepted.'],
  ['Sample timing', 'The advertised 3–7 day target starts after usable artwork and product details are confirmed. New patterns, material sourcing, revisions or special finishing can change the schedule.'],
  ['Quote scope', 'Request the unit and sample charges, artwork or development scope, labels, packaging, shipping basis and destination in one written quote. No universal price or free-sample entitlement is implied.'],
  ['Approval and repeat orders', 'Keep the approved sample version, artwork, materials, size chart, tolerances and packing instructions. Recheck material availability, MOQ and timing when reordering.'],
] as const;
