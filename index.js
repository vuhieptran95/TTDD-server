const express = require("express");
const cors = require("cors");
const Db = require("./config/FirebaseConfig");
const host1 = "192.168.1.102";
const host2 = "192.168.43.10";
const host3 = "192.168.1.11";
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server works!");
});

app.get("/api/users", (req, res) => {
  Db.collection("users")
    .orderBy("dateCreated", "desc")
    .onSnapshot(docs => {
      var users = [];
      docs.forEach(doc => users.push({ username: doc.id, ...doc.data() }));
      res.json(users);
    });
});

app.get("/api/user/:id", (req, res) => {
  Db.collection("users")
    .doc(req.params.id)
    .get()
    .then(doc => {
      res.json(doc.data());
    });
});

app.delete("/api/user/:id", (req, res) => {
  Db.collection("users")
    .doc(req.params.id)
    .delete()
    .then(() => {
      res.send("Delete sucess!");
    });
});

app.listen(process.env.PORT || 3000, host2, () => console.log("Server started"));
