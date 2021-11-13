import React from "react";

function CartItem(props) {
  const { prod } = props;
  const prodInfo = prod.info["0"];
  return (
    <div className="cartItem border-bottom">
      <div className="left">
        <div className="imgWrap">
          <img
            src={`https://nana-soaps-products.s3.us-east-2.amazonaws.com/${prodInfo.product_id}`}
            alt="soap"
          />
        </div>
      </div>
      <div className="mid">
        <h2>{prodInfo.name}</h2>
        <h3>Quantity: {prod.quantity}</h3>
      </div>
      <div className="right d-flex justify-content-end align">
        <h2>${prod.soldFor.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default CartItem;
