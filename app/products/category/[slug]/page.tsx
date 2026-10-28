import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductCatalog from '../../../../components/ProductCatalog';
import { PRODUCT_CATALOG_CATEGORIES } from '../../../../lib/product-catalog';
import { withPageSocialMetadata } from '../../../../lib/page-metadata';
export function generateStaticParams(){return PRODUCT_CATALOG_CATEGORIES.map(c=>({slug:c.slug}));}
export function generateMetadata({params}:{params:{slug:string}}):Metadata {
 const c=PRODUCT_CATALOG_CATEGORIES.find(c=>c.slug===params.slug);
 if(!c)return {robots:{index:false,follow:false}};
 return withPageSocialMetadata({title:{absolute:`Custom ${c.name} | Product Catalog | TONTON`},description:c.description,alternates:{canonical:`https://www.tontongear.com/products/category/${c.slug}`}});
}
export default function ProductCategoryPage({params}:{params:{slug:string}}){if(!PRODUCT_CATALOG_CATEGORIES.some(c=>c.slug===params.slug))notFound();return <ProductCatalog slug={params.slug}/>;}
