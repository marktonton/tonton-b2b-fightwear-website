export const CONTENT_REVIEW_DATE = '2026-09-15';

export const ROUTE_LAST_MODIFIED: Record<string, string> = {
  '/products/black-white-mma-kit': '2026-10-28',
  '/products/black-gold-rash-guard': '2026-10-28',
  '/products/fuji-art-rash-guard': '2026-10-28',
  '/products/olive-basic-rash-guard': '2026-10-28',
  '/solutions/private-label-fightwear': '2026-10-28',
  '/solutions/bjj-academy-uniforms': '2026-10-28',
  '/resources/custom-fightwear-sampling-moq': '2026-10-28',
  '/site-map': '2026-10-28',
  '/fabrics/four-way-stretch-woven': '2026-10-26',
  '/fabrics/compression-liner-knit': '2026-10-26',
  '/fabrics/stretch-mesh': '2026-10-27',
  '/fabrics/220-gsm-stretch-knit': '2026-10-23',
  '/factory/intelligent-garment-hanging-system': '2026-10-21',
  '/factory/rotary-heat-transfer': '2026-10-21',
  '/factory/electric-straight-knife-cutting': '2026-10-21',
  '/factory/computerized-fabric-cutting': '2026-10-21',
  '/': '2026-10-26',
  '/collections': '2026-10-26',
  '/service-support': '2026-10-26',
  '/factory': '2026-10-27',
  '/factory/multi-head-embroidery': '2026-10-20',
  '/factory/digital-sublimation-printing': '2026-10-21',
  '/about': '2026-10-27',
  '/resources': '2026-10-15',
  '/project-builder': '2026-10-28',
  '/customization/sublimated-rash-guards': '2026-10-28',
  '/customization/sublimated-training-shorts': '2026-09-22',
  '/customization/sublimated-bjj-mma-shorts': '2026-10-26',
  '/products/blue-team-rash-guard': '2026-10-28',
  '/products/white-logo-rash-guard': '2026-10-28',
  '/products/samurai-graphic-rash-guard': '2026-10-28',
  '/products/high-split-grappling-shorts': '2026-10-28',
  '/products/custom-logo-shorts': '2026-10-28',
  '/products/pro-mma-shorts-07': '2026-10-28',
  '/products/pro-mma-shorts-08': '2026-10-28',
  '/products/lightweight-quick-dry-training-shorts': '2026-10-28',
};

export function getRouteModifiedDate(pathname: string) {
  return ROUTE_LAST_MODIFIED[pathname] ?? CONTENT_REVIEW_DATE;
}
