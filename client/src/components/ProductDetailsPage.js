import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../redux/actions/actions';

const ProductDetailsPage = (props) => {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
  }, []);

  const handleChange = (e) => {
    setQty(e.target.value);
  };

  return (
    <div>
      <div className='back__to__homePage'>
        <Link to='/' className='link__to__homePage'>
          <ArrowBackIcon
            style={{ fontSize: '2rem', marginBottom: '-0.4rem' }}
          />
          <span>Back to main page</span>
        </Link>
      </div>
      {loading ? (
        <div>Loading... </div>
      ) : error ? (
        <div>{error}</div>
      ) : (
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
                <label for='qty'>Qty: </label>
                <input
                  type='number'
                  step='1'
                  min='0'
                  max={product.countInStock}
                  id='qty'
                  value={qty}
                  onChange={handleChange}
                />
              </li>
              <li>
                <button className='btn__addToCart'>Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
