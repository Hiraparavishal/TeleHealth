var express = require("express");
var router = express.Router();
let database = require("../Firebase");

router.post("/", function (req, res, next) {
  var ref = database.ref("PatientProfile");

  ref
    .orderByChild("uid")
    .equalTo(req.body.uid)
    .once("value", (snapshot) => {
      if (snapshot.exists()) {
        var key = Object.keys(snapshot.val());
        var uid = Object.values(snapshot.val());
        if (uid[0].uid === req.body.uid) {
          database
            .ref(`PatientProfile/${key[0]}`)
            .update({
              fullname: req.body.fullname,
              mobileno: req.body.mobileno,
              bloodgroup: req.body.bloodgroup,
              birthdate: req.body.birthdate,
              sex: req.body.sex,
              age: req.body.age,
              address: req.body.address,
              city: req.body.city,
              state: req.body.state,
              zip: req.body.zip,
            })
            .then(() => {
              res.send(true);
            });
        } else {
          res.send(false);
        }
      } else {
        return false;
      }
    });
});

module.exports = router;
