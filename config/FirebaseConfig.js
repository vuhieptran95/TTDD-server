const firebase = require("firebase");

var config = {
  apiKey: "AIzaSyCyd57bKmEOsDvKMg7D1SszpbLjsbx62sk",
  authDomain: "my-demo-f85d3.firebaseapp.com",
  databaseURL: "https://my-demo-f85d3.firebaseio.com",
  projectId: "my-demo-f85d3",
  storageBucket: "my-demo-f85d3.appspot.com",
  messagingSenderId: "855936794155"
};

firebase.initializeApp(config);
const Db = firebase.firestore();
Db.settings({ timestampsInSnapshots: true });

module.exports = Db;
