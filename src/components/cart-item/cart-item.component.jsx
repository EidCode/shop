import React from "react";
import "./cart-item.styles.scss";

const cartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.name} />
      <div className="item-details">
        <span className="name">{item.name}</span>
        <span className="price">
          {item.quantity} * ${item.price}
        </span>
      </div>
    </div>
  );
};

export default cartItem;
