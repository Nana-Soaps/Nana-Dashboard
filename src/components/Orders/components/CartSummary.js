import React from "react";
import CartItem from "./CartItem";
import CostSummary from "./CostSummary";
import ContactSummary from "./ContactSummary";

function CartSummary(props) {
  const { order } = props;
  return (
    <div className="cartSummary">
      {order.products.map((prod) => (
        <CartItem prod={prod} />
      ))}
      <CostSummary order={order} />
      <ContactSummary order={order} />
    </div>
  );
}

export default CartSummary;
