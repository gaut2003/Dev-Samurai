require('dotenv').config();
const express = require("express");
const { dirname } = require("path");
const path = require("path");
const hbs = require("hbs");
require("./db/connect");
const {sendMail} = require("../utility/nodemailer");
const Register = require('./models/register');
const Reginster = require("./models/register");
const { runInNewContext } = require("vm");
const bcrypt = require("bcryptjs");
const app = express();
const port = process.env.PORT || 3000;

const viewPath = path.join(__dirname, "../template/views");
const partialsPath = path.join(__dirname, "../template/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath); // Must be register after setting view

app.get("/", (req,res) => {
    res.render("index");
})
app.get("/signup", (req,res) => {
    res.render("signup");
})
app.post("/signup", async(req,res) => {
    try{
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        if(password === cpassword){
            const registerEmployee = new Reginster({
                firstname : req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
                confirmpassword : req.body.confirmpassword
            })
            const token = await registerEmployee.generateAuthToken();
            console.log(token);
            const registered = await registerEmployee.save();
            sendMail("signedup",req.body);
            res.status(201).render(index)
        }else{
            res.send("password are not matching");
        }
    }catch(err){
        res.status(400).send(err);
    }
})
app.get("/signin", (req,res) => {
    res.render("signin");
})
app.post("/signin", async (req,res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;
        const userEmail = await Register.findOne({email : email});
        const isMatch = await bcrypt.compare(password,userEmail.password);
        const token = await registerEmployee.generateAuthToken();
        if(isMatch){
            sendMail("signedin",req.body);
            res.status(201).render("index");
        }else{
            res.send("Invalid Details");
        }
    }catch(err){
        res.status(400).send("Invalid Details")
    }
})

app.listen(port, () => {
    console.log(`server is running at ${port}`);
})