'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { resolveImage } from '../lib/image-resolver';
import productsData from '../data/products.json';

export default function HomePage() {
  // 1. Banner State
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [
    'assets/banners/banner-01-custom-fight-shorts.jpg',
    'assets/banners/banner-02-oem-odm-manufacturer.jpg',
    'assets/banners/banner-03-top-quality-oem.png',
    'assets/banners/banner-04-custom-wholesale.png'
  ];

  // 2. Factory Slider State
  const [currentFactory, setCurrentFactory] = useState(0);
  const factoryImages = [
    'assets/factory/factory-slider-01.jpg',
    'assets/factory/factory-slider-02.jpg',
    'assets/factory/factory-slider-03.jpg',
    'assets/factory/factory-slider-04.jpg',
    'assets/factory/factory-slider-05.jpg',
    'assets/factory/factory-slider-06.jpg',
    'assets/factory/factory-slider-07.jpg'
  ];

  // 3. Video Text State
  const [showVideoOverlay, setShowVideoOverlay] = useState(true);

  // Auto-slide effect
  useEffect(() => {
    const bannerTimer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    const videoTimer = setTimeout(() => {
      setShowVideoOverlay(false);
    }, 5000);

    return () => {
      clearInterval(bannerTimer);
      clearTimeout(videoTimer);
    };
  }, [banners.length]);

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="banner-slider">
          <div className="slides">
            {banners.map((src, i) => (
              <div key={i} className={`slide ${i === currentBanner ? 'active' : ''}`}>
                <img src={resolveImage(src)} alt={`Banner ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          <div className="banner-dots">
            {banners.map((_, i) => (
              <button 
                key={i} 
                className={`dot ${i === currentBanner ? 'active' : ''}`} 
                onClick={() => setCurrentBanner(i)}
                aria-label={`Slide ${i + 1}`}
              ></button>
            ))}
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
              {factoryImages.map((src, i) => (
                <img key={i} src={resolveImage(src)} className={i === currentFactory ? 'active' : ''} alt={`Factory ${i}`} style={{ position: 'absolute', inset: 0, opacity: i === currentFactory ? 1 : 0, transition: 'opacity 0.8s ease' }} />
              ))}
            </div>
            <div className="slider-controls" style={{ zIndex: 100 }}>
              <button onClick={() => setCurrentFactory((prev) => (prev - 1 + factoryImages.length) % factoryImages.length)}>&lt;</button>
              <button onClick={() => setCurrentFactory((prev) => (prev + 1) % factoryImages.length)}>&gt;</button>
            </div>
            <div className="slider-dots">
              {factoryImages.map((_, i) => (
                <span key={i} className={`dot ${i === currentFactory ? 'active' : ''}`} onClick={() => setCurrentFactory(i)}></span>
              ))}
            </div>
            <div className="factory-overlay" style={{ pointerEvents: 'none' }}>
              <p>SMART FACTORY</p>
              <h2>OEM / ODM Fightwear Manufacturer</h2>
              <div className="overlay-stats">
                <span><b>10 PCS</b>MOQ</span>
                <span><b>7 Days</b>Sample</span>
                <span><b>15 Days</b>Bulk Delivery</span>
              </div>
            </div>
          </div>
        </div>

        <div className="advanced-why-content">
          <p className="eyebrow">Why Global Brands Trust TONTON</p>
          <h2>Smart Manufacturing + Premium Quality + Fast Delivery</h2>
          <p className="why-lead">Built for MMA gyms, BJJ academies, fight teams, distributors and sportswear brands.</p>

          <div className="why-card-grid">
            <div><h3>Smart Hanging System</h3><p>Improve workflow, order tracking and production stability.</p></div>
            <div><h3>10 PCS Low MOQ</h3><p>Flexible custom orders for gyms, teams and new brands.</p></div>
            <div><h3>Free Mockup Design</h3><p>Professional artwork confirmation before sampling.</p></div>
            <div><h3>OEM / ODM Service</h3><p>From concept, design, sampling to finished products.</p></div>
            <div><h3>Embroidery & Sublimation</h3><p>3D puff, flat embroidery, patches and full sublimation.</p></div>
            <div><h3>BSCI Audited Factory</h3><p>Social compliance verified manufacturing partner.</p></div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATALOG */}
      <section className="section" id="products">
        <div className="section-head">
          <p className="eyebrow">Product Catalog</p>
          <h2>Custom MMA Shorts & Rash Guard Collection</h2>
          <p>Professional product structure for MMA gyms, BJJ academies, wrestling clubs, fight teams, distributors and sportswear brands.</p>
        </div>

        {/* Category: Sublimated Rash Guards */}
        <div className="collection-block" id="rashguard">
          <div className="collection-title">
            <h3>Custom Sublimated Rash Guards</h3>
            <p>Compression fit, quick-dry stretch fabric, full sublimation.</p>
          </div>
          <div className="product-grid">
            {productsData.products.filter(p => p.categoryId === "sublimated-rash-guards").map(product => (
              <article className="product-card" key={product.id}>
                <img src={resolveImage(product.image)} alt={product.name} />
                <div>
                  <span>Customization</span>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <a href={`https://wa.me/8617722438678?text=Hello,%20I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}`} className="btn-quote" target="_blank" rel="noopener noreferrer">→ Quote This Product</a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Category: MMA Fight Shorts */}
        <div className="collection-block" id="shorts" style={{ marginTop: '60px' }}>
          <div className="collection-title">
            <h3>Professional MMA Fight Shorts</h3>
            <p>Durable, flexible, and lightweight shorts designed for pro athletes.</p>
          </div>
          <div className="product-grid">
            {productsData.products.filter(p => p.categoryId === "mma-fight-shorts").map(product => (
              <article className="product-card" key={product.id}>
                <img src={resolveImage(product.image)} alt={product.name} />
                <div>
                  <span>Customization</span>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <a href={`https://wa.me/8617722438678?text=Hello,%20I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}`} className="btn-quote" target="_blank" rel="noopener noreferrer">→ Quote This Product</a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Category: Team MMA Kits */}
        <div className="collection-block" id="kits" style={{ marginTop: '60px' }}>
          <div className="collection-title">
            <h3>OEM Brand Projects & MMA Kits</h3>
            <p>Matching rash guard + shorts packages help gyms and brands increase order value.</p>
          </div>
          <div className="product-grid">
            {productsData.products.filter(p => p.categoryId === "team-mma-kits").map(product => (
              <article className="product-card" key={product.id}>
                <img src={resolveImage(product.image)} alt={product.name} />
                <div>
                  <span>Customization</span>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <a href={`https://wa.me/8617722438678?text=Hello,%20I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}`} className="btn-quote" target="_blank" rel="noopener noreferrer">→ Quote This Product</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SMART MANUFACTURING */}
      <section className="factory-hero video-horizontal" id="factory">
        <video autoPlay loop muted playsInline poster={resolveImage('assets/factory/factory-01.jpg')} src={resolveImage('assets/factory-video.mp4')}></video>
        <div className={`video-overlay-content ${showVideoOverlay ? '' : 'fade-out'}`}>
          <p className="eyebrow">Smart Manufacturing</p>
          <h2>Digital Hanging Production System</h2>
          <p>Modern sportswear production line for faster workflow, better order tracking and stable quality control.</p>
        </div>
      </section>

      <section className="section">
        <div className="factory-grid">
          <article><img src={resolveImage('assets/factory/factory-03.jpg')} alt="Smart sewing production line" /><h3>Smart Sewing Line</h3><p>Organized hanging system supports efficient sewing and bulk order management.</p></article>
          <article><img src={resolveImage('assets/factory/factory-05.jpg')} alt="Computerized embroidery machines" /><h3>Embroidery Workshop</h3><p>Computerized embroidery for custom logos, patches and premium brand details.</p></article>
          <article><img src={resolveImage('assets/factory/factory-08.jpg')} alt="Sublimation printing center" /><h3>Sublimation Center</h3><p>Full-color printing for rash guards, jerseys, shorts and custom teamwear.</p></article>
          <article><img src={resolveImage('assets/factory/factory-06.jpg')} alt="Quality control area" /><h3>Inspection & Packing</h3><p>Bulk inspection, sorting and export packing for international orders.</p></article>
        </div>
      </section>

      <section className="inquiry" id="inquiry">
        <div className="inquiry-copy">
          <p className="eyebrow">Start Your Custom Project</p>
          <h2>Get Factory Direct Quotation & Free Mockup</h2>
          <ul>
            <li>10 PCS MOQ</li>
            <li>Free mockup before sampling</li>
            <li>OEM / ODM / private label</li>
            <li>Fast sample and bulk production</li>
          </ul>
        </div>
        <form className="inquiry-form">
          <input name="name" placeholder="Name *" required />
          <input name="email" placeholder="Email / WhatsApp *" required />
          <select name="product">
            <option>Product Type</option>
            <option>Custom Rash Guard</option>
            <option>MMA Shorts</option>
            <option>Rash Guard + Shorts Kit</option>
          </select>
          <textarea name="message" placeholder="Tell us your design idea, logo, fabric request, size range and target delivery date"></textarea>
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
