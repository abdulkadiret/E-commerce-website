import React from 'react';
import data from '../data';
import Product from './Product';

const Products = () => {
  return (
    <ul className='products'>
      {data.products.map((product) => (
        <Product
          productId={product.productId}
          image={product.image}
          name={product.name}
          brand={product.brand}
          price={product.price}
          rating={product.rating}
          numberOfReviews={product.numberOfReviews}
          description={product.description}
        />
      ))}
    </ul>
  );
};

export default Products;
