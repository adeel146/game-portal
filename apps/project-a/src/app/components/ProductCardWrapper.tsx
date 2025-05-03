'use client';

import React from 'react';
import { ProductCard } from '@game-portal/ui';
import { ProductDetails } from '@game-portal/types';
import Link from 'next/link';

type ProductCardWrapperProps = {
  data: ProductDetails;
};

const ProductCardWrapper: React.FC<ProductCardWrapperProps> = ({ data }) => {
  return (
    <Link data-test-id={data.id} href={`/${data.id}`}>
      <ProductCard data={data} />
    </Link>
  );
};

export default ProductCardWrapper;
