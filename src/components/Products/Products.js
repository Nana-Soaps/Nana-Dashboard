import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Products.scss";
import Category from "./components/Category";
import { connect } from "react-redux";
import { setCategories, setOrders } from "../../actions";

import { Link } from "react-router-dom";

function Products(props) {
  useEffect(() => {
    axios
      .get("https://nana-be.up.railway.app/api/products/categories")
      .then((res) => {
        props.setCategories(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

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
    <div className="products py-5">
      <div className="container">
        <div className="top">
          <h1>Products</h1>
          <Link to="addproduct">
            <button>Add</button>
          </Link>
        </div>
        <div className="d-flex">
          <input className="searchBar" placeholder="Search" />
        </div>
        <div>
          {props.categories.map((cat) => (
            <Category category={cat} />
          ))}
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
export default connect(mapStateToProps, { setCategories, setOrders })(Products);
