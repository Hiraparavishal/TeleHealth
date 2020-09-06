import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import firebase from "firebase";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PatientNav from "./PatientNav";
import { useHistory } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core";
import DetailsForm from "./DetailsForm";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const PatientHome = () => {
  useEffect(() => {
    (async () => {
      const cookies = new Cookies();
      const data = cookies.get("uid");
      const detail = cookies.get("detalis");
      console.log(data);
      console.log(detail);
      setUid(data);
      setDetails(detail);
    })();
  }, []);
  const classes = useStyles();
  let history = new useHistory();
  const [user, setUser] = new useState("");
  const [modalStyle] = React.useState(getModalStyle);
  const [details, setDetails] = React.useState("");
  const [uid, setUid] = React.useState("");
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = <DetailsForm></DetailsForm>;

  return (
    <div>
      <PatientNav></PatientNav>
      <div>
        {(() => {
          if (details === "true") {
            return (
              <>
                <h1>{details}</h1>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  {body}
                </Modal>
              </>
            );
          } else {
            return <h1>hello vishal</h1>;
          }
        })()}

        {/* {details ? (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        ) : (
          <h1>hello vishal</h1>
        )} */}
      </div>
    </div>
  );
};

export default PatientHome;
