const express = require("express");
const app = express();
const path = require('path');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));


app.get('/', (req,res) => {
    res.render("index");
})

app.get('/events',(req,res) => {
    res.render("events")
})
app.get('/about',(req,res) => {
    res.render("/#about")
})
app.get('/chapters',(req,res) => {
    res.render("/#chapters")
})
app.get('/contacts',(req,res) => {
    res.render("/#contacts")
})

app.listen(3000);