'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | IArguments>;
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function sendEvent(name: string, parameters: Record<string, string> = {}) {
  if (!measurementId || !window.gtag) return;
  window.gtag('event', name, parameters);
}

function ConversionTracker() {
  const pathname = usePathname();

  useEffect(() => {
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
  if (!measurementId) return null;
  return <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
    <Script id="tonton-ga4" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', '${measurementId}', { send_page_view: false });
    `}</Script>
    <ConversionTracker />
  </>;
}
