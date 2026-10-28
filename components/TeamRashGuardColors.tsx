'use client';
import { useEffect, useState } from 'react';
import { resolveImage } from '../lib/image-resolver';
import './team-rashguard-colors.css';
const variants = [
  { color: 'Olive', key: 'olive', sku: 'TT-RG-SS-01-OLV', image: 'assets/products/rashguard-olive-main.png', hex: '#55583d' },
  { color: 'Blue', key: 'blue', sku: 'TT-RG-SS-01-BLU', image: 'assets/products/rash-guard-products/blue-team-rash-guard-main-v2.webp', hex: '#1554c5' },
  { color: 'White', key: 'white', sku: 'TT-RG-SS-01-WHT', image: 'assets/products/rash-guard-products/white-club-rash-guard-main-v2.webp', hex: '#ffffff' },
] as const;
export default function TeamRashGuardColors() {
  const [selected, setSelected] = useState('blue');
  useEffect(() => {
    const update = () => { const color = new URLSearchParams(window.location.search).get('color'); setSelected(variants.some(v=>v.key===color)?color!:'blue'); };
    update(); window.addEventListener('popstate', update); return () => window.removeEventListener('popstate', update);
  }, []);
  const current = variants.find(v=>v.key===selected) ?? variants[1];
  return <section className="team-color-picker" aria-label="Rash guard color SKUs">
    <div className={`team-color-photo ${current.key==='olive'?'team-color-olive':''}`}><img src={resolveImage(current.image)} alt={`Custom short-sleeve team rash guard in ${current.color}`} width="700" height="875" /></div>
    <p aria-live="polite"><strong>Color: {current.color}</strong> · SKU: {current.sku}</p>
    <nav aria-label="Choose rash guard color">{variants.map(v=><a key={v.key} href={`?color=${v.key}`} aria-current={v.key===selected?'true':undefined} onClick={event=>{event.preventDefault();setSelected(v.key);const u=new URL(window.location.href);u.searchParams.set('color',v.key);window.history.pushState({},'',u);}}><span style={{backgroundColor:v.hex}} aria-hidden="true" />{v.color}</a>)}</nav>
    <table><caption>One product · three color SKUs</caption><thead><tr><th scope="col">Color</th><th scope="col">Color SKU</th></tr></thead><tbody>{variants.map(v=><tr key={v.key}><th scope="row">{v.color}</th><td>{v.sku}</td></tr>)}</tbody></table>
    <p className="team-color-note">Color SKU codes identify this website reference, not stock availability. Confirm size allocations, fabric and dye lot, logo artwork and sample approval for each color. Blue and White use the published 220gsm, 85% polyester / 15% spandex reference; approve the Olive material record before bulk production.</p>
    <a className="rg-btn-primary" href={`/project-builder?product=Rash%20Guard&reference=${current.sku}&source=team-rash-guard-color`}>Request {current.color} / {current.sku} →</a>
  </section>;
}
