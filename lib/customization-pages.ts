import productsData from '../data/products.json';

export const customizationCategories = productsData.categories;

export type CustomizationCategory = (typeof customizationCategories)[number];
export type CustomizationProduct = (typeof productsData.products)[number];

export function getCustomizationCategory(slug: string): CustomizationCategory | undefined {
  return customizationCategories.find((category) => category.id === slug);
}

export function getCustomizationProducts(categoryId: string): CustomizationProduct[] {
  return productsData.products.filter((product) => product.categoryId === categoryId);
}
