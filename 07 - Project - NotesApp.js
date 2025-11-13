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

app.get('/edit/:title', (req, res) => {
    const fileTitle = req.params.title;
    fs.readFile(`./project-notes-app/${fileTitle}`, 'utf-8', (err, data) => {
        if(err) console.log(err.message);
        else {
            const file = {
                title: fileTitle,
                notes: data
            }
            res.render('notesapp-edit', { file: file });
        }
    })
})

app.post('/edit-save/:title', (req, res) => {
    fs.writeFile(`project-notes-app/${req.params.title}`, req.body.notes, (err) => {
        if(err) console.log(err.message);
        else res.redirect('/');
    })
})

app.listen(3000);