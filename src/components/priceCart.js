import React from "react";
import "./cart.css";

function Cart({ name, image, price, symbol }) {
  let roundPrice = parseFloat(price.toFixed(4));
  return (
    <div className={`cart ${symbol}`}>
      <h3>{name}</h3>
      <img src={image} />
      <span>{`${symbol} = $${roundPrice}`}</span>
    </div>
  );
}

export default Cart;
