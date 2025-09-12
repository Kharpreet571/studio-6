const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

// Serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
