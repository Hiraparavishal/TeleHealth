let firebase = require("firebase");
let firebaseConfig = {
  apiKey: "AIzaSyApIteuzYbig9PziNQjWl0qf0BOkR0OWQg",
  authDomain: "finalyear-d27ea.firebaseapp.com",
  databaseURL: "https://finalyear-d27ea.firebaseio.com",
  projectId: "finalyear-d27ea",
  storageBucket: "finalyear-d27ea.appspot.com",
  messagingSenderId: "215093813377",
  appId: "1:215093813377:web:b178cbad014923b3a3ed80",
  measurementId: "G-GZPYWB5076",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
var database = firebase.database();
module.exports = database;
