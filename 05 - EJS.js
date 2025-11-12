const express = require("express");
const app = express();

// *todo: Day 03 - EJS Templating Engine
// *! what is EJS?
// it's simple html with extra features like calculations, loops, conditions etc.
// EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML markup with plain JavaScript.
// It helps to create dynamic web pages by embedding JavaScript code within HTML.

// to work with file and directory paths
const path = require('path');

// express js parser - to handle incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 0. to use static files like css, js, images
app.use(express.static(path.join(__dirname, 'public')));

// 1. install ejs from npm
// 2. setup ejs as the view engine
app.set("view engine", "ejs");
// *! why set ejs as view engine?
// so that express knows that we are using ejs as our templating engine
// and it will look for .ejs files in the views folder by default

// 3. create a views folder in the root directory
// 4. create ejs files inside the views folder

app.get("/", (req, res) => {
    res.render("index"); // render the index.ejs file from views folder
})

app.listen(3000);
