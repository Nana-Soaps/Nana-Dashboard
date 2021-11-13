import React from "react";
import CartItem from "./CartItem";
import CostSummary from "./CostSummary";

function CartSummary(props) {
  return (
    <div className="cartSummary">
      <CartItem />
      <CartItem />
      <CartItem />
      <CostSummary />
    </div>
  );
}

export default CartSummary;
