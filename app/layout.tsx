import HeaderContact from '../components/HeaderContact';
import FloatingContact from '../components/FloatingContact';
import { serializeStructuredData } from '../lib/structured-data';
import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import '../components/product-gallery-layout.css';
import '../components/product-nav.css';
import '../components/contact-access.css';
import '../components/buyer-fit.css';
import './site-map/site-map.css';
import { resolveImage } from '../lib/image-resolver';
import SearchMeasurement from '../components/SearchMeasurement';
import { BRAND_NAME, COMPANY_NAME, ORGANIZATION_SCHEMA, SITE_URL, WEBSITE_SCHEMA } from '../lib/site-entity';

const SITE_DESCRIPTION = 'Custom MMA and BJJ fightwear manufacturer for brands, gyms and teams. Develop sublimated rash guards, grappling shorts and training shorts with TONTON OEM/ODM support.';
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || 'D92B86221444C90139E4EF3FA861A265';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Custom MMA & BJJ Fightwear Manufacturer | TONTON OEM',
    template: '%s | TONTON Sportswear',
  },
  description: SITE_DESCRIPTION,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 } },
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: ['/icon.svg'],
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: BRAND_NAME,
    title: 'Custom MMA & BJJ Fightwear Manufacturer | TONTON OEM',
    description: SITE_DESCRIPTION,
    images: [{ url: resolveImage('/assets/logo.png'), alt: 'TONTON Sportswear' }],
  },
  twitter: {
    card: 'summary',
    title: 'Custom MMA & BJJ Fightwear Manufacturer | TONTON OEM',
    description: SITE_DESCRIPTION,
    images: [resolveImage('/assets/logo.png')],
  },
  verification: {
    ...(googleVerification ? { google: googleVerification } : {}),
    ...(bingVerification ? { other: { 'msvalidate.01': bingVerification } } : {}),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head><link rel="preconnect" href="https://assets.tontongear.com" /><link rel="dns-prefetch" href="https://assets.tontongear.com" /><link rel="alternate" type="text/plain" href="/llms-full.txt" title="TONTON public website text" /></head>
      <body>
        <a className="skip-content" href="#main-content">Skip to page content</a>
        <SearchMeasurement />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData([ORGANIZATION_SCHEMA, { ...WEBSITE_SCHEMA, description: SITE_DESCRIPTION }]) }} />
        <div className="topbar">
          <span>Custom MMA Fightwear Factory</span>
          <span>10 PCS MOQ</span>
          <span>Free Mockup</span>
          <span>3-7 Days Sample</span>
        </div>

        <header className="header">
          <a className="brand" href="/">
            <img src={resolveImage('/assets/logo.png')} alt="TONTON" style={{ width: '130px' }} />
            <span>OEM / ODM Manufacturer</span>
          </a>
          <HeaderContact />
          <nav aria-label="Main navigation">
            <a href="/">Home</a>
            <div className="nav-dropdown products-nav">
              <a href="/products" className="nav-link">Products ▼</a>
              <div className="dropdown-content">
                <a href="/products">All Products</a>
                <a href="/products/category/rash-guards">Rash Guards</a>
                <a href="/products/category/mma-grappling-shorts">MMA &amp; Grappling Shorts</a>
                <a href="/products/category/training-shorts">Training Shorts</a>
                <a href="/products/category/teamwear-sets">Teamwear Sets</a>
              </div>
            </div>
            <div className="nav-dropdown">
              <a href="/collections" className="nav-link">Customization ▼</a>
              <div className="dropdown-content">
                <a href="/customization/sublimated-rash-guards">Sublimated Rash Guards</a>
                <a href="/customization/sublimated-training-shorts">Sublimated Training Shorts</a>
                <a href="/customization/sublimated-bjj-mma-shorts">Sublimated BJJ MMA Shorts</a>
              </div>
            </div>
            <div className="nav-dropdown">
              <a href="/about" className="nav-link">ABOUT TONTON ▼</a>
              <div className="dropdown-content">
                <a href="/about">Company Profile</a>
                <a href="/factory">Factory &amp; Capabilities</a>
                <a href="/cases">Customer Cases</a>
                <a href="/service-support">Service &amp; Support</a>
              </div>
            </div>
            <div className="nav-dropdown">
              <a href="/blog" className="nav-link">Blog ▼</a>
              <div className="dropdown-content">
                <a href="/blog">All Articles</a>
                <a href="/resources">Technical Buyer Resources</a>
                <a href="/resources#downloads">Free Downloads</a>
                <a href="/resources/custom-fightwear-sampling-moq">Sampling &amp; MOQ</a>
              </div>
            </div>
            <a className="nav-cta" href="/project-builder?source=global-navigation">Build Your Project</a>
          </nav>
          <div className="mobile-quick-links"><a className="mobile-products-link" href="/products">Products →</a><a className="mobile-blog-link" href="/blog">Blog →</a><a className="mobile-blog-link" href="/cases">Cases →</a></div>
        </header>

        <main id="main-content">{children}</main>

        <footer className="footer">
          <div className="footer-main" data-footer-layout="four-column">
            <div className="footer-column footer-brand">
              <img className="footer-logo" src={resolveImage('/assets/logo.png')} alt="TONTON" />
              <p><strong>{COMPANY_NAME}</strong></p>
              <p>Professional MMA & Sportswear OEM Factory. Building premium fightwear brands since 2004.</p>
            </div>
            <div className="footer-column">
              <h2>Quick Solutions</h2>
              <a href="/products">All Products</a>
              <a href="/collections">Product Collections</a>
              <a href="/customization/sublimated-rash-guards">Custom Rash Guards</a>
              <a href="/customization/sublimated-training-shorts">Custom Training Shorts</a>
              <a href="/customization/sublimated-bjj-mma-shorts">Custom BJJ & MMA Shorts</a>
            </div>
            <div className="footer-column">
              <h2>Top Picks</h2>
              <a href="/service-support">Service &amp; Support</a>
              <a href="/about">About TONTON</a>
              <a href="/cases">Customer Cases</a>
              <a href="/blog">Fightwear Blog</a>
              <a href="/resources">Buyer Resources</a>
              <a href="/project-builder?source=footer">Project Builder</a>
              <a href="/#products">Featured Products</a>
              <a href="/#inquiry">Send Your Inquiry</a>
              <a href="/site-map">All Products &amp; Guides</a>
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
            <p>© 2026 {BRAND_NAME}. All rights reserved.</p>
            <p>Privacy Policy | Terms of Service</p>
          </div>
        </footer>
        <FloatingContact />
      </body>
    </html>
  );
}
