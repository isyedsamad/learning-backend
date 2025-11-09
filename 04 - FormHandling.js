const express = require('express');
const app = express();

// *todo: Day 02 - Form Handling
// *! Session vs Cookies
// Cookies are stored on the client-side (browser) and sent with every request to the server.
// Sessions are stored on the server-side and are identified by a unique session ID sent to the client via cookies.

// ** data is sent to the server in two main formats:
// 1. application/json
// 2. application/x-www-form-urlencoded
// *todo: we change our data to these formats because http is a stateless protocol and cannot handle complex data types directly.

// *! Used to parse incoming request bodies
app.use(express.json()); // to parse JSON bodies, definitely needed for form handling
app.use(express.urlencoded({ extended: true })); // to parse URL-encoded bodies, like form submissions