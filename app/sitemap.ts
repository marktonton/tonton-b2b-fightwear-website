import type { MetadataRoute } from 'next';
import productsData from '../data/products.json';
import { customizationCategories } from '../lib/customization-pages';

const SITE_URL = 'https://www.tontongear.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/collections`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/service-support`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/factory`, changeFrequency: 'monthly', priority: 0.8 },
  ];

  const customizationRoutes = customizationCategories.map((category) => ({
    url: `${SITE_URL}/customization/${category.id}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const productRoutes = productsData.products.map((product) => ({
    url: `${SITE_URL}/products/${product.id}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...customizationRoutes, ...productRoutes];
}
