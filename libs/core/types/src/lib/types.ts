export function types(): string {
  return 'types';
}

export type ProductDetails = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  brand: string;
  rating: number;
  availabilityStatus: string;
  tags: string[];
  stock: number;
  warrantyInformation: string;
  shippingInformation: string;
  returnPolicy: string;
  minimumOrderQuantity: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  images: string[];
};

export type AppUser = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};
