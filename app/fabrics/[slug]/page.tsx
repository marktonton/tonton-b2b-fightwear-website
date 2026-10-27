import { withPageSocialMetadata } from '../../../lib/page-metadata';
import StretchMeshDetails from './StretchMeshDetails';
import CompressionLinerDetails from './CompressionLinerDetails';
import WovenFabricDetails from './WovenFabricDetails';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MATERIAL_GUIDES } from '../../../lib/fabric-library';
import { SITE_URL } from '../../../lib/site-entity';
import '../../factory/digital-sublimation-printing/sublimation.css';
import '../220-gsm-stretch-knit/fabric.css';
import './material.css';

type Props = { params: { slug: string } };
export function generateStaticParams() { return MATERIAL_GUIDES.map(({ slug }) => ({ slug })); }
export const dynamicParams = false;
export function generateMetadata({ params }: Props): Metadata {
  const fabric = MATERIAL_GUIDES.find((item) => item.slug === params.slug);
  if (!fabric) return withPageSocialMetadata({ title: 'Material not found', robots: { index: false } });
  const url = `${SITE_URL}/fabrics/${fabric.slug}`;
  return withPageSocialMetadata({ title: { absolute: `${fabric.title} for Custom Fightwear | TONTON` }, description: fabric.description, alternates: { canonical: url }, openGraph: { title: `${fabric.title} | TONTON Fabric Library`, description: fabric.description, url, images: [{ url: fabric.image, alt: fabric.alt }] } });
}
export default function MaterialPage({ params }: Props) {
  const fabric = MATERIAL_GUIDES.find((item) => item.slug === params.slug);
  if (!fabric) notFound();
  if (fabric.slug === 'stretch-mesh') return <StretchMeshDetails />;
  if (fabric.slug === 'compression-liner-knit') return <CompressionLinerDetails />;
  if (fabric.slug === 'four-way-stretch-woven') return <WovenFabricDetails />;
  notFound();
}
