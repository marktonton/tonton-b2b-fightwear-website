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
    image: 'assets/products/rash-guard-products/home-category-white-rash-guard-v1.webp',
    alt: 'White custom short-sleeve TONTON Rash Guard on a model',
    categoryHref: '/customization/sublimated-rash-guards',
    builderProduct: 'Rash Guard',
  },
  {
    number: '02',
    title: 'Custom Training Shorts',
    description: 'Lightweight training shorts with custom colors, logos, waistband and construction options.',
    image: 'assets/products/grappling-shorts-products/home-training-shorts-model-v2.webp',
    alt: 'Athletic male model wearing olive green custom training shorts in a studio',
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

function getProductWhatsAppHref(product: Product) {
  const message = `Hello TONTON, I would like to request a quote for ${product.name}. Please send me more information about customization, MOQ and sampling.`;
  return `https://wa.me/8617722438678?text=${encodeURIComponent(message)}`;
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
