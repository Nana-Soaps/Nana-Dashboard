import React from "react";

function CartItem(props) {
  return (
    <div className="cartItem border-bottom">
      <div className="left">
        <div className="imgWrap">
          <img
            src={
              "https://cdn.shopify.com/s/files/1/1127/6932/products/Linden_1024x.jpg?v=1576877804"
            }
            alt="soap"
          />
        </div>
      </div>
      <div className="mid">
        <h2>Lavender</h2>
        <h3>Quantity: 1</h3>
      </div>
      <div className="right d-flex justify-content-end align">
        <h2>$8.00</h2>
      </div>
    </div>
  );
}

export default CartItem;
