import type { MetadataRoute } from 'next';
import productsData from '../data/products.json';
import { customizationCategories } from '../lib/customization-pages';
import { getRouteModifiedDate } from '../lib/content-dates';
import { RESOURCE_PAGES } from '../lib/resource-content';

const SITE_URL = 'https://www.tontongear.com';
const modified = (pathname: string) => new Date(`${getRouteModifiedDate(pathname)}T00:00:00.000Z`);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: modified('/'), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/collections`, lastModified: modified('/collections'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/service-support`, lastModified: modified('/service-support'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/factory`, lastModified: modified('/factory'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/resources`, lastModified: modified('/resources'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/project-builder`, lastModified: modified('/project-builder'), changeFrequency: 'monthly', priority: 0.8 },
  ];

  const customizationRoutes = customizationCategories.map((category) => ({
    url: `${SITE_URL}/customization/${category.id}`,
    lastModified: modified(`/customization/${category.id}`),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const productRoutes = productsData.products.map((product) => ({
    url: `${SITE_URL}/products/${product.id}`,
    lastModified: modified(`/products/${product.id}`),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const resourceRoutes = RESOURCE_PAGES.map((resource) => ({
    url: `${SITE_URL}/resources/${resource.slug}`,
    lastModified: new Date(`${resource.updated}T00:00:00.000Z`),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...customizationRoutes, ...productRoutes, ...resourceRoutes];
}
