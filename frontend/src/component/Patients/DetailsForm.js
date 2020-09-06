import React from "react";
import Cookie from "universal-cookie";
import { useHistory } from "react-router-dom";
import { Form, Col, Button } from "react-bootstrap";
import { green } from "@material-ui/core/colors";
import Cookies from "universal-cookie";
import PatientNav from "./PatientNav";
import {
  Container,
  Typography,
  TextField,
  makeStyles,
  withStyles,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { Box } from "@material-ui/core";
const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const submit = () => {
  const cookies = new Cookies();

  cookies.set("detalis", false, { path: "/" });
  console.log("hiii vishal");
  //   history.push("/login");
};
const DetailsForm = () => {
  const classes = useStyles();
  const cookies = new Cookies();
  console.log(cookies.get("uid"));
  return (
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
                <Form.Control type="email" placeholder="First Middle Last" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Mobile No</Form.Label>
                <Form.Control type="password" placeholder="MobileNo" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Mobile No</Form.Label>
                <Form.Control placeholder="MobileNo" type="number" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Birth Date</Form.Label>
                <Form.Control placeholder="MobileNo" type="date" />
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
                    // onChange={updateType}
                  />
                  <FormControlLabel
                    value="Patient"
                    control={<GreenRadio />}
                    label="Female"
                    // onChange={updateType}
                  />
                </RadioGroup>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Age</Form.Label>
                <Form.Control placeholder="Age" type="number" />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
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
};
export default DetailsForm;
