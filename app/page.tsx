import React from 'react';
import { resolveImage } from '../lib/image-resolver';

export default function HomePage() {
  return (
    <div>
      <section className="hero banner-slider">
        <div className="slides">
          <div className="slide active"><img src={resolveImage('assets/banners/banner-01-custom-fight-shorts.jpg')} alt="Custom fight shorts banner" /></div>
          <div className="slide"><img src={resolveImage('assets/banners/banner-02-oem-odm-manufacturer.jpg')} alt="Professional OEM ODM manufacturer banner" /></div>
          <div className="slide"><img src={resolveImage('assets/banners/banner-03-top-quality-oem.png')} alt="Top quality custom fightwear OEM ODM banner" /></div>
          <div className="slide"><img src={resolveImage('assets/banners/banner-04-custom-wholesale.png')} alt="Top quality custom fightwear custom wholesale banner" /></div>
        </div>
        <div className="banner-dots">
          <button className="dot active" aria-label="Banner 1"></button>
          <button className="dot" aria-label="Banner 2"></button>
          <button className="dot" aria-label="Banner 3"></button>
          <button className="dot" aria-label="Banner 4"></button>
        </div>
      </section>

      <section className="quick-cats">
        <a href="#rashguard"><span>01</span>Custom Rash Guards</a>
        <a href="#shorts"><span>02</span>MMA Fight Shorts</a>
        <a href="#kits"><span>03</span>Team MMA Kits</a>
        <a href="#factory"><span>04</span>Smart Factory</a>
      </section>

      <section className="section intro advanced-why">
        <div className="advanced-why-media">
          <div className="factory-slider">
            <div className="factory-slides">
              <img src={resolveImage('assets/factory/factory-slider-01.jpg')} alt="TONTON Smart Factory 01" className="active" />
              <img src={resolveImage('assets/factory/factory-slider-02.jpg')} alt="TONTON Smart Factory 02" />
              <img src={resolveImage('assets/factory/factory-slider-03.jpg')} alt="TONTON Smart Factory 03" />
              <img src={resolveImage('assets/factory/factory-slider-04.jpg')} alt="TONTON Smart Factory 04" />
              <img src={resolveImage('assets/factory/factory-slider-05.jpg')} alt="TONTON Smart Factory 05" />
              <img src={resolveImage('assets/factory/factory-slider-06.jpg')} alt="TONTON Smart Factory 06" />
              <img src={resolveImage('assets/factory/factory-slider-07.jpg')} alt="TONTON Smart Factory 07" />
            </div>
            <div className="slider-controls">
              <button className="slider-prev" aria-label="Previous slide">&lt;</button>
              <button className="slider-next" aria-label="Next slide">&gt;</button>
            </div>
            <div className="slider-dots">
              <span className="dot active" data-index="0"></span>
              <span className="dot" data-index="1"></span>
              <span className="dot" data-index="2"></span>
              <span className="dot" data-index="3"></span>
              <span className="dot" data-index="4"></span>
              <span className="dot" data-index="5"></span>
              <span className="dot" data-index="6"></span>
            </div>
          </div>
          <div className="factory-overlay">
            <p>SMART FACTORY</p>
            <h2>OEM / ODM Fightwear Manufacturer</h2>
            <div className="overlay-stats">
              <span><b>10 PCS</b>MOQ</span>
              <span><b>7 Days</b>Sample</span>
              <span><b>15 Days</b>Bulk Delivery</span>
            </div>
          </div>
        </div>

        <div className="advanced-why-content">
          <p className="eyebrow">Why Global Brands Trust TONTON</p>
          <h2>Smart Manufacturing + Premium Quality + Fast Delivery</h2>
          <p className="why-lead">Built for MMA gyms, BJJ academies, fight teams, distributors and sportswear brands that need stable OEM/ODM production with low MOQ and reliable delivery.</p>

          <div className="why-card-grid">
            <div><h3>Smart Hanging System</h3><p>Improve workflow, order tracking and production stability.</p></div>
            <div><h3>10 PCS Low MOQ</h3><p>Flexible custom orders for gyms, teams and new brands.</p></div>
            <div><h3>Free Mockup Design</h3><p>Professional artwork confirmation before sampling.</p></div>
            <div><h3>OEM / ODM Service</h3><p>From concept, design, sampling to finished products.</p></div>
            <div><h3>Embroidery & Sublimation</h3><p>3D puff, flat embroidery, patches and full sublimation.</p></div>
            <div><h3>BSCI Audited Factory</h3><p>Social compliance verified manufacturing partner.</p></div>
          </div>

          <div className="why-bottom-stats">
            <div><strong>10+</strong><span>Years Experience</span></div>
            <div><strong>300+</strong><span>Clients Served</span></div>
            <div><strong>100,000+</strong><span>PCS / Month</span></div>
            <div><strong>98.7%</strong><span>On-Time Delivery</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="products">
        <div className="section-head">
          <p className="eyebrow">Product Catalog</p>
          <h2>Custom MMA Shorts & Rash Guard Collection</h2>
          <p>Professional product structure for MMA gyms, BJJ academies, wrestling clubs, fight teams, distributors, Shopify sellers and sportswear brands.</p>
        </div>

        <div className="collection-block" id="rashguard">
          <div className="collection-title">
            <h3>Custom Short Sleeve Rash Guards</h3>
            <p>Compression fit, quick-dry stretch fabric, full sublimation or clean logo placement.</p>
          </div>
          <div className="product-grid">
            <article className="product-card">
              <img src={resolveImage('assets/products/rashguard-olive-main.png')} alt="Olive short sleeve rash guard" />
              <div>
                <span>Short Sleeve</span>
                <h4>Olive Basic Rash Guard</h4>
                <p>Minimal style for gym uniforms and private label lines.</p>
                <a href="https://wa.me/8617722438678?text=Hello,%20I'm%20interested%20in%20the%20Olive%20Basic%20Rash%20Guard" className="btn-quote" target="_blank" rel="noopener noreferrer">→ Quote This Product</a>
              </div>
            </article>
            <article className="product-card">
              <img src={resolveImage('assets/products/rashguard-blue-main.png')} alt="Blue short sleeve rash guard" />
              <div>
                <span>Short Sleeve</span>
                <h4>Blue Team Rash Guard</h4>
                <p>Best for team color customization and academy orders.</p>
                <a href="https://wa.me/8617722438678?text=Hello,%20I'm%20interested%20in%20the%20Blue%20Team%20Rash%20Guard" className="btn-quote" target="_blank" rel="noopener noreferrer">→ Quote This Product</a>
              </div>
            </article>
            <article className="product-card">
              <img src={resolveImage('assets/products/rashguard-white-main.png')} alt="White logo rash guard" />
              <div>
                <span>Short Sleeve</span>
                <h4>White Logo Rash Guard</h4>
                <p>Clean white base for club logos and sponsor branding.</p>
                <a href="https://wa.me/8617722438678?text=Hello,%20I'm%20interested%20in%20the%20White%20Logo%20Rash%20Guard" className="btn-quote" target="_blank" rel="noopener noreferrer">→ Quote This Product</a>
              </div>
            </article>
          </div>
        </div>

        <div className="collection-block elite">
          <div className="collection-title">
            <h3>Elite Long Sleeve Rash Guard Series</h3>
            <p>High-impact sublimation artwork for fightwear brands and premium No-Gi collections.</p>
          </div>
          <div className="product-grid">
            <article className="product-card">
              <img src={resolveImage('assets/products/rashguard-long-samurai-v2.png')} alt="Samurai black white long sleeve rash guard" />
              <div>
                <span>Elite Series</span>
                <h4>Samurai Graphic Rash Guard</h4>
                <p>All-over artwork, long sleeve compression fit.</p>
                <a href="https://wa.me/8617722438678?text=Hello,%20I'm%20interested%20in%20the%20Samurai%20Graphic%20Rash%20Guard" className="btn-quote" target="_blank" rel="noopener noreferrer">→ Quote This Product</a>
              </div>
            </article>
            <article className="product-card">
              <img src={resolveImage('assets/products/rashguard-long-fuji-v2.png')} alt="Fuji long sleeve rash guard" />
              <div>
                <span>Elite Series</span>
                <h4>Fuji Art Rash Guard</h4>
                <p>Premium print panel with detailed graphic placement.</p>
                <a href="https://wa.me/8617722438678?text=Hello,%20I'm%20interested%20in%20the%20Fuji%20Art%20Rash%20Guard" className="btn-quote" target="_blank" rel="noopener noreferrer">→ Quote This Product</a>
              </div>
            </article>
            <article className="product-card">
              <img src={resolveImage('assets/products/rashguard-long-red-v2.png')} alt="Black gold long sleeve rash guard" />
              <div>
                <span>Elite Series</span>
                <h4>Black Gold Signature Rash Guard</h4>
                <p>High-end brand style for BJJ and MMA collections.</p>
                <a href="https://wa.me/8617722438678?text=Hello,%20I'm%20interested%20in%20the%20Black%20Gold%20Signature%20Rash%20Guard" className="btn-quote" target="_blank" rel="noopener noreferrer">→ Quote This Product</a>
              </div>
            </article>
          </div>
        </div>

        <div className="collection-block" id="kits">
          <div className="collection-title">
            <h3>OEM Brand Projects & MMA Kits</h3>
            <p>Matching rash guard + shorts packages help gyms and brands increase order value.</p>
          </div>
          <div className="product-grid">
            <article className="product-card">
              <img src={resolveImage('assets/products/kit-bw-v2.png')} alt="MMA kit with rash guard and shorts" />
              <div>
                <span>Team Kit</span>
                <h4>Black / White MMA Kit</h4>
                <p>Matching rash guard and MMA shorts for teams.</p>
                <a href="https://wa.me/8617722438678?text=Hello,%20I'm%20interested%20in%20the%20Black%20%2F%20White%20MMA%20Kit" className="btn-quote" target="_blank" rel="noopener noreferrer">→ Quote This Product</a>
              </div>
            </article>
            <article className="product-card">
              <img src={resolveImage('assets/products/shorts-custom-v2.png')} alt="MMA shorts close-up" />
              <div>
                <span>OEM Project</span>
                <h4>Custom Logo Fight Shorts</h4>
                <p>Elastic waistband, logo printing and reinforced sewing.</p>
                <a href="https://wa.me/8617722438678?text=Hello,%20I'm%20interested%20in%20the%20Custom%20Logo%20Fight%20Shorts" className="btn-quote" target="_blank" rel="noopener noreferrer">→ Quote This Product</a>
              </div>
            </article>
            <article className="product-card">
              <img src={resolveImage('assets/products/shorts-black-v2.png')} alt="Black custom MMA shorts" />
              <div>
                <span>Fight Shorts</span>
                <h4>Black Competition Shorts</h4>
                <p>Lightweight fabric, private label and all-over print options.</p>
                <a href="https://wa.me/8617722438678?text=Hello,%20I'm%20interested%20in%20the%20Black%20Competition%20Shorts" className="btn-quote" target="_blank" rel="noopener noreferrer">→ Quote This Product</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section dark" id="custom">
        <div className="section-head">
          <p className="eyebrow">Customization Options</p>
          <h2>Build Your Fightwear Brand With One Factory</h2>
        </div>
        <div className="custom-grid">
          <div><h3>Printing</h3><p>Full sublimation, heat transfer, sponsor logos, team names and number printing.</p></div>
          <div><h3>Embroidery</h3><p>Flat embroidery, 3D embroidery, patches and brand logo applications.</p></div>
          <div><h3>Fabric</h3><p>Polyester spandex, compression fabric, quick-dry stretch and mesh panels.</p></div>
          <div><h3>Private Label</h3><p>Woven label, neck label, hang tag, polybag and brand packaging.</p></div>
        </div>
      </section>

      <section className="factory-hero" id="factory">
        <video autoPlay loop muted playsInline poster={resolveImage('assets/factory/factory-01.jpg')} src={resolveImage('assets/factory-video.mp4')}></video>
        <div>
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

      <section className="section certificates" id="certificates">
        <div className="certificates-container">
          <div className="cert-content">
            <p className="eyebrow">Compliance</p>
            <h2>Audited Manufacturing Partner</h2>
            <p>TONTON Sports has an amfori BSCI social audit report. The site shows strengths in no child labor, no forced labor, ethical business behavior, environment protection and occupational health & safety.</p>
            <div className="cert-pills">
              <span>BSCI Audit</span><span>LRQA</span><span>No Child Labour</span><span>No Forced Labour</span><span>Ethical Business</span>
            </div>
          </div>
          <div className="cert-poster">
            <div className="poster-frame">
              <img src={resolveImage('assets/certificates/iso-9001.png')} alt="ISO 9001 Certificate" className="cert-img" />
              <div className="poster-footer">
                <p>Verified ISO 9001:2015 Quality Management System</p>
                <a href={resolveImage('assets/certificates/bsci-report-1.pdf')} target="_blank" rel="noopener noreferrer" className="cert-btn">View BSCI Report PDF</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section process" id="process">
        <div className="section-head">
          <p className="eyebrow">OEM Process</p>
          <h2>Simple Process for B2B Buyers</h2>
        </div>
        <div className="steps">
          <div><b>01</b><h3>Send Inquiry</h3><p>Tell us product type, quantity, logo and design idea.</p></div>
          <div><b>02</b><h3>Free Mockup</h3><p>We prepare a digital design before sample production.</p></div>
          <div><b>03</b><h3>Sample</h3><p>3-7 days sample time depending on design complexity.</p></div>
          <div><b>04</b><h3>Bulk Production</h3><p>10-25 days production with QC and packing.</p></div>
          <div><b>05</b><h3>Shipping</h3><p>Worldwide delivery by express, air or sea shipment.</p></div>
        </div>
      </section>

      <section className="section faq">
        <div className="section-head">
          <p className="eyebrow">FAQ</p>
          <h2>Common Buyer Questions</h2>
        </div>
        <div className="faq-wrap">
          <details open><summary>What is your MOQ?</summary><p>MOQ starts from 10 PCS per design, suitable for gyms, teams, small brands and test orders.</p></details>
          <details><summary>Can you create the design for us?</summary><p>Yes. Send your logo, color idea and reference style. We provide a free mockup before sampling.</p></details>
          <details><summary>Can you make rash guard and shorts as one set?</summary><p>Yes. We strongly recommend MMA kits because matching sets increase brand consistency and order value.</p></details>
          <details><summary>Do you support private label?</summary><p>Yes. We can support neck label, woven label, hang tag, packaging, logo placement and brand project development.</p></details>
          <details><summary>What products can you manufacture?</summary><p>MMA shorts, rash guards, wrestling singlets, baseball jerseys, hockey jerseys, American football uniforms and other custom teamwear.</p></details>
        </div>
      </section>

      <section className="inquiry" id="inquiry">
        <div className="inquiry-copy">
          <p className="eyebrow">Start Your Custom Project</p>
          <h2>Get Factory Direct Quotation & Free Mockup</h2>
          <p>Fill in your project details. This static demo form opens the buyer’s email app. For live deployment, connect this form to Shopify, WordPress, Formspree, HubSpot or your company email system.</p>
          <ul>
            <li>10 PCS MOQ</li>
            <li>Free mockup before sampling</li>
            <li>OEM / ODM / private label</li>
            <li>Fast sample and bulk production</li>
          </ul>
        </div>
        <form className="inquiry-form">
          <input name="name" placeholder="Name *" required />
          <input name="company" placeholder="Company / Gym / Brand" />
          <input name="email" placeholder="Email / WhatsApp *" required />
          <select name="product">
            <option>Product Type</option>
            <option>Custom Rash Guard</option>
            <option>MMA Shorts</option>
            <option>Rash Guard + Shorts Kit</option>
            <option>Wrestling / BJJ Apparel</option>
            <option>Teamwear Jerseys</option>
          </select>
          <input name="quantity" placeholder="Quantity" />
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
