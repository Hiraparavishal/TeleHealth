var router = require("express").Router();
const database = require("../Firebase");

router.post("/", (req, res) => {
  console.log("in");
  var ref = database.ref("DoctorProfile");

  ref
    .orderByChild("medication")
    .equalTo(req.body.medication)
    .once("value", (snapshot) => {
      if (snapshot.exists()) {
        res.send(snapshot.val());
      } else {
        res.send("false");
      }
    });
});

module.exports = router;
