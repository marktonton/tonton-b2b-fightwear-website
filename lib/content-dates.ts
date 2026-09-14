export const CONTENT_REVIEW_DATE = '2026-09-14';

export const ROUTE_LAST_MODIFIED: Record<string, string> = {
  '/': CONTENT_REVIEW_DATE,
  '/collections': CONTENT_REVIEW_DATE,
  '/service-support': CONTENT_REVIEW_DATE,
  '/factory': CONTENT_REVIEW_DATE,
  '/resources': CONTENT_REVIEW_DATE,
  '/project-builder': CONTENT_REVIEW_DATE,
  '/customization/sublimated-rash-guards': CONTENT_REVIEW_DATE,
  '/customization/sublimated-training-shorts': CONTENT_REVIEW_DATE,
  '/customization/sublimated-bjj-mma-shorts': CONTENT_REVIEW_DATE,
  '/products/blue-team-rash-guard': CONTENT_REVIEW_DATE,
  '/products/white-logo-rash-guard': CONTENT_REVIEW_DATE,
  '/products/samurai-graphic-rash-guard': CONTENT_REVIEW_DATE,
  '/products/high-split-grappling-shorts': CONTENT_REVIEW_DATE,
};

export function getRouteModifiedDate(pathname: string) {
  return ROUTE_LAST_MODIFIED[pathname] ?? CONTENT_REVIEW_DATE;
}
