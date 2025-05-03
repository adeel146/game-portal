import { ProductDetails } from '@game-portal/types';
import { Metadata } from 'next';
import { ProductDetailWrapper } from '../../components/ProductDetailWrapper';
import { API_BASE_URL } from '@game-portal/constants';

type PageProps = {
  params: {
    productid: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: `Product #${params.productid}`,
    description: `Details for product ${params.productid}`,
  };
}

async function fetchProduct(id: string): Promise<ProductDetails> {
  const res = await fetch(`${API_BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}

export default async function ProductPage({ params }: PageProps) {
  const product = await fetchProduct(params.productid);
  return <ProductDetailWrapper product={product} />;
}
