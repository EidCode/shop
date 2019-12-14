import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  removeItem,
  addItem,
  removeOneItemFromCart
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item, dispatch }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={item.imageUrl} alt="item" />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => dispatch(removeOneItemFromCart(item))}
        >
          &#10094;
        </div>
        {item.quantity}
        <div className="arrow" onClick={() => dispatch(addItem(item))}>
          &#x276F;
        </div>
      </span>
      <span className="price">{item.price}</span>
      <span
        className="remove-button"
        onClick={() => dispatch(removeItem(item))}
      >
        &#10006;
      </span>
    </div>
  );
};

export default connect(null)(CheckoutItem);
