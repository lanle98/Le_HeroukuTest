const express = require("express");
const hbs = require("hbs");
const path = require("path");
// const sql = require("./utils/sql");

const port = process.env.port || 3000;

const app = express();

app.use(express.static("public"));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname + "/views"));

app.get("/", (req, res) => {
  res.render("home", {
    homemessage: "Click on each section",
    bio: "lalalalalala"
  });
});

app.get("/sneaker", (req, res) => {
  res.render("home", {
    homemessage: "Lan Le",
    bio: "some generic bio info"
  });
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
