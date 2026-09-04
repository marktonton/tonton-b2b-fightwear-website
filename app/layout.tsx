import React from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>TONTON - B2B Fightwear Catalog</title>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body>
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
            <a href="#factory">Factory</a>
            <a className="nav-cta" href="#inquiry">Send Inquiry</a>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="footer-main">
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
