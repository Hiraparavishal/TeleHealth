import React, { useEffect } from "react";
import { Card, Image } from "react-bootstrap";
import user from "../images/profile.png";
import {
  Box,
  RadioGroup,
  FormControlLabel,
  withStyles,
  Radio,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import Rating from "@material-ui/lab/Rating";
import PropTypes from "prop-types";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}
const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: "Very Satisfied",
  },
};
IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};
const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
const Doctor = () => {
  //   useEffect(() => {});
  return (
    <div
      style={{
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Card
        style={{
          marginLeft: "50px",
          height: "655px",
          width: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Image
          style={{
            marginTop: "50px",
            height: "150px",
            width: "150px",
          }}
          src={user}
          roundedCircle
        />
        <h4
          style={{
            marginTop: "20px",
          }}
        >
          Vishal Hirapara
        </h4>
        <Card body>MS(Ortho) | Male | Amreli | EXP 5 Year</Card>
        <h6
          style={{
            marginTop: "10px",
          }}
        >
          Total Appoinment : 25000
        </h6>
        <div>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating
              style={{
                color: "#008000",
              }}
              defaultValue={4}
              disabled="true"
              IconContainerComponent={IconContainer}
            />
          </Box>
        </div>
        <h6>Select Your disease</h6>
        <div>
          <RadioGroup row aria-label="gender" name="gender1">
            <FormControlLabel
              value="d1"
              control={<GreenRadio />}
              label="Migrain"
              //   onChange={updateType}
            />
            <FormControlLabel
              value="d2"
              control={<GreenRadio />}
              label="Cancer"
              //   onChange={updateType}
            />
            <FormControlLabel
              value="d3"
              control={<GreenRadio />}
              label="Dengue"
              //   onChange={updateType}
            />
          </RadioGroup>
        </div>
        <div>
          <RadioGroup row aria-label="gender" name="gender1">
            <FormControlLabel
              value="d4"
              control={<GreenRadio />}
              label="Fever"
              //   onChange={updateType}
            />
            <FormControlLabel
              value="d5"
              control={<GreenRadio />}
              label="Hadche"
              //   onChange={updateType}
            />
          </RadioGroup>
        </div>
        <Card.Footer
          style={{
            marginTop: "45px",
            backgroundColor: "#57b846",
            width: "100%",
          }}
        >
          <h4
            style={{
              color: "#ffffff",
            }}
          >
            Book Appoinment
          </h4>
        </Card.Footer>
      </Card>
    </div>
  );
};
export default Doctor;
