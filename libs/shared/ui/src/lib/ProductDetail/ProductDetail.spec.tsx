import { render, screen } from '@testing-library/react';
import { ProductDetail } from './index.tsx';
import { ProductDetails } from '@game-portal/types';
import '@testing-library/jest-dom';


// Mock product data
const product: ProductDetails = {
  title: 'Sample Product',
  description: 'This is a detailed description of the sample product.',
  price: 100,
  discountPercentage: 10,
  thumbnail: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
  brand: 'Brand A',
  rating: 4.5,
  availabilityStatus: 'In Stock',
  stock: 20,
  tags: ['tag1', 'tag2'],
  warrantyInformation: '1 Year Warranty',
  shippingInformation: 'Free Shipping Worldwide',
  returnPolicy: '30-day return policy',
  minimumOrderQuantity: 1,
  dimensions: { width: 10, height: 5, depth: 3 },
  images: ['https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp', 'https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp'],
};

describe('ProductDetail Component', () => {
  it('should render product information correctly', () => {
    render(<ProductDetail product={product} authenticated={false} />);

    // Check if product details are rendered
    expect(screen.getByText('Sample Product')).toBeInTheDocument();
    expect(screen.getByText('Brand A')).toBeInTheDocument();
    expect(screen.getByText('This is a detailed description of the sample product.')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(screen.getByText('(-10%)')).toBeInTheDocument();
    expect(screen.getByText('In Stock — Stock: 20')).toBeInTheDocument();
    expect(screen.getByText('⭐ 4.5')).toBeInTheDocument();

    // Check if tags are rendered
    expect(screen.getByText('tag1')).toBeInTheDocument();
    expect(screen.getByText('tag2')).toBeInTheDocument();
  });

  it('should render shipping and warranty information if authenticated', () => {
    render(<ProductDetail product={product} authenticated={true} />);

    // Check for shipping and warranty information
    expect(screen.getByText('Shipping & Warranty')).toBeInTheDocument();
    expect(screen.getByText('Free Shipping Worldwide')).toBeInTheDocument();
    expect(screen.getByText('1 Year Warranty')).toBeInTheDocument();
    expect(screen.getByText('Return Policy: 30-day return policy')).toBeInTheDocument();
    expect(screen.getByText('Minimum Order Quantity: 1')).toBeInTheDocument();

    // Check dimensions
    expect(screen.getByText('Width: 10" | Height: 5" | Depth: 3"')).toBeInTheDocument();
  });

  it('should not render shipping and warranty information if not authenticated', () => {
    render(<ProductDetail product={product} authenticated={false} />);

    // Shipping and warranty information should not be displayed
    expect(screen.queryByText('Shipping & Warranty')).not.toBeInTheDocument();
    expect(screen.queryByText('Free Shipping Worldwide')).not.toBeInTheDocument();
  });

});
