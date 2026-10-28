'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { getDiscoveryAttribution } from '../lib/traffic-attribution';

import { analyticsMeasurementId as measurementId, sendAnalyticsEvent as sendEvent } from '../lib/analytics';

function ConversionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    getDiscoveryAttribution();
    sendEvent('page_view', {
      page_location: window.location.href,
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest('a') : null;
      if (!target) return;
      const href = target.getAttribute('href') ?? '';
      const linkText = target.textContent?.trim().slice(0, 100) ?? '';
      const context = { link_text: linkText, page_path: window.location.pathname };
      if (href.includes('wa.me/')) sendEvent('contact_whatsapp', context);
      else if (href.startsWith('mailto:')) sendEvent('contact_email', context);
      else if (href.startsWith('tel:')) sendEvent('contact_phone', context);
      else if (href.includes('#inquiry')) sendEvent('inquiry_view', context);
      else if (href.startsWith('/project-builder')) {
        const destination = new URL(href, window.location.origin);
        sendEvent('project_builder_open', {
          ...context,
          product_type: destination.searchParams.get('product')?.slice(0, 160) ?? '',
          reference_product: destination.searchParams.get('reference')?.slice(0, 240) ?? '',
          entry_source: destination.searchParams.get('source')?.slice(0, 160) ?? '',
        });
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}

export default function SearchMeasurement() {
  return <>
    {measurementId && <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />}
    <ConversionTracker />
  </>;
}
