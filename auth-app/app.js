const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.cookie('name', 'Samad');
    res.cookie('my-data-mail', 'samad@gmail.com');
    res.send('Done!');
});

app.listen(3000);