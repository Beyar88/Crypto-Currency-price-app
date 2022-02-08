import React from "react";
import "./cart.css";

function Card({ name, image, price, symbol }) {
  let roundPrice = parseFloat(price.toFixed(4));
  return (
    <a
      className={`card ${symbol}`}
      href={`https://coinmarketcap.com/currencies/${name}/`}
    >
      <h3>{name}</h3>
      <img src={image} />
      <span>{`${symbol} = $${roundPrice}`}</span>
    </a>
  );
}

export default Card;
