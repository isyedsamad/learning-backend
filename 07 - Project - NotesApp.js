const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    fs.readdir('project-notes-app', (err, files) => {
        res.render('notesapp', { files: files });
    })
})

app.post('/create', (req, res) => {
    const {title, notes} = req.body;
    fs.writeFile(`./project-notes-app/${title.split(' ').join('')}.txt`, notes, (err) => {
        if(err) console.log(err.message);
        else res.redirect('/');
    })
})

app.get('/notes/:title', (req, res) => {
    fs.readFile(`./project-notes-app/${req.params.title}`, 'utf-8', (err, data) => {
        const file = {
            title: req.params.title,
            notes: data
        }
        res.render('notesapp-notes', {file: file});
    })
})

app.listen(3000);