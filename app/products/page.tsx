import type { Metadata } from 'next';
import ProductCatalog from '../../components/ProductCatalog';
import { withPageSocialMetadata } from '../../lib/page-metadata';
import { CATALOG_DESCRIPTION } from '../../lib/product-catalog';
export const metadata: Metadata = withPageSocialMetadata({title:{absolute:'Product Catalog | Custom Rash Guards & MMA Shorts | TONTON'},description:CATALOG_DESCRIPTION,alternates:{canonical:'https://www.tontongear.com/products'}});
export default function ProductsPage(){return <ProductCatalog />;}
