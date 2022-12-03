import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducer, applyMiddleware(thunk, logger));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
