import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OrderTab from "./components/OrderTab";
import { setOrders } from "../../actions";
import { connect } from "react-redux";
import "../../styles/Orders.scss";

function Orders(props) {
  useEffect(() => {
    axios
      .get("https://nana-be.up.railway.app/api/orders")
      .then((res) => {
        console.log(res);
        props.setOrders(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="orders py-5 ">
      <div className="container">
        <div className="top">
          <h1>Orders</h1>
        </div>
        <div className="d-flex">
          <input className="searchBar" placeholder="Search" />
        </div>
        <div className="ordersList">
          <div className="header">
            <h5 className="orderHead">Order #</h5>
            <h5 className="dateHead">Date/Time</h5>
            <h5 className="statusHead">Status</h5>
            <h5 className="amountHead">Amount</h5>
          </div>
          <div className="items">
            {props.orders.map((order) => (
              <OrderTab order={order} />
            ))}
          </div>
          <div className="footer"></div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { setOrders })(Orders);
