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
export async function patientDetails(
  uid,
  fullname,
  mobileno,
  bloodgroup,
  birthdate,
  sex,
  age,
  address,
  city,
  state,
  zip
) {
  return await axios.post("/patientdetails", {
    uid: uid,
    fullname: fullname,
    mobileno: mobileno,
    bloodgroup: bloodgroup,
    birthdate: birthdate,
    sex: sex,
    age: age,
    address: address,
    city: city,
    state: state,
    zip: zip,
  });
}
