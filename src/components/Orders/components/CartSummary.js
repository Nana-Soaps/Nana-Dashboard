import React from "react";
import CartItem from "./CartItem";
import CostSummary from "./CostSummary";
import ContactSummary from "./ContactSummary";

function CartSummary(props) {
  return (
    <div className="cartSummary">
      <CartItem />
      <CartItem />
      <CartItem />
      <CostSummary />
      <ContactSummary />
    </div>
  );
}

export default CartSummary;
