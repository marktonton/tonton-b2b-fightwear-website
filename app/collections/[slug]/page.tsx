import { notFound, redirect } from 'next/navigation';
import {
  customizationCategories,
  getCustomizationCategory,
} from '../../../lib/customization-pages';

export function generateStaticParams() {
  return customizationCategories.map((category) => ({ slug: category.id }));
}

export default function LegacyCollectionRedirect({ params }: { params: { slug: string } }) {
  const category = getCustomizationCategory(params.slug);

  if (!category) {
    notFound();
  }

  redirect(`/customization/${category.id}`);
}
