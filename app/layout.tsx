import React from 'react';
import Script from 'next/script';
import '../public/style.css';

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
            <div className="nav-dropdown" style={{ position: 'relative', display: 'inline-block' }}>
              <a href="/collections" style={{ cursor: 'pointer' }}>Customization ▼</a>
              <div className="dropdown-content" style={{ 
                display: 'none', 
                position: 'absolute', 
                backgroundColor: '#0a0a0c', 
                minWidth: '220px', 
                boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', 
                zIndex: 100,
                borderRadius: '8px',
                padding: '10px 0'
              }}>
                <a href="/collections/sublimated-rash-guards" style={{ padding: '12px 16px', display: 'block', color: '#fff' }}>Sublimated Rash Guards</a>
                <a href="/collections/sublimated-training-shorts" style={{ padding: '12px 16px', display: 'block', color: '#fff' }}>Sublimated Training Shorts</a>
                <a href="/collections/sublimated-bjj-mma-shorts" style={{ padding: '12px 16px', display: 'block', color: '#fff' }}>Sublimated BJJ MMA Shorts</a>
              </div>
            </div>
            <a href="/collections">Collections</a>
            <a href="#factory">Factory</a>
            <a className="nav-cta" href="#inquiry">Send Inquiry</a>
          </nav>
        </header>

        <style dangerouslySetInnerHTML={{ __html: `
          .nav-dropdown:hover .dropdown-content { display: block !important; }
          .dropdown-content a:hover { background-color: #e11d2e !important; }
        ` }} />

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
