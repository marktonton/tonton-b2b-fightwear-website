import React from 'react';
import productsData from '../../../data/products.json';
import Link from 'next/link';
import { resolveImage } from '../../../lib/image-resolver';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = productsData.products.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="section" style={{ textAlign: 'center' }}>
        <h2>Product Not Found</h2>
        <Link href="/collections" className="cert-btn">Back to Collections</Link>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="inquiry" style={{ background: 'none', color: '#151515', padding: '0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div className="inquiry-copy">
          <Link href="/collections" style={{ color: '#e11d2e', marginBottom: '20px', display: 'block' }}>← Back to Collections</Link>
          <img src={resolveImage(product.image)} alt={product.name} style={{ borderRadius: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)', width: '100%', marginBottom: '30px' }} />
        </div>
        
        <div style={{ padding: '0 20px' }}>
          <span style={{ color: '#e11d2e', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px' }}>
            {product.categoryId.replace(/-/g, ' ')}
          </span>
          <h1 style={{ fontSize: '48px', margin: '10px 0 20px' }}>{product.name}</h1>
          <p style={{ fontSize: '20px', color: '#666', lineHeight: '1.6', marginBottom: '30px' }}>{product.description}</p>
          
          <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Key Features:</h3>
          <ul style={{ marginBottom: '40px' }}>
            {(product.features || []).map((feature: any, index: number) => (
              <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#e11d2e', marginRight: '10px' }}>✓</span> {feature}
              </li>
            ))}
          </ul>
          
          <div className="inquiry-form" style={{ background: '#f7f7f8', border: '1px solid #eee', padding: '30px', borderRadius: '20px' }}>
            <h3 style={{ marginBottom: '20px' }}>Request a Quotation</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <input type="text" placeholder="Your Name" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
              <input type="email" placeholder="Your Email" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
              <textarea placeholder="Tell us about your project (Quantity, Logo, etc.)" style={{ gridColumn: '1/-1', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', minHeight: '100px' }}></textarea>
              <button className="btn-red" style={{ gridColumn: '1/-1', padding: '15px', borderRadius: '8px', border: 'none', background: '#e11d2e', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>Send Inquiry</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
