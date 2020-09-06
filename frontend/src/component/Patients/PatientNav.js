import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
const PatientNav = () => {
  const classes = useStyles();
  return (
    <Navbar
      fill="flase"
      style={{
        backgroundColor: "#57b846",
        height: "80px",
      }}
    >
      <Navbar.Brand
        href="#home"
        style={{
          fontSize: "35px",
          fontStyle: "italic",
          fontWeight: "bolder",
          color: "#ffffff",
        }}
      >
        TeleHealth
      </Navbar.Brand>

      <Nav
        style={{
          marginLeft: "1100px",
        }}
      >
        <Nav.Link
          style={{
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
          href="#home"
          row
        >
          Home
        </Nav.Link>
        <Nav.Link
          style={{
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
          href="#link"
        >
          Appoinment
        </Nav.Link>
        <Nav.Link
          style={{
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
          href="#link"
        >
          My Profile
        </Nav.Link>
        <Nav.Link
          style={{
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
          href="#link"
        >
          Signout
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default PatientNav;
