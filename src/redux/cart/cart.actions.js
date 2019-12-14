import CartTypes from "./cart.types";
export const toggleCart = () => ({
  type: CartTypes.CART_TOGGLE_HIDDEN
});
export const addItem = item => ({
  type: CartTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartTypes.REMOVE_ITEM,
  payload: item
});

export const removeOneItemFromCart = item => ({
  type: CartTypes.REMOVE_ONE_ITEM_FROM_CART,
  payload: item
});
