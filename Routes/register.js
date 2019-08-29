const express = require("express");
const fs = require("fs");

const Route = express.Router();

Route.get("/register", (req, res) => {
  res.render("register");
});

Route.post("/register", async (req, res) => {
  const file = "./Userdetails.json";
  const { username, password } = req.body;
  fs.readFile(file, (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);
    const newData = [...data, { username: username, password: password }];
    fs.writeFile(file, JSON.stringify(newData), err => {
      if (err) throw err;
      console.log("done !!!");
    });
  });
  return res.redirect("/login");
});

module.exports = Route;
