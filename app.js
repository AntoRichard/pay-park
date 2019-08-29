const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require('path');

const LoginRoute = require('./Routes/login');
const RegisterRoute = require('./Routes/register');

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));

app.use(LoginRoute);
app.use(RegisterRoute);

app.get('/maps',(req,res)=>{
    res.render('map');
});

app.listen(PORT, () => console.log("server running...."));
