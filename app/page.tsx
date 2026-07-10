'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { resolveImage } from '../lib/image-resolver';
import productsData from '../data/products.json';

const BANNERS = [
  'assets/banners/banner-01-custom-fight-shorts.jpg',
  'assets/banners/banner-02-oem-odm-manufacturer.jpg',
  'assets/banners/banner-03-top-quality-oem.png',
  'assets/banners/banner-04-custom-wholesale.png'
];

const FACTORY_IMAGES = [
  'assets/factory/factory-slider-01.jpg',
  'assets/factory/factory-slider-02.jpg',
  'assets/factory/factory-slider-03.jpg',
  'assets/factory/factory-slider-04.jpg',
  'assets/factory/factory-slider-05.jpg',
  'assets/factory/factory-slider-06.jpg',
  'assets/factory/factory-slider-07.jpg'
];

export default function HomePage() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentFactory, setCurrentFactory] = useState(0);
  const [showVideoOverlay, setShowVideoOverlay] = useState(true);

  useEffect(() => {
    const bannerTimer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % BANNERS.length);
    }, 6000);
    const videoTimer = setTimeout(() => setShowVideoOverlay(false), 5000);
    return () => {
      clearInterval(bannerTimer);
      clearTimeout(videoTimer);
    };
  }, []);

  const nextBanner = () => setCurrentBanner((prev) => (prev + 1) % BANNERS.length);
  const prevBanner = () => setCurrentBanner((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);

  return (
    <div>
      {/* 1. HERO SECTION - Cinematic Full Width */}
      <section className="hero">
        <div className="banner-slider">
          <div className="slides">
            {BANNERS.map((src, i) => (
              <div key={i} className={`slide ${i === currentBanner ? 'active' : ''}`}>
                <img src={resolveImage(src)} alt={`Banner ${i}`} />
              </div>
            ))}
          </div>
          <div className="slider-arrow prev" onClick={prevBanner}>&lt;</div>
          <div className="slider-arrow next" onClick={nextBanner}>&gt;</div>
          <div className="banner-dots">
            {BANNERS.map((_, i) => (
              <button key={i} className={`dot ${i === currentBanner ? 'active' : ''}`} onClick={() => setCurrentBanner(i)}></button>
            ))}
          </div>
        </div>

        {/* Content Overlay */}
        <div className="hero-content-overlay">
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 6%' }}>
            <p className="eyebrow" style={{ color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>TONTON SMART FACTORY</p>
            <h1 style={{ color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.5)', maxWidth: '800px' }}>Professional MMA & Fightwear Manufacturer</h1>
            <p className="lead" style={{ color: '#fff', textShadow: '0 2px 5px rgba(0,0,0,0.5)', maxWidth: '650px', fontSize: '20px' }}>
              Premium OEM/ODM production for MMA gyms, academies, and fight teams with 10 PCS MOQ and reliable delivery.
            </p>
            <div className="hero-actions" style={{ marginTop: '30px' }}>
              <Link href="/collections" className="btn btn-red">View Collections</Link>
              <a href="#inquiry" className="btn btn-dark" style={{ marginLeft: '15px' }}>Get Factory Quote</a>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-cats">
        <a href="#rashguard"><span>01</span>Rash Guards</a>
        <a href="#shorts"><span>02</span>MMA Shorts</a>
        <a href="#kits"><span>03</span>Team Kits</a>
        <a href="#factory"><span>04</span>Smart Factory</a>
      </section>

      {/* 2. ADVANCED WHY SECTION */}
      <section className="section intro advanced-why">
        <div className="advanced-why-media">
          <div className="factory-slider">
            <div className="factory-slides">
              {FACTORY_IMAGES.map((src, i) => (
                <img key={i} src={resolveImage(src)} className={i === currentFactory ? 'active' : ''} alt="Factory" style={{ position: 'absolute', inset: 0, opacity: i === currentFactory ? 1 : 0, transition: 'opacity 0.8s ease' }} />
              ))}
            </div>
            <div className="slider-controls" style={{ zIndex: 100 }}>
              <button onClick={() => setCurrentFactory((prev) => (prev - 1 + FACTORY_IMAGES.length) % FACTORY_IMAGES.length)}>&lt;</button>
              <button onClick={() => setCurrentFactory((prev) => (prev + 1) % FACTORY_IMAGES.length)}>&gt;</button>
            </div>
            <div className="slider-dots">
              {FACTORY_IMAGES.map((_, i) => (
                <span key={i} className={`dot ${i === currentFactory ? 'active' : ''}`} onClick={() => setCurrentFactory(i)}></span>
              ))}
            </div>
          </div>
        </div>

        <div className="advanced-why-content">
          <p className="eyebrow">Why Global Brands Trust TONTON</p>
          <h2>Smart Manufacturing + Premium Quality</h2>
          <div className="why-card-grid">
            <div><h3>Smart Hanging</h3><p>Improved workflow stability.</p></div>
            <div><h3>10 PCS MOQ</h3><p>Flexible custom orders.</p></div>
            <div><h3>Free Mockup</h3><p>Artwork confirmation.</p></div>
            <div><h3>OEM / ODM</h3><p>From design to finish.</p></div>
            <div><h3>Sublimation</h3><p>Full-color printing.</p></div>
            <div><h3>BSCI Audited</h3><p>Verified partner.</p></div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATALOG */}
      <section className="section" id="products">
        {productsData.categories.map(cat => (
          <div className="collection-block" id={cat.id} key={cat.id} style={{ marginTop: '50px' }}>
            <div className="collection-title">
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
            </div>
            <div className="product-grid">
              {productsData.products.filter(p => p.categoryId === cat.id).map(product => (
                <article className="product-card" key={product.id}>
                  <img src={resolveImage(product.image)} alt={product.name} />
                  <div>
                    <span>Customization</span>
                    <h4>{product.name}</h4>
                    <a href={`https://wa.me/8617722438678?text=Hello,%20I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}`} className="btn-quote" target="_blank" rel="noopener noreferrer">→ Quote This Product</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 4. SMART MANUFACTURING VIDEO */}
      <section className="factory-hero video-horizontal" id="factory">
        <video autoPlay loop muted playsInline poster={resolveImage('assets/factory/factory-01.jpg')} src={resolveImage('assets/factory-video.mp4')}></video>
        <div className={`video-overlay-content ${showVideoOverlay ? '' : 'fade-out'}`}>
          <p className="eyebrow">Smart Manufacturing</p>
          <h2>Digital Hanging Production System</h2>
        </div>
      </section>

      <section className="section">
        <div className="factory-grid">
          <article><img src={resolveImage('assets/factory/factory-03.jpg')} alt="Sewing" /><h3>Smart Sewing</h3></article>
          <article><img src={resolveImage('assets/factory/factory-05.jpg')} alt="Embroidery" /><h3>Embroidery</h3></article>
          <article><img src={resolveImage('assets/factory/factory-08.jpg')} alt="Sublimation" /><h3>Sublimation</h3></article>
          <article><img src={resolveImage('assets/factory/factory-06.jpg')} alt="QC" /><h3>QC & Packing</h3></article>
        </div>
      </section>

      <section className="inquiry" id="inquiry">
        <form className="inquiry-form">
          <input name="name" placeholder="Name *" required />
          <input name="email" placeholder="Email / WhatsApp *" required />
          <textarea name="message" placeholder="Design idea, logo, etc."></textarea>
          <button type="submit">Send Inquiry</button>
        </form>
      </section>

      <a href="https://wa.me/8617722438678" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
