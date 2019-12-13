import CartTypes from "./cart.types";
export const toggleCart = () => ({
  type: CartTypes.CART_TOGGLE_HIDDEN
});
export const addItem = item => ({
  type: CartTypes.ADD_ITEM,
  payload: item
});
