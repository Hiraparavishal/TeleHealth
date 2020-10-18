import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import videocall from "./component/Patients/Videocall";
import Login from "./component/login/Login";
import Signup from "./component/signUp/SignUp";
import PatientHome from "./component/Patients/PatientHome";
import PatientNav from "./component/Patients/PatientNav";
import DetailsForm from "./component/Patients/DetailsForm";
import doctor from "./component/Patients/Doctor";
import generalphysician from "./component/Patients/FindDoctor/GeneralPhysician";
import dentist from "./component/Patients/FindDoctor/Dentist";
import ent from "./component/Patients/FindDoctor/ENT";
import gynaecologist from "./component/Patients/FindDoctor/Gynaecologist";
import orthopedic from "./component/Patients/FindDoctor/Orthopedic";
import sexologist from "./component/Patients/FindDoctor/Sexologist";
import doctorehome from "./component/Doctor/DoctorHome";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "firebase";
import "../../frontend/src/firebase";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact>
        <h1>Welcome to TeleHelth</h1>
      </Route>
      <Route path="/signup" exact component={Signup}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/patienthome" exact component={PatientHome}></Route>
      <Route path="/detailsform" exact component={DetailsForm}></Route>
      <Route path="/videocall/:licid" exact component={videocall}></Route>
      <Route path="/doctor" exact component={doctor}></Route>
      <Route
        path="/doctor/generalphysician"
        exact
        component={generalphysician}
      ></Route>
      <Route path="/doctor/dentist" exact component={dentist}></Route>
      <Route path="/doctor/ent" exact component={ent}></Route>
      <Route
        path="/doctor/gynaecologist"
        exact
        component={gynaecologist}
      ></Route>
      <Route path="/doctor/orthopedic" exact component={orthopedic}></Route>
      <Route path="/doctor/sexologist" exact component={sexologist}></Route>
      <Route path="/doctorhome" exact component={doctorehome}></Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
