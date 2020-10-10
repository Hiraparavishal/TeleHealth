import React, { useEffect } from "react";
import { doctorAsPerMedication } from "../../../api";
import { Card, Image } from "react-bootstrap";
import user from "../../images/profile.png";
import { useHistory } from "react-router-dom";
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
import PatientNav from "../PatientNav";
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

const Sexologist = () => {
  const history = new useHistory();

  const handleClick = (licid) => {
    history.push(`/videocall/${licid}`);
  };
  const [doctordata, setDoctorData] = React.useState({ data: [] });
  useEffect(() => {
    (async () => {
      var response = await doctorAsPerMedication("sexologist");

      const data = Object.values(response.data);
      console.log(data);
      setDoctorData({ data: data });
    })();
  }, []);
  return (
    <>
      <PatientNav></PatientNav>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {doctordata.data.map((value) => (
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
                {value.first_name} {value.last_name}
                {/* Vishal Hirapara */}
              </h4>
              <Card body>
                {value.medication} | {value.gender} | {value.city} |
                {value.doctor_exp} Year
              </Card>
              <h6
                style={{
                  marginTop: "10px",
                }}
              >
                Total Appoinment : {value.total_appoinment}
              </h6>
              <div>
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Rating
                    style={{
                      color: "#008000",
                    }}
                    defaultValue={value.rating}
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
                    label={value.disease.d1}
                    //   onChange={updateType}
                  />
                  <FormControlLabel
                    value="d2"
                    control={<GreenRadio />}
                    label={value.disease.d2}
                    //   onChange={updateType}
                  />
                  <FormControlLabel
                    value="d3"
                    control={<GreenRadio />}
                    label={value.disease.d3}
                    //   onChange={updateType}
                  />
                </RadioGroup>
              </div>
              <div>
                <RadioGroup row aria-label="gender" name="gender1">
                  <FormControlLabel
                    value="d4"
                    control={<GreenRadio />}
                    label={value.disease.d4}
                    //   onChange={updateType}
                  />
                  <FormControlLabel
                    value="d5"
                    control={<GreenRadio />}
                    label={value.disease.d5}
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
                onClick={() => {
                  handleClick(value.licid);
                }}
              >
                {value.call === true ? (
                  <h4
                    style={{
                      color: "#ffffff",
                    }}
                  >
                    Start Conversation
                  </h4>
                ) : (
                  <h4
                    style={{
                      color: "#ffffff",
                    }}
                  >
                    Busy With Onther Conversation
                  </h4>
                )}
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sexologist;
