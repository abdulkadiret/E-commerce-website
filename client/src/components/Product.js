import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({
  productId,
  image,
  name,
  brand,
  price,
  rating,
  numberOfReviews,
}) => {
  return (
    <li className='product' key={productId}>
      <img className='product__image' src={image} alt='product' />
      <h3 className='product__name'>
        <Link to={`/product/${productId}`}>{name}</Link>
      </h3>
      <h5 className='product__brand'>{brand}</h5>
      <h3 className='product__price'>£{price}</h3>
      <p className='product__rating'>
        <span>
          {rating} Stars ({numberOfReviews} Reviews)
        </span>
      </p>
    </li>
  );
};

export default Product;
