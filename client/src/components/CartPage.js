import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/actions';
import { Link } from 'react-router-dom';

const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className='cart'>
      <div className='cart__list'>
        <ul className='cart__list__container'>
          <li>
            <h3>Shopping Cart</h3>
            <div>price</div>
          </li>
          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            cartItems.map((item) => (
              <li>
                <div className='cart__image'>
                  <img src={item.image} alt='product' />
                </div>
                <div className='cart__name'>
                  <div>
                    <Link to={`/product/${item.productId}`}>{item.name}</Link>
                  </div>
                  <div className='cart__qty'>
                    <label for='cart__qty'>Qty: </label>
                    <input
                      type='number'
                      step='1'
                      min='1'
                      max={item.countInStock}
                      id='cart__qty'
                      defaultValue={item.qty}
                      onChange={(e) =>
                        dispatch(addToCart(item.productId, e.target.value))
                      }
                    />
                    <input
                      type='button'
                      className='button btn__delete'
                      value='Delete'
                      onClick={() => removeFromCartHandler(item.productId)}
                    />
                  </div>
                </div>
                <div className='cart__price'>£{item.price}</div>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className='cart__action'>
        <h3>
          Subtotal ({cartItems.reduce((a, c) => +a + +c.qty, 0)} items) : £
          {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
        </h3>
        <button className='button primary' disabled={cartItems.length === 0}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
