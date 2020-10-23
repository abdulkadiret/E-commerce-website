import React from 'react';
import data from '../data';

const ProductDetailsPage = (props) => {
  const product = data.products.find(
    (item) => item.productId === props.match.params.id
  );
  return (
    <div className='details'>
      <div className='details__image'>
        <img src={product.image} alt='product' />
      </div>
      <div className='details__info'>
        <ul>
          <li>
            <h3>{product.name}</h3>
          </li>
          <li className='product__reviews'>
            <p>{product.rating} Stars</p>
            <p>{product.numberOfReviews} Reviews</p>
          </li>
          <li>
            <h3>
              Price: <span style={{ color: 'red' }}>£{product.price}</span>
            </h3>
          </li>
          <li>
            <p>Description: {product.description}</p>
          </li>
          <li>
            <p>
              Brand: <span className='product__brand'>{product.brand}</span>
            </p>
          </li>
        </ul>
      </div>
      <div className='details__action'>
        <ul>
          <li className='product__price'>Price: {product.price}</li>
          <li>Status: {product.status}</li>
          <li className='product__rating'>
            <label for='qty' size='3' style={{ marginRight: '0.4rem' }}>
              Qty:
            </label>
            <input type='number' step='1' min='0' id='qty' defaultValue='0' />
          </li>
          <li>
            <button className='btn__addToCart'>Add to Cart</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
