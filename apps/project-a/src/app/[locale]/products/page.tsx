import { Fragment } from 'react';
import { ProductDetails } from '@game-portal/types';
import { shuffleArray, API_BASE_URL, PAGE_SIZE } from '@game-portal/constants';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ProductCardWrapper from '../../components/ProductCardWrapper';

export const revalidate = 300; // ISR: 5 minutes

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Product List',
    description: 'Browse the latest products (refreshed every 5 minutes)',
  };
}

async function fetchProducts(): Promise<ProductDetails[]> {
  const res = await fetch(`${API_BASE_URL}/products?limit=${PAGE_SIZE}`);
  const data: { products: ProductDetails[] } = await res.json();
  const shuffled = shuffleArray(data.products).slice(0, 10);
  console.log(
    shuffled,
    '[Products Page] Revalidating at:',
    new Date().toISOString()
  );
  return shuffled;
}

export default async function ProductsPage() {
  const t = await getTranslations();
  const products = await fetchProducts();

  return (
    <div>
      <h1 className="text-xl font-bold">{t('top10Products')}</h1>
      <div className="flex flex-row gap-5 flex-wrap">
        {products.length &&
          products.map((product) => (
            <Fragment key={product.id}>
              <ProductCardWrapper data={product} />
            </Fragment>
          ))}
      </div>
    </div>
  );
}
