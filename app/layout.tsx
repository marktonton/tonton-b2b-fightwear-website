import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

const SITE_URL = 'https://www.tontongear.com';
const SITE_DESCRIPTION = 'TONTON Sportswear provides custom fightwear and professional sportswear manufacturing for brands, teams, clubs, and retailers.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'TONTON Sportswear | Custom Fightwear Manufacturer',
    template: '%s | TONTON Sportswear',
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: ['/icon.svg'],
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'TONTON Sportswear',
    title: 'TONTON Sportswear | Custom Fightwear Manufacturer',
    description: SITE_DESCRIPTION,
    images: [{ url: '/assets/logo.png', alt: 'TONTON Sportswear' }],
  },
  twitter: {
    card: 'summary',
    title: 'TONTON Sportswear | Custom Fightwear Manufacturer',
    description: SITE_DESCRIPTION,
    images: ['/assets/logo.png'],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TONTON Sportswear Co., Ltd.',
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo.png`,
  email: 'gary@tontonsportswear.com',
  telephone: '+86 17722438678',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jiewei, Shangmugu Community, Pinghu Street, Longgang District, Shenzhen 207, Building A, Industrial City Phase III Factory',
    addressLocality: 'Shenzhen',
    addressCountry: 'CN',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'TONTON Sportswear',
  url: SITE_URL,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema]) }} />
        <div className="topbar">
          <span>Custom MMA Fightwear Factory</span>
          <span>10 PCS MOQ</span>
          <span>Free Mockup</span>
          <span>3-7 Days Sample</span>
        </div>

        <header className="header">
          <a className="brand" href="/">
            <img src="/assets/logo.png" alt="TONTON" style={{ width: '130px' }} />
            <span>OEM / ODM Manufacturer</span>
          </a>
          <nav>
            <a href="/">Home</a>
            <div className="nav-dropdown">
              <a href="/collections" className="nav-link">Customization ▼</a>
              <div className="dropdown-content">
                <a href="/customization/sublimated-rash-guards">Sublimated Rash Guards</a>
                <a href="/customization/sublimated-training-shorts">Sublimated Training Shorts</a>
                <a href="/customization/sublimated-bjj-mma-shorts">Sublimated BJJ MMA Shorts</a>
              </div>
            </div>
            <a href="/collections">Collections</a>
            <a href="/factory">Factory</a>
            <a className="nav-cta" href="#inquiry">Send Inquiry</a>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="footer-main" data-footer-layout="four-column">
            <div className="footer-column footer-brand">
              <img className="footer-logo" src="/assets/logo.png" alt="TONTON" />
              <p>Professional MMA & Sportswear OEM Factory. Building premium fightwear brands since 2014.</p>
            </div>
            <div className="footer-column">
              <h2>Quick Solutions</h2>
              <a href="/collections">Product Collections</a>
              <a href="/customization/sublimated-rash-guards">Custom Rash Guards</a>
              <a href="/customization/sublimated-training-shorts">Custom Training Shorts</a>
              <a href="/customization/sublimated-bjj-mma-shorts">Custom BJJ & MMA Shorts</a>
            </div>
            <div className="footer-column">
              <h2>Top Picks</h2>
              <a href="/#products">Featured Products</a>
              <a href="/#inquiry">Send Your Inquiry</a>
              <a href="/collections">Explore Collections</a>
            </div>
            <div className="footer-column footer-contact">
              <h2>Contact Us</h2>
              <a href="mailto:gary@tontonsportswear.com">gary@tontonsportswear.com</a>
              <a href="tel:+8617722438678">+86 17722438678</a>
              <a href="https://wa.me/8617722438678">WhatsApp: +86 17722438678</a>
              <address>Jiewei, Shangmugu Community, Pinghu Street, Longgang District, Shenzhen 207, Building A, Industrial City Phase III Factory</address>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 TONTON Sports. All rights reserved.</p>
            <p>Privacy Policy | Terms of Service</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
