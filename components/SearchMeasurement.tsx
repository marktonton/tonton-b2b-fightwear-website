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
      if (href.includes('wa.me/')) sendEvent('contact_whatsapp', { link_text: linkText });
      else if (href.startsWith('mailto:')) sendEvent('contact_email', { link_text: linkText });
      else if (href.startsWith('tel:')) sendEvent('contact_phone', { link_text: linkText });
      else if (href.includes('#inquiry')) sendEvent('inquiry_view', { link_text: linkText });
      else if (href.startsWith('/project-builder')) sendEvent('project_builder_open', { link_text: linkText });
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
