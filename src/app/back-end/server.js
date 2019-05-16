const express = require('express');
const app = express();
const pussy = require('body-parser');
require('./api');
const FeedbackModel = require('./user');
const User = require('./user')

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
    
    let userData = req.body
    let user = User(userData)
    user.save((error, registeredUser) => {
        if (error){
            console.log(error)
        } else {
            res.status(200).send(registeredUser)
        }
    })

});