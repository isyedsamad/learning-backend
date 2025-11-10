const express = require("express");
const app = express();

// express js parser - to handle incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello from EJS project!");
})

app.listen(3000);