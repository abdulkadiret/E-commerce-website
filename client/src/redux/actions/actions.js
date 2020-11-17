import axios from 'axios';
import * as actions from './actionTypes';

const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actions.PRODUCT_LIST_REQUEST });
    const { data } = await axios.get('/api/products');
    dispatch({ type: actions.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.PRODUCT_LIST_FAIL, payload: error.message });
  }
};

const detailsProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: actions.PRODUCT_DETAILS_REQUEST, payload: productId });
    const { data } = await axios.get(`/api/products/${productId}`);
    dispatch({ type: actions.PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};

const addToCart = (productId, qty) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/products/${productId}`);
    dispatch({
      type: actions.ADD_TO_CART,
      payload: {
        productId: data.productId,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });
  } catch (error) {
    //
  }
};

const removeFromCart = (productId) => async (dispatch) => {
  try {
    dispatch({ type: actions.REMOVE_FROM_CART, payload: productId });
  } catch (error) {
    //
  }
};

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: actions.USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post('/api/users/signin', { email, password });
    dispatch({ type: actions.USER_SIGNIN_SUCCESS, payload: data });
  } catch (error) {
    const customMessage = 'Invalid email or password';
    dispatch({
      type: actions.USER_SIGNIN_FAIL,
      payload: { customMessage },
    });
  }
};

export { listProducts, detailsProduct, addToCart, removeFromCart, signin };
