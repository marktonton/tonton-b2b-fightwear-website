import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <div>
          <p className="eyebrow">TONTON SMART FACTORY</p>
          <h1>Premium MMA & Fightwear Manufacturer</h1>
          <p className="lead">Specializing in high-performance rash guards, MMA shorts, and team kits. 10 PCS MOQ with free mockup design.</p>
          <div className="hero-actions">
            <Link href="/collections" className="btn btn-red">View Collections</Link>
            <a href="#inquiry" className="btn btn-dark">Get a Quote</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/assets/banners/banner-01-custom-fight-shorts.jpg" alt="TONTON Factory" />
        </div>
      </section>

      <section className="section intro">
        <div className="section-head">
          <h2>Our Core Categories</h2>
        </div>
        <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <div className="product-card">
            <img src="/assets/products/rashguard-blue-main.png" alt="Rash Guards" />
            <div>
              <h4>Sublimated Rash Guards</h4>
              <Link href="/collections/sublimated-rash-guards" className="cert-btn">View More</Link>
            </div>
          </div>
          <div className="product-card">
            <img src="/assets/products/shorts-black-v2.png" alt="Training Shorts" />
            <div>
              <h4>Sublimated Training Shorts</h4>
              <Link href="/collections/sublimated-training-shorts" className="cert-btn">View More</Link>
            </div>
          </div>
          <div className="product-card">
            <img src="/assets/products/shorts-custom-v2.png" alt="MMA Shorts" />
            <div>
              <h4>Sublimated BJJ MMA Shorts</h4>
              <Link href="/collections/sublimated-bjj-mma-shorts" className="cert-btn">View More</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional sections like Factory, Inquiry can be added here */}
    </div>
  );
}
