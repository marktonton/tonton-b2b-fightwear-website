import React from 'react';
import Script from 'next/script';
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
                <a href="/collections/sublimated-rash-guards">Sublimated Rash Guards</a>
                <a href="/collections/sublimated-training-shorts">Sublimated Training Shorts</a>
                <a href="/collections/sublimated-bjj-mma-shorts">Sublimated BJJ MMA Shorts</a>
              </div>
            </div>
            <a href="/collections">Collections</a>
            <a href="#factory">Factory</a>
            <a className="nav-cta" href="#inquiry">Send Inquiry</a>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div>
            <img src="/assets/logo.png" alt="TONTON" />
            <p>Professional MMA & Sportswear OEM Factory. Building premium fightwear brands since 2014.</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p>© 2026 TONTON Sports. All rights reserved.</p>
            <p>Privacy Policy | Terms of Service</p>
          </div>
        </footer>
        
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
