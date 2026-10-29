'use client';
import { useEffect, useState } from 'react';
import data from '../data/snake-scale-product.json';
export default function SnakeScaleColors(){
 const [color,setColor]=useState('black');
 useEffect(()=>{const read=()=>{const value=new URLSearchParams(window.location.search).get('color');setColor(data.variants.some(v=>v.key===value)?value!:'black');};read();window.addEventListener('popstate',read);return()=>window.removeEventListener('popstate',read);},[]);
 const item=data.variants.find(v=>v.key===color)??data.variants[0];
 return <div className="snake-color-layout"><figure className="snake-selected"><img src={`${data.base}snake-scale-${item.image}.webp`} width="960" height="960" alt={`${item.name} snake-scale MMA shorts — ${item.note}`} /><figcaption>{item.note}</figcaption></figure><div className="snake-color-copy"><p className="snake-kicker">ONE PRODUCT · FOUR COLOR REFERENCES</p><h2>Choose your color direction.</h2><p aria-live="polite"><strong>{item.name}</strong><br/>Color SKU: {item.sku}</p><nav aria-label="Choose snake-scale shorts color">{data.variants.map(v=><a href={`?color=${v.key}`} key={v.key} aria-current={v.key===color?'true':undefined} onClick={e=>{e.preventDefault();setColor(v.key);const url=new URL(window.location.href);url.searchParams.set('color',v.key);window.history.pushState({},'',url);}}><span style={{background:v.hex}} aria-hidden="true"/>{v.name}</a>)}</nav><p>Reference SKU codes identify the color direction, not stock availability. Confirm sizes, materials and artwork in your project brief.</p><a className="snake-button" href={`/project-builder?reference=${item.sku}&source=snake-scale-color`}>Request {item.name} pricing →</a></div></div>;
}
