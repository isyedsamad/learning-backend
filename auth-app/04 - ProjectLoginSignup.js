const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//* connecting to the db
const userDB = require('./models/user');

app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/create-user', (req, res) => {
    const {name, mail, password, image} = req.body;
    const username = mail.split('@')[0];
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            const createdUser = await userDB.create({ name, mail, username, password: hash, image });
            const token = jwt.sign({ mail: mail }, 'mysecret');
            res.cookie('token', token);
            res.send(createdUser);
        });
    });
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async (req, res) => {
    const {mail, password} = req.body;
    const getUser = await userDB.findOne({mail: mail});
    if(!getUser) return res.send('something went wrong!');
    bcrypt.compare(password, getUser.password, function(err, result) {
        if(result) {
            const token = jwt.sign({ mail: mail }, 'mysecret');
            res.cookie('token', token);
            res.send('great! login done!');
        } else {
            res.send('invalid mail or password!');
        }
    });
})

app.get('/logout', (req, res) => {
    res.cookie('token', '');
    res.redirect('/');
})

app.listen(3000);