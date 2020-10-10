import React from "react";
import PatientNav from "./PatientNav";
import "react-slideshow-image/dist/styles.css";
import "./style.css";
import {
  Box,
  Container,
  Typography,
  TextField,
  CircularProgress,
  Button,
} from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";
import { Card } from "react-bootstrap";
import Background from "../images/O6RBXH0.jpg";
import appoinment from "../images/appointment.png";
import doctor1 from "../images/male-surgeon-wearing-uniform.png";
import lab from "../images/lab-microscope.png";
import medical from "../images/supermarket.png";
import general from "../images/cold_1477464743.webp";
import dermatology from "../images/dermatology.jpg";
import gynaecology from "../images/gynaecology.jpg";
import orth from "../images/ortho.jpg";
import sexology from "../images/sexology.jpg";
import ent from "../images/ent.jpeg";
import dentist from "../images/dentist.jpg";
import { useHistory } from "react-router-dom";

const Patienthome = () => {
  const history = new useHistory();
  const variant = "Success";
  return (
    <>
      <PatientNav></PatientNav>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
          marginTop: "50px",
        }}
      >
        <table
          style={{
            margin: "100px",
          }}
        >
          <tr>
            <td rowSpan="2">
              <Box
                width="1100px"
                height="650px"
                style={{
                  backgroundImage: `url(${Background})`,
                  backgroundSize: "cover",
                  overflow: "hidden",
                }}
              ></Box>
            </td>
            <td>
              <Box
                width="350px"
                height="320px"
                style={{
                  backgroundColor: "#57b846",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    flexDirection: "column",
                  }}
                >
                  <img
                    style={{
                      height: "100px",
                      width: "100px",
                    }}
                    src={appoinment}
                  />
                  <h1>REQUEST AN APPOINTMENT</h1>
                </div>
              </Box>
            </td>
            <td></td>
            <Box
              width="350px"
              height="320px"
              style={{
                backgroundColor: "#81ca74",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                  src={doctor1}
                />
                <h1>FIND A DOCTOR</h1>
              </div>
            </Box>
          </tr>
          <tr>
            <td>
              <Box
                width="350px"
                height="320px"
                style={{
                  backgroundColor: "#abdca3",
                }}
              >
                {" "}
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    flexDirection: "column",
                  }}
                >
                  <h1>
                    {" "}
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        flexDirection: "column",
                      }}
                    >
                      <img
                        style={{
                          height: "100px",
                          width: "100px",
                        }}
                        src={lab}
                      />
                      <h1>LAB TEST NEAR YOU</h1>
                    </div>
                  </h1>
                </div>
              </Box>
            </td>
            <td></td>
            <Box
              width="350px"
              height="320px"
              style={{
                backgroundColor: "#d5edd1",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                  src={medical}
                />
                <h1>ORDER MEDECINS FROM STORE</h1>
              </div>
            </Box>
          </tr>
        </table>
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
          }}
        >
          Find Diseases & Condition
        </h1>
      </div>
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
            width: "18rem",
            backgroundColor: "#57b846",
          }}
          className="mb-2"
        >
          <Card.Header
            style={{
              color: "#ffffff",
            }}
          >
            CORONA
          </Card.Header>
          <Card.Body
            style={{
              color: "#ffffff",
            }}
          >
            <Card.Title> COVID-19 </Card.Title>
            <Card.Text>
              fever (57.1%), cough (35.7%), chest tightness/pain (21.4%),
              fatigue (21.4%) and sore throat (7.1%), Nearly 70%
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            backgroundColor: "#57b846",
            marginLeft: "50px",
          }}
          className="mb-2"
        >
          <Card.Header
            style={{
              color: "#ffffff",
            }}
          >
            MIGRAINE
          </Card.Header>
          <Card.Body
            style={{
              color: "#ffffff",
            }}
          >
            <Card.Title> Pain of Head</Card.Title>
            <Card.Text>
              A migraine can cause severe throbbing pain or a pulsing sensation,
              usually on one side of the head. nausea , vomaiting etc.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            backgroundColor: "#57b846",
            marginLeft: "50px",
          }}
          className="mb-2"
        >
          <Card.Header
            style={{
              color: "#ffffff",
            }}
          >
            CANCER
          </Card.Header>
          <Card.Body
            style={{
              color: "#ffffff",
            }}
          >
            <Card.Title>Group of Diseases</Card.Title>
            <Card.Text>
              Pain,Weight loss without trying,fatigue,fever,Changes in
              your,Sores that don’t heal,Unusual bleeding,Anemia
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            backgroundColor: "#57b846",
            marginLeft: "50px",
          }}
          className="mb-2"
        >
          <Card.Header
            style={{
              color: "#ffffff",
            }}
          >
            DENGUE
          </Card.Header>
          <Card.Body
            style={{
              color: "#ffffff",
            }}
          >
            <Card.Title>High Fiver</Card.Title>
            <Card.Text>
              Headache,Vomiting,Muscle and Joint Pain,Skin Rashes, Low levels of
              blood platelets,Blood plasma leakage,Low blood pressure.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            backgroundColor: "#57b846",
            marginLeft: "50px",
          }}
          className="mb-2"
        >
          <Card.Header
            style={{
              color: "#ffffff",
            }}
          >
            MALARIA
          </Card.Header>
          <Card.Body
            style={{
              color: "#ffffff",
            }}
          >
            <Card.Title>High Fiver</Card.Title>
            <Card.Text>
              a high temperature of 38C or above, feeling hot and shivery,
              headaches,vomiting,muscle pains diarrhoea,generally feeling unwell
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
          marginTop: "50px",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
          }}
        >
          Find Doctor As Per Your Requirement
        </h1>
      </div>
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
          }}
          onClick={() => {
            history.push("/doctor/generalphysician");
          }}
        >
          <Card.Img
            style={{
              height: "150px",
              width: "250px",
            }}
            variant="top"
            src={general}
          />

          <Card.Footer
            style={{
              backgroundColor: "#57b846",
            }}
          >
            <h4
              style={{
                color: "#ffffff",
              }}
            >
              General Physician
            </h4>
          </Card.Footer>
        </Card>
        <Card
          style={{
            marginLeft: "50px",
          }}
          onClick={() => {
            history.push("/doctor/orthopedic");
          }}
        >
          <Card.Img
            style={{
              height: "150px",
              width: "250px",
            }}
            variant="top"
            src={orth}
          />

          <Card.Footer
            style={{
              backgroundColor: "#57b846",
            }}
          >
            <h4
              style={{
                color: "#ffffff",
              }}
            >
              Orthopedic
            </h4>
          </Card.Footer>
        </Card>
        <Card
          style={{
            marginLeft: "50px",
          }}
          onClick={() => {
            history.push("/doctor/gynaecologist");
          }}
        >
          <Card.Img
            style={{
              height: "150px",
              width: "250px",
            }}
            variant="top"
            src={gynaecology}
          />

          <Card.Footer
            style={{
              backgroundColor: "#57b846",
            }}
          >
            <h4
              style={{
                color: "#ffffff",
              }}
            >
              Gynaecologist
            </h4>
          </Card.Footer>
        </Card>
        <Card
          style={{
            marginLeft: "50px",
          }}
          onClick={() => {
            history.push("/doctor/sexologist");
          }}
        >
          <Card.Img
            style={{
              height: "150px",
              width: "250px",
            }}
            variant="top"
            src={sexology}
          />

          <Card.Footer
            style={{
              backgroundColor: "#57b846",
            }}
          >
            <h4
              style={{
                color: "#ffffff",
              }}
            >
              Sexologist
            </h4>
          </Card.Footer>
        </Card>
        <Card
          style={{
            marginLeft: "50px",
          }}
          onClick={() => {
            history.push("/doctor/ent");
          }}
        >
          <Card.Img
            style={{
              height: "150px",
              width: "250px",
            }}
            variant="top"
            src={ent}
          />

          <Card.Footer
            style={{
              backgroundColor: "#57b846",
            }}
          >
            <h4
              style={{
                color: "#ffffff",
              }}
            >
              ENT
            </h4>
          </Card.Footer>
        </Card>
        <Card
          style={{
            marginLeft: "50px",
          }}
          onClick={() => {
            history.push("/doctor/dentist");
          }}
        >
          <Card.Img
            style={{
              height: "150px",
              width: "250px",
            }}
            variant="top"
            src={dentist}
          />

          <Card.Footer
            style={{
              backgroundColor: "#57b846",
            }}
          >
            <h4
              style={{
                color: "#ffffff",
              }}
            >
              Dentist
            </h4>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default Patienthome;
