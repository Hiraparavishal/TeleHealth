import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./component/login/Login";
import Signup from "./component/signUp/SignUp";
import PatientHome from "./component/Patients/PatientHome";
import PatientNav from "./component/Patients/PatientNav";
import DetailsForm from "./component/Patients/DetailsForm";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "firebase";
import "../../frontend/src/firebase";

ReactDOM.render(
  // <PatientHome></PatientHome>,
  // <PatientNav></PatientNav>,
  // <Home></Home>,
  <Router>
    <Switch>
      <Route path="/" exact>
        <h1>Welcome to TeleHelth</h1>
      </Route>
      <Route path="/signup" exact component={Signup}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/patienthome" exact component={PatientHome}></Route>
      <Route path="/detailsform" exact component={DetailsForm}></Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWAl
serviceWorker.unregister();
