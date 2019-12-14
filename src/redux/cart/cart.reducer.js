import CartTypes from "./cart.types";
import { addItemToCart, removeOneItem } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.CART_TOGGLE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    case CartTypes.REMOVE_ONE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeOneItem(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
