import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./component/login/Login";
import Signup from "./component/signUp/SignUp";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "firebase";
import "../../frontend/src/firebase";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/signup" exact component={Signup}></Route>
      <Route path="/login" exact component={Login}></Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWAl
serviceWorker.unregister();
