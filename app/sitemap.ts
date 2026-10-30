import { CUSTOMER_CASES } from '../lib/customer-cases';
import type { MetadataRoute } from 'next';
import productsData from '../data/products.json';
import { customizationCategories } from '../lib/customization-pages';
import { getRouteModifiedDate, ROUTE_LAST_MODIFIED } from '../lib/content-dates';
import { BLOG_POSTS } from '../lib/blog';
import { RESOURCE_PAGES } from '../lib/resource-content';

import { MATERIAL_GUIDES } from '../lib/fabric-library';
import { BUYER_SOLUTIONS } from '../lib/buyer-solutions';

const SITE_URL = 'https://www.tontongear.com';
const modified = (pathname: string) => new Date(`${getRouteModifiedDate(pathname)}T00:00:00.000Z`);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/cases`, lastModified: modified('/cases'), changeFrequency: 'monthly', priority: 0.8 },
    ...CUSTOMER_CASES.map(item => ({ url: `${SITE_URL}/cases/${item.slug}`, lastModified: new Date(`${item.published}T00:00:00.000Z`), changeFrequency: 'monthly' as const, priority: 0.7 })),
    { url: `${SITE_URL}/products`, lastModified: modified('/products'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/products/category/rash-guards`, lastModified: modified('/products/category/rash-guards'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/products/category/mma-grappling-shorts`, lastModified: modified('/products/category/mma-grappling-shorts'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/products/category/training-shorts`, lastModified: modified('/products/category/training-shorts'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/products/category/teamwear-sets`, lastModified: modified('/products/category/teamwear-sets'), changeFrequency: 'weekly', priority: 0.8 },

    { url: `${SITE_URL}/site-map`, lastModified: modified('/site-map'), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${SITE_URL}/fabrics/220-gsm-stretch-knit`, lastModified: modified('/fabrics/220-gsm-stretch-knit'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/factory/intelligent-garment-hanging-system`, lastModified: modified('/factory/intelligent-garment-hanging-system'), changeFrequency: 'monthly', priority: 0.8 },
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
    lastModified: new Date(`${[resource.updated, ROUTE_LAST_MODIFIED[`/resources/${resource.slug}`] ?? resource.updated].sort().pop()}T00:00:00.000Z`),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const solutionRoutes = BUYER_SOLUTIONS.map((item) => ({ url: `${SITE_URL}/solutions/${item.slug}`, lastModified: new Date('2026-10-15T00:00:00.000Z'), changeFrequency: 'monthly' as const, priority: 0.8 }));
  const fabricRoutes = MATERIAL_GUIDES.map((item) => ({ url: `${SITE_URL}/fabrics/${item.slug}`, lastModified: modified(`/fabrics/${item.slug}`), changeFrequency: 'monthly' as const, priority: 0.8 }));
  return [{ url: `${SITE_URL}/blog`, lastModified: new Date(`${BLOG_POSTS.reduce((latest, post) => post.updated > latest ? post.updated : latest, BLOG_POSTS[0].updated)}T00:00:00.000Z`), changeFrequency: 'weekly' as const, priority: 0.8 }, ...BLOG_POSTS.map(post => ({ url: `${SITE_URL}/blog/${post.slug}`, lastModified: new Date(`${post.updated}T00:00:00.000Z`), changeFrequency: 'monthly' as const, priority: 0.7 })), ...fabricRoutes, ...solutionRoutes, ...staticRoutes, ...customizationRoutes, ...productRoutes, ...resourceRoutes];
}
