import { combineReducers } from 'redux';
import { productDetailsReducer, productListReducer } from './productReducers';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

export default rootReducer;
