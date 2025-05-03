'use client';
import { useSession } from 'next-auth/react';
import { ProductDetail } from '@game-portal/ui';
import { ProductDetails } from "@game-portal/types";

type ProductDetailProps = {
  product: ProductDetails;
};

export const ProductDetailWrapper: React.FC<ProductDetailProps> = ({ product }) => {
  const { data: session } = useSession();
  const isLoggedIn = !!session;

  return <ProductDetail  product={product} authenticated={isLoggedIn} />;
}
