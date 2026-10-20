export const CONTENT_REVIEW_DATE = '2026-09-15';

export const ROUTE_LAST_MODIFIED: Record<string, string> = {
  '/': '2026-10-15',
  '/collections': CONTENT_REVIEW_DATE,
  '/service-support': '2026-09-21',
  '/factory': '2026-10-20',
  '/factory/digital-sublimation-printing': '2026-10-20',
  '/about': '2026-09-23',
  '/resources': '2026-10-15',
  '/project-builder': '2026-10-15',
  '/customization/sublimated-rash-guards': '2026-10-15',
  '/customization/sublimated-training-shorts': '2026-09-22',
  '/customization/sublimated-bjj-mma-shorts': '2026-10-15',
  '/products/blue-team-rash-guard': '2026-10-15',
  '/products/white-logo-rash-guard': '2026-10-15',
  '/products/samurai-graphic-rash-guard': '2026-10-08',
  '/products/high-split-grappling-shorts': '2026-10-15',
  '/products/custom-logo-shorts': '2026-09-22',
  '/products/pro-mma-shorts-07': '2026-10-08',
  '/products/pro-mma-shorts-08': '2026-09-23',
  '/products/lightweight-quick-dry-training-shorts': '2026-09-22',
};

export function getRouteModifiedDate(pathname: string) {
  return ROUTE_LAST_MODIFIED[pathname] ?? CONTENT_REVIEW_DATE;
}
