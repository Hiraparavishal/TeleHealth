import React from "react";
import { useParams } from "react-router-dom";
import PatientNav from "../Patients/PatientNav";
import { MDBContainer, MDBIframe } from "mdbreact";
import Iframe from "react-iframe";
const Videocall = () => {
  let { licid } = useParams();
  return (
    <>
      <PatientNav></PatientNav>
      {/* <MDBContainer className="text-center">
        <MDBIframe src="https://morning-escarpment-67980.herokuapp.com/" />
      </MDBContainer> */}
      <Iframe
        url="https://morning-escarpment-67980.herokuapp.com/"
        id="myId"
        height="800"
        width="100%"
        allow="camera; microphone"
      />
      <h1> {licid}</h1>
      <h2>hello</h2>
      <h3>vishal</h3>
    </>
  );
};

export default Videocall;
