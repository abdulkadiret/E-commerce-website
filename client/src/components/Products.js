import React, { useState, useEffect } from 'react';
import Product from './Product';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <ul className='products'>
      {products.map((product) => (
        <Product
          key={product.productId}
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
