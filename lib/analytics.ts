import { getDiscoveryAttribution } from './traffic-attribution';

// Only controlled event labels belong here. Never send contact details or artwork.
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const analyticsMeasurementId = measurementId && /^G-[A-Z0-9]+$/.test(measurementId) ? measurementId : undefined;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    tontonAnalyticsConfigured?: boolean;
  }
}

export function sendAnalyticsEvent(name: string, parameters: Record<string, string> = {}) {
  if (!analyticsMeasurementId || typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer!.push(arguments); };
  if (!window.tontonAnalyticsConfigured) {
    window.tontonAnalyticsConfigured = true;
    window.gtag('js', new Date());
    window.gtag('config', analyticsMeasurementId, { send_page_view: false });
  }
  window.gtag('event', name, { ...getDiscoveryAttribution(), ...parameters });
}
