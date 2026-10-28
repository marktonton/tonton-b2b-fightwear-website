import data from '../data/products.json';
export const PRODUCT_CATALOG_CATEGORIES = [
  { slug: 'rash-guards', name: 'Rash Guards', description: 'Short- and long-sleeve compression tops for BJJ academies, MMA gyms and private-label training collections.' },
  { slug: 'mma-grappling-shorts', name: 'MMA & Grappling Shorts', description: 'Fight shorts, high-split cuts and two-layer grappling references for custom development.' },
  { slug: 'training-shorts', name: 'Training Shorts', description: 'Training short references for gym, team and activewear projects.' },
  { slug: 'teamwear-sets', name: 'Teamwear Sets', description: 'Coordinated rash guard and shorts sets with shared artwork and separate garment sizing.' },
] as const;
export function catalogCategoryForProduct(id: string, categoryId: string) {
  if (id === 'black-white-mma-kit') return 'teamwear-sets';
  if (categoryId === 'sublimated-rash-guards') return 'rash-guards';
  return categoryId === 'sublimated-training-shorts' ? 'training-shorts' : 'mma-grappling-shorts';
}
export function catalogProducts(slug?: string) {
  return data.products.filter(p => !slug || catalogCategoryForProduct(p.id,p.categoryId) === slug);
}
export const CATALOG_DESCRIPTION = 'Browse TONTON rash guards, MMA and grappling shorts, training shorts and teamwear sets. Compare product references and request private-label OEM/ODM development.';
