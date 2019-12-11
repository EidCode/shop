import React from "react";
import CustomButton from "../custom-button/Button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
