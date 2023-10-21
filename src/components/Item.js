import React, { useState } from "react";

function Item({ name, category }) {

  const [addToCart, setAddToCart] = useState(false);
  const liItemClassName = addToCart ? "in-cart" : "";
  const buttonText = addToCart ? "Remove From Cart" : "Add to Cart";

  function addToCartClickHandler(){
    setAddToCart((addToCart) => !addToCart);
  }
  
  return (
    <li className={liItemClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCartClickHandler}>{buttonText}</button>
    </li>
  );
}

export default Item;
