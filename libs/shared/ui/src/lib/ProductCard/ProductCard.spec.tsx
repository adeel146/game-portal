import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from './index.tsx';
import { ProductDetails } from '@game-portal/types';
import '@testing-library/jest-dom';


describe('ProductCard Component', () => {
  const product: ProductDetails = {
    title: 'Sample Product',
    description: 'This is a great product.',
    price: 100,
    discountPercentage: 10,
    thumbnail: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
    brand: 'Brand A',
    rating: 4.5,
    availabilityStatus: 'In Stock',
    tags: ['tag1', 'tag2'],
  };

  it('should render product details correctly', () => {
    render(<ProductCard data={product} />);

    // Check if product data is rendered
    expect(screen.getByText('Sample Product')).toBeInTheDocument();
    expect(screen.getByText('This is a great product.')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(screen.getByText('(-10%)')).toBeInTheDocument();
    expect(screen.getByText('In Stock')).toBeInTheDocument();
    expect(screen.getByText('⭐ 4.5')).toBeInTheDocument();
    expect(screen.getByText('Brand A')).toBeInTheDocument();
  });

  it('should render tags correctly', () => {
    render(<ProductCard data={product} />);

    // Check if tags are rendered correctly
    expect(screen.getByText('tag1')).toBeInTheDocument();
    expect(screen.getByText('tag2')).toBeInTheDocument();
  });

  it('should call onCardClick when the card is clicked', () => {
    const mockOnCardClick = jest.fn();
    render(<ProductCard data={product} onCardClick={mockOnCardClick} />);

    // Click the card
    fireEvent.click(screen.getByRole('button'));

    // Check if onCardClick is called
    expect(mockOnCardClick).toHaveBeenCalledTimes(1);
  });

  it('should render an image with correct src and alt text', () => {
    render(<ProductCard data={product} />);

    // Check if the image is rendered with correct src and alt
    const image = screen.getByAltText('Sample Product');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp');
  });
});
