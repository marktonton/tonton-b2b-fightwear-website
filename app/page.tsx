'use client';

import React, { useState, useEffect } from 'react';
import { resolveImage } from '../lib/image-resolver';
import productsData from '../data/products.json';

const BANNERS = [
  'assets/banners/banner-01-custom-fight-shorts.jpg',
  'assets/banners/banner-02-oem-odm-manufacturer.jpg'
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
          <button 
            className="slider-arrow prev" 
            onClick={prevBanner}
            aria-label="Previous Slide"
            style={{ 
              position: 'absolute', left: '30px', top: '50%', transform: 'translateY(-50%)', 
              zIndex: 9999, cursor: 'pointer', background: 'rgba(0,0,0,0.6)', 
              width: '60px', height: '60px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
              fontSize: '24px', pointerEvents: 'auto'
            }}
          >&lt;</button>
          <button 
            className="slider-arrow next" 
            onClick={nextBanner}
            aria-label="Next Slide"
            style={{ 
              position: 'absolute', right: '30px', top: '50%', transform: 'translateY(-50%)', 
              zIndex: 9999, cursor: 'pointer', background: 'rgba(0,0,0,0.6)', 
              width: '60px', height: '60px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
              fontSize: '24px', pointerEvents: 'auto'
            }}
          >&gt;</button>
          <div className="banner-dots">
            {BANNERS.map((_, i) => (
              <button key={i} className={`dot ${i === currentBanner ? 'active' : ''}`} onClick={() => setCurrentBanner(i)} aria-label={`Go to slide ${i+1}`}></button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FACTORY DUAL-COLUMN SECTION (IMAGE 3 STYLE) - v1.0.2 */}
      <section className="factory-container">
        {/* Left Column: Slider */}
        <div className="factory-slider">
          <div className="factory-slides">
            {FACTORY_IMAGES.map((src, i) => (
              <img 
                key={i} 
                src={resolveImage(src)} 
                className={i === currentFactory ? 'active' : ''} 
                alt={`Factory ${i}`} 
              />
            ))}
          </div>
          <div className="slider-controls" style={{ position: 'absolute', top: '50%', left: 0, right: 0, transform: 'translateY(-50%)', display: 'flex', justifyContent: 'space-between', padding: '0 15px', zIndex: 9999, pointerEvents: 'none' }}>
            <button 
              onClick={() => setCurrentFactory((prev) => (prev - 1 + FACTORY_IMAGES.length) % FACTORY_IMAGES.length)}
              style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(0,0,0,0.6)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer', pointerEvents: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >&lt;</button>
            <button 
              onClick={() => setCurrentFactory((prev) => (prev + 1) % FACTORY_IMAGES.length)}
              style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(0,0,0,0.6)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer', pointerEvents: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >&gt;</button>
          </div>
          <div className="factory-overlay">
            <p>SMART FACTORY</p>
            <h2>Manufacturing Partner</h2>
          </div>
        </div>

        {/* Right Column: Features */}
        <div className="factory-features">
          <p className="eyebrow">Why Global Brands Trust TONTON</p>
          <h2>Advanced Manufacturing + Premium Quality</h2>
          <div className="why-card-grid-small">
            <div><h3>Smart Hanging System</h3><p>Improved workflow stability.</p></div>
            <div><h3>10 PCS Low MOQ</h3><p>Flexible custom orders.</p></div>
            <div><h3>Free Mockup Design</h3><p>Professional artwork confirmation.</p></div>
            <div><h3>OEM / ODM Service</h3><p>Concept to finished product.</p></div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATALOG */}
      <section className="section" id="products">
        <div className="section-head">
          <p className="eyebrow">Product Catalog</p>
          <h2>Custom MMA Shorts & Rash Guard Collection</h2>
        </div>
        {productsData.categories.map(cat => (
          <div className="collection-block" id={cat.id} key={cat.id} style={{ marginTop: '50px' }}>
            <div className="collection-title">
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
            </div>
            <div className="product-grid">
              {(productsData.products || []).filter(p => p.categoryId === cat.id).map(product => (
                <article className="product-card" key={product.id}>
                  <img src={resolveImage(product.image)} alt={product.name} />
                  <div>
                    <span>Customization</span>
                    <h4>{product.name}</h4>
                    <a href={`https://wa.me/8617722438678?text=Interested%20in%20${encodeURIComponent(product.name)}`} className="btn-quote" target="_blank" rel="noopener noreferrer">→ Quote</a>
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
          <p className="eyebrow">Digital Hanging Production</p>
          <h2>Modern Sportswear Production Line</h2>
        </div>
      </section>

      <section className="inquiry" id="inquiry">
        <form className="inquiry-form">
          <input name="name" placeholder="Name *" required />
          <input name="email" placeholder="Email / WhatsApp *" required />
          <textarea name="message" placeholder="Design idea, logo, fabric request..."></textarea>
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
