import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { setOrders } from "../../../actions";
import { connect } from "react-redux";
import checkmark from "../../../assets/checkmark.svg";

function OrderTab(props) {
  const { order } = props;
  const [formData, setFormData] = useState({ status: order.status });
  const [expanded, setExpanded] = useState(false);
  console.log(formData);

  const date = new Date(order.created_at);
  const time = new Intl.DateTimeFormat("default", {
    hour: "numeric",
    minute: "numeric",
  }).format(date);
  const day = new Intl.DateTimeFormat(window.clientInformation.language).format(
    date
  );
  const price = order.subtotal * (1 + order.tax_rate) + order.shipping.cost;

  const statusChange = (e) => {
    e.stopPropagation();
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
    axios
      .put(
        `https://nanasoapsbackend.herokuapp.com/api/orders/${order.order_id}`,
        { [name]: value }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleExpanded = (e) => {
    e.stopPropagation();
    if (e.target.name == "status") return;
    setExpanded(() => !expanded);
  };

  return (
    <div
      className={`d-flex orderTab ${expanded ? "expanded" : "notExpanded"}`}
      onClick={toggleExpanded}
    >
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
      <div className="col3 d-flex">
        {formData && (
          <select onChange={statusChange} name="status" value={formData.status}>
            <option>Active</option>
            <option>Cancelled</option>
            <option>Completed</option>
          </select>
        )}
      </div>
      <div className="col4 d-flex ">
        <p className="m-0">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default connect(null, { setOrders })(OrderTab);
