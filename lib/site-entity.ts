import { resolveImage } from './image-resolver';

export const SITE_URL = 'https://www.tontongear.com';
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const ORGANIZATION_REFERENCE = {
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: 'TONTON Sportswear',
  legalName: 'Tontonsports (Shenzhen) Co., Ltd.',
  url: SITE_URL,
};

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  ...ORGANIZATION_REFERENCE,
  alternateName: ['TONTON', 'TONTON Fightwear Manufacturer'],
  foundingDate: '2004',
  description: 'Custom fightwear and sportswear manufacturer supporting OEM and ODM development for brands, gyms, academies, clubs, teams, and retailers.',
  logo: {
    '@type': 'ImageObject',
    url: resolveImage('/assets/logo.png'),
  },
  email: 'gary@tontonsportswear.com',
  telephone: '+86 17722438678',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    telephone: '+86 17722438678',
    email: 'gary@tontonsportswear.com',
    availableLanguage: ['English', 'Chinese'],
    areaServed: 'Worldwide',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jiewei, Shangmugu Community, Pinghu Street, Longgang District, Shenzhen 207, Building A, Industrial City Phase III Factory',
    addressLocality: 'Shenzhen',
    addressCountry: 'CN',
  },
  sameAs: ['https://tontos.m.en.alibaba.com/'],
  knowsAbout: [
    'Custom rash guards',
    'MMA fight shorts',
    'BJJ and grappling shorts',
    'Training shorts',
    'Sublimation printing',
    'Performance sportswear manufacturing',
    'OEM and ODM sportswear development',
  ],
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: 'TONTON Sportswear',
  url: SITE_URL,
  publisher: { '@id': ORGANIZATION_ID },
  inLanguage: 'en',
};
