const express = require('express');
const app = express();

//* import the userModel created
const userModel = require('./userModel');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("hey welcome!")
})

app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: "Aman",
        mail: "aman@gmail.com",
        username: "iaman"
    });
    res.send(createdUser);
})

app.get('/update', async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({username: "isamad"}, {name: "Syed Samad"}, {new: true});
    res.send(updatedUser);
})

app.get('/getAll', async (req, res) => {
    let getUser = await userModel.find();
    res.send(getUser);
})

app.get('/getOne', async (req, res) => {
     //* find gives array and findOne gives an object
    // let getUser = await userModel.find({ username: 'isamad' });
    let getUser = await userModel.findOne({ username: 'isamad' });
    res.send(getUser);
})

app.get('/delete', async (req, res) => {
    let deleteUser = await userModel.findOneAndDelete({ username: 'iaman' });
    res.send(deleteUser);
})

app.listen(3000);