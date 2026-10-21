import type { MetadataRoute } from 'next';
import productsData from '../data/products.json';
import { customizationCategories } from '../lib/customization-pages';
import { getRouteModifiedDate } from '../lib/content-dates';
import { RESOURCE_PAGES } from '../lib/resource-content';

import { BUYER_SOLUTIONS } from '../lib/buyer-solutions';

const SITE_URL = 'https://www.tontongear.com';
const modified = (pathname: string) => new Date(`${getRouteModifiedDate(pathname)}T00:00:00.000Z`);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/factory/rotary-heat-transfer`, lastModified: modified('/factory/rotary-heat-transfer'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/factory/electric-straight-knife-cutting`, lastModified: modified('/factory/electric-straight-knife-cutting'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/factory/computerized-fabric-cutting`, lastModified: modified('/factory/computerized-fabric-cutting'), changeFrequency: 'monthly', priority: 0.8 },
    { url: SITE_URL, lastModified: modified('/'), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/collections`, lastModified: modified('/collections'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/service-support`, lastModified: modified('/service-support'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/factory/digital-sublimation-printing`, lastModified: modified('/factory/digital-sublimation-printing'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/factory/multi-head-embroidery`, lastModified: modified('/factory/multi-head-embroidery'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/factory`, lastModified: modified('/factory'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: modified('/about'), changeFrequency: 'monthly', priority: 0.8 },
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

  const solutionRoutes = BUYER_SOLUTIONS.map((item) => ({ url: `${SITE_URL}/solutions/${item.slug}`, lastModified: new Date('2026-10-15T00:00:00.000Z'), changeFrequency: 'monthly' as const, priority: 0.8 }));
  return [...solutionRoutes, ...staticRoutes, ...customizationRoutes, ...productRoutes, ...resourceRoutes];
}
