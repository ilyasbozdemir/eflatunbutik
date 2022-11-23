const express = require("express");
const app = express();
const port = 3200;

var vhost = require("vhost");

var cors = require("cors");

app.use(cors());

//tests..
app.get("/api", (req, res) => {
  res.send("Status: 200");
});

app.get("/auth", (req, res) => {
  res.send("Böyle bir kullanıcı yok");
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
