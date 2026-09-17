'use client';

import React, { useState, useEffect } from 'react';
import { resolveImage } from '../lib/image-resolver';
import productsDataRaw from '../data/products.json';
import RelatedResources from '../components/RelatedResources';

interface Product {
  id: string;
  categoryId: string;
  name: string;
  image: string;
  description: string;
  features?: string[];
}

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

const productsData = productsDataRaw as {
  categories: Category[];
  products: Product[];
};

const FAQ_ITEMS = [
  {
    question: 'What custom sportswear can TONTON produce?',
    answer: 'We work on custom fight wear, teamwear, activewear, gymwear and related sportswear projects. The exact product range is confirmed around your design and project brief.',
  },
  {
    question: 'Can you add our logo and support OEM or ODM work?',
    answer: 'Yes. Share your logo, artwork and requirements so our design and production team can confirm the suitable customization route for your project.',
  },
  {
    question: 'How do you confirm MOQ and repeat orders?',
    answer: 'MOQ and repeat-order terms depend on the product, customization details and production plan. We confirm them with you before the order is finalized.',
  },
  {
    question: 'Can you help with colors, labels and packaging?',
    answer: 'We can review color direction, labels and packaging requirements as part of the project brief and confirm the available options for your order.',
  },
  {
    question: 'What artwork files should we send?',
    answer: 'Please send your logo, design references and any available artwork files through the inquiry form. Our team will review the materials and advise on the next step.',
  },
  {
    question: 'How are sampling and production timing confirmed?',
    answer: 'Sampling and bulk-production timing are confirmed after the product, artwork and order details are reviewed. We will provide a project-specific schedule.',
  },
  {
    question: 'How will we receive progress updates?',
    answer: 'We keep project communication aligned around the confirmed production plan and share updates through the agreed contact channel.',
  },
  {
    question: 'What happens if there is a delivery or after-sales issue?',
    answer: 'Contact our team with the order details and issue description. We will review the situation and advise on the appropriate next step.',
  },
];

const BANNERS = [
  {
    desktop: 'assets/banners/banner-dark-desktop.jpg',
    mobile: 'assets/banners/banner-dark-mobile.jpg',
    alt: 'Custom fightwear manufacturing for teams and brands',
  },
  {
    desktop: 'assets/banners/banner-light-desktop.jpg',
    mobile: 'assets/banners/banner-light-mobile.jpg',
    alt: 'OEM and ODM custom sportswear production',
  },
];

const CUSTOMIZATION_ENTRIES = [
  {
    number: '01',
    title: 'Custom Rash Guards',
    description: 'Full-sublimation Rash Guards for academies, fightwear brands and coordinated team programs.',
    image: 'assets/products/rash-guard-products/blue-team-rash-guard-main-v2.webp',
    alt: 'Blue custom short-sleeve Rash Guard on a model',
    categoryHref: '/customization/sublimated-rash-guards',
    builderProduct: 'Rash Guard',
  },
  {
    number: '02',
    title: 'Custom Training Shorts',
    description: 'Lightweight training shorts with custom colors, logos, waistband and construction options.',
    image: 'assets/products/product-14.png',
    alt: 'Black custom training shorts with branded waistband and leg graphics',
    categoryHref: '/customization/sublimated-training-shorts',
    builderProduct: 'Training Shorts',
  },
  {
    number: '03',
    title: 'Custom BJJ & MMA Shorts',
    description: 'Custom grappling and fight shorts with split, liner, waistband and artwork directions.',
    image: 'assets/products/grappling-shorts-products/high-split-2-in-1/high-split-grappling-shorts-main-v1.webp',
    alt: 'High-split two-in-one custom grappling shorts construction',
    categoryHref: '/customization/sublimated-bjj-mma-shorts',
    builderProduct: 'BJJ / MMA Shorts',
  },
] as const;

const FACTORY_IMAGES = [
  'assets/factory/factory-slider-01.jpg',
  'assets/factory/factory-slider-02.jpg',
  'assets/factory/factory-slider-03.jpg',
  'assets/factory/factory-slider-04.jpg',
  'assets/factory/factory-slider-05.jpg',
  'assets/factory/factory-slider-06.jpg',
  'assets/factory/factory-slider-07.jpg'
];

const PRODUCT_DETAIL_ENTRIES = [
  {
    id: 'blue-team-rash-guard',
    buyer: 'Academies, fightwear brands and coordinated team programs',
    specs: ['220gsm Ultra-Fine Lycra', '85% Polyester / 15% Spandex', 'Silicone Anti-Slip Hem'],
    customization: 'Full sublimation, colors, logos, sleeves, labels and hem details',
  },
  {
    id: 'samurai-graphic-rash-guard',
    buyer: 'Brands developing premium long-sleeve competition collections',
    specs: ['220gsm Ultra-Fine Lycra', 'Long-Sleeve Compression Fit', 'Opaque Four-Way Stretch'],
    customization: 'Full-body artwork, panel graphics, sleeve branding and neckline logos',
  },
  {
    id: 'custom-logo-shorts',
    buyer: 'Clubs and brands needing a clear entry-level competition short',
    specs: ['Elastic Waistband', 'Full-Color Sublimation', 'Custom Logo Placement'],
    customization: 'Colors, logos, waistband direction, labels and artwork layout',
  },
  {
    id: 'pro-mma-shorts-07',
    buyer: 'Gyms and teams building lightweight training uniform programs',
    specs: ['Lightweight Training Construction', 'Sublimation Printing', 'Team Logo Placement'],
    customization: 'Colors, leg graphics, waistband branding and private labels',
  },
  {
    id: 'high-split-grappling-shorts',
    buyer: 'Grappling and MMA brands requiring mobility and layered construction',
    specs: ['Quick-Dry Four-Way Stretch Shell', '250gsm Milk-Silk Liner', 'Anti-Slip Waistband'],
    customization: 'High-split shape, liner artwork, waistband, labels and team graphics',
  },
  {
    id: 'black-white-mma-kit',
    buyer: 'Teams ordering a coordinated rash guard and shorts program',
    specs: ['Matching Rash Guard + Shorts', 'Coordinated Sublimation Artwork', 'Team-Ready Set'],
    customization: 'Shared color system, logos, athlete names, labels and set packaging',
  },
] as const;

function getBuilderProductType(product: Product) {
  if (product.id === 'high-split-grappling-shorts') return 'High-Split Grappling Shorts';
  if (product.categoryId === 'sublimated-rash-guards') return 'Rash Guard';
  if (product.categoryId === 'sublimated-training-shorts') return 'Training Shorts';
  if (product.name.toLowerCase().includes('kit')) return 'Coordinated Team Kit';
  return 'BJJ / MMA Shorts';
}

function getProductBuilderHref(product: Product) {
  const params = new URLSearchParams({
    product: getBuilderProductType(product),
    reference: product.name,
    source: 'homepage-product',
  });
  return `/project-builder?${params.toString()}`;
}

export default function HomePage() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentFactory, setCurrentFactory] = useState(0);

  useEffect(() => {
    const bannerTimer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % BANNERS.length);
    }, 6000);
    return () => clearInterval(bannerTimer);
  }, []);

  const nextBanner = () => setCurrentBanner((prev) => (prev + 1) % BANNERS.length);
  const prevBanner = () => setCurrentBanner((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);

  return (
    <div>
      {/* 1. HERO SECTION - Cinematic Full Width */}
      <section className={`hero hero--${currentBanner === 0 ? 'dark' : 'light'}`} aria-labelledby="homepage-hero-title">
        <div className="banner-slider" role="region" aria-roledescription="carousel" aria-label="TONTON custom fightwear">
          <div className="slides" aria-live="off">
            {BANNERS.map((banner, i) => (
              <div
                key={banner.desktop}
                className={`slide ${i === currentBanner ? 'active' : ''}`}
                aria-hidden={i !== currentBanner}
              >
                <img src={resolveImage(banner.desktop)} alt="" />
              </div>
            ))}
          </div>

          <div className="hero-copy">
            <p className="hero-eyebrow">OEM / ODM FIGHTWEAR FACTORY</p>
            <h1 id="homepage-hero-title">CUSTOM MMA &amp; BJJ FIGHTWEAR MANUFACTURER</h1>
            <p className="hero-description">
              Custom sublimated rash guards, training shorts and BJJ/MMA shorts for brands, gyms and teams.
            </p>
            <ul className="hero-benefits" aria-label="Project benefits">
              <li>LOW MOQ 10 PCS</li>
              <li>FREE DESIGN MOCKUP</li>
              <li>OEM / ODM SUPPORT</li>
            </ul>
            <div className="hero-actions">
              <a className="hero-cta-primary" href="#inquiry">GET CUSTOM PRICING</a>
              <a className="hero-cta-secondary" href="/project-builder?source=homepage-hero">BUILD YOUR PROJECT BRIEF</a>
            </div>
          </div>

          <button className="slider-arrow prev" onClick={prevBanner} aria-label="Previous slide">
            <span aria-hidden="true">‹</span>
          </button>
          <button className="slider-arrow next" onClick={nextBanner} aria-label="Next slide">
            <span aria-hidden="true">›</span>
          </button>

          <div className="banner-dots" aria-label="Choose banner slide">
            {BANNERS.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === currentBanner ? 'active' : ''}`}
                onClick={() => setCurrentBanner(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === currentBanner ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. CUSTOMIZATION ENTRY CARDS */}
      <section className="custom-entry-section" aria-labelledby="custom-entry-title">
        <header className="custom-entry-heading">
          <div>
            <p>START WITH YOUR PRODUCT</p>
            <h2 id="custom-entry-title">Three routes into a custom fightwear project.</h2>
          </div>
          <p>Choose the product family closest to your idea. Review real product directions or open a preselected project brief.</p>
        </header>

        <div className="custom-entry-grid">
          {CUSTOMIZATION_ENTRIES.map((entry) => (
            <article className="custom-entry-card" key={entry.title}>
              <a className="custom-entry-media" href={entry.categoryHref} aria-label={`Explore ${entry.title}`}>
                <img src={resolveImage(entry.image)} alt={entry.alt} loading="lazy" />
                <span aria-hidden="true">{entry.number}</span>
              </a>
              <div className="custom-entry-copy">
                <p>PRODUCT CATEGORY</p>
                <h3>{entry.title}</h3>
                <span>{entry.description}</span>
                <div className="custom-entry-actions">
                  <a
                    className="custom-entry-primary"
                    href={`/project-builder?product=${encodeURIComponent(entry.builderProduct)}&reference=${encodeURIComponent(entry.title)}&source=homepage-category`}
                  >
                    Build This Project
                  </a>
                  <a className="custom-entry-secondary" href={entry.categoryHref}>View Products <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. PROCUREMENT TRUST STRIP */}
      <section className="procurement-trust-strip" aria-labelledby="procurement-trust-title">
        <header className="procurement-trust-heading">
          <p>BUYER CONFIDENCE</p>
          <h2 id="procurement-trust-title">Clear starting points before production.</h2>
          <span>Review the usual project baseline, then confirm the exact terms for your product brief.</span>
        </header>

        <div className="procurement-trust-grid">
          <article>
            <strong>10 PCS</strong>
            <h3>Low MOQ</h3>
            <p>Available for selected styles; the final size and color breakdown is confirmed with your brief.</p>
            <a href="/resources/custom-fightwear-sampling-moq">Read MOQ Guide <span aria-hidden="true">→</span></a>
          </article>
          <article>
            <strong>FREE</strong>
            <h3>Design Mockup</h3>
            <p>Review colors, logo placement and artwork direction before the sampling route is confirmed.</p>
            <a href="/service-support">View Service Process <span aria-hidden="true">→</span></a>
          </article>
          <article>
            <strong>3–7 DAYS</strong>
            <h3>Target Sample Lead Time</h3>
            <p>Target window after product details and usable artwork files have been confirmed.</p>
            <a href="/service-support">Plan a Sample <span aria-hidden="true">→</span></a>
          </article>
          <article>
            <strong>OEM / ODM</strong>
            <h3>Factory Support</h3>
            <p>Design, sampling, production and QC support for brands, gyms and team programs.</p>
            <a href="/factory">Explore Factory <span aria-hidden="true">→</span></a>
          </article>
        </div>
      </section>

      {/* 4. REAL PRODUCT DETAILS */}
      <section className="product-details-section" id="products" aria-labelledby="product-details-title">
        <header className="product-details-heading">
          <div>
            <p>REAL PRODUCT DETAILS</p>
            <h2 id="product-details-title">Compare a practical starting point for your project.</h2>
          </div>
          <p>Review product construction, buyer fit and customization scope before opening a product-specific brief.</p>
        </header>

        <div className="product-details-grid">
          {PRODUCT_DETAIL_ENTRIES.map((entry) => {
            const product = productsData.products.find((item) => item.id === entry.id);
            if (!product) return null;

            return (
              <article className="product-detail-card" key={entry.id}>
                <a className="product-detail-media" href={`/products/${product.id}`} aria-label={`View ${product.name} details`}>
                  <img src={resolveImage(product.image)} alt={product.name} loading="lazy" />
                </a>
                <div className="product-detail-copy">
                  <p className="product-detail-audience">{entry.buyer}</p>
                  <h3>{product.name}</h3>
                  <dl className="product-detail-baseline">
                    <div><dt>MOQ</dt><dd>From 10 pcs*</dd></div>
                    <div><dt>Target Sample</dt><dd>3–7 days*</dd></div>
                  </dl>
                  <ul aria-label={`${product.name} specifications`}>
                    {entry.specs.map((spec) => <li key={spec}>{spec}</li>)}
                  </ul>
                  <div className="product-detail-customization">
                    <span>Customization</span>
                    <p>{entry.customization}</p>
                  </div>
                  <div className="product-detail-actions">
                    <a className="product-detail-primary" href={getProductBuilderHref(product)}>Get Pricing for This Product</a>
                    <a className="product-detail-secondary" href={`/products/${product.id}`}>View Details <span aria-hidden="true">→</span></a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <p className="product-details-note">*MOQ and target sampling windows apply to selected styles and begin after product details and usable artwork are confirmed.</p>
      </section>

      {/* 5. OEM / ODM PROCESS */}
      <section className="oem-process-section" id="custom-process" aria-labelledby="oem-process-title">
        <header className="oem-process-heading">
          <div>
            <p>CUSTOM OEM / ODM PROCESS</p>
            <h2 id="oem-process-title">From project brief to bulk production.</h2>
          </div>
          <p>Know what to prepare, what our team confirms and what happens next at every stage of a custom fightwear project.</p>
        </header>

        <div className="oem-process-list">
          <article className="oem-process-step">
            <div className="oem-process-media">
              <figure className="oem-process-media-main"><img src={resolveImage('assets/process/01-project-brief-design.webp')} alt="TONTON designers preparing custom sportswear artwork on computers" loading="lazy" /></figure>
              <figure className="oem-process-media-side"><img src={resolveImage('assets/process/01-requirements-confirmation.webp')} alt="TONTON team reviewing artwork and project requirements" loading="lazy" /></figure>
            </div>
            <div className="oem-process-copy">
              <span className="oem-process-number">01</span>
              <p className="oem-process-kicker">START YOUR PROJECT</p>
              <h3>Send Your Project Brief</h3>
              <p className="oem-process-lead">Final artwork is not required to start. Share the direction you have, and our team will organize the next questions around your product.</p>
              <div className="oem-process-details">
                <div><strong>Helpful to share</strong><ul><li>Product type and estimated quantity</li><li>Logo or reference images</li><li>Target colors and required timing</li></ul></div>
                <div><strong>We review</strong><ul><li>Product fit and customization route</li><li>Missing specifications or artwork</li><li>Practical next step for the brief</li></ul></div>
              </div>
              <a className="oem-process-link" href="/project-builder?source=homepage-process-step-1">Start Your Project Brief <span aria-hidden="true">→</span></a>
            </div>
          </article>

          <article className="oem-process-step">
            <div className="oem-process-media">
              <figure className="oem-process-media-main"><img src={resolveImage('assets/process/02-sublimation-printing.webp')} alt="TONTON sublimation printing equipment producing custom sportswear panels" loading="lazy" /></figure>
              <figure className="oem-process-media-side"><img src={resolveImage('assets/process/02-pattern-cutting.webp')} alt="TONTON worker cutting printed garment panels for a custom sample" loading="lazy" /></figure>
            </div>
            <div className="oem-process-copy">
              <span className="oem-process-number">02</span>
              <p className="oem-process-kicker">ALIGN THE SPECIFICATION</p>
              <h3>Confirm Design, Specifications &amp; Quote</h3>
              <p className="oem-process-lead">Before sampling, we align the product construction, fabric direction, artwork placement and commercial terms for the selected style.</p>
              <div className="oem-process-details">
                <div><strong>We confirm</strong><ul><li>Logo, colors and artwork layout</li><li>Fabric and construction direction</li><li>MOQ and sample route</li></ul></div>
                <div><strong>You receive</strong><ul><li>Mockup or design direction</li><li>Product-specific recommendation</li><li>Project quotation for review</li></ul></div>
              </div>
            </div>
          </article>

          <article className="oem-process-step">
            <div className="oem-process-media">
              <figure className="oem-process-media-main"><img src={resolveImage('assets/process/03-finished-garment-qc.webp')} alt="TONTON quality control staff checking finished custom garments" loading="lazy" /></figure>
              <figure className="oem-process-media-side"><img src={resolveImage('assets/process/03-stitching-size-inspection.webp')} alt="Close inspection of stitching and garment construction at TONTON" loading="lazy" /></figure>
            </div>
            <div className="oem-process-copy">
              <span className="oem-process-number">03</span>
              <p className="oem-process-kicker">CHECK BEFORE BULK</p>
              <h3>Review &amp; Approve the Sample</h3>
              <p className="oem-process-lead">The target sampling window is 3–7 days after product details and usable artwork are confirmed. Exact timing depends on the selected construction.</p>
              <div className="oem-process-details">
                <div><strong>Review points</strong><ul><li>Fit, sizing and construction</li><li>Colors, logos and print placement</li><li>Labels, waistband and detail options</li></ul></div>
                <div><strong>Approval</strong><ul><li>Record requested revisions</li><li>Confirm the approved specification</li><li>Authorize bulk-production planning</li></ul></div>
              </div>
            </div>
          </article>

          <article className="oem-process-step">
            <div className="oem-process-media">
              <figure className="oem-process-media-main"><img src={resolveImage('assets/process/04-smart-hanging-line.webp')} alt="TONTON smart hanging production line for custom sportswear manufacturing" loading="lazy" /></figure>
              <figure className="oem-process-media-side"><img src={resolveImage('assets/process/04-folding-packing.webp')} alt="TONTON staff folding and packing completed custom sportswear orders" loading="lazy" /></figure>
            </div>
            <div className="oem-process-copy">
              <span className="oem-process-number">04</span>
              <p className="oem-process-kicker">MAKE, CHECK &amp; SHIP</p>
              <h3>Bulk Production, QC &amp; Shipping</h3>
              <p className="oem-process-lead">Bulk production follows the approved sample and confirmed schedule, with inspection and shipping coordination based on the final order requirements.</p>
              <div className="oem-process-details">
                <div><strong>Production control</strong><ul><li>Fabric, printing and construction checks</li><li>Size, stitching and detail inspection</li><li>Packaging against confirmed requirements</li></ul></div>
                <div><strong>Order handover</strong><ul><li>Progress updates through the agreed channel</li><li>Final QC before packing</li><li>Shipping method confirmed by destination</li></ul></div>
              </div>
            </div>
          </article>
        </div>

        <div className="oem-process-cta">
          <div><p>READY TO DEFINE YOUR PRODUCT?</p><h3>Start with a clear brief. We will help organize the production details.</h3></div>
          <a href="/project-builder?source=homepage-process-cta">Build Your Project Brief <span aria-hidden="true">→</span></a>
        </div>
      </section>

      {/* 3. FACTORY DUAL-COLUMN SECTION (IMAGE 3 STYLE) - v1.0.2 */}
      <section className="factory-container" id="factory">
        {/* Left Column: Slider */}
        <div className="factory-slider">
          <div className="factory-slides" style={{ pointerEvents: 'none' }}>
            {FACTORY_IMAGES.map((src, i) => (
              <img 
                key={i} 
                src={resolveImage(src)} 
                className={i === currentFactory ? 'active' : ''} 
                alt={`Factory ${i}`} 
              />
            ))}
          </div>
          <div className="factory-overlay">
            <p>SMART FACTORY</p>
            <h2>Manufacturing Partner</h2>
          </div>
          <div className="slider-controls" style={{ position: 'absolute', top: '50%', left: 0, right: 0, transform: 'translateY(-50%)', display: 'flex', justifyContent: 'space-between', padding: '0 15px', zIndex: 9999, pointerEvents: 'none' }}>
            <button 
              onClick={() => setCurrentFactory((prev) => (prev - 1 + FACTORY_IMAGES.length) % FACTORY_IMAGES.length)}
              style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(0,0,0,0.6)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer', pointerEvents: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >{'<'}</button>
            <button 
              onClick={() => setCurrentFactory((prev) => (prev + 1) % FACTORY_IMAGES.length)}
              style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(0,0,0,0.6)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer', pointerEvents: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >{'>'}</button>
          </div>
        </div>

        {/* Right Column: Company Introduction */}
        <div className="factory-features">
          <p className="eyebrow">About TONTON</p>
          <h2>TONTON SPORTSWEAR CO., LTD</h2>
          <div className="factory-intro">
            <p>
              With more than 20 years of experience in fight wear and professional sportswear, TONTON brings together a strong design and production team for custom apparel projects.
            </p>
            <p>
              We support custom sportswear companies, brand buyers, start-up retailers, sports clubs, and teams with fight, team, active, gym, and custom apparel concepts.
            </p>
          </div>
          <div className="factory-contact">
            <a
              className="factory-whatsapp-cta"
              href="https://wa.me/8617722438678?text=Hello%20TONTON%2C%20I%20would%20like%20to%20discuss%20a%20custom%20sportswear%20project."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send a custom sportswear inquiry on WhatsApp"
            >
              WhatsApp Inquiry
            </a>
            <p className="factory-email">
              Email: <a href="mailto:gary@tontonsportswear.com">gary@tontonsportswear.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* WHY BRANDS CHOOSE TONTON */}
      <section className="why-brands-section" aria-labelledby="why-brands-title">
        <div className="why-brands-copy">
          <p className="eyebrow">Why Brands Choose TONTON</p>
          <h2 id="why-brands-title">Four capabilities for custom sportswear projects</h2>
          <p>From design coordination to production support, our team helps turn custom sportswear concepts into clear, production-ready orders.</p>
        </div>
        <div className="why-brands-visual">
          <img
            src={resolveImage('/assets/factory/why-brands-choose-tonton.jpg')}
            alt="Why brands choose TONTON capabilities"
            loading="lazy"
          />
        </div>
      </section>

      <RelatedResources />

      {/* 4. SEND YOUR INQUIRY */}
      <section className="top-picks-inquiry" id="inquiry" aria-labelledby="send-inquiry-title">
        <div className="top-picks-inquiry-heading">
          <p className="eyebrow">Start Your Project</p>
          <h2 id="send-inquiry-title">SEND YOUR INQUIRY</h2>
          <p>Share your project details and our team will help you plan the next step.</p>
        </div>
        <form className="top-picks-inquiry-form">
          <label>Name<input name="name" placeholder="Your name" required /></label>
          <label>Company<input name="company" placeholder="Company name" /></label>
          <label>Email<input type="email" name="email" placeholder="you@company.com" required /></label>
          <label>Phone<input name="phone" placeholder="WhatsApp or phone" /></label>
          <label>Product<input name="product" placeholder="Product or category" /></label>
          <label>Quantity<input name="quantity" placeholder="Estimated quantity" /></label>
          <label className="top-picks-inquiry-full">Message<textarea name="message" placeholder="Tell us about your design, logo, fabric or timeline" rows={5}></textarea></label>
          <label className="top-picks-inquiry-full">Files<input type="file" name="files" /></label>
          <button className="top-picks-inquiry-full" type="submit">SEND INQUIRY</button>
        </form>
        <section className="top-picks-faq" aria-labelledby="faq-title">
          <div className="top-picks-faq-heading">
            <p className="eyebrow">Helpful Answers</p>
            <h2 id="faq-title">Frequently Asked Questions</h2>
          </div>
          <div className="top-picks-faq-grid">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          }) }} />
        </section>
      </section>

      <a href="https://wa.me/8617722438678" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
