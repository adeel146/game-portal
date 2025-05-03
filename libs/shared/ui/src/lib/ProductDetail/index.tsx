import React from 'react';
import './ProductDetail.css';
import { ProductDetails } from "@game-portal/types";

type ProductDetailProps = {
  product: ProductDetails;
  authenticated:boolean
};

export const ProductDetail: React.FC<ProductDetailProps> = ({ product,authenticated }) => {
  const {
    title,
    description,
    price,
    discountPercentage,
    thumbnail,
    brand,
    rating,
    availabilityStatus,
    stock,
    tags,
    warrantyInformation,
    shippingInformation,
    returnPolicy,
    minimumOrderQuantity,
    dimensions,
    images,
  } = product;


  return (
    <div className="product-detail">
      <div className="product-detail__header">
        <img src={thumbnail} alt={title} className="product-detail__thumbnail" />
        <div className="product-detail__info">
          <h1>{title}</h1>
          <p className="product-detail__brand">{brand}</p>
          <p className="product-detail__description">{description}</p>
          <p className="product-detail__price">
            ${price}{' '}
            <span className="product-detail__discount">(-{discountPercentage}%)</span>
          </p>
          <p className="product-detail__availability">
            {availabilityStatus} — Stock: {stock}
          </p>
          <p className="product-detail__rating">⭐ {rating}</p>
          <div className="product-detail__tags">
            {tags.map((tag) => (
              <span key={tag} className="product-detail__tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {authenticated && (
        <>
          <div className="product-detail__section">
            <h3>Shipping & Warranty</h3>
            <p>{shippingInformation}</p>
            <p>{warrantyInformation}</p>
            <p>Return Policy: {returnPolicy}</p>
            <p>Minimum Order Quantity: {minimumOrderQuantity}</p>
          </div>

          <div className="product-detail__section">
            <h3>Dimensions</h3>
            <p>
            Width: {dimensions.width}" | Height: {dimensions.height}" | Depth: {dimensions.depth}"
            </p>
          </div>
        </>
      )}

      <div className="product-detail__gallery">
        {images.map((img, i) => (
          <img data-testid="product-detail-images" key={i} src={img} alt={`${title} ${i + 1}`} />
        ))}
      </div>
    </div>
  );
};
