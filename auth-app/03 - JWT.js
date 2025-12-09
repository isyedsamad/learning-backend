const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', (req, res) => {
    const token = jwt.sign({ mail: 'samad@gmail.com' }, 'mysecret');
    res.cookie('token', token);
    res.send('setting the jwt token!');
});

app.get('/read', (req, res) => {
    console.log(req.cookies.token);
    res.send('reading token!');
})

app.get('/readData', (req, res) => {
    const data = jwt.verify(req.cookies.token, 'mysecret');
    console.log(data);
    res.send('reading the data!');
})

app.listen(3000);