import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useHistory } from "react-router-dom";
import { Form, Col, Button } from "react-bootstrap";
import { green } from "@material-ui/core/colors";
import Cookies from "universal-cookie";
import PatientNav from "./PatientNav";
import { Box } from "@material-ui/core";
import { patientDetails } from "../../api";

import {
  Container,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
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
const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
const DetailsForm = () => {
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
  const history = useHistory();
  const cookies = new Cookies();
  const [open, setOpen] = React.useState(true);
  const [uid, setUid] = React.useState("");
  const [detalis, setDetails] = React.useState("");
  const [modalStyle] = React.useState(getModalStyle);
  const [fullName, setFullName] = React.useState("");
  const [mobileNo, setMobileNo] = React.useState("");
  const [bloodGrop, setBloodGroup] = React.useState("");
  const [birthdate, setBirthDate] = React.useState("");
  const [sex, setSex] = React.useState("");
  const [age, setAge] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [zip, setZip] = React.useState("");
  const handleOpen = () => {
    setOpen(true);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  const submit = () => {
    if (
      fullName === "" ||
      mobileNo === "" ||
      bloodGrop === "" ||
      birthdate === "" ||
      sex === "" ||
      age === "" ||
      address === "" ||
      city === "" ||
      state === "" ||
      zip === ""
    ) {
      alert("Please Enter All Credential ");
    } else {
      console.log(uid);
      (async () => {
        const response = await patientDetails(
          uid,
          fullName,
          mobileNo,
          bloodGrop,
          birthdate,
          sex,
          age,
          address,
          city,
          state,
          zip
        );

        console.log(response.data);

        if (response.data === true) {
          cookies.set("detalis", false, { path: "/" });
          history.push("/patienthome");
        }
      })();
    }
  };
  const updateFullName = (e) => {
    setFullName(e.target.value);
  };
  const updateMobileNo = (e) => {
    setMobileNo(e.target.value);
  };
  const updateBloodGroup = (e) => {
    setBloodGroup(e.target.value);
  };
  const updateBirthDate = (e) => {
    setBirthDate(e.target.value);
  };
  const updateSex = (e) => {
    setSex(e.target.value);
  };
  const updateAge = (e) => {
    setAge(e.target.value);
  };
  const updateAddress = (e) => {
    setAddress(e.target.value);
  };
  const updateCity = (e) => {
    setCity(e.target.value);
  };
  const updateState = (e) => {
    setState(e.target.value);
  };
  const updateZip = (e) => {
    setZip(e.target.value);
  };

  const body = (
    <>
      <Container maxWidth="xs">
        <Box
          style={{
            marginTop: "200px",
            backgroundColor: "#ffffff",
          }}
          textAlign="center"
          p="24px"
          mt="50px"
          boxShadow="2"
          borderRadius="10px"
          width="500px"
        >
          <Typography
            variant="h3"
            style={{
              color: "white",
              background: "#57b846",
            }}
          >
            Patient Details
          </Typography>

          <Typography
            variant="h5"
            style={{
              color: "white",
              background: "#57b846",
            }}
          >
            Please Fillup This Form
          </Typography>
          <Form
            style={{
              marginTop: "50px",
            }}
          >
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="First Middle Last"
                  onChange={updateFullName}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Mobile No</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="MobileNo"
                  onChange={updateMobileNo}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Blood Group</Form.Label>
                <Form.Control
                  placeholder="bloodgroup"
                  onChange={updateBloodGroup}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Birth Date</Form.Label>
                <Form.Control
                  placeholder="BirthDate"
                  type="date"
                  onChange={updateBirthDate}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label></Form.Label>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender1"

                  // value={value}
                  // onChange={handleChange}
                >
                  <FormControlLabel
                    value="Doctor"
                    control={<GreenRadio />}
                    label="Male"
                    onChange={updateSex}
                  />
                  <FormControlLabel
                    value="Patient"
                    control={<GreenRadio />}
                    label="Female"
                    onChange={updateSex}
                  />
                </RadioGroup>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  placeholder="Age"
                  type="number"
                  onChange={updateAge}
                />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                onChange={updateAddress}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control onChange={updateCity} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control onChange={updateState}></Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control onChange={updateZip} />
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check
                color="#57b846"
                type="checkbox"
                label=" I Agree The above information is True."
              />
            </Form.Group>
          </Form>
          <Button
            variant="contained"
            fullWidth
            size="small"
            onClick={submit}
            disableElevation
            style={{
              width: "200px",
              height: "50px",
              background: "#57b846",
              color: "#ffffff",
            }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default DetailsForm;
