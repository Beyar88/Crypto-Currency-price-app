import React from "react";
import "./cart.css";

function Cart({ name, image, price, symbol }) {
  let roundPrice = parseFloat(price.toFixed(4));
  return (
    <div className="cart">
      <h3>{name}</h3>
      <img style={{ width: "100px" }} src={image} />
      <span>{`${symbol} = $${roundPrice}`}</span>
    </div>
  );
}

export default Cart;
