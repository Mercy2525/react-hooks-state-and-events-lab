import React, { useState } from "react";


function Item({ name, category }) {

  const[inCart,setInCart]=useState(false)

  const cartClass= inCart? "inCart":""

  function handleCartClick(){
    setInCart(!inCart)
  }

  return (
    
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart? "remove": "add"} onClick={handleCartClick}>{inCart?"Remove FromCart":"Add to Cart"}</button>
    </li>

    
  );
}

export default Item;
