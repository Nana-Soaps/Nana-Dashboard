import React from "react";

function OrderTab(props) {
  return (
    <div className="d-flex orderTab">
      <div className="col1">
        <div className="d-flex flex-column small">
          <p className="m-0">mkotik97@gmail.com</p>
          <p className="m-0">Order #1</p>
        </div>
      </div>
      <div className="col2 d-flex flex-column small">
        <p className="m-0">08/16/2021</p>
        <p className="m-0">8:05 PM</p>
      </div>
      <div className="col3">
        <select>
          <option>Activ</option>
          <option>Cancelled</option>
          <option>Completed</option>
        </select>
      </div>
      <div className="col4 d-flex ">
        <p className="m-0">$15.99</p>
      </div>
    </div>
  );
}

export default OrderTab;
