export const CAMO_MMA_SHORTS_ID = 'pro-mma-shorts-07';

export const CAMO_MMA_SHORTS_CONTENT = {
  seoTitle: 'Custom Camo Side-Split MMA Fight Shorts Manufacturer | TONTON',
  seoDescription: "Custom men's camo side-split MMA fight shorts in 88% polyester and 12% spandex, with a hook-and-loop waist, inner drawcord, sublimated graphics and reinforced construction.",
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
    answer: 'Yes. Sublimation supports custom camouflage, team colors, logos and sponsor artwork without the thick raised layer associated with some surface-print methods.',
  },
  {
    question: 'Do the shorts have storage pockets?',
    answer: 'No exposed storage pocket is specified for this fight-focused construction. This keeps the exterior cleaner for combat training and separates the style from tactical utility shorts.',
  },
  {
    question: 'Can these shorts be used in formal competition?',
    answer: 'They are developed for MMA, kickboxing, martial-arts and conditioning use. Before ordering for formal competition or grappling, confirm the relevant equipment rules and approve the fit and performance on a physical sample.',
  },
] as const;

export function isCamoMmaShorts(id: string) {
  return id === CAMO_MMA_SHORTS_ID;
}
