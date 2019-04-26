const express = require('express');
const app = express();
const pussy = require('body-parser');
require('./db');
const FeedbackModel = require('./feedback_schema');

app.use(pussy.json());
app.use(pussy.urlencoded());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.listen(3000, () => {
    console.log("server is running");
})



app.get('/', (req, res) => {
    res.end("root");
});


app.get('/home', (req, res) => {
    res.end("home");

});

app.post('/register', (req, res) => {
    //const id = req.body.id;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;


    FeedbackModel.create(req.body, (err, doc) => {
        if (err) res.json({ result: "Fail!" });
        res.json({ result: "Register success"});
    })



});