import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/";
export async function doctorProfile(uid) {
  await axios.post("/profile/doctor", {
    uid: uid,
  });
}
export async function patientProfile(uid) {
  await axios.post("/profile/patient", {
    uid: uid,
  });
}
