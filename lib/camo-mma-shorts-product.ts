export const CAMO_MMA_SHORTS_ID = 'pro-mma-shorts-07';

export const CAMO_MMA_SHORTS_CONTENT = {
  seoTitle: "Men's Custom MMA Fight Shorts Manufacturer | TONTON",
  seoDescription: "Men's custom MMA fight shorts in lightweight stretch-woven fabric with an adjustable elastic waist, reinforced side split and hem, and sublimated graphics for MMA, BJJ No-Gi, grappling, kickboxing and functional training.",
  material: '88% polyester / 12% spandex stretch woven performance fabric',
  color: 'Custom sublimated camouflage and team colors',
} as const;

export const CAMO_MMA_SHORTS_FAQS = [
  {
    question: 'What fabric is used for these MMA fight shorts?',
    answer: 'The main body uses an 88% polyester and 12% spandex stretch performance fabric. It is lightweight, smooth and flexible for kicks, hip rotation, squats and high-intensity training.',
  },
  {
    question: 'How is the waistband secured?',
    answer: 'A broad elastic waistband works with a hook-and-loop front closure and an internal drawcord. The combined system lets the athlete fine-tune waist tension before training.',
  },
  {
    question: 'Why is there a side split?',
    answer: 'The short reinforced side split reduces fabric restriction through high kicks, knee strikes, lunges and wide stances while retaining a fitted fight-short silhouette.',
  },
  {
    question: 'Can the camouflage graphics and logos be customized?',
    answer: 'Yes. Sublimation supports tonal camouflage, asymmetric black-and-red graphics, team colors, logos and sponsor artwork without the thick raised layer associated with some surface-print methods.',
  },
  {
    question: 'Do the shorts have storage pockets?',
    answer: 'No exposed storage pocket is specified for this fight-focused construction. This keeps the exterior cleaner for combat training and separates the style from tactical utility shorts.',
  },
  {
    question: 'Can these shorts be used in formal competition?',
    answer: 'They are developed for MMA, BJJ No-Gi training, grappling drills, kickboxing, boxing fitness and functional training. Before ordering for formal competition, confirm the relevant equipment rules and approve fit and performance on a physical sample.',
  },
] as const;

export function isCamoMmaShorts(id: string) {
  return id === CAMO_MMA_SHORTS_ID;
}
