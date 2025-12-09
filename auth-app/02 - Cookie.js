const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie('name', 'Samad');
    res.cookie('my-data-mail', 'samad@gmail.com');
    res.send('Done!');
});

app.get('/read', (req, res) => {
    console.log(req.cookies);
    res.send('Reading Cookie in Log!')
})

app.listen(3000);