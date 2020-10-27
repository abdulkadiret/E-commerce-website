import React, { useEffect } from 'react';
import Product from './Product';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../redux/actions/actions';

const Products = () => {
  //useSelector allows you to extract data from the Redux store state
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  //useDispatch allows you to be able to dispatch action creators
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return loading ? (
    <div>Loading... </div>
  ) : error ? (
    <div>{error}</div>
  ) : (
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
