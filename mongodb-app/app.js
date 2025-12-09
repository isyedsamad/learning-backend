const express = require('express');
const app = express();
const path = require('path');

const userDB = require('./models/user');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/create-user', async (req, res) => {
    const {name, mail, password, image} = req.body;
    const username = mail.split('@')[0];
    const createdUser = await userDB.create({ name, mail, username, image })
    res.redirect('/show-users');
})

app.get('/show-users', async (req, res) => {
    const users = await userDB.find();
    res.render('show-users', { users });
})

app.get('/delete-user/:id', async (req, res) => {
    const deletedUser = await userDB.findOneAndDelete({ _id: req.params.id });
    res.redirect('/show-users');
})

app.listen(3000);