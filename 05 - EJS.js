const express = require("express");
const app = express();

// express js parser - to handle incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 1. install ejs from npm
// 2. setup ejs as the view engine
app.set("view engine", "ejs");

// 3. create a views folder in the root directory
// 4. create ejs files inside the views folder

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(3000);
