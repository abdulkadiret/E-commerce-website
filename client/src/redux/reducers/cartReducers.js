import * as actions from '../actions/actionTypes';

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      const item = action.payload;
      const product = state.cartItems.find(
        (cartItem) => cartItem.productId === item.productId
      );
      if (product) {
        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.productId === product.productId ? item : cartItem
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };
    case actions.REMOVE_FROM_CART:
      return {
        cartItems: state.cartItems.filter(
          (item) => item.productId !== action.payload
        ),
      };
    default: {
      return state;
    }
  }
};

export { cartReducer };
