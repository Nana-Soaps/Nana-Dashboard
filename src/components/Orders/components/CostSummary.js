import React from "react";

function CostSummary(props) {
  return (
    <div className="costSummary mt-2 mb-2">
      <div className="breakdown border-bottom">
        <div className="subtotal d-flex justify-content-between">
          <p>Subtotal</p>
          <p className="price">$24.00</p>
        </div>
        <div className="shipping d-flex justify-content-between">
          <p>Shipping</p>
          <p className="price">$4.50</p>
        </div>
        <div className="taxes d-flex justify-content-between">
          <p>Taxes</p>
          <p className="price">$1.68</p>
        </div>
      </div>
      <div className="total d-flex justify-content-between border-bottom">
        <h3>Total</h3>
        <h3 className="price">$30.18</h3>
      </div>
    </div>
  );
}

export default CostSummary;
