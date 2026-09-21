export const CONTENT_REVIEW_DATE = '2026-09-15';

export const ROUTE_LAST_MODIFIED: Record<string, string> = {
  '/': CONTENT_REVIEW_DATE,
  '/collections': CONTENT_REVIEW_DATE,
  '/service-support': '2026-09-21',
  '/factory': CONTENT_REVIEW_DATE,
  '/resources': CONTENT_REVIEW_DATE,
  '/project-builder': CONTENT_REVIEW_DATE,
  '/customization/sublimated-rash-guards': '2026-09-21',
  '/customization/sublimated-training-shorts': '2026-09-21',
  '/customization/sublimated-bjj-mma-shorts': '2026-09-21',
  '/products/blue-team-rash-guard': CONTENT_REVIEW_DATE,
  '/products/white-logo-rash-guard': CONTENT_REVIEW_DATE,
  '/products/samurai-graphic-rash-guard': CONTENT_REVIEW_DATE,
  '/products/high-split-grappling-shorts': CONTENT_REVIEW_DATE,
  '/products/custom-logo-shorts': '2026-09-21',
  '/products/lightweight-quick-dry-training-shorts': '2026-09-21',
};

export function getRouteModifiedDate(pathname: string) {
  return ROUTE_LAST_MODIFIED[pathname] ?? CONTENT_REVIEW_DATE;
}
