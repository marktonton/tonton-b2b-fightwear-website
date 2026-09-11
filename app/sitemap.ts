import type { MetadataRoute } from 'next';
import productsData from '../data/products.json';
import { customizationCategories } from '../lib/customization-pages';

const SITE_URL = 'https://www.tontongear.com';
const SEO_RELEASE_DATE = new Date('2026-09-11T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: SEO_RELEASE_DATE, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/collections`, lastModified: SEO_RELEASE_DATE, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/service-support`, lastModified: SEO_RELEASE_DATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/factory`, lastModified: SEO_RELEASE_DATE, changeFrequency: 'monthly', priority: 0.8 },
  ];

  const customizationRoutes = customizationCategories.map((category) => ({
    url: `${SITE_URL}/customization/${category.id}`,
    lastModified: SEO_RELEASE_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const productRoutes = productsData.products.map((product) => ({
    url: `${SITE_URL}/products/${product.id}`,
    lastModified: SEO_RELEASE_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...customizationRoutes, ...productRoutes];
}
