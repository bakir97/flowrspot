import React from "react";
import ReactDOM from "react-dom";
import "./assets/global/styles/global.scss";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "./redux/reduxStoreConfigure";
import { login } from "./redux/user/action";
import Routes from "./routes";
import * as serviceWorker from "./serviceWorker";
const store = configureStore();
const user = localStorage.getItem("user");
if (user) {
  store.dispatch(login(JSON.parse(user)));
}

const Render = (
  <Router>
    <Provider store={store}>
      <Routes />
    </Provider>
  </Router>
);
ReactDOM.render(Render, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
