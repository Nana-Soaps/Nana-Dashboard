import React from "react";
import CartItem from "./CartItem";

function CartSummary(props) {
  return (
    <div className="cartSummary">
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

export default CartSummary;
