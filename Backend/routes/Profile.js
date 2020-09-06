let router = require("express").Router();
let firebase = require("firebase");
let database = require("./Firebase");

router.post("/doctor", (req, res) => {
  var ref = database.ref("DoctorProfile");

  var obj = {
    uid: req.body.uid,
  };
  ref.push(obj);
  res.end();
});
router.post("/patient", (req, res) => {
  var ref = database.ref("PatientProfile");

  var obj = {
    uid: req.body.uid,
  };
  ref.push(obj);
  res.end();
});
module.exports = router;
