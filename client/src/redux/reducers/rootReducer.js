import { combineReducers } from 'redux';
import { cartReducer } from './cartReducers';
import { userSigninReducer } from './userReducers';
import { productDetailsReducer, productListReducer } from './productReducers';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  //blacklist: ['carousel'], //this will not be persisted
  // whitelist: ['cart', 'userSignin'],  //only these components will be persisted
};

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
