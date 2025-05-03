import React from 'react';
import './ProductCard.css';
import { ProductDetails } from '@game-portal/types';

type ProductCardType = {
  data: ProductDetails;
  onCardClick?: () => void;
};

export const ProductCard: React.FC<ProductCardType> = ({
  data,
  onCardClick,
}) => {
  const {
    title,
    description,
    price,
    discountPercentage,
    thumbnail,
    brand,
    rating,
    availabilityStatus,
    tags,
  } = data;

  return (
    <div role="button" tabIndex={0} onClick={onCardClick} className="card">
      <img src={thumbnail} alt={title} className="card__image" />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__brand">{brand}</p>
        <p className="card__description">{description}</p>
        <p className="card__price">
          ${price}{' '}
          <span className="card__discount">(-{discountPercentage}%)</span>
        </p>
        <p className="card__availability">{availabilityStatus}</p>
        <div className="card__rating">⭐ {rating}</div>
        <div className="card__tags">
          {tags.map((tag) => (
            <span key={tag} className="card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
