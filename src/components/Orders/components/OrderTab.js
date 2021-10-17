import React from "react";

function OrderTab(props) {
  const { order } = props;
  console.log(order);
  const date = new Date(order.created_at);
  const time = new Intl.DateTimeFormat("default", {
    hour: "numeric",
    minute: "numeric",
  }).format(date);
  const day = new Intl.DateTimeFormat(window.clientInformation.language).format(
    date
  );
  const price = order.subtotal * (1 + order.tax_rate) + order.shipping.cost;
  return (
    <div className="d-flex orderTab">
      <div className="col1">
        <div className="d-flex flex-column small">
          <p className="m-0">{order.email}</p>
          <p className="m-0">Order #{order.order_id}</p>
        </div>
      </div>
      <div className="col2 d-flex flex-column small">
        <p className="m-0">{day}</p>
        <p className="m-0">{time}</p>
      </div>
      <div className="col3">
        <select>
          <option>Active</option>
          <option>Cancelled</option>
          <option>Completed</option>
        </select>
      </div>
      <div className="col4 d-flex ">
        <p className="m-0">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default OrderTab;
