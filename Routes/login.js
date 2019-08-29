const express = require("express");
const fs = require("fs");

const Router = express.Router();

Router.get("/login", (req, res) => {
  res.render("login");
});

Router.post("/login", (req, res) => {
  let count = false;
  const { username, password } = req.body;
  console.log(username, password);
  fs.readFile("./Userdetails.json", function(err, data) {
    if (err) throw err;
    const user = JSON.parse(data);
    
    user.forEach( u =>{
      if(u.name == username && u.password == password){
        res.redirect('/maps');
        console.log('yes');
        count=true;
      }
    });
  });
  if(count){
    res.redirect('/login');
  }
});

module.exports = Router;
